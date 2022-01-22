<?php
include '../../../connect.php';

header("Content-Type: application/json");


$query = "SELECT MAX(ilosc) FROM ilosc_klientow_seans;";

if($wynik = pg_query($con, $query)){
  
    $output = array();
    while ($row = pg_fetch_row($wynik)) {
      $output[] = array("max"=>$row[0]);
    }
    echo json_encode($output);
  }


pg_close($con);
?>