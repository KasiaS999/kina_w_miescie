<?php
include '../../connect.php';

header("Content-Type: application/json");
$id = $_GET['id_film'];
$tabela = "filmy_seansu";
$query = "SELECT * FROM $tabela WHERE id_film = $id ORDER BY tytul";
if($wynik = pg_query($con, $query)){
  
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id_seans"=>$row[0],"tytul"=>$row[1], "id_film"=>$row[2], "godzina_rozpoczecia"=>$row[3],"godzina_zakonczenia"=>$row[4]);
  }
  echo json_encode($output);
}

pg_close($con);
?>