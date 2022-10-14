/*==================================
     nav hamburger-menu selection 
 ====================================*/
const menubtn = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menubtn.addEventListener("click", () => {
  ul.classList.toggle("show");
});

/*==================================
     click hamburger menu when link is clicked
====================================*/
var navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

/*==================================
      top arrow button
 ====================================*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $(".arrow-up").fadeIn();
      $(".p-absolu,.arrow-up").css("opacity", "1");
    } else {
      $(".arrow-up").fadeOut();
      $(".p-absolu,.arrow-up").css("opacity", "0");
    }
  });

  $(".arrow-up").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
});

/*==================================
     Preloader 
 ====================================*/
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});
