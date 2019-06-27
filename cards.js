var loadedCards = new Array();

var cards = [{
        title: "Recife + Olinda",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        fulldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id interdum leo. Morbi nec imperdiet lectus, in venenatis erat. Nullam vel ultrices nisl. Pellentesque ut ex ornare, varius nunc at, malesuada dolor. Vestibulum quam nisi, pulvinar sit amet euismod non, suscipit sit amet nibh. Etiam est quam, finibus eget mattis eget, imperdiet at tortor. Praesent sit amet pulvinar tortor. Nullam maximus venenatis justo, sed hendrerit sem cursus in. Integer imperdiet diam tellus, nec dignissim mauris interdum vel. In hac habitasse platea dictumst. Sed at sagittis sem, ut blandit velit. Donec condimentum odio id felis pretium placerat. Nullam condimentum laoreet velit eu tempus. Suspendisse nibh nunc, tristique vel libero et, malesuada venenatis massa. Etiam tempor eget risus eget aliquet. Sed metus arcu, pellentesque sit amet dapibus ut, vulputate ac sem. Aliquam urna ipsum, mattis nec ante nec, tincidunt pharetra ipsum. Fusce quis fringilla felis. Aenean placerat commodo pharetra. Nunc mi mi, feugiat nec tempor sit amet, rhoncus in augue. Cras ullamcorper tempor urna sit amet sodales. Suspendisse posuere, quam ut dapibus tincidunt, magna nisl laoreet erat, pellentesque consequat risus tellus non purus. Maecenas ac lacus mi. Donec rutrum pharetra auctor. In hac habitasse platea dictumst. Vivamus eget justo sed metus finibus porttitor in et lorem. Pellentesque vitae nibh felis. Cras feugiat vel dui eu congue. Vestibulum leo lectus, vulputate quis tellus vitae, varius laoreet tortor. Aliquam venenatis nulla quis malesuada vehicula. Donec ac vulputate diam. Sed pellentesque arcu id lacus mollis euismod sit amet dapibus lacus. Fusce ut libero et leo tincidunt facilisis sed non ligula. Sed consectetur imperdiet volutpat. Suspendisse potenti.",
        details: {
            duration: {
                hour: 4,
                min: 30
            },
            time: {
                hour: 15,
                min: 30
            },
            encounter_point: {
                local: "Antigo Hostel",
                latitude: "",
                longitude: ""
            },
            end_point: {
                local: "Antigo Hostel",
                latitude: "",
                longitude: ""
            },
        },
        imagesrc: "assets/196709,475,80,0,0,475,365,0,0,0,0.jpg",
        link: "#"
    },
    {
        title: "Olinda",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagesrc: "assets/igreja-do-amparo-1024x768.jpg",
        fulldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id interdum leo. Morbi nec imperdiet lectus, in venenatis erat. Nullam vel ultrices nisl. Pellentesque ut ex ornare, varius nunc at, malesuada dolor. Vestibulum quam nisi, pulvinar sit amet euismod non, suscipit sit amet nibh. Etiam est quam, finibus eget mattis eget, imperdiet at tortor. Praesent sit amet pulvinar tortor. Nullam maximus venenatis justo, sed hendrerit sem cursus in. Integer imperdiet diam tellus, nec dignissim mauris interdum vel. In hac habitasse platea dictumst. Sed at sagittis sem, ut blandit velit. Donec condimentum odio id felis pretium placerat. Nullam condimentum laoreet velit eu tempus. Suspendisse nibh nunc, tristique vel libero et, malesuada venenatis massa. Etiam tempor eget risus eget aliquet. Sed metus arcu, pellentesque sit amet dapibus ut, vulputate ac sem. Aliquam urna ipsum, mattis nec ante nec, tincidunt pharetra ipsum. Fusce quis fringilla felis. Aenean placerat commodo pharetra. Nunc mi mi, feugiat nec tempor sit amet, rhoncus in augue. Cras ullamcorper tempor urna sit amet sodales. Suspendisse posuere, quam ut dapibus tincidunt, magna nisl laoreet erat, pellentesque consequat risus tellus non purus. Maecenas ac lacus mi. Donec rutrum pharetra auctor. In hac habitasse platea dictumst. Vivamus eget justo sed metus finibus porttitor in et lorem. Pellentesque vitae nibh felis. Cras feugiat vel dui eu congue. Vestibulum leo lectus, vulputate quis tellus vitae, varius laoreet tortor. Aliquam venenatis nulla quis malesuada vehicula. Donec ac vulputate diam. Sed pellentesque arcu id lacus mollis euismod sit amet dapibus lacus. Fusce ut libero et leo tincidunt facilisis sed non ligula. Sed consectetur imperdiet volutpat. Suspendisse potenti.",
        details: {
            duration: {
                hour: 0,
                min: 0
            },
            time: {
                hour: 0,
                min: 0
            },
            encounter_point: {
                local: "Antigo Hostel",
                latitude: "",
                longitude: ""
            },
            end_point: {
                local: "Antigo Hostel",
                latitude: "",
                longitude: ""
            },
        },
        link: "#"
    },
    {
        title: "Tour Personalizado",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        fulldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id interdum leo. Morbi nec imperdiet lectus, in venenatis erat. Nullam vel ultrices nisl. Pellentesque ut ex ornare, varius nunc at, malesuada dolor. Vestibulum quam nisi, pulvinar sit amet euismod non, suscipit sit amet nibh. Etiam est quam, finibus eget mattis eget, imperdiet at tortor. Praesent sit amet pulvinar tortor. Nullam maximus venenatis justo, sed hendrerit sem cursus in. Integer imperdiet diam tellus, nec dignissim mauris interdum vel. In hac habitasse platea dictumst. Sed at sagittis sem, ut blandit velit. Donec condimentum odio id felis pretium placerat. Nullam condimentum laoreet velit eu tempus. Suspendisse nibh nunc, tristique vel libero et, malesuada venenatis massa. Etiam tempor eget risus eget aliquet. Sed metus arcu, pellentesque sit amet dapibus ut, vulputate ac sem. Aliquam urna ipsum, mattis nec ante nec, tincidunt pharetra ipsum. Fusce quis fringilla felis. Aenean placerat commodo pharetra. Nunc mi mi, feugiat nec tempor sit amet, rhoncus in augue. Cras ullamcorper tempor urna sit amet sodales. Suspendisse posuere, quam ut dapibus tincidunt, magna nisl laoreet erat, pellentesque consequat risus tellus non purus. Maecenas ac lacus mi. Donec rutrum pharetra auctor. In hac habitasse platea dictumst. Vivamus eget justo sed metus finibus porttitor in et lorem. Pellentesque vitae nibh felis. Cras feugiat vel dui eu congue. Vestibulum leo lectus, vulputate quis tellus vitae, varius laoreet tortor. Aliquam venenatis nulla quis malesuada vehicula. Donec ac vulputate diam. Sed pellentesque arcu id lacus mollis euismod sit amet dapibus lacus. Fusce ut libero et leo tincidunt facilisis sed non ligula. Sed consectetur imperdiet volutpat. Suspendisse potenti.",
        details: {
            duration: {
                hour: 0,
                min: 0
            },
            time: {
                hour: 0,
                min: 0
            },
            encounter_point: {
                local: "Antigo Hostel",
                latitude: "",
                longitude: ""
            },
            end_point: {
                local: "Antigo Hostel",
                latitude: "",
                longitude: ""
            },
        },
        imagesrc: "assets/Natural_pools_-_Boa_Viagem_Beach_-_Recife,_Pernambuco,_Brazil.jpg",
        link: "#"
    }
];

function loadcards(end, div) {
    for (i = 0; i < end; i++) {
        createCard(i, div);
    }
}

function loadcardT(end, div) {
    for (i = 0; i < end; i++) {
        if(i != actualShow){
            createCardTours(i, div);
        }
    }
}
//
//function getResolution() {
//        alert("Your screen resolution is: " + screen.width + "x" + screen.height);


function createCard(id, div) {
    var div = document.getElementById(div);
    var image = cards[id].imagesrc;
    var newDIV = document.createElement('div');
    var idbt = String("btnc" + String(id));
    newDIV.setAttribute("id", (cards[id].title + "card"));
    newDIV.setAttribute("class", "card");
    newDIV.setAttribute("style", "width: 18rem;");
    newDIV.innerHTML = "<img src=" + (image) + " class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + cards[id].title + "</h5><p class='card-text'>" + cards[id].description + "</p><a id="+idbt+" + href='#' class='btn btn-primary col-sm'>SAIBA MAIS</a></div>";
    div.appendChild(newDIV);
    var btnFunc = document.getElementById("btnc"+id);
    var select = String("selectTour("+String(id)+")");
    var open = "changePager('tours')";
    var all = String(select +";"+ open)
    btnFunc.setAttribute("onclick",all);

}

function createCardTours(id, div) {
    if (createCard == id) {
        return 0;
    }
    var div = document.getElementById(div);
    var image = cards[id].imagesrc;
    var newDIV = document.createElement('div');
    newDIV.setAttribute("id", (cards[id].title + "card"));
    newDIV.setAttribute("class", "card");
    newDIV.setAttribute("style", "width: 18rem;");
    newDIV.innerHTML = "<img src=" + (image) + " class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>" + cards[id].title + "</h5><p class='card-text'>" + cards[id].description + "</p><a id="+"btn"+id+" href='#' class='btn btn-primary col-sm'>AGENDAR</a></div>";
    div.appendChild(newDIV);
    var btnFunc = document.getElementById("btn"+id);
    var select = String("selectTour("+String(id)+")");
    btnFunc.setAttribute("onclick",select);
    loadedCards.push(newDIV);
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

function removeCard(id){
    document.getElementById('availables-tours').removeChild(loadedCards[id]);
}

function refreshCardsTour(){
    cleanTours();
    loadcardT(cards.length, "availables-tours");
}

loadcards(cards.length, "other-contents");
loadcardT(cards.length, "availables-tours");
