let numCards;
let cards = document.querySelector(".cards")




/* Funções declaradas */
function distributeCards () {

    let receiveCardNum = prompt("Quantas cartas você quer jogar?" + "\n" + "Obs. Escolha um numero par entre 4 e 14")
    numCards = Number(receiveCardNum)

    if (numCards%2===0 && numCards>=4 && numCards<=14){
        for (let i=0;i<numCards;i++ ){
            cards.innerHTML += `<li class="card">
        
        <img src="images/front.png" alt="Parrot Front">
        
        
        
        </li><!-- card --> `
        
        } 
        } else {
        distributeCards()
    }

} 

distributeCards()

console.log(numCards)


/* <li class="card">

                    <img src="images/front.png" alt="Parrot Front">



                </li><!-- card --> */