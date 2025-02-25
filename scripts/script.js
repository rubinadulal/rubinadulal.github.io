
function perimeter() {
    var radius = parseFloat(document.getElementById('p_radius').value);
    const result = Math.PI
    var perimeter = 2*result*radius;
    document.getElementById('rslt_prmtr').innerHTML = "The perimeter of the circle is: " + perimeter;
}

function area() {
    var radius = parseFloat(document.getElementById('a_radius').value);
    const result = Math.PI
    var area = result*radius*radius;
    document.getElementById('rslt_area').innerHTML = "The area of the circle is: " + area;
}

function volume() {
    var radius = parseFloat(document.getElementById('v_radius').value);
    const result = Math.PI
    var volume = 4/3 * result * radius * radius * radius;
    document.getElementById('rslt_vlm').innerHTML = "The volume of the circle is: " + volume;
}

function darktheme(){
    document.getElementById('page').classList.remove('lighttheme');
    document.getElementById('page').classList.add('darktheme');
    document.getElementById('current_theme').innerHTML="Current Theme: Dark";
}
function lighttheme(){
    document.getElementById('page').classList.remove('darktheme');
    document.getElementById('page').classList.add('lighttheme');
    document.getElementById('current_theme').innerHTML="Current Theme: Light";
}
function defaulttheme(){
    document.getElementById('page').classList.remove('lighttheme');
    document.getElementById('page').classList.remove('darktheme');
    document.getElementById('current_theme').innerHTML="Current Theme: Default";
}

let xTurn = true;

function changeMark(buttonId) {

    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";

            document.getElementById(buttonId).style.backgroundColor="#799163";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";

            document.getElementById(buttonId).style.backgroundColor="#AB3131";
        }

    xTurn = !xTurn; //checkWin(); 
    }

}


function resetG() {
    console.log

    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    
    document.getElementById("a1").style.backgroundColor = "#FFFFFF";
    document.getElementById("b1").style.backgroundColor = "#FFFFFF";
    document.getElementById("c1").style.backgroundColor = "#FFFFFF";
    document.getElementById("a2").style.backgroundColor = "#FFFFFF";
    document.getElementById("b2").style.backgroundColor = "#FFFFFF";
    document.getElementById("c2").style.backgroundColor = "#FFFFFF";
    document.getElementById("a3").style.backgroundColor = "#FFFFFF";
    document.getElementById("b3").style.backgroundColor = "#FFFFFF";
    document.getElementById("c3").style.backgroundColor = "#FFFFFF";

    document.getElementById("win").innerHTML="";
    
}

function checkW() {

    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    
    if (a1 == b1 && b1 == c1 && a1 == "X" || a2 == b2 && b2 == c2 && a2 == "X" || a3 == b3 && b3 == c3 && a3 == "X" ||
        a1 == a2 && a2 == a3 && a1 == "X" || b1 == b2 && b2 == b3 && b1 == "X" || c1 == c2 && c2 == c3 && c1 == "X" ||
        a1 == b2 && b2 == c3 && a1 == "X" || c1 == b2 && b2 == a3 && c1 == "X") {

            document.getElementById("win").innerHTML="Result: Player 1 wins";

    }
    if (a1 == b1 && b1 == c1 && a1 == "O" || a2 == b2 && b2 == c2 && a2 == "O" || a3 == b3 && b3 == c3 && a3 == "O" ||
        a1 == a2 && a2 == a3 && a1 == "O" || b1 == b2 && b2 == b3 && b1 == "O" || c1 == c2 && c2 == c3 && c1 == "O" ||
        a1 == b2 && b2 == c3 && a1 == "O" || c1 == b2 && b2 == a3 && c1 == "O") {
            
            document.getElementById("win").innerHTML="Result: Player 2 wins";

    }
    else {
        document.getElementById("win").innerHTML="Result: It's a tie";
    }
}





