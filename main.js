$(document).ready(function () {
  $(".slider__pets").slick({});
});

let btns = document.querySelectorAll(".pets-item__btn");

function openPopUp(e) {
  e.preventDefault();

  let sliderId = e.target.id;

  let currentPopUp = document.querySelector(`#popUp-${sliderId}`);

  currentPopUp
    .querySelector(".popup__button")
    .addEventListener("click", function () {
      currentPopUp.classList.add("popup__background--close");
    });

  currentPopUp.classList.remove("popup__background--close");
}

btns.forEach((btn) => btn.addEventListener("click", openPopUp));
