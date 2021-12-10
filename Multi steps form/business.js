const slidePage = document.querySelector(".slide-page");
const welcomeStart = document.querySelector(".welcome-start");
const mobileSubmit = document.querySelector(".mobile-submit");
const backButton = document.querySelector(".back-button");
const otpSubmit = document.querySelector(".otp-submit");
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

welcomeStart.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-13.3%";
  // bullet[current - 1].classList.add("active");
  // progressCheck[current - 1].classList.add("active");
  // progressText[current - 1].classList.add("active");
  // current += 1;
  // $("#nav-progress-bar").removeClass("navbar-disable-address");
  // $(".first-bullet-status").addClass("bullet-first");
  // $(".first-para-status").addClass("step-first");
});
mobileSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-30.7%";
  // bullet[current - 1].classList.add("active");
  // progressCheck[current - 1].classList.add("active");
  // progressText[current - 1].classList.add("active");
  // current += 1;
  // $("#nav-progress-bar").removeClass("navbar-disable-address");
  // $(".first-bullet-status").addClass("bullet-first");
  // $(".first-para-status").addClass("step-first");
});

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-13.3%";
});

otpSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-54.4%";
  // bullet[current - 1].classList.add("active");
  // progressCheck[current - 1].classList.add("active");
  // progressText[current - 1].classList.add("active");
  // current += 1;
  // $("#nav-progress-bar").removeClass("navbar-disable-address");
  // $(".first-bullet-status").addClass("bullet-first");
  // $(".first-para-status").addClass("step-first");
});
letsStart.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-88.86%";
  // bullet[current - 1].classList.add("active");
  // progressCheck[current - 1].classList.add("active");
  // progressText[current - 1].classList.add("active");
  // current += 1;
  $("#nav-progress-bar").removeClass("navbar-disable-address");
  $(".first-bullet-status").addClass("bullet-first");
  $(".first-para-status").addClass("step-first");
});

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-131.92%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  $(".second-bullet-status").addClass("bullet-first");
  $(".second-para-status").addClass("step-first");
});

nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-156.925%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  $(".third-bullet-status").addClass("bullet-first");
  $(".third-para-status").addClass("step-first");
});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-181.93%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  $(".fourth-bullet-status").addClass("bullet-first");
  $(".fourth-para-status").addClass("step-first");
});
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-206.9%";
  $("#nav-progress-bar").addClass("navbar-disable-address");
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-88.86%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  $(".second-bullet-status").removeClass("bullet-first");
  $(".second-para-status").removeClass("step-first");
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-131.92%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
  $(".third-bullet-status").removeClass("bullet-first");
  $(".third-para-status").removeClass("step-first");
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-156.925%";
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

function offLine(id) {
  selectOnlyThis(id);
  var OfflineSelect = document.getElementById("offline").value;
  console.log(OfflineSelect);
  $("#detail-address").removeClass("disable-address");
}

function onLine(id) {
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

// ---------------------------------- custome checkbox start --------------------------
const dummyCheck = true;
const checkbox1 = document.getElementById("details-1");
checkbox1.checked = dummyCheck;
checkbox1.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    console.log(event.target.value);
  }
});
const checkbox2 = document.getElementById("details-2");
checkbox2.checked = dummyCheck;
checkbox2.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    console.log(event.target.value);
  }
});
const checkbox3 = document.getElementById("details-3");
checkbox3.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    console.log(event.target.value);
  }
});
const checkbox4 = document.getElementById("details-4");
checkbox4.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    console.log(event.target.value);
  }
});

// ---------------------------------- custome checkbox end --------------------------
// ---------------------------------- OTP Count start --------------------------
function startOtpTimer() {
  var counter = 6;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("otp-count");
      span.innerHTML = `00:${counter} sec`;
    }
    if (counter === 0) {
      document.getElementById("resend-otp").style = "cursor: pointer;";
      document.getElementById("otp-count").style = "color:red;";
      // alert("sorry, out of time");
      clearInterval(counter);
    }
  }, 1000);
}
function OTPCount() {
  document.getElementById("otp-count").style = "color:green;";
  document.getElementById("resend-otp").style =
    "pointer-events: none; cursor: not-allowed;";
  const mobileNumber = document.getElementById("mobile-input").value;
  console.log("mobileNumber", mobileNumber);
  startOtpTimer();
  fetch(`http://65.0.205.205:8080/api/vendors/send_otp_sms/${mobileNumber}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// ---------------------------------- OTP Count end --------------------------
