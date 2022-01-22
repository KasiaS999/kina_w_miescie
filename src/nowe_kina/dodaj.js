function zmien_widok_gdy_zle_kino(nazwa, lokalizacja){
    
    
    if(nazwa){
        document.getElementById("nazwa").classList.remove('invalid');
    }
    else{
        document.getElementById("nazwa").classList.add('invalid');
    }


    if(lokalizacja){
        document.getElementById("lokalizacja").classList.remove('invalid');
    }
    else{
        document.getElementById("lokalizacja").classList.add('invalid');
    }
   

}
function dodaj_kino(){
    var nazwa = document.getElementById("nazwa").value;
    var lokalizacja = document.getElementById("lokalizacja").value;
    

    const nazwa_valid = nazwa.length > 0;
    const valid_lokalizacja = lokalizacja.length > 0;
   
    zmien_widok_gdy_zle_kino(nazwa_valid, valid_lokalizacja);


    if (nazwa_valid &&  valid_lokalizacja){
        fetch('kino.php?nazwa='+ nazwa +'&lokalizacja='+lokalizacja).then(res => res.json()).then(res=>{
            var wynik =  document.getElementById('zmiany');
            if (res==1){
                wynik.innerHTML  = "<b>Dodano kino!</b>";
            }
            else{
                wynik.innerHTML = "<b>Coś poszło nie tak ... :(</b>";
            } 
            
        });
    }

}
