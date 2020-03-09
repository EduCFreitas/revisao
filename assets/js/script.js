document.getElementById('botao').addEventListener('click', function(e){
    // Verificando se o nome digitado foi maior ou igual a 3 caracteres
    // Validação do nome
    var nome = document.getElementById('nome').value;
    // Deve ter mais de 3 caracteres
    if(nome.length<3){
        // Tem erro
        e.preventDefault(); // Cancela a ação de submit. Previne o acontecimento do evento submit
        document.getElementById('nome').style.backgroundColor = 'red';
    }else{
        document.getElementById('nome').style.backgroundColor = 'white';
    }

    // Validação de email
    var email = document.getElementById('email').value;
    // Deve possuir "@", "." e não ser vazio
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.value==""){
        e.preventDefault();
        document.getElementById('email').style.borderColor = 'red';
    }else{
        document.getElementById('email').style.borderColor = 'green';
    }
})
