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
    fetch('wyswietl_sale.php?id='+id_kina).then(res => res.json()).then(res=>{
        
        for(let sala of res){
            sala_nowa(sala);
        }
    });
}

function sala_nowa(sala){
    sale.innerHTML += "<option value='"+sala.id+"'>"+sala.nazwa+"</option>";
}

var rodzaj_siedzenia = document.getElementById("rodzaj");

function zaladuj_rodzaj_siedzenia(){
    rodzaj_siedzenia.innerHTML = "<option value=0>RODZAJ SIEDZENIA</option>";
    fetch('rodzaj_siedzenia.php').then(res => res.json()).then(res=>{
        
        for(let rodzaj of res){
           
            rodzaj_nowy(rodzaj);
        }
    });
}

function rodzaj_nowy(rodzaj){
    var miejsce = "";
    if (rodzaj.standard == 't'){
        miejsce="standard";
    }
    if (rodzaj.premium == 't'){
        miejsce="premium";
    }
    if (rodzaj.kanapa == 't'){
        miejsce="kanapa";
    }
    rodzaj_siedzenia.innerHTML += "<option value='"+rodzaj.id+"'>"+miejsce+"</option>";
   
}


var rzad_lista = document.getElementById("rzad");
function zaladuj_rzad(){
    var id_sala = document.getElementById("sala").value;
    rzad_lista.innerHTML = "<option value=0>RZĄD</option>";
    fetch('wyswietl_rzad.php?id='+id_sala).then(res => res.json()).then(res=>{
        
        for(let rzad of res){
            rzad_nowa(rzad);
        }
    });
}

function rzad_nowa(rzad){
    rzad_lista.innerHTML += "<option value='"+rzad.id+"'>"+rzad.numer+"</option>";
}


window.onload  = ()=>{
    zaladuj_kina();
    zaladuj_rodzaj_siedzenia();
};