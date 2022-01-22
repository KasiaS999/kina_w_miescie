var klienci = document.getElementById("klient");

function dodaj_kino(kino){
    var kina = document.getElementById("kino");
    kina.innerHTML += "<option value='"+kino.id+"'>"+kino.nazwa+"</option>";
}

function zaladuj_kina(){
    fetch('kina.php').then(res => res.json()).then(res=>{
        
        for(let kino of res){
            dodaj_kino(kino);
        }
    });
}
function dodaj_klient(klient){
   
    var dane = klient.imie+" "+klient.nazwisko+" "+klient.email;
    klienci.innerHTML += "<option value='"+klient.id+"'>"+dane+"</option>";
}
function  zaladuj_klienta(){
    klienci.innerHTML = "<option value=0>KLIENT</option>";
    fetch('klient.php').then(res => res.json()).then(res=>{
        
        for(let klient of res){
            dodaj_klient(klient);
        }
    });
}

window.onload  = ()=>{
    zaladuj_kina();
    zaladuj_klienta();
};