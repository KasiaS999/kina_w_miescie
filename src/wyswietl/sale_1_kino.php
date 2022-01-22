<?php
include '../../connect.php';

header("Content-Type: application/json");
$id = $_GET['id_kino'];
$tabela = "sale_z_kinami";
$query = "SELECT * FROM $tabela WHERE id_kino=$id ORDER BY ilosc_miejsc_na_sali;";
if($wynik = pg_query($con, $query)){
  $output = array();
  while ($row = pg_fetch_row($wynik)) {
    $output[] = array("id"=>$row[0],"nazwa"=>$row[1],"ilosc"=>$row[2], "kino"=>$row[3], "id_kino"=>$row[4]);
  }
  echo json_encode($output);
}
pg_close($con);
?>