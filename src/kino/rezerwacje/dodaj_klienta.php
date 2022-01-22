<?php
include '../../../connect.php';

header("Content-Type: application/json");

$imie = $_GET['imie'];
$nazwisko = $_GET['nazwisko'];
$email = $_GET['email'];

$tabela = "kina.klient";
$query = "SELECT MAX(id_klient) FROM $tabela";
if($wynik = pg_query($con, $query)){
  
  while ($row = pg_fetch_row($wynik)) {
    $max_id = $row[0];
  }
  
}else{
    echo json_encode(-1);
}
$id = $max_id + 1;
$query1 = "INSERT INTO $tabela (id_klient, imie, nazwisko, email) VALUES ($id, '$imie', '$nazwisko', '$email');";
$wynik1 = pg_query($query1);
if(!$wynik1){
    echo json_encode(-2);
}
echo json_encode(1);
pg_close($con);
?>



