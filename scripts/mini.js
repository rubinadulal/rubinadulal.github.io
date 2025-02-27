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

