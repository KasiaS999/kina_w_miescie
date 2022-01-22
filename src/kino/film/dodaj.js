function zmien_widok_gdy_zle_film(tytul, czas, dostepny_do, od){
    
    
    if(tytul){
        document.getElementById("tytul").classList.remove('invalid');
    }
    else{
        document.getElementById("tytul").classList.add('invalid');
    }


    if(czas){
        document.getElementById("czas").classList.remove('invalid');
    }
    else{
        document.getElementById("czas").classList.add('invalid');
    }
    
    if(dostepny_do){
        document.getElementById("do").classList.remove('invalid');
    }
    else{
        document.getElementById("do").classList.add('invalid');
    }
    if(od){
        document.getElementById("od").classList.remove('invalid');
    }
    else{
        document.getElementById("od").classList.add('invalid');
    }

}
function dodaj_film(){
    var tytul = document.getElementById("tytul").value;
    var czas = document.getElementById("czas").value;
    var od = document.getElementById("od").value;
    var dostepny_do = document.getElementById("do").value;

    const tytul_valid = tytul.length > 0;
    const valid_czas = czas > 0;
    const valid_dostepny_do = dostepny_do.length > 0;
    const valid_od = od.length > 0;

    zmien_widok_gdy_zle_film(tytul_valid, valid_czas, valid_dostepny_do, valid_od);


    if (tytul_valid &&  valid_czas && valid_dostepny_do && valid_od){
        fetch('film.php?tytul='+ tytul +'&czas='+czas+'&od='+od+'&do='+dostepny_do).then(res => res.json()).then(res=>{
            var wynik =  document.getElementById('zmiany');
            if (res==1){
                wynik.innerHTML  = "<b>Dodano film!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
            
        });
    }

}

function zmien_widok_gdy_zle_seans(rozpoczecie, zakonczenie, sala, film){
    
    
    if(rozpoczecie){
        document.getElementById("rozpoczecie").classList.remove('invalid');
    }
    else{
        document.getElementById("rozpoczecie").classList.add('invalid');
    }


    if(zakonczenie){
        document.getElementById("zakonczenie").classList.remove('invalid');
    }
    else{
        document.getElementById("zakonczenie").classList.add('invalid');
    }
    if(sala){
        document.getElementById("sala").classList.remove('invalid');
    }
    else{
        document.getElementById("sala").classList.add('invalid');
    }
    if(film){
        document.getElementById("film").classList.remove('invalid');
    }
    else{
        document.getElementById("film").classList.add('invalid');
    }

}
function dodaj_seans(){
    
    var rozpoczecie = document.getElementById("rozpoczecie").value;
    var zakonczenie = document.getElementById("zakonczenie").value;
    var id_sala = document.getElementById("sala").value;
    var id_film = document.getElementById("film").value;

   
    const rozpoczecie_valid = rozpoczecie.length > 0;
    const zakonczenie_valid = zakonczenie.length  > 0;
    const valid_sala = id_sala > 0;
    const valid_film = id_film > 0;

    zmien_widok_gdy_zle_seans(rozpoczecie_valid, zakonczenie_valid, valid_sala, valid_film);


    if (rozpoczecie_valid && rozpoczecie_valid && valid_sala){
        fetch('seans.php?id_sala='+ id_sala +'&id_film='+id_film+'&rozpoczecie='+rozpoczecie+'&zakonczenie='+zakonczenie).then(res => res.json()).then(res=>{
            var wynik =  document.getElementById('zmiany');
            if (res==1){
                wynik.innerHTML  = "<b>Dodano seans!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
            
        });
    }

}