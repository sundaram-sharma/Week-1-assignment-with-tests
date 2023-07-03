let counter = 1

function printer()
    {
        console.clear()
        console.log(counter)
        counter = counter +1
            
        setTimeout(printer, 1000)
    }
    printer();