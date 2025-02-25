function darktheme(){
    document.getElementById('bodyy').classList.remove('lighttheme');
    document.getElementById('bodyy').classList.add('darktheme');
    document.getElementById('current_theme').innerHTML="Current Theme: Dark";
}
function lighttheme(){
    document.getElementById('bodyy').classList.remove('darktheme');
    document.getElementById('bodyy').classList.add('lighttheme');
    document.getElementById('current_theme').innerHTML="Current Theme: Light";
}
function defaulttheme(){
    document.getElementById('bodyy').classList.remove('lighttheme');
    document.getElementById('bodyy').classList.remove('darktheme');
    document.getElementById('current_theme').innerHTML="Current Theme: Default";
}


let xTurn = true;

function changeMark(buttonId) {

    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style.backgroundColor="#799163";
            document.getElementById(buttonId).style.color="#6F3096";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style.backgroundColor="#AB3131";
            document.getElementById(buttonId).style.color="#FF00FF";
        }

    xTurn = !xTurn; 
    
    checkWin(); 

    }

}


function resetG() {


    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    
    document.getElementById("a1").style.backgroundColor = "#f0c3c3";
    document.getElementById("b1").style.backgroundColor = "#f0c3c3";
    document.getElementById("c1").style.backgroundColor = "#f0c3c3";
    document.getElementById("a2").style.backgroundColor = "#f0c3c3";
    document.getElementById("b2").style.backgroundColor = "#f0c3c3";
    document.getElementById("c2").style.backgroundColor = "#f0c3c3";
    document.getElementById("a3").style.backgroundColor = "#f0c3c3";
    document.getElementById("b3").style.backgroundColor = "#f0c3c3";
    document.getElementById("c3").style.backgroundColor = "#f0c3c3";


    document.getElementById("win").innerHTML="";
    
}

function checkWin() {


    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    

    if ( a1 === b1 && b1 === c1 && a1 === "X" ||
         a2 === b2 && b2 === c2 && a2 === "X" || 
         a3 === b3 && b3 === c3 && a3 === "X")
          {

            document.getElementById("win").innerHTML="Result: YAYY!! Player 1 Won!!!";

        return;
    }
    

    if ( a1 === a2 && a2 === a3 && a1 === "X" ||
         b1 === b2 && b2 === b3 && b1 === "X" ||
          c1 === c2 && c2 === c3 && c1 === "X") 
          {

            document.getElementById("win").innerHTML="Result: YAYY!! Player 1 Won!!!";

        return;
    }


    if ( a1 === b2 && b2 === c3 && a1 === "X" || 
        c1 === b2 && b2 === a3 && c1 === "X")
         {
        document.getElementById("win").innerHTML="Result: YAYY!! Player 1 Won!!!";
        return;
    }

    if (a1 === b1 && b1 === c1 && a1 === "O" || 
        a2 === b2 && b2 === c2 && a2 === "O" || 
        a3 === b3 && b3 === c3 && a3 === "O") 
        {

        document.getElementById("win").innerHTML="Result: YAYY!! Player 2 Won!!!";

            return;
    }


    if ( a1 === a2 && a2 === a3 && a1 === "O" ||
         b1 === b2 && b2 === b3 && b1 === "O" || 
         c1 === c2 && c2 === c3 && c1 === "O")
          {

         document.getElementById("win").innerHTML="Result: YAYY!! Player 2 Won!!!";

        return;
    }

    if (a1 === b2 && b2 === c3 && a1 === "O" ||
         c1 === b2 && b2 === a3 && c1 === "O")
         {

       document.getElementById("win").innerHTML="Result: YAYY!! Player 2 Won!!!";

        return;

    }

    if (a1 !== "" && b1 !== "" && c1 !== "" &&
        a2 !== "" && b2 !== "" && c2 !== "" &&
        a3 !== "" && b3 !== "" && c3 !== "") {

        document.getElementById("win").innerHTML = "Result: URGH!! It is a tie.";
    }

    else {

        document.getElementById("win").innerHTML= "";
    }
   
}


document.getElementById("win").innerHTML="Result: YAYY!! Player 2 Won!!!";
document.getElementById("win").innerHTML="Result: YAYY!! Player 2 Won!!!";
