function sumar(){
    var numero1=parseInt(document.forms[0].elements[4].value);
    var numero2=parseInt(document.forms[0].elements[5].value);
    var resultado=numero1+numero2;
    document.forms[0].elements[6].value="El resultado es: "+resultado;
}
function restar(){
    var numero1=parseInt(document.forms[0].elements[4].value);
    var numero2=parseInt(document.forms[0].elements[5].value);
    var resultado=numero1-numero2;
    document.forms[0].elements[6].value="El resultado es: "+resultado;
}
function multiplicar(){
    var numero1=parseInt(document.forms[0].elements[4].value);
    var numero2=parseInt(document.forms[0].elements[5].value);
    var resultado=numero1*numero2;
    document.forms[0].elements[6].value="El resultado es: "+resultado;
}
function dividir(){
    var numero1=parseInt(document.forms[0].elements[4].value);
    var numero2=parseInt(document.forms[0].elements[5].value);
    var resultado=numero1/numero2;
    document.forms[0].elements[6].value="El resultado es: "+resultado;
}