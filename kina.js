function dodaj_kino(kino){
    var kina = document.getElementById("kino");
    kina.innerHTML += "<option value='"+kino.nazwa+"'>"+kino.nazwa+"</option>";
}

function zaladuj_kina(){
    fetch('kina.php').then(res => res.json()).then(res=>{
        
        for(let kino of res){
            dodaj_kino(kino);
        }
    });
}

window.onload  = ()=>{
    zaladuj_kina();
};