export const NotFound = async (req, res) => {
    try {
        return res.status(404).json({ message: "Not Found" });
    } catch (error) {
        console.log(error);
    }
};