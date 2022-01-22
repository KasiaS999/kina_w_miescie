<?php
include '../../connect.php';

header("Content-Type: application/json");

$tabela = "kina.klient";
$query = "SELECT * FROM $tabela ORDER BY nazwisko";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0],"imie"=>$row[1],"nazwisko"=>$row[2], "email"=>$row[3]);
  }
  echo json_encode($output);
}

pg_close($con);
?>