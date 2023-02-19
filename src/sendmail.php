<?php
// print_r($_POST);
    // $date_start = $_POST['date-start'];
    // $date_end = $_POST['date-end'];
    // $persons = $_POST['persons'];
    // $young = $_POST['children over 6 years old'];
    // $children = $_POST['children under 6 years old'];
    // $big_hall = $_POST['hall for 80 persons'];
    // $small_hall = $_POST['hall for 25 persons'];
    // $result = $_POST['RESULTS'];
    // $accept_data = $_POST['accepting-data'];
    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];
    
    $arr = [
        $date_start = 'DATE START:', $_POST['date-start'],
        $date_end = 'DATE END:', $_POST['date-end'],
        $persons = 'PERSONS:', $_POST['persons'],
        $young = 'YOUNG:', $_POST['young'],
        $children = 'CHILDREN:', $_POST['children'],
        $big_hall = 'BIG HALL:', $_POST['big-hall'],
        $small_hall = 'SMALL HALL:', $_POST['small-hall'],
        $accept_data = 'ACCEPTING DATA:', $_POST['accepting-data'],
        $name = $_POST['name'],
        $phone = $_POST['phone'],
        $email = $_POST['email'],
        $message = $_POST['message'],
    ];
    
    $message_post = json_encode($arr);
    
    
    
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
    
    $subject = "=?utf-8?B?".base64_encode("Reservation")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";
    
    mail('kostian73kostian@gmail.com', $subject, $message_post, $headers);
    
    header('Location: /');
    
?>