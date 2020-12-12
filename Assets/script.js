/// I love arrays, lets make it modular. goes from 5AM to 5PM (Sorry to those who work graveyard shifts)
/// This array defines the time slots, to be built further down the line.
let dayPlan = [
{
    id: "0",
    time: "05",
    hour: "05",
    merridium: "am",
    reminder:
},
{
    id: "1",
    time: "06",
    hour: "06",
    merridium: "am",
    reminder:
},
{
    id: "2",
    time: "07",
    hour: "07",
    merridium: "am",
    reminder:
},
{
    id: "3",
    time: "08",
    hour: "08",
    merridium: "am",
    reminder:
},
{
    id: "4",
    time: "09",
    hour: "09",
    merridium: "am",
    reminder:
},
{
    id: "5",
    time: "10",
    hour: "10",
    merridium: "am",
    reminder:
},
{
    id: "6",
    time: "11",
    hour: "11",
    merridium: "am",
    reminder:
},
{
    id: "7",
    time: "12",
    hour: "12",
    merridium: "pm",
    reminder:
},
{
    id: "8",
    time: "1",
    hour: "1",
    merridium: "pm",
    reminder:
},
{
    id: "9",
    time: "2",
    hour: "2",
    merridium: "pm",
    reminder:
},
{
    id: "10",
    time: "3",
    hour: "3",
    merridium: "pm",
    reminder:
},
{
    id: "11",
    time: "4",
    hour: "4",
    merridium: "pm",
    reminder:
},
{
    id: "11",
    time: "5",
    hour: "5",
    merridium: "pm",
    reminder:
},
]
/// Preps the day to be called later on.
function headerDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
headerDate();
// saves data to localStorage
function rememberReminders() {
    localStorage.setItem("dayPlan", JSON.stringify(dayPlan));
}

// sets any data in localStorage to the view
function showReminders() {
    dayPlan.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("dayPlan"));

    if (storedDay) {
        dayPlan = storedDay;
    }

    rememberReminders();
    showReminders();
}

dayPlan.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
