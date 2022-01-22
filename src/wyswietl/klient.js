function wyswietl_klient(){
   
    fetch('klient.php').then(res => res.json()).then(res=>{
        for(let klient of res){
          dodaj_do_tabeli(klient);
        }
      });
}


function dodaj_do_tabeli(klient){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML += "<tr><td>"+klient.nazwisko+"</td><td>"+klient.imie+"</td><td>"+klient.email+"</td></tr>"; 
}

function dodaj_seans(seans){
    var nowy_seans = document.getElementById("seans");
    var seans_w_kinie = seans.tytul + " " + seans.godzina_rozpoczecia + " "+ seans.kino;
   
    nowy_seans.innerHTML += "<option value='"+seans.id_seans+"'>"+seans_w_kinie+"</option>";
}

function zaladuj_seans(){
    fetch('seans.php').then(res => res.json()).then(res=>{
        for(let seans of res){
            dodaj_seans(seans);
        }
    });
}

function pokaz_dla_seansu(){
    var id = document.getElementById("seans").value;
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    var i = 0;
    if (id != 0){
    fetch('klienci_seansu.php?id_seans='+id).then(res => res.json()).then(res=>{

        
        for(let sala of res){
            i+=1;
            dodaj_do_tabeli(sala);
            
        }
        if (i==0){
            tabela.innerHTML += "<tr><td> brak </td><td> brak </td><td> brak </td></tr>"
        }
      });
    }
    else{

        wyswietl_klient()
    }
   
}


window.onload = ()=>{
    wyswietl_klient();
    zaladuj_seans();
};