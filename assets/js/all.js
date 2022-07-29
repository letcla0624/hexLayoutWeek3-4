"use strict";

var menu = document.querySelector(".menu");
var menuIcon = document.querySelector(".menu-icon");
var openMenu = false;
window.addEventListener("resize", reportWindowSize);
menuIcon.addEventListener("click", function () {
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

var check = document.querySelector("#check");
var ifCheck;

if (check) {
  document.querySelector("#confirm").addEventListener("click", function () {
    ifCheck = !ifCheck;
    var box = ifCheck ? "check_box" : "check_box_outline_blank";
    return check.innerText = box;
  });
}
//# sourceMappingURL=all.js.map
