
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
