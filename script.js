//Data Hotel
var HotelData = [
  {
    HotelName: "Ibis Jakarta",
    HotelLocation: "Jakarta",
  },
  {
    HotelName: "Novotel Semarang",
    HotelLocation: "Semarang",
  },
  {
    HotelName: "eL Hotel Royale Bandung",
    HotelLocation: "Bandung",
  },
  {
    HotelName: "Gumaya Tower Hotel Semarang",
    HotelLocation: "Semarang",
  },
  {
    HotelName: "Grand Candi Hotel Semarang",
    HotelLocation: "Semarang",
  },
  {
    HotelName: "Merlynn Park Hotel",
    HotelLocation: "Jakarta",
  },
  {
    HotelName: "Grand Sahid Jaya Jakarta",
    HotelLocation: "Jakarta",
  },
  {
    HotelName: "The Alana Surabaya",
    HotelLocation: "Surabaya",
  },
  {
    HotelName: "Harris Vertu Hotel Harmoni",
    HotelLocation: "Jakarta",
  },
  {
    HotelName: "Pullman Jakarta Central Park",
    HotelLocation: "Jakarta",
  },
  {
    HotelName: "Fairmont Jakarta",
    HotelLocation: "Jakarta",
  },
  {
    HotelName: "Best Western Papilio Hotel",
    HotelLocation: "Surabaya",
  },
  {
    HotelName: "ASTON Pasteur",
    HotelLocation: "Bandung",
  },
  {
    HotelName: "Ibis Bandung Trans Studio",
    HotelLocation: "Bandung",
  },
  {
    HotelName: "Cleo Hotel Jemursari Surabaya",
    HotelLocation: "Surabaya",
  },
  {
    HotelName: "Horison Ultima Bandung",
    HotelLocation: "Bandung",
  },
  {
    HotelName: "Hotel Ciputra Semarang",
    HotelLocation: "Semarang",
  },
  {
    HotelName: "Hotel Tentrem Semarang",
    HotelLocation: "Semarang",
  },
  {
    HotelName: "Crowne Plaza Semarang",
    HotelLocation: "Semarang",
  },
];

//Mockup per item
var listItemString = $("#listItem").html();

//Print semua data untuk pertama kali halaman terbuka (menggunakan jquery)
$(document).ready(function () {
  $("#listItem").empty();
  //looping setiap data
  $.each(HotelData, function (index, key) {
    var listItem = $(listItemString);
    var listItemTitle = $(".card__title", listItem);
    listItemTitle.html(key.HotelName);
    //Tampilkan di halaman
    $("#listItem").append(listItem);
  });
});

//Print data ketika tombol fungsi ditekan
function selectLocation(evt, location) {
  $("#listItem").empty();
  $.each(HotelData, function (index, key) {
    //Cek lokasi yang sesuai dengan tombol yang ditekan
    if (key.HotelLocation === location) {
      var listItem = $(listItemString);
      var listItemTitle = $(".card__title", listItem);
      listItemTitle.html(key.HotelName);
      $("#listItem").append(listItem);
    }
  });
}

//Navbar samping untuk tampilan mobile
let navToggle = document.querySelector(".nav__toggle");
let navToggleExit = document.querySelector(".nav__toggleexit");
let navWrapper = document.querySelector(".nav__wrapper");
navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
navToggleExit.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

//Ambil tahun pada komputer untuk copyright footer
document.getElementById("year").innerHTML = new Date().getFullYear();

//Sticky Navbar
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".nav_sticky").addClass("scrolled");
  } else {
    $(".nav_sticky").removeClass("scrolled");
  }
});
$(function () {
  $(".scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
});
