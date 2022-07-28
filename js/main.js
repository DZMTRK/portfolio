"use strict"

let eventTarget = document.getElementById('fontIncrease');

eventTarget.addEventListener("click", IncreaseFontSize);

const IncreaseFontSize = () => {
    alert(eventTarget);
};

