function zmien_widok_gdy_zla_nazwa(email_valid, imie_valid, nazwisko_valid){
    
    
    if(email_valid){
        document.getElementById("email").classList.remove('invalid');
    }
    else{
        document.getElementById("email").classList.add('invalid');
    }


    if(imie_valid){
        document.getElementById("imie").classList.remove('invalid');
    }
    else{
        document.getElementById("imie").classList.add('invalid');
    }


    if(nazwisko_valid){
        document.getElementById("nazwisko").classList.remove('invalid');
    }
    else{
        document.getElementById("nazwisko").classList.add('invalid');
    }

}

function zmien_widok_gdy_zle_id(valid_id_seans, valid_id_siedzenie, valid_id_klient){
    
    
    if(valid_id_seans){
        document.getElementById("film").classList.remove('invalid');
    }
    else{
        document.getElementById("film").classList.add('invalid');
    }


    if(valid_id_siedzenie){
        document.getElementById("siedzenie").classList.remove('invalid');
    }
    else{
        document.getElementById("siedzenie").classList.add('invalid');
    }


    if(valid_id_klient){
        document.getElementById("klient").classList.remove('invalid');
    }
    else{
        document.getElementById("klient").classList.add('invalid');
    }

}
function dodaj_klienta(){

    var email = document.getElementById("email").value;
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;

   
    const email_valid = email.length > 0;
    const imie_valid = imie.length > 0;
    const nazwisko_valid = nazwisko.length > 0;

    zmien_widok_gdy_zla_nazwa(email_valid, imie_valid, nazwisko_valid);


    if (email_valid && imie_valid && nazwisko_valid){
        fetch('dodaj_klienta.php?imie='+imie+'&nazwisko='+nazwisko+'&email='+email).then(res => res.json()).then(res=>{
    
        });
    }

}
function dodaj_film(film){
    var kina = document.getElementById("imie");
    kina.innerHTML += "<p>"+film.tytul+"</p>"+film.tytul+"</option>";
}

function zarezerwuj(){
    var id_seans = document.getElementById("film").value;
    var id_siedzenie = document.getElementById("siedzenie").value;
    var id_klient = document.getElementById("klient").value;

    const valid_id_seans = id_seans != 0;
    const valid_id_siedzenie = id_siedzenie != 0;
    const valid_id_klient = id_klient != 0;
    zmien_widok_gdy_zle_id(valid_id_seans, valid_id_siedzenie, valid_id_klient)
    if (valid_id_seans && valid_id_siedzenie && valid_id_klient){
        fetch('dodaj_rezerwacje.php?id_seans='+id_seans+'&id_siedzenie='+id_siedzenie+'&id_klient='+id_klient).then(res => res.json()).then(res=>{
        
            var wynik =  document.getElementById('zarezerwowano');
            if (res==1){
                wynik.innerHTML  = "<b>Zarezerwowano!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
        });
       
        
    }
}