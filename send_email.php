<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $to = "contact@phonemyintmaw.dev"; 
    
    
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    
    $subject = "New Contact from $name";

   // 2. The "From" address MUST be your domain to avoid spam filters
    $headers = "From: webmaster@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "You have received a new message.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        
        echo "Message sent successfully!";
    } else {
        echo "Error: Could not send message.";
    }
}
?>