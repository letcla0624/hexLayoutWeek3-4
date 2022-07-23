const menuUl = document.querySelector(".menuUl");
const menuIcon = document.querySelector(".menu-icon");
let openMenu;

menuIcon.addEventListener("click", () => {
  openMenu = !openMenu;
  if (openMenu) {
    menuUl.classList.remove("d-sm-none");
    menuIcon.innerText = "close";
  } else {
    menuUl.classList.add("d-sm-none");
    menuIcon.innerText = "menu";
  }
});

const check = document.querySelector("#check");
let ifCheck;

if (check) {
  document.querySelector("#confirm").addEventListener("click", () => {
    ifCheck = !ifCheck;
    let box = ifCheck ? "check_box" : "check_box_outline_blank";
    return (check.innerText = box);
  });
}
