
exports.sendClientSideScript = (req, res) => {
    res.sendFile(`C:/Users/computador/Desktop/cloned-Test-Server/testServer/clientSideScripts/scripts/${req.params.script}.js`);
}