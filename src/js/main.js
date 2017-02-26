function MainCtrl($interval) {
  var main = this;
  var counter;

  main.clearTimer = function() {
    $interval.cancel(counter);
    main.time = [];
    main.date = Na
  }

  main.setTimer = function(enddate, endtime){
    $interval.cancel(counter);

    function start (){
      var startDate = new Date();
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      startDate = Date.parse(startDate);
      var a = Date.parse(startDate);
      var eventEnd = enddate.getTime() + endtime.getTime();
      var est = 3600000 * -5;

      eventEnd = new Date(eventEnd + est);
      eventEnd = Date.parse(eventEnd);

      var diff, seconds, minutes, hours, days;

      diff = eventEnd - startDate;
      seconds=(diff/1000)%60;
      minutes=(diff/(1000*60))%60;
      hours=(diff/(1000*60*60))%24;
      days=(diff/(24*60*60*1000));
      seconds = Math.floor(seconds);
      minutes = Math.floor(minutes);
      hours = Math.floor(hours);
      days = Math.floor(days);

      main.time = [seconds, minutes, hours, days];
    }

    if (enddate && endtime) {
      counter = $interval(start, 1000)
    }

  }



// console.log(new Date(eventEnd));
// console.log(a);
// console.log(eventEnd);
    // //EST
    // offset = -5.0
    //
    // clientDate = new Date();
    // utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
    //
    // serverDate = new Date(utc + (3600000*offset));




    // if (startDate.getTime() === enddate.getTime()) {

//       main.diffDays = Math.round(Math.abs((startDate.getTime() - eventEnd)/(oneDay)));
//       // if (main.diffDays > 1) {
// // console.log(main.diffDays);
//         main.diffDays += " days";
  //     } else {
  //       main.diffDays = "Last Day!";
  //     }
  //
  //   } else if (startDate.getTime() === enddate.getTime()) {
  //     main.diffDays = "TODAY!";
  //   } else {
  //     main.diffDays = "Your event has already happened";
  //   }
  //
  // }
}


angular.module('app', [])
  .controller('MainCtrl', MainCtrl)
