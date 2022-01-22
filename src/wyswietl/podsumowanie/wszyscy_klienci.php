<?php
include '../../../connect.php';

header("Content-Type: application/json");


$query = "SELECT COUNT(id_klient) ilosc FROM kina.klient;";

if($wynik = pg_query($con, $query)){
  
    $output = array();
    while ($row = pg_fetch_row($wynik)) {
      $output[] = array("ilosc"=>$row[0]);
    }
    echo json_encode($output);
  }


pg_close($con);
?>