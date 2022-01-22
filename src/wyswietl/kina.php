<?php
include '../../connect.php';

header("Content-Type: application/json");

$tabela = "kina.kino";
$query = "SELECT * FROM $tabela ORDER BY nazwa_kina";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0],"nazwa"=>$row[1],"lokalizacja"=>$row[2]);
  }
  echo json_encode($output);
}

pg_close($con);
?>