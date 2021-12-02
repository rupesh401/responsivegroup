"use strict";

$(document).ready( () => {
    document.getElementById("time").innerHTML = formatAMPM();
    const slider = $("#image_list"); // fetching my ul list as slider
    // right button click event
    $("#right_button").click( () => {
        // get the value of the left property
        const leftProperty = parseInt(slider.css("left"));
        // move to the nest value of the left property
        let newLeftProperty = 0;
        if(leftProperty - 1300 >= -3800) { //comparing if the specific book image is last image or not
            newLeftProperty = leftProperty - 1300;//width of the image is 200 so reducing the width of one image makes one book slide at a time
        }
        else{
            //if last image slider moves to the first image automatically when click on the right button
            newLeftProperty = 0;
        }
        // change the left property
        slider.animate(
            {left: newLeftProperty},
            1000
        );
    });
    // left button click event
    $("#left_button").click( () => {
        const leftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        if(leftProperty < 0) { //checking if their is image available on the left side of the respective book image or not
            newLeftProperty = leftProperty + 1300; //if yes to the above condition slide to the next image available
        }
        else{
            //takes to the last book image slider when click left arrow button in first image of the slider
            newLeftProperty = -3800;
        }
        slider.animate(
            {left: newLeftProperty},
            1000
        );
    });
});


// function to get the date and time at the top section
function formatAMPM() {
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    var time = date.toLocaleTimeString();
    return n + ' ' + time;
}