/*  Close and Open Button Script*/
// Close and Open Button
let openBtn = document.querySelector(".open");
openBtn.addEventListener("click", function() {
    open();
}); 

let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
    close();
});

let headLinks = document.querySelector(".header-links");

/* Function for Close and Open Button */
function open() {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    headLinks.style.display = "block";
};

function close() {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    headLinks.style.display = "none";
};


// Main Top Container Function
let subFlexMt = document.querySelector(".main-top-flex-sub");
let circle = document.querySelector("#booked");
let path = document.querySelector("#booked1");
let bookmark = document.querySelector(".bookmark");

function booked() {
    if (circle.classList.contains("booked") == true) {
        circle.classList.remove("booked");
    } else {
        circle.classList.add("booked");
    }
}

function booked1() {
    if (path.classList.contains("booked1") == true) {
        path.classList.remove("booked1");
    } else {
        path.classList.add("booked1");
    }
}

function textBooked() {
    if (bookmark.textContent == "Bookmarked") {
        bookmark.textContent = "Bookmark";
        bookmark.style.color = "var(--DakGray)";
    } else {
        bookmark.textContent = "Bookmarked";
        bookmark.style.color = "var(--DakCyan)";
    }
}

subFlexMt.addEventListener("click", function () {
    booked();
    booked1();
    textBooked();
});



// Trigger the Modal Container
let modalBack = document.querySelector(".modal-container");

function displayModal() {
    modalBack.classList.add("display-block");
}

function closeModal() {
    modalBack.classList.remove("display-block");
}

let backProjectBtn = document.querySelector(".back-proj");
backProjectBtn.addEventListener("click", function() {
    displayModal();
});

let rewardBtn = document.querySelectorAll(".reward");
for (let i = 0; i < rewardBtn.length - 1; i++) {
    rewardBtn[i].addEventListener("click", function() {
        displayModal();
    });
}

let closeModalBtn = document.querySelector(".close-container");
closeModalBtn.addEventListener("click", function() {
    closeModal();
});


// Functionalities On The Modal Container
let edition = document.querySelectorAll(".edition");

let allRadioBtn = document.querySelectorAll(".radio-btn");

let allModalSub = document.querySelectorAll(".modal-sub");

let allModalSubBottom = document.querySelectorAll(".modal-sub-bottom");

function reset() {
    for (let i = 0; i < allRadioBtn.length; i++) {
        // uncheck all radio buttons
        if (allRadioBtn[i].hasAttribute("checked")) {
            allRadioBtn[i].removeAttribute("checked");
        } 

        // change modal-sub border color
        if (allModalSub[i].classList.contains("cyan")) {
            allModalSub[i].classList.remove("cyan");
        }
    }

    for (let i = 0; i < allModalSubBottom.length; i++) {
        if (allModalSubBottom[i].classList.contains("height")) {
            allModalSubBottom[i].classList.remove("height")
        }
    }
}

for(let i =1; i < edition.length-1; i++) {
    edition[i].addEventListener("click", function() {
    let theParent = edition[i].parentElement.parentElement.parentElement.parentElement.parentElement;
    let radioBtn = theParent.querySelector(".radio-btn");
    let modalSubBottom = theParent.querySelector(".modal-sub-bottom");
    // Run reset function
    reset();

    // add the neccessary styling
    theParent.classList.add("cyan");
    radioBtn.setAttribute("checked", "checked");
    modalSubBottom.classList.add("height");
    })
}

function runSubModal() {
    let theParent = edition[i].parentElement.parentElement.parentElement.parentElement.parentElement;
    let radioBtn = theParent.querySelector(".radio-btn");
    let modalSubBottom = theParent.querySelector(".modal-sub-bottom");


    // add the neccessary styling
    theParent.classList.add("cyan");
    radioBtn.setAttribute("checked", "checked");
    modalSubBottom.classList.add("height");
}


// Functionalities on the Modal Success Container
let modalSuccess = document.querySelector(".modal-success");
// let modalSuccessBC = window.getComputedStyle(modalSuccess).backgroundColor;
let donateBtn = document.querySelectorAll(".continue");
let  successAmount = modalSuccess.querySelector(".success-amount");

for (let i = 0; i < donateBtn.length; i++) {
    donateBtn[i].addEventListener("click", function() {
        let parentElementDonate = donateBtn[i].parentElement.parentElement.parentElement;
        let inputAmount = parentElementDonate.querySelector(".num").value;
        successAmount.innerHTML = inputAmount;
        closeModal();
        removeDisplay();
    })
}

function removeDisplay() {
    modalSuccess.classList.toggle("display");
}


// Modal Success "Continue" Button Functionalities
let successContinueBtn = document.querySelector(".modal-success-continue-btn");

successContinueBtn.addEventListener("click", function() {
    let supporters = document.querySelector("#backers");
    let totalAmount = document.querySelector("#amount");
    let addedAmount = document.querySelector(".success-amount");
    // Increasing the total amount
    let a = toDigit(totalAmount.innerHTML);
    let b = toDigit(addedAmount.innerHTML);
    let c = Number(a);
    let d = Number(b);
    let e = c + d;
    let f = toAmount(e);
    totalAmount.innerHTML = f;

    // Increase Slider
    increaseSlider(e);

    // Reducing the supporters
    let g = toDigit(supporters.innerHTML);
    let h = Number(g);
    h++
    let j = toAmount(h);
    supporters.innerHTML = j;
    // Reset
    reset();
    removeDisplay();
});


function toDigit(num) {
    let numArray = num.split("");
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === "$" || numArray[i] === ",") {
            numArray.splice(i, 1);
        }
    }
    return numArray.join("");
}

function  toAmount(num) {
    // convert num to string
    let numString = num.toString();
    // Check the length of the string
    let numStringLength = numString.length;
    // Now, one has to add the comma sign to align to the rules of Maths
    let comma = [","];
    if (numStringLength < 4) {
        return numString;
    } else if (numStringLength < 5) {
        let slice1 = numString.slice(0,1);
        let slice2 = numString.slice(1);
        let sliced = slice1.concat(comma, slice2);
        return sliced;
    } else if (numStringLength < 6) {
        let slice1 = numString.slice(0,2);
        let slice2 = numString.slice(2);
        let sliced = slice1.concat(comma, slice2);
        return sliced;
    } else if (numStringLength < 7) {
        let slice1 = numString.slice(0, 3);
        let slice2 = numString.slice(3);
        let sliced = slice1.concat(comma, slice2);
        return sliced;
    }
}

function increaseSlider(amountValue) {
    let slider = document.querySelector(".slider");
    let sliderValue = Math.floor((amountValue / 100000) * 100);
    
    if (sliderValue >100) {
        slider.style.width = "100%";
    } else {
        slider.style.width = sliderValue.toString() + "%";
    }
}