// let today = new Date();
// let currentmonth = today.getMonth();
// let currentyear = today.getFullYear();
// let selectYear = document.getElementById("year");
// let selectMonth = document.getElementById("month");

// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// let monthandyear = document.getElementById("monthandyear");
// showCalendar(currentmonth, currentyear)

let date = 1;
for (let i = 0; i< 6; i++) 
{
    let row = document.createElement("tr");
}

let firstday = (new Date(year, month)).getDay();

//check how many days in a month
daysinmonth(imonth, iyear)
{
    return 32 - new Date(iyear, imnoth, 32) .getDate();
}