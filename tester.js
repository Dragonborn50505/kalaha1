const slots = Array.from(document.querySelectorAll(".slot")); // "const" också en typ av verbiable men bestämd och kan inte ädras (enkelt)

for (let index = 0; index < slots.length; index++) { //"let" är en veriable som låter dig sätta ett värde på något som man använda det senare
    slots[index].setAttribute("data-balls", 3);
    slots[index].setAttribute("data-index", index);
    slots[index].addEventListener("click", clickSlot)
}

function clickSlot(event) {
    let indexOfCurrent = parseInt(event.target.getAttribute("data-index")); // (parseInt gör om en string till nummer)
    console.log(indexOfCurrent); // kallar veriable
    let numBalls = parseInt(event.target.getAttribute("data-balls"));
    event.target.setAttribute("data-balls", 0); // ändar indexen värde på vår div (data-balls) till ett nytt värde (0)
    let offset = 1;
    for(let i = numBalls; i > 0; i--) { // "for" = loop, i: gör det enklare för oss art förså vad som ska användas. 
        //numBalls: själva verbialen, i > 0: själva kravet, i--: den går igenom loopen till i-- minskar i ()numBalls till kravet för den att sluta (0)
        let targetIndex = (indexOfCurrent + offset) % 12;
        let b = parseInt(slots[targetIndex].getAttribute("data-balls"));
        b++;
        slots[targetIndex].setAttribute("data-balls", b);
        offset++;
    }
    
    updateAllSlots();
}

function updateSlot(slot) {
    slot.innerHTML = "";
    let numBalls = parseInt(slot.getAttribute("data-balls"));
    for(let i = 0; i < numBalls; i++) {
        let newBall = document.createElement("div");
        newBall.classList.add("ball");
        slot.append(newBall);
    }
}

//---------------------------------------------------------------------------------------

const home_2 = Array.from(document.querySelectorAll("home-2"));

function clickSlot(event) {

    let indexOfCurrent = parseInt(event.target.getAttribute("data-index"));
    console.log(indexOfCurrent); 
    let numBalls = parseInt(event.target.getAttribute("data-balls"));
    event.target.setAttribute("data-balls", 0); 

for (indexOfCurrent = 6;;){
for(let i = numBalls; i > 0; i--){
    let b = parseInt(home_2.getAttribute("data-balls"));
    b++;
    home_2.setAttribute("data-balls", b);
}
}


function home_2(slot) {
    slot.innerHTML = "";
    home_2.innerHTML = "";
    let numBalls = parseInt(home_2.getAttribute("data-balls"));
    for(let i = 0; i < numBalls; i++) {
        let newBall = document.createElement("div");
        newBall.classList.add("ball");
        home_2.append(newBall);
    }
}
}
//function updateSlot(slot) {
//    for(let i = 0; i < num_balls; i++) {
//        slots[index].setAttribute("data-balls", 3++);
//    }
//}


function updateAllSlots() {
    slots.forEach((slot) => {
        updateSlot(slot);
    });
}



updateAllSlots();
