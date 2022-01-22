function sredni_klient(){
    var klienci_srednia = document.getElementById("klienci_srednia");
    fetch('sredni_klient.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            klienci_srednia.innerHTML += wynik.srednio;
        }
      });
}


function klienci_max(){
    var klienci_max = document.getElementById("klienci_max");
    fetch('klienci_max.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            klienci_max.innerHTML +=  wynik.max;
        }
      });
}

function wszystkie_seanse(){
    var wszystkie = document.getElementById("wszystkie_seanse");
    fetch('wszystkie_seanse.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            wszystkie.innerHTML +=  wynik.ilosc;
        }
      });
}


function wszyscy_klienci(){
    var wszystkie = document.getElementById("wszyscy_klienci");
    fetch('wszyscy_klienci.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            wszystkie.innerHTML +=  wynik.ilosc;
        }
      });
}

function kino_max(){
    var wszystkie = document.getElementById("kino_max_klienci");
    fetch('kino_max_klienci.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            wszystkie.innerHTML +=  wynik.nazwa;
        }
      });
}

function kino_max_seans(){
    var wszystkie = document.getElementById("kino_max_seans");
    fetch('kino_max_seans.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            wszystkie.innerHTML +=  wynik.nazwa;
        }
      });
}


function sredni_seans(){
    var kino_srednia_seans = document.getElementById("kino_srednia_seans");
    fetch('sredni_klient_seans.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            kino_srednia_seans.innerHTML += wynik.srednio;
        }
      });
}

function kino_srednia_klienci(){
    var kino_srednia_klienci = document.getElementById("kino_srednia_klienci");
    fetch('sredni_klient_kino.php').then(res => res.json()).then(res=>{
        for(let wynik of res){
            kino_srednia_klienci.innerHTML += wynik.srednio;
        }
      });
}


window.onload = ()=>{
    sredni_klient();
    klienci_max();
    wszystkie_seanse();
    wszyscy_klienci();
    kino_max();
    kino_max_seans();
    sredni_seans();
    kino_srednia_klienci();

};