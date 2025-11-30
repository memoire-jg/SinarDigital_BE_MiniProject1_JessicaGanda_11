const validator = (req, res, next) => {
    const { facts } = req.body;
    if (!facts) {
        return res.status(400).json ({
            success: false,
            error: "Fact field is required!"
        });
    }
    next();
};