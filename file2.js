
// ---------------------------------------- explore file styling ------------------------------------------ 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

$(function () {
  $(".banner-rat").ratingStars();
});

$.fn.ratingStars = function () {
  return $(this).each(function () {
    const rating = $(this).data("rating");
    const numStars = $(this).data("numStars");
    const fullStar = '<i class="fas fa-star"></i>'.repeat(
      Math.floor(rating)
    );
    const halfStar =
      rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
    const noStar = '<i class="far fa-star"></i>'.repeat(
      Math.floor(numStars - rating)
    );
    $(this).html(`${fullStar}${halfStar}${noStar}`);
  });
};

// -------------------------------- total rating star section -----------------------
$(function () {
  $(".total-rating-star").totalRatingStar();
});

$.fn.totalRatingStar = function () {
  return $(this).each(function () {
    const rating = $(this).data("rating");
    const numStars = $(this).data("numStars");
    const fullStar = '<i class="fas fa-star"></i>'.repeat(
      Math.floor(rating)
    );
    const halfStar =
      rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
    const noStar = '<i class="far fa-star"></i>'.repeat(
      Math.floor(numStars - rating)
    );
    $(this).html(`${fullStar}${halfStar}${noStar}`);
  });
};

// --------------------------- horizontal progress bar section ---------------------------

// var i = 0;
//       function move() {
//         if (i == 0) {
//           i = 1;
//           var elem = document.getElementsByClassName("myBar");
//           var width = 1;
//           var id = setInterval(frame, 10);
//           function frame() {
//             if (width >= 80) {
//               clearInterval(id);
//               i = 0;
//             } else {
//               width++;
//               elem[0].style.width = width + "%";
//             }
//           }
//         }
//       }
//       function move2() {
//         if (i == 0) {
//           i = 1;
//           var elem = document.getElementsByClassName("myBar2");
//           var width = 1;
//           var id = setInterval(frame, 10);
//           function frame() {
//             if (width >= 50) {
//               clearInterval(id);
//               i = 0;
//             } else {
//               width++;
//               elem[0].style.width = width + "%";
//             }
//           }
//         }
//       }

// ------------------------ star rating section ----------------------------------------- 

$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }
    var ratingValue = parseInt(
      $("#stars li.selected").last().data("value"),
      10
    );

    if (ratingValue > 0) {
      let bt = document.getElementById("btSubmit");
      bt.style.cursor = "pointer";
      
    }

    console.log("rating Value",ratingValue)
  });
});

// ------------------------------- textarea text count -----------------------------

$("textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#current"),
    maximum = $("#maximum"),
    theCount = $("#the-count");

  current.text(characterCount);
});

// ------------------------------------------ explore page map functionality  --------------------------------------

// Initialize and add the map
function initMap() {
  // The location of india
  const india = { lat: 19.051125, lng: 72.900554 };
  // The map, centered at india
  const map = new google.maps.Map(document.getElementById("explore-map"), {
    zoom: 20,
    center: india,
  });
  // The marker, positioned at india
  const marker = new google.maps.Marker({
    position: india,
    map: map,
    label: "S",
  });
  
}


// -------------------------------- newtab open google map functionality code ------------------------- 

let startingAddress = "parel";
let enndingAddress = "chembur";

let directionUrl = `https://www.google.com/maps/dir/${startingAddress}/${enndingAddress}/@19.0010232,72.8397202,15z`

function googleMapDirection() {
  const googleDirection = `<a href="${directionUrl}" target="_blank">Get Direction</a>`
  document.querySelector("#explore-direction").insertAdjacentHTML("afterbegin", googleDirection);
}
googleMapDirection();
