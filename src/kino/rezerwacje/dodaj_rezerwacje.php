<?php
include '../../../connect.php';

header("Content-Type: application/json");

$id_seans = $_GET['id_seans'];
$id_siedzenie = $_GET['id_siedzenie'];
$id_klient = $_GET['id_klient'];

$tabela = "kina.rezerwacja";
$query = "SELECT MAX(id_rezerwacja) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_rezerwacja, id_seans, id_siedzenie, id_klient) VALUES ($id, $id_seans, $id_siedzenie, $id_klient);";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
}
echo json_encode(1);
pg_close($con);
?>