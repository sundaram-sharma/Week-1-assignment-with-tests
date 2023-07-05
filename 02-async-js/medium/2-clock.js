function getCurrentTime(){
    console.clear();
    var date = new Date(); //making a 'date' object with Date constructor
    var hours = date.getHours(); //get current hours
    var minutes = date.getMinutes(); //get current minutes
    var seconds = date.getSeconds(); // get current seconds

    var formattedTime = `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${hours.toString().padStart(2,'0')}`
    console.log(formattedTime);
    setInterval(getCurrentTime, 1000);
}

getCurrentTime()