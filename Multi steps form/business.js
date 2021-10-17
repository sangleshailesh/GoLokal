const slidePage = document.querySelector(".slide-page");
const letsStart = document.querySelector(".lets-start");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

letsStart.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-22.2%";
  // bullet[current - 1].classList.add("active");
  // progressCheck[current - 1].classList.add("active");
  // progressText[current - 1].classList.add("active");
  // current += 1;
  $("#nav-progress-bar").removeClass("navbar-disable-address");
  $(".first-bullet-status").addClass("bullet-first");
  $(".first-para-status").addClass("step-first");
});

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-54.16%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  $(".second-bullet-status").addClass("bullet-first");
  $(".second-para-status").addClass("step-first");
});

nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-79.16%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  $(".third-bullet-status").addClass("bullet-first");
  $(".third-para-status").addClass("step-first");
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-104.16%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  $(".fourth-bullet-status").addClass("bullet-first");
  $(".fourth-para-status").addClass("step-first");
});
submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-129.16%";
  $("#nav-progress-bar").addClass("navbar-disable-address");
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-22.2%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  $(".second-bullet-status").removeClass("bullet-first");
  $(".second-para-status").removeClass("step-first");
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-54.16%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  $(".third-bullet-status").removeClass("bullet-first");
  $(".third-para-status").removeClass("step-first");
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-79.16%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  $(".fourth-bullet-status").removeClass("bullet-first");
  $(".fourth-para-status").removeClass("step-first");
});

// -------------------- checkbox selected -----------------------------------

function selectOnlyThis(id) {
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });
    id.checked = true;   
}

function offLine(id){
  selectOnlyThis(id);
  var OfflineSelect = document.getElementById("offline").value;
  console.log(OfflineSelect);
  $("#detail-address").removeClass("disable-address");
}

function onLine(id){
  selectOnlyThis(id);
  var OnlineSelect = document.getElementById("online").value;
  $("#detail-address").addClass("disable-address");
  $("#detail-area").removeClass("enable-address");
  $("#detail-fullcity").removeClass("enable-address");
  $("#detail-a-to-b").removeClass("enable-address");
  console.log(OnlineSelect);
}


function selectOnlyDetailAddress(id) {
  var myCheckbox = document.getElementsByName("detailAddress");
  Array.prototype.forEach.call(myCheckbox, function (el) {
    el.checked = false;
  });
  id.checked = true;   
}

function aToB(id) {
  selectOnlyDetailAddress(id);
  $("#detail-area").removeClass("enable-address");
  $("#detail-fullcity").removeClass("enable-address");
  $("#detail-a-to-b").addClass("enable-address");
  console.log("a TO B");
}

function addressArea(id) {
  selectOnlyDetailAddress(id);
  $("#detail-a-to-b").removeClass("enable-address");
  $("#detail-fullcity").removeClass("enable-address");
  $("#detail-area").addClass("enable-address");
  console.log("Area");
}

function addressFullCity(id) {
  selectOnlyDetailAddress(id);
  $("#detail-a-to-b").removeClass("enable-address");
  $("#detail-area").removeClass("enable-address");
  $("#detail-fullcity").addClass("enable-address");
  console.log("fullCity");
}