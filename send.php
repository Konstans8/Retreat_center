<meta charset="utf-8"> 
<?php
$form="Form";
error_reporting( E_ERROR );   
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	 {unset($name);}}
if (isset($_POST['email']))		    {$email		    = $_POST['email'];		if ($email == '')	 {unset($email);}}
if (isset($_POST['phone']))		    {$phone		    = $_POST['phone'];		if ($phone == '')	 {unset($phone);}}
if (isset($_POST['textarea']))		{$textarea		= $_POST['textarea'];	if ($textarea == '') {unset($textarea);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		 {unset($sab);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($email) ) {
$email=stripslashes($email);
$email=htmlspecialchars($email);
}
if (isset($phone) ) {
$phone=stripslashes($phone);
$phone=htmlspecialchars($phone);
}
if (isset($textarea) ) {
$text=stripslashes($textarea);
$text=htmlspecialchars($textarea);
}
// адрес почты куда придет письмо
$address="kostian73kostian@gmail.com";
// текст письма 
$note_text="Тема : $form \r\nИмя : $name \r\n Email : $email \r\n Дополнительная информация : $textarea";

if (isset($name)  &&  isset ($sab) ) {
mail($address,$form,$note_text,"Content-type: text/plain"); 

    
}

?>