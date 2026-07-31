// ================= PAGE SWITCHING =================

function showPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber)
        .classList.add("active");
        if(pageNumber === 6){

    typeWriter();

}

}



// ================= PASSWORD CHECK =================

const unlockBtn = document.getElementById("unlockBtn");

if (unlockBtn) {

    unlockBtn.addEventListener("click", function () {

        const password =
        document.getElementById("passwordInput").value;


        if (password === "05022025") {

            showPage(3);

        } 
        
        else {

            document.getElementById("error").innerHTML =
            "Wrong password ❤️ Try again";

        }

    });

}



// ================= BUTTONS =================


const memoryBtn = document.getElementById("memoryBtn");

if(memoryBtn){

    memoryBtn.addEventListener("click", function(){

        showPage(4);

    });

}




const giftPageBtn = document.getElementById("giftPageBtn");

if(giftPageBtn){

    giftPageBtn.addEventListener("click", function(){

        showPage(5);

    });

}




const finalBtn = document.getElementById("finalBtn");

if(finalBtn){

    finalBtn.addEventListener("click", function(){

        showPage(6);

    });

}




// ================= LOVE DAYS COUNTER =================


const startDate = new Date("February 5, 2025");


function updateDays(){

    const today = new Date();


    const difference =
    today - startDate;


    const days =
    Math.floor(
        difference / 
        (1000 * 60 * 60 * 24)
    );


    const counter =
    document.getElementById("daysCounter");


    if(counter){

        counter.innerHTML =
        days + " Days Together ❤️";

    }

}


updateDays();



// ================= START WEBSITE =================


showPage(1);

const startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.addEventListener("click", function(){

        showPage(2);

    });

}

// ================= FLOATING HEARTS =================


function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random()*100 + "vw";


    heart.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,700);




// ================= TYPEWRITER EFFECT =================


const finalText =
"Thank you for being a beautiful chapter of my life ❤️";


let index = 0;


function typeWriter(){

    const element =
    document.getElementById("typingText");


    if(element && index < finalText.length){

        element.innerHTML += finalText.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}
// ================= FINAL SURPRISE REVEAL =================


const revealBtn =
document.getElementById("revealBtn");


if(revealBtn){

    revealBtn.addEventListener("click",()=>{


        document
        .getElementById("finalMessage")
        .classList.add("show");


        revealBtn.style.display="none";


    });

}

// ================= FINAL SURPRISE REVEAL =================

document.addEventListener("DOMContentLoaded", function(){

    const revealBtn = document.getElementById("revealBtn");
    const finalMessage = document.getElementById("finalMessage");


    if(revealBtn && finalMessage){

        revealBtn.addEventListener("click", function(){

            finalMessage.classList.add("show");

            revealBtn.style.display = "none";

        });

    }

});
// ================= LOADING SCREEN =================


window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .classList.add("hide");


    },2000);


});
const backBtn =
document.getElementById("backBtn");


if(backBtn){

backBtn.onclick=function(){

showPage(4);

}

}