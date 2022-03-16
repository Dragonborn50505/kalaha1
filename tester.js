const slots = Array.from(document.querySelectorAll(".slot")); // "const" också en typ av verbiable men bestämd och kan inte ädras (enkelt)


for (let index = 0; index < slots.length; index++) { //"let" är en veriable som låter dig sätta ett värde på något som man använda det senare
    slots[index].setAttribute("data-balls", 3);
    slots[index].setAttribute("data-index", index);
    
    if (index !== 0 && index !== 7) {
        slots[index].addEventListener("click", clickSlot)
    }
}

slots[0].setAttribute("data-balls",0);
slots[7].setAttribute("data-balls",0);



function clickSlot(event) {

        let indexOfCurrent = parseInt(event.target.getAttribute("data-index")); // (parseInt gör om en string till nummer)
        console.log(indexOfCurrent); // kallar veriable
        let numBalls = parseInt(event.target.getAttribute("data-balls"));
        event.target.setAttribute("data-balls", 0); // ändar indexen värde på vår div (data-balls) till ett nytt värde (0)
        let offset = 1;
        for(let i = numBalls; i > 0; i--) { // "for" = loop, i: gör det enklare för oss art förså vad som ska användas. 
            //numBalls: själva verbialen, i > 0: själva kravet, i--: den går igenom loopen till i-- minskar i ()numBalls till kravet för den att sluta (0)
            let targetIndex = (indexOfCurrent + offset) % 14;
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















//---------------------------------------------------------------------------------------
//function updateSlot(slot) {
//    for(let i = 0; i < num_balls; i++) {
//        slots[index].setAttribute("data-balls", 3++);
//    }
//}

let totalInHome = parseInt(slots[0].getAttribute("data-balls")) +
                  parseInt(slots[7].getAttribute("data-balls"));

console.log(totalInHome);

if (parseInt(slots[0].getAttribute("data-balls")) + parseInt(slots[7].getAttribute("data-balls")) == 36){
    if (parseInt(slots[0].getAttribute("data-balls")) > parseInt(slots[7].getAttribute("data-balls"))){
        document.getElementById(".whoWon").innerHTML = "Player one Won";
    }
    else if (parseInt(slots[0].getAttribute("data-balls")) < parseInt(slots[7].getAttribute("data-balls"))){
        document.getElementById(".whoWon").innerHTML = "Player two Won";
    }
    else if (parseInt(slots[0].getAttribute("data-balls")) == parseInt(slots[7].getAttribute("data-balls"))){
        document.getElementById(".whoWon").innerHTML = "tied";
    }

}




function updateAllSlots() {
    slots.forEach((slot) => {
        updateSlot(slot);
    });

    let totalInHome = parseInt(slots[0].getAttribute("data-balls")) +
                  parseInt(slots[7].getAttribute("data-balls"));

    console.log(totalInHome);

    if (totalInHome == 36){
        if (parseInt(slots[0].getAttribute("data-balls")) > parseInt(slots[7].getAttribute("data-balls"))){
            document.querySelector(".whoWon").innerHTML = "Player one Won";
        }
        else if (parseInt(slots[0].getAttribute("data-balls")) < parseInt(slots[7].getAttribute("data-balls"))){
            document.querySelector(".whoWon").innerHTML = "Player two Won";
        }
        else if (parseInt(slots[0].getAttribute("data-balls")) == parseInt(slots[7].getAttribute("data-balls"))){
            document.querySelector(".whoWon").innerHTML = "tied";
        }
    }

}



updateAllSlots();