var itemCardsac= document.querySelector(".card-sac");
itemCardsac.forEach(card => {
    card.querySelector("button").addEventListener("click",function(){
        card.classList.toggle('ativo');
    })
    
});

var btncardsac=itemCardsac.querySelector("button");
console.log(btncardsac);
var contadorclick=0;

btncardsac.addEventListener("click",function(){
    contadorclick++;
    itemCardsac.classList.add('ativo');
    if(contadorclick>1){
        itemCardsac.classList.remove('ativo');
    }
});

