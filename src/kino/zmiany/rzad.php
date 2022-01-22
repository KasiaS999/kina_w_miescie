<?php
include '../../../connect.php';

header("Content-Type: application/json");

$numer = $_GET['numer'];
$ilosc = $_GET['ilosc'];
$id_sala = $_GET['id_sala'];

$tabela = "kina.rzad";
$query = "SELECT MAX(id_rzad) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_rzad, id_sala, numer, ilosc_siedzen) VALUES ($id, $id_sala, $numer, $ilosc);";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
    
}
echo json_encode(1);
pg_close($con);
?>