<?php
include '../../../connect.php';

header("Content-Type: application/json");

$tabela = "kina.rodzaj_siedzenia";
$query = "SELECT id_rodzaj_siedzenia, siedzenie_standard, siedzenie_premium, kanapa FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0], "standard"=>$row[1], "premium"=>$row[2], "kanapa"=>$row[3]);
  }
  echo json_encode($output);
}

pg_close($con);
?>