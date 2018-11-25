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
$id = $_GET['id'];
$count = $_GET['count'];
$sqlQuwery = "UPDATE IMG SET count = count - '$count' WHERE id= '$id'";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
echo json_decode('ok');
