function getCurrentTime(){
    
    let date = new Date(); //making a 'date' object with Date constructor
    let hours = date.getHours(); //get current hours
    let minutes = date.getMinutes(); //get current minutes
    let seconds = date.getSeconds(); // get current seconds
    let session = "AM"
    
    //let formattedTime = `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`
    
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes <10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    let formattedTime = hours + ":" + minutes + ":" + seconds + session

    console.log(formattedTime);
    console.clear();
    let t = setTimeout(function(){ getCurrentTime() }, 1000);
}

getCurrentTime()

// function currentTime() {
    
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
  
//     if(hh == 0){
//         hh = 12;
//     }
//     if(hh > 12){
//         hh = hh - 12;
//         session = "PM";
//      }
  
//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;
      
//      let time = hh + ":" + mm + ":" + ss + " " + session;
  
//     console.log(time)
//     console.clear();
//     let t = setTimeout(function(){ currentTime() }, 1000);
//   }
//   currentTime();