<?php
include '../../../connect.php';

header("Content-Type: application/json");


$query = "SELECT ROUND(COUNT(*)/SUM(ilosc), 3) srednio FROM ilosc_seans_w_kinie i RIGHT JOIN kina.kino k ON k.id_kino = i.id_kino;";

if($wynik = pg_query($con, $query)){
  
    $output = array();
    while ($row = pg_fetch_row($wynik)) {
      $output[] = array("srednio"=>$row[0]);
    }
    echo json_encode($output);
  }


pg_close($con);
?>