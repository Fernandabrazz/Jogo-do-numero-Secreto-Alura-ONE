 listaDeNumeroSorteados = [];
 let numeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;
 
 function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
 }

 function exibirMensagemInicial (){
    exibirTextoNaTela('h1','Jogo do numero secreto' );
    exibirTextoNaTela('p', 'Escolha um número de 1 e 10'); 
 }

 exibirMensagemInicial();


 function verificarChute (){
    let chute = document.querySelector ('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou' );
        let palavrasTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavrasTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if(chute > numeroSecreto) {
          exibirTextoNaTela('p','O número secreto é menor' );
     } else {
         exibirTextoNaTela('p', ' O número secreto é maior');
    }
    tentativas++
    //tentativas = tentativas 1
    limparCampo();
       
}

}

 function gerarNumeroAleatorio(){
     let NumeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
     let quanitidadeDeElementosNaLista = listaDeNumeroSorteados.length;
    
     if(quanitidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
     }
    
     if (listaDeNumeroSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio();
     }else {
        listaDeNumeroSorteados.push(NumeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return NumeroEscolhido;
     }

 }

 function limparCampo() {
    chute =  document.querySelector('input');
    chute.value ='';
 }

 function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute( 'disabled', true)
 }