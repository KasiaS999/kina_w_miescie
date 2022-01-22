<?php
include '../../../connect.php';

header("Content-Type: application/json");

$rozpoczecie = $_GET['rozpoczecie'];
$zakonczenie = $_GET['zakonczenie'];
$id_sala = $_GET['id_sala'];
$id_film = $_GET['id_film'];

$tabela = "kina.seans";
$query = "SELECT MAX(id_seans) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_seans, id_film, godzina_rozpoczecia, godzina_zakonczenia, id_sala) VALUES ($id, $id_film, '$rozpoczecie', '$zakonczenie', $id_film);";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
    
}
echo json_encode(1);
pg_close($con);
?>