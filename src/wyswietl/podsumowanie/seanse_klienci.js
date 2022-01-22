function wyswietl_seanse(){
   
    fetch('seanse_klienci.php').then(res => res.json()).then(res=>{
        for(let kino of res){
          dodaj_do_tabeli(kino);
        }
      });
}


function dodaj_do_tabeli(seans){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML += "<tr><td>"+seans.tytul+"</td><td>"+seans.godzina+"</td><td>"+seans.ilosc+ "</td><td>"+ seans.kino +"</td></tr>"; 
  }


window.onload = ()=>{
    wyswietl_seanse();
};