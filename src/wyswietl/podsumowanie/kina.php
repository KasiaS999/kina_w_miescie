<?php
include '../../../connect.php';

header("Content-Type: application/json");

$tabela = "klienci_w_kinie";
$query = "SELECT * FROM $tabela ORDER BY ilosc";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0],"nazwa"=>$row[1],"ilosc"=>$row[2]);
  }
  echo json_encode($output);
}

pg_close($con);
?>