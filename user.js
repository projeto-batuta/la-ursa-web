var user = {
    name:"",
    tel:"",
    email:"",
    mens:"",
    tourId:0,
    location:
    {
        latitude:0,
        longitude:0
    }
}

function setUserLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            user.location.latitude = position.coords.latitude;
            user.location.longitude = position.coords.longitude;
        });
    }
}

function setUserName(name)
{
    user.name = name;
}

function setUserTel(tel)
{
    user.tel = tel;
}

function setUserEmail(email)
{
    user.email = email;
}

function setUserMensage(text)
{
    user.mens = text;
}