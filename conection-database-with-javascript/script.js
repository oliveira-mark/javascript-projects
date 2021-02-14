function calcHour() {

    hourPrice = parseInt(document.getElementById("hourPrice").value)
    hourWorked = parseInt(document.getElementById("hourWorked").value)
    minuteWorked = parseInt(document.getElementById("minuteWorked").value)

    resultPrice = hourWorked * hourPrice + minuteWorked/60 * hourPrice

    if (isNaN(resultPrice)){
        document.querySelector('.box-item:nth-child(2)').style.display = "none";
        document.querySelector('.box-item:nth-child(3)').style.display = "none";
        document.querySelector('.btn-reload').style.display = "block";
        document.getElementById("errorResult").innerHTML = "Something went wrong. Please try again!"
    } else {
        document.getElementById("resultCalc").innerHTML = resultPrice.toFixed(2)
    }
    
}