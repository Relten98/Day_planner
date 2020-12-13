/// I love arrays, lets make it modular. goes from 5AM to 5PM (Sorry to those who work graveyard shifts)
/// This array defines the time slots, to be built further down the line.
let dayPlan = [
{
    id: "0",
    time: 5,
    hour: "5:00",
    stamp: "",
    reminder: "",
},
{
    id: "1",
    time: 6,
    hour: "6:00",
    stamp: "",
    reminder: "",
},
{
    id: "2",
    time: 7,
    hour: "7:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "3",
    time: 8,
    hour: "8:00",
    stamp: "",
    reminder: "",
},
{
    id: "4",
    time: 9,
    hour: "9:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "5",
    hour: 10,
    time: "10:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "6",
    time: 11,
    hour: "11:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "7",
    time: 12,
    hour: "12:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "8",
    time: 13,
    hour: "1:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "9",
    time: 14,
    hour: "2:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "10",
    time: 15,
    hour: "3:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "11",
    time: 16,
    hour: "4:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "12",
    time: 17,
    hour: "5:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "13",
    time: 18,
    hour: "6:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "14",
    time: 19,
    hour: "7:00 ",
    stamp: "",
    reminder: "",
},
{
    id: "11",
    time: 20,
    hour: "5:00 ",
    stamp: "",
    reminder: "",
}
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
function savedData() {
    var storedDay = JSON.parse(localStorage.getItem("dayPlan"));

    if (storedDay) {
        dayPlan = storedDay;
    }
    headerDate();
    rememberReminders();
    showReminders();
}

/// Timeblock data


// Alows meridiem to be determined based on time variable
var meridiem = [ "AM", "PM"]

function setmeridiem() {
    if (dayPlan.time <= 12) {
        "stamp": "PM",
    }
  else if (dayPlan.time >= 12) {
        "stamp": "AM",
    }
}



dayPlan.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.stamp}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // creates schdeduler data
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
if (thisHour.time < moment().format("HH")) {
    planData.attr ({
        "class": "past", 
    })
}
else if (thisHour.time > moment().format("HH")) {
    planData.attr ({
        "class": "future", 
    })
}
else if (thisHour.time = moment().format("HH")) {
    planData.attr ({
        "class": "present", 
    })
}


    // creates save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})
savedData();