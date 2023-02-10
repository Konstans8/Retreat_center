<?php
    // if($_POST['accepting-data'] != 'true') {
    //     header('location: index.html');
    //     exit;
    // }
    
    
    
    $to = "kostian73kostian@gmail.com";
    $from = trim($_POST['email']);
    
    $message = htmlspecialchars($_POST['message']);
    $message = urldecode($message);
    $message = trim($message);
    
    $headers = "From: $from" . "\r\n" .
    "Reply-To: $from" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    
    if(mail($to, $name, $phone, $message)) {
        echo 'Send mail';
    } else {
        echo 'Not send mail';
    }
    
?>