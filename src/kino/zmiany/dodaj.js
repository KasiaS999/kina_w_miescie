function zmien_widok_gdy_zle(nazwa, ilosc, valid_kina){
    
    
    if(nazwa){
        document.getElementById("nazwa").classList.remove('invalid');
    }
    else{
        document.getElementById("nazwa").classList.add('invalid');
    }


    if(ilosc){
        document.getElementById("ilosc").classList.remove('invalid');
    }
    else{
        document.getElementById("ilosc").classList.add('invalid');
    }
    if(valid_kina){
        document.getElementById("kino").classList.remove('invalid');
    }
    else{
        document.getElementById("kino").classList.add('invalid');
    }

}
function dodaj_sale(){

    var nazwa = document.getElementById("nazwa").value;
    var ilosc = document.getElementById("ilosc").value;
    var id_kina = document.getElementById("kino").value;

   
    const nazwa_valid = nazwa.length > 0;
    const ilosc_valid = ilosc  > 0;
    const valid_kina = id_kina > 0;

    zmien_widok_gdy_zle(nazwa_valid, ilosc_valid, valid_kina);


    if (nazwa_valid && ilosc_valid && valid_kina){
        fetch('sala.php?id_kina='+ id_kina +'&nazwa='+nazwa+'&ilosc='+ilosc).then(res => res.json()).then(res=>{
            
            var wynik =  document.getElementById('zmiany');
            if (res==1){
                wynik.innerHTML  = "<b>Dodano sale!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
            
        });
    }
  

}
function zmien_widok_gdy_zle_rzad(numer, ilosc, sala){
    
    
    if(numer){
        document.getElementById("numer").classList.remove('invalid');
    }
    else{
        document.getElementById("numer").classList.add('invalid');
    }


    if(ilosc){
        document.getElementById("ilosc").classList.remove('invalid');
    }
    else{
        document.getElementById("ilosc").classList.add('invalid');
    }
    if(sala){
        document.getElementById("sala").classList.remove('invalid');
    }
    else{
        document.getElementById("sala").classList.add('invalid');
    }

}
function dodaj_rzad(){

    var numer = document.getElementById("numer").value;
    var ilosc = document.getElementById("ilosc").value;
    var id_sala = document.getElementById("sala").value;

   
    const numer_valid = numer > 0;
    const ilosc_valid = ilosc  > 0;
    const valid_sala = id_sala > 0;

    zmien_widok_gdy_zle_rzad(numer_valid, ilosc_valid, valid_sala);


    if (numer_valid && ilosc_valid && valid_sala){
        fetch('rzad.php?id_sala='+ id_sala +'&numer='+numer+'&ilosc='+ilosc).then(res => res.json()).then(res=>{
            var wynik =  document.getElementById('zmiany');
            if (res==1){
                wynik.innerHTML  = "<b>Dodano rząd!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
            
        });
    }

}
function zmien_widok_gdy_zle_siedzenie(numer, rzad, rodzaj){
    
    
    if(numer){
        document.getElementById("numer").classList.remove('invalid');
    }
    else{
        document.getElementById("numer").classList.add('invalid');
    }


    if(rzad){
        document.getElementById("rzad").classList.remove('invalid');
    }
    else{
        document.getElementById("rzad").classList.add('invalid');
    }
    if(rodzaj){
        document.getElementById("rodzaj").classList.remove('invalid');
    }
    else{
        document.getElementById("rodzaj").classList.add('invalid');
    }

}
function dodaj_siedzenie(){
    var numer = document.getElementById("numer").value;
    var id_rzad = document.getElementById("rzad").value;
    var id_rodzaj = document.getElementById("rodzaj").value;

    const numer_valid = numer > 0;
    const valid_rzad = id_rzad > 0;
    const valid_rodzaj = id_rodzaj > 0;

    zmien_widok_gdy_zle_siedzenie(numer_valid, valid_rzad, valid_rodzaj);


    if (numer_valid &&  valid_rzad && valid_rodzaj){
        fetch('siedzenie.php?id_rzad='+ id_rzad +'&numer='+numer+'&id_rodzaj='+id_rodzaj).then(res => res.json()).then(res=>{
            
            var wynik =  document.getElementById('zmiany');
            if (res==1){
                wynik.innerHTML  = "<b>Dodano siedzenie!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
            
        });
    }
  

}