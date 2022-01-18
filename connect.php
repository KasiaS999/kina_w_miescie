
<?php
$host = "localhost";
$user = "postgres";
$pass = "pass";
$db = "postgres";

$con = pg_connect("host=$host dbname=$db user=$user password=$pass")
 or die ("Could not connect to server\n");

?>