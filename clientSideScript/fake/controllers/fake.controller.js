exports.createUser = (req, res) => {
    console.log("from fake server", req.body);
    res.status(201).json({
        status: "enabled"
     })
}