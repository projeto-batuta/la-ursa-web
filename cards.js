var cards = [{
    title: "Recife + Olinda",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imagesrc: "assets/196709,475,80,0,0,475,365,0,0,0,0.jpg",
    link: "#"
    },
    {
    title: "Olinda",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imagesrc: "assets/igreja-do-amparo-1024x768.jpg",
    link: "#"
    },
    {
    title: "Tour Personalizado",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imagesrc: "assets/Natural_pools_-_Boa_Viagem_Beach_-_Recife,_Pernambuco,_Brazil.jpg",
        link: "#"
    }
]

function loadcards(end,div)
{
    for(i = 0;i < end;i++){
        createCard(i,div);
    }
}

function loadcardT(end,div)
{
    for(i = 0;i < end;i++){
        createCardTours(i,div);
    }
}
//
//function getResolution() {
//        alert("Your screen resolution is: " + screen.width + "x" + screen.height);


function createCard(id,div){
    var div = document.getElementById(div);
    var image = cards[id].imagesrc;
    var newDIV = document.createElement('div');
    newDIV.setAttribute("id",(cards[id].title+"card"));
    newDIV.setAttribute("class","card");
    newDIV.setAttribute("style","width: 18rem;");
    newDIV.innerHTML = "<img src="+(image)+" class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+cards[id].title+"</h5><p class='card-text'>"+cards[id].description+"</p><a href='#' class='btn btn-primary'>SAIBA MAIS</a></div>";
    div.appendChild(newDIV);
    
}

function createCardTours(id,div){
    var div = document.getElementById(div);
    var image = cards[id].imagesrc;
    var newDIV = document.createElement('div');
    newDIV.setAttribute("id",(cards[id].title+"card"));
    newDIV.setAttribute("class","card");
    newDIV.setAttribute("style","width: 18rem;");
    newDIV.innerHTML = "<img src="+(image)+" class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+cards[id].title+"</h5><p class='card-text'>"+cards[id].description+"</p><a href='#' class='btn btn-primary'>AGENDAR</a></div>";
    div.appendChild(newDIV);
    
}

//function selectTour(id)
//{
//    if(id > cards.length)
//        {
//            console.log("Unkown Tour");
//        }
//    else{
//        
//    }
//}
//
//function spanTour(id)
//{
//    
//}


loadcards(cards.length,"other-contents");
loadcardT(cards.length,"availables-tours");