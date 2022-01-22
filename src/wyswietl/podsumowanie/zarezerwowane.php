<?php
include '../../../connect.php';

header("Content-Type: application/json");

$tabela = "zarezerwowane_siedzenia_info";
$query = "SELECT * FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id_seans"=>$row[0], "id_siedzenie"=>$row[1], "numer"=>$row[2], "rzad"=>$row[3], "sala"=>$row[4], "standard"=>$row[5], "premium"=>$row[6], "kanapa"=>$row[7]);
  }
  echo json_encode($output);
}

pg_close($con);
?>