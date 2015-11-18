function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function SetDate()
{
var date = new Date();

var min = addZero(date.getMinutes());
var hour = addZero(date.getHours());

var today =  hour +":"+min;


document.getElementById('myDate').value = today;
}
