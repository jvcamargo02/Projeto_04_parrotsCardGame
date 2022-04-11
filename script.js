let numCards;
let numMatch;
let cardsGame = []
let totalCards;
let flipCard;
let consult = []
let matchCard;
let cards = document.querySelector(".cards")
let clicks = 0;
const cardsList = [{
    image: "images/bobrossparrot.gif",
    visibility: "hidden"
},
{
    image: "images/fiestaparrot.gif",
    visibility: "hidden"

},
{
    image: "images/explodyparrot.gif",
    visibility: "hidden"

},
{
    image: "images/metalparrot.gif",
    visibility: "hidden"

},
{
    image: "images/revertitparrot.gif",
    visibility: "hidden"

},
{
    image: "images/tripletsparrot.gif",
    visibility: "hidden"

},
{
    image: "images/unicornparrot.gif",
    visibility: "hidden"

}
]



/* Funções declaradas */



function comparador() { 
	return Math.random() - 0.5; 
}

cardsList.sort(comparador)


function addCards () {

    
    let receiveCardNum = prompt("Quantas cartas você quer jogar?" + "\n" + "Obs. Escolha um numero par entre 4 e 14")
    numCards = Number(receiveCardNum) /* Cartas inseridas no jogo */
    numMatch = numCards/2 /* Quantos pares de cartas */


    if (numCards%2===0 && numCards>=4 && numCards<=14){
    for(let i = 0; i < numMatch; i++){
       totalCards = cardsGame.push(cardsList[i].image) + cardsGame.push(cardsList[i].image)
        
    } 
    
    cardsGame.sort(comparador)

    
        for (let i=0;i<numCards;i++ ){
            cards.innerHTML += 
        `    <div onclick="flipPromisse(this)" class="card">
            <div class="front">
            <img src="images/front.png" alt="Front">
            </div>
            <div class="back">
            <img src="`+cardsGame[i]+`" alt="bobrossparrot">
            </div>

    </div>`
        
        } 
       } else {
        addCards()
    } 
} 

addCards()


/* FUNÇÕES DECLARADAS*/
function flipPromisse (element){
    
    flip(element)
    asyncFunction();
    clicks++
    
}


function flip (element){


    if (document.querySelectorAll(".flipped").length < 2){
        flipCard = element.classList.toggle("flipped")
        
    }


}


function atualizarCards (consult){

    consult = document.querySelectorAll(".flipped")
    const blockClicks = document.querySelector(".card")
    blockClicks.classList.add("disabled")
    if (consult.length == 2 && consult[0].innerHTML !== consult[1].innerHTML){
        consult[0].classList.remove('flipped')
        consult[1].classList.remove('flipped')
        
} else if (consult.length == 2 && consult[0].innerHTML == consult[1].innerHTML){
    consult[0].classList.remove('flipped')
    consult[0].classList.add('matchCard')
    consult[1].classList.remove('flipped')
    consult[1].classList.add('matchCard')

    matchCard = document.querySelectorAll(".matchCard")
     if(matchCard.length === numCards){
        alert("Você ganhou em "+clicks+" jogadas")
      restartGame()  
    }

    
}
 blockClicks.classList.remove("disabled")  
}



function delay(tempo){
    return new Promise(function(resolve){
        setTimeout(resolve,tempo*1000);
    });
}

async function asyncFunction(){
    
    await delay(1.8);
    atualizarCards()
    
}

function restartGame(){
   const restart = prompt("Deseja reiniciar o jogo?")

   if(restart==="sim"){
    window.location.reload(false);
   }
}