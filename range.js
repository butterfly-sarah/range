var dspan=document.getElementById("span");
var drange=document.getElementById("range");
function checkcount(element){
    if (element.value<0){
        element.value="0";
        dspan.innerHTML="0";
        drange.value="0";
    }
    else if(element.value>1000){
        element.value="1000";
        dspan.innerHTML="1000";
        drange.value="1000";
    }
}