const body = document.querySelector("body");
const tiktik = document.querySelector("#tiktik");
tiktik.style.color = "aqua";
// tiktik.style.backgroundColor = "";
body.style.cssText = `background-color: #000;color: #fff;`;
// body.style.backgroundColor ="black"

setInterval(() => {
  const date = new Date();
  tiktik.innerHTML = date.toLocaleTimeString();
}, 1000);
