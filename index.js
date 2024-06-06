console.log("prueba");
const $d = document;
const selector = (tag) => $d.querySelector(`${tag}`);
const selectorAll = (tag) => $d.querySelectorAll(`${tag}`);
const controls = selectorAll(".control");
const btns = selectorAll("BUTTON");

controls.forEach((item) => {
    console.log(item);
    const btn = item.querySelector("BUTTON");
    const response = item.querySelector("P");
    btn.addEventListener("click", () => {
        console.log(btn);
        btn.querySelectorAll(".icon_container").forEach((icon) => {
            console.log(icon.classList);
            icon.classList.toggle("hide");
        });
        response.classList.toggle("hide");
    });
});
