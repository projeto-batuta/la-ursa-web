var actualPage;

var pages = new Array();

pages[0] = document.getElementById("home");
pages[1] = document.getElementById("about");
pages[2] = document.getElementById("tours");
pages[3] = document.getElementById("contact")

function changePager(id) {
    if (id == "home") { 
        pages[0].style.display = "block";
        pages[1].style.display = "none";
        pages[2].style.display = "none";
        pages[3].style.display = "none";
    } else if (id == "about") {
        pages[0].style.display = "none";
        pages[1].style.display = "block";
        pages[2].style.display = "none";
        pages[3].style.display = "none";
    } else if (id == "tours") {
        pages[0].style.display = "none";
        pages[1].style.display = "none";
        pages[2].style.display = "block";
        pages[3].style.display = "none";
    }
    if(id == "contact"){
        pages[0].style.display = "none";
        pages[1].style.display = "none";
        pages[2].style.display = "none";
        pages[3].style.display = "block";
    }
}
//
//function adapter(){
//    var width = screen.width;
//    if width < 425;
//    var act_page = document.getElementById("")
//}

//$('html')
//.append('my DOM manupulation skills dont seem like a big deal when using jquery')
//.css('color', 'red').addClass('myclass');


//var page = document.getElementById('home');
//var newDiv = document.createElement('div');
//newDiv.setAttribute("class","card");
//newDiv.setAttribute("id","newdiv");
//newDiv.innerHTML = "<button class='btn'>Ola </button>"
//newDiv.textContent = "Ola mundo";
//page.appendChild(newDiv);
//newDiv.id = "card-block";
//newDiv.id = "card";
//document.getElementById("other-contents")[0].appendChild(newDiv);

//function createCard(onde,oq,)


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}