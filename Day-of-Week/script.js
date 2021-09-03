var date = new Date()

var daylist = [
  {day: 'Sunday', phrase: 'Time to  Chillax'},
  {day: 'Monday', phrase: 'Monster Morning Blues'},
  {day: 'Tuesday', phrase: 'Taco Tuesday'},
  {day: 'Wednesday', phrase: 'Two more days to the weekend.'},
  {day: 'Thursday', phrase: 'Weekend is almost here...'},
  {day: 'Friday', phrase: 'Weekend is here!'},
  {day: 'Saturday', phrase: 'Time to Party!!!'},
];

document.getElementById('day').innerText = daylist[date.getDay()].day;
document.getElementById('phrase').innerText = daylist[date.getDay()].phrase;