function dodaj_seans(seans){
    var nowy_seans = document.getElementById("seans");
    var seans_w_kinie = seans.tytul + " " + seans.godzina_rozpoczecia + " "+ seans.kino;
   
    nowy_seans.innerHTML += "<option value='"+seans.id_seans+"'>"+seans_w_kinie+"</option>";
}


function zaladuj_seans(){
    fetch('../seans.php').then(res => res.json()).then(res=>{
        for(let seans of res){
            dodaj_seans(seans);
        }
    });
}


function zmien_na_przycisk(){
    var wszystkie = document.getElementById("wszystkie");
    var zajete = document.getElementById("zajete");
    wszystkie.innerHTML = `<input id="button" type="button" value="Wszystkie" id="submit" onclick="pokaz_wszystkie()">`;
    zajete.innerHTML = `<input id="button" type="button" value="Zajęte" id="submit" onclick="pokaz_zajete()">`;

}
var id = -1;
function dodaj_do_tabeli(siedzenie, tabela){
    var tabela = document.getElementById(tabela);
    var miejsce = "";
    if (siedzenie.standard == 't'){
        miejsce+="standard";
    }
    if (siedzenie.premium == 't'){
        miejsce+="premium";
    }
    if (siedzenie.kanapa == 't'){
        miejsce+="kanapa";
    }
    if (siedzenie.id_siedzenie != id){
        tabela.innerHTML += "<tr><td>"+siedzenie.sala+"</td><td>"+siedzenie.rzad+"</td><td>"+siedzenie.numer+"</td><td>"+miejsce+"</td></tr>"; 
    }
    id = siedzenie.id_siedzenie;
  }

function pokaz_wszystkie(){
    var wszystkie = document.getElementById("wszystkie");
    var id_seans = document.getElementById("seans").value;
    wszystkie.innerHTML = `<table><thead><tr><th>Sala</th><th>Numer rzędu</th> <th>Numer siedzenia</th> <th>Rodzaj</th></tr> </thead><tbody id="tabela1">`;
    if(id_seans == 0){
        fetch('wszystkie.php').then(res => res.json()).then(res=>{
            for(let wszystkie of res){
            dodaj_do_tabeli(wszystkie, "tabela1");
            }
        });
    }
    else{
        
        fetch('wszystkie_id.php?id='+id_seans).then(res => res.json()).then(res=>{
            var i = 0;
            for(let wszystkie of res){
                i+=1;
                dodaj_do_tabeli(wszystkie, "tabela1");
            }
            if (i == 0){
                var tabela = document.getElementById('tabela1');
                tabela.innerHTML += `<tr><td> brak </td><td> brak </td><td> brak </td><td> brak </td></tr>`; 
            }
            
            
        });
        
    }
    wszystkie.innerHTML += "</tbody></table>";
}

function pokaz_zajete(){
    var zajete = document.getElementById("zajete");
    var id_seans = document.getElementById("seans").value;
    zajete.innerHTML  = `<table><thead><tr><th>Sala</th><th>Numer rzędu</th> <th>Numer siedzenia</th> <th>Numer rzędu</th></tr> </thead><tbody id="tabela2">`;
    if (id_seans == 0){
        fetch('zarezerwowane.php').then(res => res.json()).then(res=>{
            for(let zarezerwowane of res){
            dodaj_do_tabeli(zarezerwowane, "tabela2");
            }
        });
    }
    else
    {
        
        fetch('zarezerwowane_id.php?id='+id_seans).then(res => res.json()).then(res=>{
            var i = 0;
            for(let zarezerwowane of res){
                i+=1;
                dodaj_do_tabeli(zarezerwowane, "tabela2");
            }
            if (i == 0){
                var tabela = document.getElementById('tabela2');
                tabela.innerHTML += `<tr><td> brak </td><td> brak </td><td> brak </td><td> brak </td></tr>`; 
            }
        }); 
        
    }
    zajete.innerHTML += "</tbody></table>";
}


window.onload = ()=>{
    zaladuj_seans();
};