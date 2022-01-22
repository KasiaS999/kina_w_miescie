<?php
include '../../connect.php';

header("Content-Type: application/json");

$nazwa = $_GET['nazwa'];
$lokalizacja = $_GET['lokalizacja'];
$tabela = "kina.kino";
$query = "SELECT MAX(id_kino) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_kino, nazwa_kina, lokalizacja) VALUES ($id, '$nazwa', '$lokalizacja');";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
    
}
echo json_encode(1);


pg_close($con);
?>