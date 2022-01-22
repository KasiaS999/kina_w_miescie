<?php
include '../../../connect.php';

header("Content-Type: application/json");
$id = $_GET['id'];
$tabela = "wszystkie_siedzenia";
$query = "SELECT id_siedzenie, numer_siedzenia, numer, siedzenie_standard, siedzenie_premium, kanapa FROM $tabela WHERE id_seans=$id;";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0], "siedzenie"=>$row[1], "rzad"=>$row[2], "siedzenie_standard"=>$row[3] , "siedzenie_premium"=>$row[4], "kanapa"=>$row[5] );
  }
  echo json_encode($output);
}
else{
  echo json_encode($id);
}

pg_close($con);
?>