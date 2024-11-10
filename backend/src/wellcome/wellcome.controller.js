export const Wellcome = async (req, res) => {
    try {
        return res.status(200).json({ message: "Ok" });
    } catch (error) {
        console.log(error);
    }
};