
<?php
$host = "ec2-52-213-119-221.eu-west-1.compute.amazonaws.com";
$user = "ecmvihlisjaoxv";
$pass = "436f850b574664ad17064c5ff378ea790b099749d1d81b6221731f2d422bb33b";
$db = "d724guo0o18743";
$port = "5432";

$con = pg_connect("host=$host dbname=$db user=$user password=$pass")
 or die ("Could not connect to server\n");

?>