// Função para exibir uma mensagem de erro
export function showError(message) {
    // Obtém a div do alerta de erro pelo ID 'error-alert'
    const alertDiv = document.getElementById("error-alert");

    // Remove a classe 'd-none' para tornar a div visível
    alertDiv.classList.remove("d-none");

    // Define o conteúdo da div de alerta como a mensagem de erro passada como parâmetro
    alertDiv.textContent = message;

    // Após 5 segundos, adiciona a classe 'd-none' novamente, escondendo a div
    setTimeout(() => {
        alertDiv.classList.add("d-none");
    }, 5000); // 5000ms = 5 segundos
}
