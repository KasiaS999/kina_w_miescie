<?php
include '../../../connect.php';

header("Content-Type: application/json");
$id = $_GET['id'];
$tabela = "filmy_w_kinie";
$query = "SELECT id_film, tytul, godzina_rozpoczecia, id_seans FROM $tabela WHERE id_kino=$id";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0], "tytul"=>$row[1], "godzina"=>$row[2], "seans"=>$row[3] );
  }
  echo json_encode($output);
}
else{
  echo json_encode($id);
}

pg_close($con);
?>