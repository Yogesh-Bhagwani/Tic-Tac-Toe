let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");  
let newGame = document.querySelector("#new-btn");  
let newContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let repeat = document.querySelector(".restart"); 
let p = document.createElement("p");

let turn = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turn = true ;
    enableBoxes();
    newContainer.classList.add("hide");
    p.innerText = "";
    count = 0;
}

let disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
} 

let enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 

count = 0;

boxes.forEach((box)=>{
    box.addEventListener("click" , (event)=>{
        count += 1;
        if(turn){
            box.innerHTML =  "X";
            turn = false;
            box.style.color = "#b0413e"
        } else {
            box.innerHTML = "O";
            turn = true;
            box.style.color = "#20A4F3"
        }
        box.disabled = true;
        restart(count);
        checkWinner();
    });
});



const checkWinner = () => {
    for(pattern of winPatterns ){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        }
    }
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;       
    newContainer.classList.remove("hide");
    disableBoxes();
}


newGame.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);


let restart = (count)=>{
    if(count == 9) {
        repeat.appendChild(p);
        p.innerText = "please enter restart Btn "
    }
}











