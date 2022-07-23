"use strict";

var menuUl = document.querySelector(".menuUl");
var menuIcon = document.querySelector(".menu-icon");
var openMenu;
menuIcon.addEventListener("click", function () {
  openMenu = !openMenu;

  if (openMenu) {
    menuUl.classList.remove("d-sm-none");
    menuIcon.innerText = "close";
  } else {
    menuUl.classList.add("d-sm-none");
    menuIcon.innerText = "menu";
  }
});
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
