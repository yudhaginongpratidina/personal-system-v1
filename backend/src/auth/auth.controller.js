import { prismaClient } from "../../utils/prisma.js";
import becrypt from "bcrypt";

export const Register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword, role } = req.body;

        const usernameExist = await prismaClient.account.findFirst({
            where: { username: username }
        });

        if (usernameExist) {
            return res.status(409).json({ message: "Username already exist" });
        }

        const emailExist = await prismaClient.account.findFirst({
            where: { email: email }
        });

        if (emailExist) {
            return res.status(409).json({ message: "Email already exist" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password not match" });
        }

        const salt = await becrypt.genSalt(10);
        const hashPassword = await becrypt.hash(password, salt);

        const account = await prismaClient.account.create({
            data: { username: username, email: email, password: hashPassword, role: role },
            select: { id: true, username: true, email: true, role: true, createdAt: true }
        });

        return res.status(201).json({
            message: "Created",
            data: account
        });

    } catch (error) {
        console.log(error);
    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const account = await prismaClient.account.findFirst({
            where: { email: email },
            select: { id: true, email: true, password: true, role: true }
        })

        if (!account) {
            return res.status(404).json({ message: "email not found" });
        }

        const isMatch = await becrypt.compare(password, account.password);

        if (!isMatch) {
            return res.status(401).json({ message: "wrong email or password" });
        }

        return res.status(200).json({
            message: "Login Success",
            data: account
        })
    } catch (error) {
        console.log(error);    
    }
}