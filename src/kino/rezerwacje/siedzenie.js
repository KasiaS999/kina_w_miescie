var seans_id = -1;
var siedzenia = document.getElementById("siedzenie");
var numer = -1;
function dodaj_siedzenie(siedzenie){
    var miejsce = "numer: "+ siedzenie.siedzenie + " rząd: " + siedzenie.rzad + " rodzaj: "; 
    
   
    if (siedzenie.siedzenie_standard == 't'){
        miejsce+="standard";
    }
    if (siedzenie.siedzenie_premium == 't'){
        miejsce+="premium";
    }
    if (siedzenie.kanapa == 't'){
        miejsce+="kanapa";
    }
    if(numer != siedzenie.id){
        siedzenia.innerHTML += "<option value='"+siedzenie.id+"'>"+ miejsce +"</option>";
    }
    numer = siedzenie.id;
}

function zaladuj_siedzenie(){
    siedzenia.innerHTML = "<option value=0>SIEDZENIE</option>";
    var id_seans = document.getElementById("film").value;
    fetch('siedzenie.php?id='+id_seans).then(res => res.json()).then(res=>{
        for(let siedzenie of res){
            dodaj_siedzenie(siedzenie);
        }
        
    });
}