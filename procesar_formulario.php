<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $captcha = $_POST['g-recaptcha-response'];

    if (!$captcha) {
        echo "⚠️ Por favor, completa el CAPTCHA.";
        exit;
    }

    // Clave secreta de Google reCAPTCHA
    $secretKey = "6Let-PQqAAAAAEwpCGus1ncyrcgaAotSGsZH_4YA";
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha";

    // Verificar la respuesta con Google
    $response = file_get_contents($url);
    $responseKeys = json_decode($response, true);

    if (!$responseKeys["success"]) {
        echo "❌ Verificación de CAPTCHA fallida.";
        exit;
    }

    // Si el CAPTCHA es válido, procesar el formulario
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Aquí puedes enviar el email o guardar en base de datos
    echo "✅ Formulario enviado con éxito.";
}
?>
