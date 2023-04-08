<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';

//Server settings
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.mail.ru';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'example@mail.ru';                     //SMTP username
$mail->Password   = '12345678';                               //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
$mail->setFrom('example@mail.ru', 'Mailer');
$mail->addAddress('example@mail.ru', 'User');     //Add a recipient

$mail->Subject = 'Письмо с сайта';

//Content
$mail->isHTML(true);                                  //Set email format to HTML

$Body = '<h1>Письмо с сайта!</h1>'

.($_POST['phone'] ?'<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>' : ' ' )
.($_POST['question_1'] ?'<p><strong>Пол:</strong> '.$_POST['question_1'].'</p>' : ' ' )
.($_POST['question_2'] ?'<p><strong>Цели:</strong> '
    .$_POST['question_2'][0].'<br>'.$_POST['question_2'][1].'<br>'.$_POST['question_2'][2].'<br>'.$_POST['question_2'][3].'<br>'.$_POST['question_2'][4].'<br>'.$_POST['question_2'][5].'</p>' : ' ' )
.($_POST['question_3'] ?'<p><strong>Физическая подготовка:</strong> '.$_POST['question_3'].'</p>' : ' ' )
.($_POST['question_4'] ?'<p><strong>Частота тренировок:</strong> '.$_POST['question_4'].'</p>' : ' ' )
.($_POST['question_5'] ?'<p><strong>Где заниматься:</strong> '.$_POST['question_5'].'</p>' : ' ' )
.($_POST['messenger'] ?'<p><strong>Мессенджер:</strong> '.$_POST['messenger'].'</p>' : ' ' );


$mail->Body = $Body;

if (!$mail->send()) {

} else {
    
}

?>


