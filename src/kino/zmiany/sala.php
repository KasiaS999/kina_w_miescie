<?php
include '../../../connect.php';

header("Content-Type: application/json");

$nazwa = $_GET['nazwa'];
$ilosc = $_GET['ilosc'];
$id_kina = $_GET['id_kina'];

$tabela = "kina.sala";
$query = "SELECT MAX(id_sala) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_sala, nazwa, ilosc_miejsc_na_sali, id_kino) VALUES ($id, '$nazwa', $ilosc, $id_kina);";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-1);
    
}
echo json_encode(1);
pg_close($con);
?>