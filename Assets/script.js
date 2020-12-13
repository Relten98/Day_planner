/// I love arrays, lets make it modular. aLSO 

/// These define meridiem, used later on.
///var meridiemvalues = ["AM", "PM"]

///var meridiem = []
/// Who needs meridiem?

/// This array defines the time slots, to be built further down the line.
let dayPlan = [
    {
        id: "0",
        time: 5,
        hour: "5:00 AM",
        reminder: "",
    },
    {
        id: "1",
        time: 6,
        hour: "6:00 AM",
        reminder: "",
    },
    {
        id: "2",
        time: 7,
        hour: "7:00 AM",
        reminder: "",
    },
    {
        id: "3",
        time: 8,
        hour: "8:00 AM",
        reminder: "",
    },
    {
        id: "4",
        time: 9,
        hour: "9:00 AM",
        reminder: "",
    },
    {
        id: "5",
        time: 10,
        hour: "10:00 AM",
        reminder: "",
    },
    {
        id: "6",
        time: 11,
        hour: "11:00 AM",
        reminder: "",
    },
    {
        id: "7",
        time: 12,
        hour: "12:00 PM",
        reminder: "",
    },
    {
        id: "8",
        time: 13,
        hour: "1:00 PM",
        reminder: "",
    },
    {
        id: "9",
        time: 14,
        hour: "2:00 PM",
        reminder: "",
    },
    {
        id: "10",
        time: 15,
        hour: "3:00 PM",
        reminder: "",
    },
    {
        id: "11",
        time: 16,
        hour: "4:00 PM",
        reminder: "",
    },
    {
        id: "12",
        time: 17,
        hour: "5:00 PM",
        reminder: "",
    },
    {
        id: "13",
        time: 18,
        hour: "6:00 PM",
        reminder: "",
    },
    {
        id: "14",
        time: 19,
        hour: "7:00 PM",
        reminder: "",
    },
    {
        id: "15",
        time: 20,
        hour: "8:00 PM",
        reminder: "",
    },
    {
        id: "16",
        time: 21,
        hour: "9:00 PM",
        reminder: "",
    },
    {
        id: "17",
        time: 22,
        hour: "10:00 PM",
        reminder: "",
    },
    {
        id: "18",
        time: 23,
        hour: "11:00 PM",
        reminder: "",
    },
    {
        id: "19",
        time: 24,
        hour: "12:00 AM",
        reminder: "",
    },
    {
        id: "20",
        time: 1,
        hour: "1:00 AM",
        reminder: "",
    },
    {
        id: "21",
        time: 2,
        hour: "2:00 AM",
        reminder: "",
    },
    {
        id: "22",
        time: 3,
        hour: "3:00 AM",
        reminder: "",
    },
    {
        id: "23",
        time: 4,
        hour: "4:00 AM",
        reminder: "",
    }
]

// Alows meridiem to be determined based on time variable

/// Preps the day to be called later on.
function headerDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

headerDate();


// Saves data to localStorage
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
    };

    let memorizer = $(this).siblings(.description).children(.future).attr(.id);
    console.log(memorizer)
    rememberReminders();
    showReminders();
}

/// Timeblock data


dayPlan.forEach(function (thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });



    $(".container").append(hourRow);

    // creates time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}`)
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
        planData.attr({
            "class": "past",
        })
    }
    else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future",
        })
    }
    else if (thisHour.time = moment().format("HH")) {
        planData.attr({
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

$(.saveBtn).on(click, function (event) {
    event.preventdefault()
    rememberReminders();
    showReminders();
})