document.addEventListener('DOMContentLoaded', function() {
    const linkSecreto = document.querySelector('.btn-secreto');
    
    if (linkSecreto) {
        
        linkSecreto.addEventListener('click', function(event) {
            
            event.preventDefault(); 

            const senhaCorreta = "raposo_oso é legal";
            const senhaDigitada = prompt("Digite a senha (A senha está em algum lugar nessa pagina...):");

            if (senhaDigitada === senhaCorreta) {
                alert("ACERTOU!!!");
                window.location.href = "pagina_secreta.html";
            } else if (senhaDigitada !== null) {
                alert("Senha incorreta. Tente novamente.");
            }
        });
    }
});
