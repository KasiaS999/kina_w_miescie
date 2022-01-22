<?php
include '../../connect.php';

header("Content-Type: application/json");

$tabela = "seanse_w_kinie";
$query = "SELECT * FROM $tabela ORDER BY nazwa_kina";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("kino"=>$row[0],"id_seans"=>$row[1],"godzina_rozpoczecia"=>$row[2], "tytul"=>$row[4]);
  }
  echo json_encode($output);
}

pg_close($con);
?>