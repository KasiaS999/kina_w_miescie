<?php
include '../../../connect.php';

header("Content-Type: application/json");

$tytul = $_GET['tytul'];
$czas = $_GET['czas'];
$od = $_GET['od'];
$do = $_GET['do'];
$tabela = "kina.film";
$query = "SELECT MAX(id_film) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_film, czas_trwania_minuty, tytul, film_dostepny_od, film_dostepny_do) VALUES ($id, $czas, '$tytul', '$od', '$do');";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
    
}
echo json_encode(1);


pg_close($con);
?>