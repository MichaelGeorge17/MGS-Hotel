
var submit = "Please Fill all the Necessary Information";
var reset  = "The Form is Reset";
      

function D() /* When we click on the Reset Button */
{
    document.getElementById("Message").innerHTML = reset; 
    document.getElementById("Message").style.color = "green"
}
function f() /* When we click on the Submit Button */
{

    document.getElementById("Message").innerHTML = submit;
    document.getElementById("Message").style.color = "red"
        
}





