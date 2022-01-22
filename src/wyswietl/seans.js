function wyswietl_seans(){
   
    fetch('seanse.php').then(res => res.json()).then(res=>{
        for(let seans of res){
          dodaj_do_tabeli(seans);
        }
      });
}


function dodaj_do_tabeli(seans){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML += "<tr><td>"+seans.tytul+"</td><td>"+seans.godzina_rozpoczecia+"</td><td>"+seans.godzina_zakonczenia+"</td></tr>"; 
}

function dodaj_film(film){
    var nowy_film = document.getElementById("film");
    nowy_film.innerHTML += "<option value='"+film.id+"'>"+film.tytul+"</option>";
}

function zaladuj_film(){
    fetch('../kino/film/film_wyswietl.php').then(res => res.json()).then(res=>{
        for(let film of res){
            dodaj_film(film);
        }
    });
}

function pokaz_filmy(){
    var id = document.getElementById("film").value;
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    var i = 0;
    if (id != 0){
    fetch('filmy_seansu.php?id_film='+id).then(res => res.json()).then(res=>{
        
        for(let film of res){
            i+=1;
            dodaj_do_tabeli(film);
            
        }
        if (i==0){
            tabela.innerHTML += "<tr><td> brak </td><td> brak </td><td> brak </td></tr>"
        }
      });
    }
    else{

        wyswietl_seans()
    }
   
}


window.onload = ()=>{
    wyswietl_seans();
    zaladuj_film();
};