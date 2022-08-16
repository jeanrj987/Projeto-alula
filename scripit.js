$('#inputOla').click(
    function(){
        // cadastro=
        // {
        //      'nome' :document.getElementById('inputnome').value,
        //       'endereco':document.getElementById('inputendereco').value,
        //         'email':document.getElementById('inputemail').value
        
        // }
        // alert(' Meu nome é: ' + cadastro.nome + ' sou de ' + cadastro.endereco+ 'meu email ' + cadastro.email);
        calculo={
        'a':document.getElementById("inputN1").value,
        'b':document.getElementById("inputN2").value,
        'c':document.getElementById('inputN3').value

        }
        let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3;
        let exame = (10-media);

        if(media >=7) {
            alert('Você foi aprovado!');
        }else {
            alert('A nota que voê precisa é!'+ exame) ; 
            
        } 

        
    }
)