<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "contact@phonemyintmaw.dev";

    $headers = "From: contact@phonemyintmaw.dev\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $parameters = "-f contact@phonemyintmaw.dev";

    $body = "You have received a new message.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Subject: $subject\n\n".
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers, $parameters)) {
        
        header("Location: index.html?status=success");
        exit(); 
    } else {
        
        header("Location: index.html?status=error");
        exit();
    }
} else {
    header("Location: index.html");
    exit();
}
?>