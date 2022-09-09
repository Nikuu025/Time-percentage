var percentage = document.getElementById("input1");
var periodPercentage = document.getElementById("input2");
var leftTo = document.getElementById("input3");

var startMinutes = 11 * 60 + 30; /*11:30*/
var endMinutes = 20 * 60; /*20:00*/
var minutesAmount = endMinutes - startMinutes;

var currentTime;
var currentMinutes;
var currentHour;

var passedMinutes;
var percent;

function getCurrent() 
{
    currentTime = new Date();
    currentMinutes = currentTime.getMinutes();
    currentHour = currentTime.getHours();
    console.log(currentHour + ":" + currentMinutes);
}

function calcPercentage()
{
    passedMinutes = (currentMinutes + currentHour*60) - startMinutes;
    percent = (passedMinutes/minutesAmount)*100;

    if(percent > 100)
    {
        percentage.innerHTML = "100%";
    }
    else 
    {
        percentage.innerHTML = percent + "%";
    }
}

function main()
{
    getCurrent();
    calcPercentage();
}
