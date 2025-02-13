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

let arith_data = [];

function meown() {
    
    if(arith_data.length === 0) {
        document.getElementById("me_an").innerHTML = "Mean: ";
        return;
    }

    let sum = 0;

    for(i = 0; i < arith_data.length; i++) {

        sum += arith_data[i];
    }

    let mean = sum / arith_data.length;

    document.getElementById('me_an').innerHTML = "Mean: " + mean;
}

function result() {

    let curr_ent = document.getElementById('curr_ent');
    curr_ent.innerHTML = arith_data.join(', ');

    meown();

}

function ent_ry() {

    let input = document.getElementById("space").value;
    let number = parseFloat(input);

    if(isNaN(number) || number === '') {

        alert("Invalid input!!! Enter a number!");

        return;
    }
    else {
        arith_data.push(number);
       
        result();
    }
}

function re_move() {
    let input = document.getElementById("space").value;
    let number = parseFloat(input);

    let index = arith_data.indexOf(number);

    if(isNaN(number) || number === '') {
        alert("Invalid input!!! Enter a number!");
        return;
    }
    else if(index === -1) {
        alert("The Number You Are Trying To Remove Doesn't Exist In The Database!!");
        return;
    }
    else {
        arith_data.splice(index, 1);
       
        result();
    }
}