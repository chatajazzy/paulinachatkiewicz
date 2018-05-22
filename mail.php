<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 1;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.zenbox.pl';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'kontakt@paulinachatkiewicz.pl';                 // SMTP username
    $mail->Password = '2PbPR5ad';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('kontakt@paulinachatkiewicz.pl', 'Paulina Chatkiewicz');
    $mail->addAddress('kontakt@paulinachatkiewicz.pl', 'Paulina Chatkiewicz');  
    $mail->isHTML(true);                                 
    $mail->Subject = $mail->Username;
    $mail->Body    = '<strong>Email: </strong>' . $_POST['email'] . '<br/><strong>Name: </strong>' . $_POST['name'] . '<br/><strong>Message: </strong>' . $_POST['message'];

    $mail->AltBody = 'Message from contact form at http://paulinachatkiewicz.pl';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
