



$(function hour() {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  // Set this function to get the current date and format it
  $('.saveBtn').on('click', function() {
    // Extract the hour value from the parent element "id"
    var hour = $(this).parent().attr('id');
    var description =$(this).siblings('.description').val();
    localStorage.setItem(hour, description);

  });

  $('.time-block').each(function(){
    var currentHour = dayjs().hour();
    var hour = parseInt($(this).attr('id').replace('hour-', ''));


    
    if(hour < currentHour){
      $(this).addClass('past');
    }else if(hour === currentHour){
      $(this).addClass('present');
    }else{
      $(this).addClass('future');
    }
  });
  $('.time-block').each(function(){
    var hour = $(this).attr('id');
    var description = localStorage.getItem(hour);

    if(description) {
      $(this).children('.description').val(description);

    }
  });
});

