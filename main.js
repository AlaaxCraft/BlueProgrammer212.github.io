// Why r u even reading this code?
const PP = document.getElementById("ppSize");
let ppSize = 0;
let x = 0;

setInterval(() => {
    x += 0.1;
    ppSize = Math.round(Math.abs(Math.cos(x) * 10));
    PP.textContent = `8${Array(ppSize).fill("=").join("")}D`
}, 100)