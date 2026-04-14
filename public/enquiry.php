<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Honeypot (bot trap)
    if (!empty($_POST['website'])) {
        exit("Invalid submission.");
    }

    // Sanitize input function
    function clean($data) {
        return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }

    $field_name    = clean($_POST['name'] ?? '');
    $field_email   = clean($_POST['email'] ?? '');
    $field_phone   = clean($_POST['phone'] ?? '');
    $field_company = clean($_POST['company'] ?? '');
    $field_message = clean($_POST['message'] ?? '');

    // Required fields
    if (!$field_name || !$field_email || !$field_message || !$field_company) {
        exit("Required fields are missing.");
    }

    // Email validation
    if (!filter_var($field_email, FILTER_VALIDATE_EMAIL)) {
        exit("Invalid email format.");
    }

    // Prevent header injection
    if (preg_match("/[\r\n]/", $field_email)) {
        exit("Invalid email.");
    }

    // Block links in message and company (anti-spam)
    if (preg_match('/https?:\/\//i', $field_message) || preg_match('/https?:\/\//i', $field_company)) {
        exit("Invalid submission.");
    }

    // Blocked names
    $blocked_names = [
        'johndut','robertdut','miadut','teddut','oscardut','freyadut',
        'oliviadut','georgedut','isladut','charliemic','simondut',
        'charliedut','leedut'
    ];
    if (in_array(strtolower($field_name), $blocked_names)) {
        exit("Invalid submission.");
    }

    // Blocked emails
    $blocked_emails = [
        'ericjonesmyemail@gmail.com','xiceruxuk02@gmail.com',
        'aferinohis056@gmail.com','zekisuquc419@gmail.com',
        'yawiviseya67@gmail.com','dinanikolskaya99@gmail.com',
        'irinademenkova86@gmail.com'
    ];
    if (in_array(strtolower($field_email), $blocked_emails)) {
        exit("Invalid submission.");
    }

    // Optional: Block suspicious company names (spam/fake)
    $blocked_companies = ['spamcompany','fakecompany','test']; 
    if (in_array(strtolower($field_company), $blocked_companies)) {
        exit("Invalid submission.");
    }

    // Build email body
    $body_message  = "Name: $field_name\n";
    $body_message .= "Email: $field_email\n";
    $body_message .= "Phone: $field_phone\n";
    $body_message .= "Company: $field_company\n";
    $body_message .= "Message:\n$field_message\n";

    $mail_to = "web@32bytes.com, gaurav@royalseals.co.in";
    $subject = "Enquiry from Royal Glide";

    // Proper headers
    $headers  = "From: Royal Glide <info@royalglide.com>\r\n";
    $headers .= "Reply-To: $field_email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send mail
    if (mail($mail_to, $subject, $body_message, $headers)) {
        header("Location: /thank-you");
        exit;
    } else {
        exit("Error sending email.");
    }
}
?>