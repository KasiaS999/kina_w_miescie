<?php
include '../../../connect.php';

header("Content-Type: application/json");

$numer = $_GET['numer'];
$id_rzad = $_GET['id_rzad'];
$id_rodzaj = $_GET['id_rodzaj'];

$tabela = "kina.siedzenie";
$query = "SELECT MAX(id_siedzenie) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_siedzenie, id_rzad, numer_siedzenia, id_rodzaj_siedzenia) VALUES ($id, $id_rzad, $numer, $id_rodzaj);";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
    
}
echo json_encode(1);
pg_close($con);
?>