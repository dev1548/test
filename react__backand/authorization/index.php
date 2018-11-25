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
$userLogin = $_GET['userLogin'];
$userPasword = $_GET['userPassword'];
$sqlQuwery = "SELECT password FROM `authorization` WHERE name = '$userLogin'";
$sqlQuweryLink = mysqli_query ($link, $sqlQuwery);
$ansfer = mysqli_fetch_assoc($sqlQuweryLink);
if (mysqli_num_rows($sqlQuweryLink)===0){
    echo json_encode('0');
} else if (md5($userPasword) === $ansfer['password']){
    echo json_encode('1');
} else {
    echo json_encode('0');
}