// --------------------------------- click home to underline whitye clr ---------------------------

$(document).ready(function () {
  $(".menu-items a").click(function (event) {
    //remove all pre-existing active classes
    $(".menu-items .active").removeClass("active");

    //add the active class to the link we clicked
    $(this).addClass("active");
  });
});

// ------------------------------ scroll fixed navbar color change --------------------------
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".my-navbar-header").css("background", "rgba(0, 0, 0, 0.6)");
    } else {
      $(".my-navbar-header").css("background", "rgba(0, 0, 0, 0)");
    }
  });
});

// ------------------------------------ auto suggestion with search bar -------------------------

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  // console.log(userData);
  let emptyArray = [];
  if (userData.length > 2) {
    fetch(
      `https://a7be03468f9d.ngrok.io/users/getSerivce_autoSuggest/?service_text=${userData}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        emptyArray = data.data.map((user) => {
          return user.service_name;
        });

        emptyArray = emptyArray.map((data) => {
          // passing return data inside li tag
          function boldString(str, find) {
            var re = new RegExp(find, "g");
            return str.replace(
              re,
              '<b style="color:#212121;">' + find + "</b>"
            );
          }
          var oldText = data.toLowerCase();
          // console.log(data);
          var text = userData.toLowerCase();
          // console.log(userData);
          var result = boldString(oldText, text);

          return (result = `<li>${result}</li>`);
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
        }
      });
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  // icon.onclick = ()=>{
  //     webLink = `https://www.google.com/search?q=${selectData}`;
  //     linkTag.setAttribute("href", webLink);
  //     linkTag.click();
  // }
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
    // listData = `<li>No order found</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

// ----------------------- not display writting data --------------------
// function showSuggestions(list){
//     let listData;
//     if(list.length){
//       listData = list.join('');
//       suggBox.innerHTML = listData;
//     }else{
//       suggBox.innerHTML="";
//     }
// }

// ------------------------------------ auto suggestion with google api-------------------------

function initialize() {
  const center = { lat: 50.064192, lng: -130.605469 };
  // Create a bounding box with sides ~10km away from the center point
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };

  var input = document.getElementById("searchTextField");
  var autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: ["IN"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
    bounds: defaultBounds,
    origin: center,
    strictBounds: false,
  });
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var place = autocomplete.getPlace();
    document.getElementById("city2").value = place.name;
    let lat = (document.getElementById("cityLat").value =
      place.geometry.location.lat());

    let lng = (document.getElementById("cityLng").value =
      place.geometry.location.lng());
    // alert('This function is working!')
    // alert(place.name)
    console.log(lat);
    console.log(lng);
    // alert(place.address_components[0].long_name)
  });
}
google.maps.event.addDomListener(window, "load", initialize);

// ---------------------------- get current city based on lat long ----------------------------

var currentCity = document.getElementById("currentCity");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Current location not get in this system");
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  displayLocation(lat, lon);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

function displayLocation(latitude, longitude) {
  var geocoder;
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(latitude, longitude);

  geocoder.geocode({ latLng: latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        var add = results[0].formatted_address;
        var value = add.split(",");

        count = value.length;
        country = value[count - 1];
        state = value[count - 2];
        city = value[count - 3];
        village=value[count-4];
        currentCity.innerHTML = `${village}, ${city}`;
      } else {
        alert("address not found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

// ------------------------------- toggle dropdown ------------------------------------
function toggleDropdown() {
  var menuBox = document.getElementById("dropList");
  if (menuBox.style.display == "block") {
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  } else {
    // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('dropList');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});

// ----------------------------------- auto detection ---------------------------
function edValueKeyPress() {
  var edValue = document.getElementById("suggestion");
  var s = edValue.value;
  // console.log(s);

  // var lblValue = document.getElementById("lblValue");
  // lblValue.innerText =  s;
  function autoSuggestion() {
    if (s.length > 2) {
      fetch(
        `https://a7be03468f9d.ngrok.io/users/getSerivce_autoSuggest/?service_text=${s}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          autoSugg = data.data
            .map((user) => {
              return `
                          
                            <li>${user.service_name}</li>   
                  
                      `;
            })
            .join("");

          document.getElementById("lblValue").innerHTML = "";
          document
            .querySelector("#lblValue")
            .insertAdjacentHTML("afterbegin", autoSugg);
        })

        .catch((error) => console.log(error));

      console.log(s);
    } else {
      document.getElementById("lblValue").innerHTML = "";
    }
  }
  autoSuggestion();
}

// ------------------------------------------------ Newly added businesses ----------------------------------------------------

function fetchVendorData() {
  fetch(
    "https://a7be03468f9d.ngrok.io/users/getRecentlyAddedBusiness?pageNumber=1"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      // var today = new Date();
      // var dd = String(today.getDate()).padStart(2, "0");
      // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      // var yyyy = today.getFullYear();

      // today = mm + "/" + dd + "/" + yyyy;

      for (var i = 0; i <= 4; i++) {
        var openDay = `${data.data[i].days}`;
        // console.log(openDay);

        if (openDay <= 7) {
          data.data[i].days = `${openDay} Days ago`;
        } else if (openDay >= 7 && openDay <= 15) {
          data.data[i].days = "a week ago";
        } else if (openDay > 15 && openDay <= 30) {
          data.data[i].days = "15 days ago";
        } else {
          data.data[i].days = "a month ago";
        }
      }
      console.log("Newly added businesses", data.data);

      const html = data.data
        .slice(0, 10)
        .map((user) => {
          return `
                    <div class="newly-item">
                        <img src= https://6a451280bc03.ngrok.io/${user.vendor_shop_imagepath} alt="" />
                        <p class="newly-para" >${user.service_name}</p>
                        <div class="location-time">
                            <p>${user.city}</p>
                            <p>${user.days}</p>
                        </div>
                    </div>
                `;
        })
        .join("");

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

      $(document).ready(function () {
        $(".auto-carousel").owlCarousel({
          items: 3,
          margin: 52,
          loop: true,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          dots: false,
          responsive: {
            0: {
              items: 1,
              dots: false,
            },
            740: {
              items: 1,
              dots: false,
            },
            768: {
              items: 2,
              dots: false,
              // margin: 10,
            },
            1100: {
              items: 3,
              dots: false,
              // margin: 10,
            },
            1440: {
              items: 3,
              dots: false,
              // margin: 30,
            },
          },
        });
      });
    })
    .catch((error) => console.log(error));
}

fetchVendorData();

// ------------------------------------------------ popular services ----------------------------------------------------

function fetchPopularServiceData() {
  fetch("https://a7be03468f9d.ngrok.io/users/getServiceCategory")
    .then((response1) => response1.json())
    .then((data1) => {
      console.log("popular services", data1);
      const popular = data1.data
        .slice(0, 10)
        .map((user1) => {
          return `
              <div class="popular-item">
                <div class="img-div">
                  <img src= https://a7be03468f9d.ngrok.io/${user1.image_path} alt="" />
                  <div class="box">
                    <div class="box-line">
                      <div class="inside-box">
                        <h2>${user1.count}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <p>${user1.category}</p>
              </div>
              `;
        })
        .join("");

      document
        .querySelector("#popular-service")
        .insertAdjacentHTML("afterbegin", popular);

      $(".left-right-carousel").slick({
        dots: false,
        infinite: false,
        speed: 300,
        margin: 10,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
          "<img class='a-left control-c prev slick-prev' src='./img/leftArrow.svg'>",
        nextArrow:
          "<img class='a-right control-c next slick-next' src='./img/rightArrow.svg'>",
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    })
    .catch((error) => console.log(error));
}

fetchPopularServiceData();

// ----------------------------------------- whats nearby first ----------------------------------------------------

function fetchNearByData() {
  fetch(
    "https://a7be03468f9d.ngrok.io/users/getVendors?lat=18.9924&long=72.8547&pageNumber=1"
  )
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("whats nearby first row", data2);

      for (var i = 0; i <= 1; i++) {
        var open = `${data2.data[i].open_time}`;
        var closed = `${data2.data[i].close_time}`;
        var openingTime =
          open.split(":").reduce((acc, time) => 60 * acc + +time) / 60;
        var closingTime =
          closed.split(":").reduce((acc, time) => 60 * acc + +time) / 60;

        const openingSoon = openingTime - 30;
        const closingSoon = closingTime - 30;

        const getTime = new Date();
        const current_minutes = getTime.getMinutes();
        const current_hourse = getTime.getHours();
        const currtime = current_minutes + current_hourse * 60;

        const realtimeOpen = openingTime - currtime;

        const realtimeClosed = closingTime - currtime;

        if (currtime > openingTime && currtime < closingSoon) {
          var showDisplay = "open".fontcolor("#00B812");
        } else if (openingTime > closingTime) {
          if (currtime > closingSoon && currtime <= closingTime) {
            var showDisplay = `closing Soon ${realtimeClosed}`.fontcolor(
              "#D9DD00"
            );
          } else if (currtime > openingSoon && currtime < openingTime) {
            var showDisplay = `opening soon ${realtimeOpen}`.fontcolor(
              "#D9DD00"
            );
          } else if (currtime < openingTime && currtime > closingTime) {
            var showDisplay = "closed".fontcolor("#B80000");
          } else {
            var showDisplay = "open".fontcolor("#00B812");
          }
        } else if (currtime >= openingSoon && currtime <= openingTime) {
          var showDisplay = `opening soon ${realtimeOpen}`.fontcolor("#D9DD00");
        } else if (currtime >= closingSoon && currtime <= closingTime) {
          var showDisplay = `closing soon ${realtimeClosed}`.fontcolor(
            "#D9DD00"
          );
        } else {
          // if ( currtime >= closingTime) && currtime <= openingSoon
          var showDisplay = "closed".fontcolor("#B80000");
        }

        data2.data[i].minute_to_open = showDisplay;
      }
      //  console.log(data2);

      //  console.log(data2.data[0].minute_to_open = 15);

      // var hms = '09:04:33';   // your input string
      // var a = hms.split(':'); // split it at the colons

      // // minutes are worth 60 seconds. Hours are worth 60 minutes.
      // var seconds = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))/60;

      // console.log(seconds);

      // var time = '02:02:03'.split(':').reduce(((acc,time) => (60 * acc) + +time))/60;
      // console.log(time);

      const nearBy = data2.data
        .slice(0, 2)
        .map((user2) => {
          return `
        <div class="nearby-item">
          <img src= https://a7be03468f9d.ngrok.io/${
            user2.vendor_shop_imagepath
          } alt="" />
          <div class="nearby-name">
            <p>${user2.service_name}</p>
            <p>Save</p>
          </div>
          <div class="rating-star">
            <span class="stars-first" data-rating="2.5" data-num-stars="5"></span>
          </div>
          <div class="rating">
            <p><i class="fas fa-map-marker-alt"></i> ${user2.distance.toFixed(
              1
            )} km</p>
            <p>${user2.minute_to_open}</p>
          </div>
        </div>
              `;
        })
        .join("");
      $(function () {
        $(".stars-first").stars();
      });

      document
        .querySelector("#nearby-first")
        .insertAdjacentHTML("afterbegin", nearBy);
    })
    .catch((error) => console.log(error));
}

fetchNearByData();
$.fn.stars = function () {
  return $(this).each(function () {
    const rating = $(this).data("rating");
    const numStars = $(this).data("numStars");
    const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
    const halfStar =
      rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
    const noStar = '<i class="far fa-star"></i>'.repeat(
      Math.floor(numStars - rating)
    );
    $(this).html(`${fullStar}${halfStar}${noStar}`);
  });
};
// --------------------------------------------- whats nearby second -------------------------------------

function fetchNearBySecondData() {
  fetch(
    "https://a7be03468f9d.ngrok.io/users/getVendors?lat=18.9924&long=72.8547&pageNumber=1"
  )
    .then((response3) => response3.json())

    .then((data3) => {
      console.log("whats nearby second row", data3);

      for (var i = 2; i <= 3; i++) {
        //data3.data.length
        var open = `${data3.data[i].open_time}`;
        var closed = `${data3.data[i].close_time}`;
        var openingTime =
          open.split(":").reduce((acc, time) => 60 * acc + +time) / 60;
        var closingTime =
          closed.split(":").reduce((acc, time) => 60 * acc + +time) / 60;

        const openingSoon = openingTime - 15;
        const closingSoon = closingTime - 15;

        const getTime = new Date();
        const current_minutes = getTime.getMinutes();
        const current_hourse = getTime.getHours();
        const currtime = current_minutes + current_hourse * 60;

        const realtimeOpen = openingTime - currtime;

        const realtimeClosed = closingTime - currtime;

        if (currtime > openingTime && currtime < closingSoon) {
          // 200 - 285
          var showDisplay = "open".fontcolor("#00B812");
        } else if (openingTime > closingTime) {
          if (currtime > closingSoon && currtime <= closingTime) {
            var showDisplay =
              `closing Soon ${realtimeClosed} Minutes`.fontcolor("#D9DD00");
          } else if (currtime > openingSoon && currtime < openingTime) {
            var showDisplay = `opening soon ${realtimeOpen} Minutes`.fontcolor(
              "#D9DD00"
            );
          } else if (currtime < openingTime && currtime > closingTime) {
            var showDisplay = "closed".fontcolor("#B80000");
          } else {
            var showDisplay = "open".fontcolor("#00B812");
          }
        } else if (currtime >= openingSoon && currtime <= openingTime) {
          var showDisplay = `opening soon ${realtimeOpen} Minutes`.fontcolor(
            "#D9DD00"
          );
        } else if (currtime >= closingSoon && currtime <= closingTime) {
          var showDisplay = `closing soon ${realtimeClosed} Minutes`.fontcolor(
            "#D9DD00"
          );
        } else {
          // if ( currtime >= closingTime) && currtime <= openingSoon
          var showDisplay = "closed".fontcolor("#B80000");
        }
        data3.data[i].minute_to_open = showDisplay;
      }

      const nearBy = data3.data
        // .slice(3, 5)
        .slice(2, 4)
        .map((user3) => {
          return `
        <div class="nearby-item">
          <img src= https://a7be03468f9d.ngrok.io/${
            user3.vendor_shop_imagepath
          } alt="" />
          <div class="nearby-name">
            <p>${user3.service_name}</p>
            <p>Save</p>
          </div>
          <div class="rating-star">
            <span class="stars" data-rating="3.5" data-num-stars="5"></span>
          </div>
          <div class="rating">
            <p><i class="fas fa-map-marker-alt"></i> ${user3.distance.toFixed(
              1
            )}km</p>
            <p>${user3.minute_to_open}</p>
          </div>
        </div>
              `;
        })
        .join("");

      $(function () {
        $(".stars").stars();
      });

      document
        .querySelector("#nearby-second")
        .insertAdjacentHTML("afterbegin", nearBy);
    })
    .catch((error) => console.log(error));
}

fetchNearBySecondData();

// --------------------------- star rating ---------------------------------------
$.fn.stars = function () {
  return $(this).each(function () {
    const rating = $(this).data("rating");
    const numStars = $(this).data("numStars");
    const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
    const halfStar =
      rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
    const noStar = '<i class="far fa-star"></i>'.repeat(
      Math.floor(numStars - rating)
    );
    $(this).html(`${fullStar}${halfStar}${noStar}`);
  });
};

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  },
};

