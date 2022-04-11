let numCards;
let cards = document.querySelector(".cards")
const cardsList = [{
    image: "images/bobrossparrot.gif",
    visibility: "hidden"
},
{
    image: "images/fiestaparrot.gif",
    visibility: "hidden"

}
]



/* Funções declaradas */
function distributeCards () {

    let receiveCardNum = prompt("Quantas cartas você quer jogar?" + "\n" + "Obs. Escolha um numero par entre 4 e 14")
    numCards = Number(receiveCardNum)

    if (numCards%2===0 && numCards>=4 && numCards<=14){
        for (let i=0;i<numCards;i++ ){
            cards.innerHTML += 
        `    <div onclick="flip(this)" class="card">
            <div class="front">
            <img src="images/front.png" alt="Front">
            </div>
            <div class="back">
            <img src="images/bobrossparrot.gif" alt="bobrossparrot">
            </div>

    </div>`
        
        } 
        } else {
        distributeCards()
    }

} 

distributeCards()

console.log(numCards)



/* FUNÇÕES DECLARADAS*/


function flip (element){

    const flipCard = element.classList.toggle("flipped")
      
}


/* <li class="card">

                    <img src="images/front.png" alt="Parrot Front">



                </li><!-- card --> */