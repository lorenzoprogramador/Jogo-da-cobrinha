const classe = document.getElementById("classe");
const imagem = document.getElementById("imagem");

function trocarImagem() {
    switch (classe.value.toLowerCase()) {
        case 'arqueiro':
            imagem.src = './personagens/arqueiro.png';
            break;
        case 'paladino':
            imagem.src = './personagens/paladino.png';
            break;
        case 'druida':
            imagem.src = './personagens/druida.png';
            break;
        case 'mago':
            imagem.src = './personagens/mago.png';
            break;
        case 'ladino':
            imagem.src = './personagens/ladino.png';
            break;
        case 'necromante':
            imagem.src = './personagens/necromante.png';
            break;
        case 'bardo':
            imagem.src = './personagens/bardo.png';
            break;
        case 'guerreiro':
            imagem.src = './personagens/guerreiro.png';
            break;
        default:
            imagem.src = './personagens/necromante.png';
    }
}

classe.addEventListener("input", trocarImagem);
