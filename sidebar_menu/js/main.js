// Write your pseudo code here! HAPPY CODING! :)

//Hide the side bar in CSS (.sidebar)

// When the user clicks on .hamburger
  // Add the active class to the .sidebar (uses translateX to slide in)

$('.hamburger').on('click', function() {
  $('.sidebar').addClass('active');
  $('.content').addClass('slide-right');
  $('body').prepend('<span class="mask"></span>');
});

// When the user clicks on .close
  // Remove the active class to the .sidebar (uses translateX to slide in)

$('.close').on('click', function() {
  $('.sidebar').removeClass('active');
  $('.content').removeClass('slide-right');
  $('body span').remove();
});
