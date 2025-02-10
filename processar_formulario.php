<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nome = htmlspecialchars(trim($_POST['nome']));
    $email = htmlspecialchars(trim($_POST['email']));
    $mensagem = htmlspecialchars(trim($_POST['mensagem']));
    

    if (!empty($nome) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($mensagem)) {
       
        $para = "andreza@engeard.com"; 
        $assunto = "Mensagem do Formulário de Contato";
        $corpo = "
            <h2>Nova mensagem do formulário de contato:</h2>
            <p><strong>Nome:</strong> $nome</p>
            <p><strong>E-mail:</strong> $email</p>
            <p><strong>Mensagem:</strong><br>$mensagem</p>
        ";
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8\r\n";
        $headers .= "From: $email\r\n";

     
        if (mail($para, $assunto, $corpo, $headers)) {
            echo "<h3>Sua mensagem foi enviada com sucesso!</h3>";
        } else {
            echo "<h3>Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.</h3>";
        }
    } else {
        echo "<h3>Preencha todos os campos corretamente.</h3>";
    }
} else {
    echo "<h3>Acesso inválido. Utilize o formulário para enviar sua mensagem.</h3>";
}
?>
