var nic = {};
function zion(viewName) {
    let nativeFuncs = json.parse(prompt("zionic://getFuncs", viewName));
    for (let i = 0; i < nativeFuncs.length; i++) {
        let funcName = nativeFuncs[i];
        nic[funcName] = params => {
            return prompt(`call://${viewName}.${funcName}`, params)
        }
    }
}