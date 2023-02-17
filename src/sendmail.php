<?php
// print_r($_POST);
    $date_start = $_POST['date-start'];
    $date_end = $_POST['date-end'];
    $persons = $_POST['persons'];
    $young = $_POST['children over 6 years old'];
    $children = $_POST['children under 6 years old'];
    $big_hall = $_POST['hall for 80 persons'];
    $small_hall = $_POST['hall for 25 persons'];
    $result = $_POST['RESULTS'];
    $accept_data = $_POST['accepting-data'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    
    // $error = '';
    
    // if(trim($email) == '') {
    //     $error = 'Write Email please';
    // } else if(trim($message) == '') {
    //     $error = 'Write Message please';
    // } else if(strlen($message) < 10) {
    //     $error = 'Write more in message';
    // }
    
    // if($error != '') {
    //     echo $error;
    //     exit;
    // }
    
    $subject = "=?utf-8?B?".base64_encode("Test message")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";
    
    mail('kostian73kostian@gmail.com', $subject, $message, $headers);
    
    header('Location: /rekolekcje-sulejowek.marianie.pl/');
    
?>