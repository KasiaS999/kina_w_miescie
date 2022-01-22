<?php
include '../../../connect.php';

header("Content-Type: application/json");
$tabela = "kina.film";
$query = "SELECT id_film, tytul FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0], "tytul"=>$row[1] );
  }
  echo json_encode($output);
}
else{
  echo json_encode($id);
}

pg_close($con);
?>