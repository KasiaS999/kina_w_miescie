var seans_id = -1;
var seanse = document.getElementById("film");

function dodaj_film(film){
    var seans = film.tytul+" " +film.godzina;
    if (seans_id != film.seans){
        seanse.innerHTML += "<option value='"+film.seans+"'>"+ seans +"</option>";

    }
    seans_id = film.seans;
}

function zaladuj_filmy(){
    seanse.innerHTML = "<option value=0>SEANS</option>";
    var id_kina = document.getElementById("kino").value;
    fetch('film.php?id='+id_kina).then(res => res.json()).then(res=>{
    
        for(let film of res){
            dodaj_film(film);
        }
        
    });
}

