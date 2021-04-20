
exports.sendClientSideScript = (req, res) => {
    res.sendFile(`C:/Users/computador/Documents/1_proyecos/Pro-Proyects/Learning-Platform/Learning-platform/clientSideScripts/scripts/${req.params.script}.js`);
}