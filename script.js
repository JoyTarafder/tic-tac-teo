const cards = Array.from(document.querySelectorAll(".card"));
const winner = [[1,2,3],[4,5,6],[7,8,9],[1,5,6],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
let Player1 = [], Player2 =[], count = 0;

function che(array){
    let finalResult = false;
    for(let item of winner){
        let res = item.every(val => array.indexOf(val)!== -1);
        if(res){
            finalResult = true;
            break;
        }
    }
    return finalResult;
}
function winnerPlayer(p){
    const modal = document.createElement("div");
    const player = document.createTextNode(p);
    const replay = document.createElement("button");
    modal.classList.add("winner");
    modal.appendChild(player);
    replay.appendChild(document.createTextNode("Replay"));
    //replay.setAttribute("onclick","rep()");
    replay.onclick = function()  { rep()};
    modal.appendChild(replay);
    document.body.appendChild(modal);
}
function draw(){
    if(this.classList == "card"){
        count++;
        if(count%2 !== 0){
            this.classList.add("x");
            Player1.push(Number(this.dataset.index));
            if(che(Player1)){
                winnerPlayer("Congrats player one you win");
            }
        } else {
            this.classList.add("o");
            Player2.push(Number(this.dataset.index));
            if(che(Player2)){
                winnerPlayer("Congrats player two you win");
            }
        }
        if(count ===  9){
            winnerPlayer("Draw");
        }
    }
}
function rep(){
    const w = document.querySelector(".winner");
    //card.forEach(card => card,classList = "card");
    Player1 = [];
    Player2 = [];
    count = 0;
    w.remove();
}
cards.forEach(card => card.addEventListener("click",draw));