<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 29.10.2018
 * Time: 8:59
 */
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
$price = $_POST['price'];
$color = $_POST['color'];
$count = $_POST['count'];
$fileName = $_FILES['img']['name'];
$oldWay = $_FILES['img']['tmp_name'];
$fileSize = &$_FILES['img']['size'];
$urlBig = '../file/big/' . $fileName;
$urlSmoll = '../file/smoll/' . $fileName;
$minmizator = new Imagick($oldWay);
$minmizator->thumbnailImage(0, 200);
$resMin = $minmizator->writeImage($urlSmoll);
unset($minmizator);
if (is_uploaded_file($oldWay)) {
    $copy = copy($oldWay, $urlBig);
}
?>
<?php
$hostBd = 'localhost';
$userBd = 'phpmyadmin';
$userPas = '1234';
$dataBas = 'MyDataBase';
$link = mysqli_connect($hostBd, $userBd, $userPas, $dataBas);
mysqli_set_charset($link, "utf8");
$sqlQuwery = "INSERT INTO `IMG`(`urlSmoll`, `urlBig`, `name`, `size`, `count`, `colore`, `price`) VALUES ('$urlSmoll', '$urlBig', '$fileName','$fileSize', '$count', '$color', '$price')";
$sqlQuweryLink = mysqli_query($link, $sqlQuwery);
if ($copy && $resMin && $sqlQuweryLink) {
  header("location:http://localhost:3000/"); 

} else {
    echo "что то пошло не так ";
    echo  $sqlQuwery;
}
?>