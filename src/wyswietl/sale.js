function wyswietl_sale(){
   
    fetch('sale.php').then(res => res.json()).then(res=>{
        for(let sala of res){
          dodaj_do_tabeli(sala);
        }
      });
}


function dodaj_do_tabeli(sala){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML += "<tr><td>"+sala.nazwa+"</td><td>"+sala.ilosc+"</td><td>"+sala.kino+"</td></tr>"; 
}

function dodaj_kino(kino){
    var kina = document.getElementById("kino");
    kina.innerHTML += "<option value='"+kino.id+"'>"+kino.nazwa+"</option>";
}

function zaladuj_kina(){
    fetch('../kino/rezerwacje/kina.php').then(res => res.json()).then(res=>{
        
        for(let kino of res){
            dodaj_kino(kino);
        }
    });
}

function pokaz_dla_1_kina(){
    var id = document.getElementById("kino").value;
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    var i = 0;
    if (id != 0){
    fetch('sale_1_kino.php?id_kino='+id).then(res => res.json()).then(res=>{
        for(let sala of res){
            i+=1;
            dodaj_do_tabeli(sala);
        }
        if (i==0){
            tabela.innerHTML += "<tr><td> brak </td><td> brak </td><td> brak </td></tr>";
        }
      });
    }
    else{

        wyswietl_sale();
    }
}


window.onload = ()=>{
    wyswietl_sale();
    zaladuj_kina();
};