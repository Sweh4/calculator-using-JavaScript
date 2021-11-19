function prikazi(broj) {
    document.getElementById("rezultat").value += broj;
}

function rezultat() {
    let x = document.getElementById("rezultat").value;
    let y = eval(x);
    document.getElementById("rezultat").value = y;
}

function cls() {
    let cl = " ";
    document.getElementById("rezultat").value = cl;
}
