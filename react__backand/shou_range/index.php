<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: content-type');
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
$hostBd = 'localhost';
$userBd = 'phpmyadmin';
$userPas = '1234';
$dataBas = 'MyDataBase';
$link = mysqli_connect($hostBd, $userBd, $userPas, $dataBas);
$sqlQuwery = "SELECT * FROM IMG";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
$i = 0;
$testArray = [];
while ($arraResult = mysqli_fetch_assoc($sqlQuweryLink)){
    $testArray[$i] = $arraResult;
    $i++;
}
$i=0;

echo json_encode($testArray);