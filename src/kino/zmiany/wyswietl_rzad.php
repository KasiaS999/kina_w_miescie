<?php
include '../../../connect.php';

header("Content-Type: application/json");
$id = $_GET['id'];
$tabela = "kina.rzad";
$query = "SELECT id_rzad, numer  FROM $tabela WHERE id_sala=$id";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0], "numer"=>$row[1] );
  }
  echo json_encode($output);
}
else{
  echo json_encode($id);
}

pg_close($con);
?>