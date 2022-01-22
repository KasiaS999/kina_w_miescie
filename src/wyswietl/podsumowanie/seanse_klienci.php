<?php
include '../../../connect.php';

header("Content-Type: application/json");

$tabela = "ilosc_klientow_seans";
$query = "SELECT * FROM $tabela ORDER BY ilosc";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0],"ilosc"=>$row[1],"godzina"=>$row[2], "tytul"=>$row[3], "kino"=>$row[4] );
  }
  echo json_encode($output);
}

pg_close($con);
?>