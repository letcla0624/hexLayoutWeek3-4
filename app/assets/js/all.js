const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
let openMenu = false;

window.addEventListener("resize", reportWindowSize);
menuIcon.addEventListener("click", () => {
  openMenu = !openMenu;
  if (openMenu) {
    menu.classList.remove("d-sm-none");
    menuIcon.innerText = "close";
  } else {
    reportWindowSize();
  }
});

function reportWindowSize() {
  menu.classList.add("d-sm-none");
  menuIcon.innerText = "menu";
  openMenu = false;
}

const check = document.querySelector("#check");
let ifCheck;

if (check) {
  document.querySelector("#confirm").addEventListener("click", () => {
    ifCheck = !ifCheck;
    let box = ifCheck ? "check_box" : "check_box_outline_blank";
    return (check.innerText = box);
  });
}
