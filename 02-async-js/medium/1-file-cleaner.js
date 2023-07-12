const fs = require('fs');

function removeSpaces(filePath){

    var content = fs.readFile(filePath,'utf-8', function(err, data){
        if(err){
            throw err
        }
        return(data);
    })

    var content = content.replace(/\s+/g, ' ');

    fs.writeFile(filePath,'utf-8', function(err, data){
        if(err){
            throw err
        }
        console.log("Done!")
    })


}


const filePath = 'a.txt'
removeSpaces(filePath)