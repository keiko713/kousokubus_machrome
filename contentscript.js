console.log('=== Kousokubus Machrome 1.2 is workingi in background ===');

/*----------------
 for input element
 -----------------*/

// if some input field is clicked, it should be focused
$('input').click(function() {
  $(this).focus();
});

/*------------------
  for select element
  ------------------*/

// show all options
$('select').each(function(idx) {
  $(this).attr("size", this.length);
});
// if some option is clicked, the value should change
$('select').click(function(e) {
  $(this).val(e.target.value);
});

/*------------------
  for buttons of
  availability and prices
  ------------------*/

// Chrome doesn't show multi lines in button (for some reason)
$('td > input[type=submit]').each(function() {
  var availability = $(this).val();
  $(this).parent().append('<small>' + availability + '</small>');
});

/*----------------
  some small fixes
  ----------------*/

// make pages a little bit prettier
$('#topmain').css('margin', '0px auto 10px');
$('#copyright680').css('margin', '0px auto 10px');
$('#copyright800').css('margin', '0px auto 10px');
