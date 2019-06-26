
function getEntryValue(id)
{
    var value = document.getElementById(id).value;
    if(id == 'InputName'){
        user.name = value;
    }
    else if(id == "InputEmail"){
        user.email = value;
    }
    else if(id == "InputTel"){
        user.tel = value;
    }
    else if(id == "InputMen"){
        user.mens = value;
    }
}

function getEntries(type)
{
    if (type == 'forms'){
        getEntryValue('InputName');
        if(user.name == "") return false;
        getEntryValue('InputTel');
        if (user.tel == "") return false;
        getEntryValue('InputEmail');
        if(user.email == "") return false;
        getEntryValue('InputMen');
        if(user.mens == "") return false;
    }
    else if(type == 'schedule'){
        
    }
}

function emailChecker(email)
{
    var result = false;
    for(i = 0;i < email.length;i++){
        if(email[i] == "@"){
            result = true;
        }
    }
    return result;
}