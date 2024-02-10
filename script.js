let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let winMsg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked!");
        if (turnO == true){
        box.innerText = "O";
        turnO = false;
    }
    else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
});
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
winMsg.innerText = `Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if( val1 != "" && val2 != "" && val3 != "" ){
            if(val1 == val2 && val2 == val3){
               
                showWinner(val1);
            }
        }

    }

}

const reset = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click",reset);
newGameBtn.addEventListener("click",reset);






