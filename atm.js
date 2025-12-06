// function showData() {
// let amount = document.getElementById("userInput").value;
// dis=0;
// if(amount>=1000){

//     document.getElementById("outputArea").innerText = ("1000 notes " + Math.floor( dis/1000));
//     amount=amount%1000;
    
// }

// else if(amount>=500){

// document.getElementById("outputAreaa").innerText = ("500 notes " + Math.floor( dis/500));
// amount=amount%500;
    
// }

// if(amount>=100){
//     console.log("100 notes " +Math.floor( amount/100));
//     amount=amount%100;
    
// }
// if(amount>=50){
//     console.log("50 notes " +Math.floor( amount/50));
//     amount=amount%50;
    
// }
// if(amount>=20){
//     console.log("20 notes " +Math.floor( amount/20));
//     amount=amount%20;
    
// }
// if(amount ===10){
//     console.log("10 notes " + amount);
    
 
    
// }



function showData() {
    let amount = parseInt(document.getElementById("userInput").value);
    let output = "";

    if(amount >= 1000){
        let note1000 = Math.floor(amount / 1000);
        output += "1000 notes: " + note1000 + "\n";
        amount = amount % 1000;
    }

    if(amount >= 500){
        let note500 = Math.floor(amount / 500);
        output += "500 notes: " + note500 + "\n";
        amount = amount % 500;
    }
     if(amount >= 100){
        let note100 = Math.floor(amount / 100);
        output += "100 notes: " + note100 + "\n";
        amount = amount % 100;
    }
     if(amount >= 50){
        let note50 = Math.floor(amount / 50);
        output += "50 notes: " + note50 + "\n";
        amount = amount % 50;
    }
    if(amount >= 20){
        let note20 = Math.floor(amount / 20);
        output += "20 notes: " + note20 + "\n";
        amount = amount % 20;
    }
    
    if(amount >= 10){
        let note10 = amount / 10;
        output += "10 notes: " + note10 + "\n";
        amount = amount % 10;
    }

    document.getElementById("outputArea").innerText = output;
}

