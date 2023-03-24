$(document).ready(function() {
  $(".navbar-toggle").click(function() {
    $(".navbar-collapse").toggleClass("show");
  });

  // get the current page filename
  var currentPage = location.pathname.split('/').slice(-1)[0];

  // add active class to the corresponding navbar link
  $('.navbar-nav a[href="' + currentPage + '"]').parent().addClass('active');

  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "index.html") {
    $("#home-link").addClass("active");
  } else if (page == "about.html") {
    $("#about-link").addClass("active");
  } else if (page == "education.html") {
    $("#education-link").addClass("active");
  } else if (page == "experience.html") {
    $("#experience-link").addClass("active");
  } else if (page == "contact.html") {
    $("#contact-link").addClass("active");
  }

});




// Get the current page URL
// var path = window.location.pathname;

// // Loop through each link in the navBar
// var links = document.querySelectorAll('.navbar-nav a');
// for (var i = 0; i < links.length; i++) {
//   var link = links[i];

//   // Check if the link URL matches the current page URL
//   if (link.getAttribute('href') === path) {
//     // Add the "active" class to the link's parent list item
//     link.parentNode.classList.add('active');
//   } else {
//     // Remove the "active" class from the link's parent list item
//     link.parentNode.classList.remove('active');
//   }
// }






