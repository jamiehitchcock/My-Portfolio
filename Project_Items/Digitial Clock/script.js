//function to generate and display the time
let setTime = () => {

    //take time from Date Object
    let now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    //set AM or PM dependent on hour
    let ampm = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      ampm = "PM";
    }

    //If number is less than 10, add 0 before. ie 7 => 07
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    //Display the time variables
    let timeNow = `${hrs}:${mins}:${secs}:${ampm}`;
    document.getElementById("time").innerText = timeNow;
    setTimeout(setTime, 1000);
};

//function to generate and display the time
let setDate = () => {

    //Arrays for converting numbers into day or month
    const dayNames = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //take date from Date Object
    let calendar = new Date();
    let day = dayNames[calendar.getDay()];
    let date = calendar.getDate(); 
    let month = monthNames[calendar.getMonth()];
    let year = calendar.getFullYear();

    //If number is less than 10, add 0 before. ie 7 => 07
    date = date < 10 ? "0" + date : date;
    
    //Display the date variables
    let todaysDate = `${day} ${date} ${month} ${year}`;
    document.getElementById("date").innerText = todaysDate;
    setTimeout(setDate, 1000);
};

//Run time and date functions
setTime();
setDate();