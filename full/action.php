<?php

// Enter your PHP madness here.
// You'll find the code you need online ready to copy pasta and edit to your needs (php form to mysql database).


$escapedName = mysql_real_escape_string($_POST['firstname']);
$escapedPW = mysql_real_escape_string($_POST['password']);
$salt = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));
$saltedPW =  $escapedPW . $salt;
$hashedPW = hash('sha256', $saltedPW);

$connect = mysql_connect("localhost", "root", "root"); // Database login details - ("location", "user", "pass")

if (!$connect) {
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("kris", $connect);

$data="INSERT INTO users (firstname, lastname, email, username, password, salt) VALUES ('$escapedName','$_POST[lastname]','$_POST[email]','$_POST[username]','$hashedPW','$salt')";

if (!mysql_query($data, $connect)) {
    die('Error: ' . mysql_error());
}

mysql_close($connect); // Run for the hills

header('Location: success.html');

?>
