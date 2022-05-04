$(document).ready(function() {
  // catches save button input
  $('.saveBtn').on('click', function() {
    // get nearby values
    var value = $(this)
      .siblings('.description')
      .val();
    var time = $(this)
      .parent()
      .attr('id');

    // store in local storage
    localStorage.setItem(time, value);

    // adds "show" class to items that are saved in local storage
    $('.notification').addClass('show');

    // timeout for "show" class
    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );

      // boolean check to determine current hour vs event hour
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
