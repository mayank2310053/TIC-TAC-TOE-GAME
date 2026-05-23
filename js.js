let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; // true = O, false = X

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableboxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, WINNER is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val); // ✅ FIXED
                return;
            }
        }
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);