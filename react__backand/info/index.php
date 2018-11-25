<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: content-type');
$hostBd = 'localhost';
$userBd = 'phpmyadmin';
$userPas = '1234';
$dataBas = 'MyDataBase';
$link = mysqli_connect($hostBd, $userBd, $userPas, $dataBas);
mysqli_set_charset($link, "utf8");
$sqlQuwery = "SELECT COUNT(*) as allCount FROM `IMG`";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
$ansfer = mysqli_fetch_assoc($sqlQuweryLink);
$info['allCount'] = $ansfer['allCount'];

$sqlQuwery = "SELECT count from `IMG` WHERE colore = 'Green'";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
$ansfer = mysqli_fetch_assoc($sqlQuweryLink);
$info['green'] = $ansfer['count'];

$sqlQuwery = "SELECT count from `IMG` WHERE colore = 'Red'";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
$ansfer = mysqli_fetch_assoc($sqlQuweryLink);
$info['red'] = $ansfer['count'];

$sqlQuwery = "SELECT count from `IMG` WHERE colore = 'Black'";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
$ansfer = mysqli_fetch_assoc($sqlQuweryLink);
$info['black'] = $ansfer['count'];

$sqlQuwery = "SELECT count from `IMG` WHERE colore = 'White'";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
$ansfer = mysqli_fetch_assoc($sqlQuweryLink);
$info['white'] = $ansfer['count'];
echo json_encode ($info);
?>