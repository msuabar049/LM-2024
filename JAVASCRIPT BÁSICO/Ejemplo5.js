function mostrarFormulario() {
    var texto="";
    for (var i=0; i<document.forms[0].elements.length; i++) {
        texto+=document.forms[0].elements[i].name + ": "+document.forms[0].elements[i].type + document.forms[0].elements[i].value+" "+i+  "\n";
    }
    document.forms[0].elements[6].value=texto;
    return true;
}

function suma() {
    var num1=parseInt(document.forms[0].elements[0].value);
    var num2=parseInt(document.forms[0].elements[1].value);
    var resultado=num1+num2;
    document.forms[0].elements[6].value=resultado;
    return true;
}

function resta() {
    var num1=parseInt(document.forms[0].elements[0].value);
    var num2=parseInt(document.forms[0].elements[1].value);
    var resultado=num1-num2;
    document.forms[0].elements[6].value=resultado;
    return true;
}

function comprueba() {
    if(document.forms[0].elements[0].value==document.forms[0].elements[1].value){
        alert("Los valores son iguales: "+document.forms[0].elements[0].value+" "+document.forms[0].elements[1].value);
        return true;
    }else {
        alert("Los valores son diferentes");
        return false;
    }
}