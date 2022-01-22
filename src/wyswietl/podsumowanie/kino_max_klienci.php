<?php
include '../../../connect.php';

header("Content-Type: application/json");


$query = " SELECT ilosc, nazwa_kina FROM klienci_w_kinie WHERE ilosc = (SELECT MAX(ilosc) FROM klienci_w_kinie);";

if($wynik = pg_query($con, $query)){
  
    $output = array();
    while ($row = pg_fetch_row($wynik)) {
      $output[] = array("ilosc"=>$row[0], "nazwa"=>$row[1]);
    }
    echo json_encode($output);
  }


pg_close($con);
?>