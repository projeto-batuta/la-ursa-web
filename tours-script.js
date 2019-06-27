var actualShow = null;
var actualShowEl = null;

function createtShowcase(tour) {
    if (tour > cards.length) console.log("Unknow tour");
    else {
        var actualInfo = cards[tour];
        var actdiv = document.getElementById("showcase");
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "actualCase");
        newDiv.setAttribute("class", "row justify-content-center");
        newDiv.innerHTML = "<div class='col-lg-8'><div class='row'><div id='description' class='container'><h5>DETALHES RÁPIDOS</h5><div id='desc' class='container'><div class='row'><div class='desctitle col-sm-2'><h6>Duração:</h6></div><div class='desccont col-sm'><h6>"+ (actualInfo.details.duration.hour) +":"+ (actualInfo.details.duration.min) +"</h6></div> </div><div class='row'><div class='desctitle col-sm-2'><h6>Horário:</h6> </div><div class='desccont col-sm'><h6>"+ String(actualInfo.details.time.hour) +":"+ String(actualInfo.details.time.min) +"</h6></div></div></div></div ><div id = 'show-about' class='container'><div class = 'title'><h3>"+actualInfo.title+"</h3></div><div id = 'show-about-text'><h6>"+ actualInfo.fulldescription +"</h6></div></div><div id='show-important-info' class='container'><div class='title'><h3>Informações Importantes</h3></div><div><ul><div class='row'><li>Duração:</li >"+ String(actualInfo.details.duration.hour) +':'+ String(actualInfo.details.duration.min) +"<div id = 'nfo-d'></div></div><div class = 'row'><li>Ponto de encontro:</li>"+String(actualInfo.details.encounter_point.local)+"<div id='info-enc'></div></div><div class='row'><li>Horário de início:</li>"+ String(actualInfo.details.time.hour) +":"+ String(actualInfo.details.time.min) +"<div id = 'info-h'></div></div><div class='row'><li>Onde termina:</li>"+(actualInfo.details.end_point.local)+"<div id='info-end'></div></div></ul></div></div></div></div>"+"<div class='col-sm-4 align-self-center'><div class='card' style='width: 18rem;'><img src="+(actualInfo.imagesrc)+" class='card-img-top' alt='...'><div class='card-body'><a href='#' class='btn btn-primary col-sm'>AGENDAR AGORA</a><div class='dropdown'><button class='btn btn-secondary dropdown-toggle col-sm' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>FAIXA ETÁRIA</button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a class='dropdown-item' href='#'>ADULTO</a><a class='dropdown-item' href='#'>ADULTO+ (+60)</a><a class='dropdown-item' href='#'>CRIANÇA</a><a class='dropdown-item' href='#'>ADOLESCENTE</a></div></div><img id='frevow' src='assets/warning/offline-calendar.jpg' class='card-img-top' alt='alo'></div></div>";
        
        actdiv.appendChild(newDiv);
        actualShowEl = newDiv;
    }
}

function selectTour(id)
{
    if(id != actualShow){
        if(actualShowEl != null){
            document.getElementById("showcase").removeChild(actualShowEl);
        }
        createtShowcase(id);
        actualShow = id;
    }
    user.tourId = id;
}
