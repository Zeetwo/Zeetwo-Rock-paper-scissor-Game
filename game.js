let userscore = 0;
let compscore =0;

const choices =document.querySelectorAll(".content");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let resetbtn =document.querySelector("#reset-btn");

const gencomchoice =() => {
    const options = ["rock" ,"paper", "scissor"];
    const randomidx = Math.floor(Math.random() * 3 );
    return options[randomidx];

};
const drawgame =() =>{
    msg.innerText ="Game Draw";
    msg.style.backgroundColor = "#081b31";
};

const showwinner =(userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats computer's ${compchoice}`;
        msg.style.backgroundColor ="green"
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost. Computer's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red"
    }
};
const playgame =(userchoice) => {
    const compchoice =gencomchoice();

    if (userchoice === compchoice) {
        drawgame();
    }   else {
        let userwin =true;

        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((content) => {
    content.addEventListener("click", () =>{
        const userchoice =content.getAttribute("id");
        playgame(userchoice);
    });
})

const resetgame =() => {
    location.reload();
}

resetbtn.addEventListener("click", resetgame);

