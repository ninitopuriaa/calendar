const currentDate = document.querySelector(".curr-data");
const datesTag = document.querySelector(".dates");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

const calendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    datesTag.innerHTML = liTag;
}

prev.addEventListener("click", () => {
    currMonth = currMonth - 1;
    if (currMonth < 0) {
        currMonth = 11;
        currYear = currYear - 1;
    }
    calendar();
});

next.addEventListener("click", () => {
    currMonth = currMonth + 1;
    if (currMonth > 11) {
        currMonth = 0;
        currYear = currYear + 1;
    }
    calendar();
});

calendar();
