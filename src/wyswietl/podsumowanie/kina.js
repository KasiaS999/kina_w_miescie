function wyswietl_kina(){
   
    fetch('kina.php').then(res => res.json()).then(res=>{
        for(let kino of res){
          dodaj_do_tabeli(kino);
        }
      });
}


function dodaj_do_tabeli(kino){
    var tabela = document.getElementById("tabela");
    tabela.innerHTML += "<tr><td>"+kino.nazwa+"</td><td>"+kino.ilosc+"</td></tr>"; 
  }


window.onload = ()=>{
    wyswietl_kina();
};