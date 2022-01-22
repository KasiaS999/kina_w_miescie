
function dodaj_kino(kino){
    var kina = document.getElementById("kino");
    kina.innerHTML += "<option value='"+kino.id+"'>"+kino.nazwa+"</option>";
}

function zaladuj_kina(){
    fetch('../rezerwacje/kina.php').then(res => res.json()).then(res=>{
        
        for(let kino of res){
            dodaj_kino(kino);
        }
    });
}


var sale = document.getElementById("sala");
function zaladuj_sale(){
    var id_kina = document.getElementById("kino").value;
    sale.innerHTML = "<option value=0>SALA</option>";
    fetch('../zmiany/wyswietl_sale.php?id='+id_kina).then(res => res.json()).then(res=>{
        
        for(let sala of res){
            sala_nowa(sala);
        }
    });
}

function sala_nowa(sala){
    sale.innerHTML += "<option value='"+sala.id+"'>"+sala.nazwa+"</option>";
}

var film_nowy = document.getElementById("film");
function zaladuj_film(){
    film_nowy.innerHTML = "<option value=0>FILM</option>";
    fetch('film_wyswietl.php').then(res => res.json()).then(res=>{
        
        for(let film of res){
            film_nowa(film);
        }
    });
}

function film_nowa(film){
    film_nowy.innerHTML += "<option value='"+film.id+"'>"+film.tytul+"</option>";
}

window.onload  = ()=>{
    zaladuj_kina();
    zaladuj_film();
};