import { prismaClient } from "../../utils/prisma.js";

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

        const account = await prismaClient.account.create({
            data: { username: username, email: email, password: password, role: role },
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