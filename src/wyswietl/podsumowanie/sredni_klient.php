<?php
include '../../../connect.php';

header("Content-Type: application/json");


$query = "SELECT ROUND(SUM(ilosc)/COUNT(s.id_seans), 3) FROM kina.seans S LEFT JOIN ilosc_klientow_seans I on I.id_seans = S.id_seans";

if($wynik = pg_query($con, $query)){
  
    $output = array();
    while ($row = pg_fetch_row($wynik)) {
      $output[] = array("srednio"=>$row[0]);
    }
    echo json_encode($output);
  }


pg_close($con);
?>