document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe o alerta do SweetAlert
    Swal.fire({
        title: 'Sucesso!',
        text: 'A cliente foi cadastrada no banco de dados!',
        icon: 'success',
        confirmButtonText: 'Voltar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Envia o formulário após o usuário clicar em "OK"
            event.target.submit();
        }
    });
});