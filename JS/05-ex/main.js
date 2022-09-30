// Velocidade máxima = 70
// Ponto por KM = 5
// Máximo de pontos = 12 (Carteira suspensa)
verificarVelocidade(129);

function verificarVelocidade (velocidade) {
    const velocidadeMax = 70;
    const pontoPorKm = 5;
    const maxPontos = 12;

    if (velocidade <= velocidadeMax)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / pontoPorKm));
        if (pontos >= maxPontos)
        console.log('Carteira Suspensa!');
        else
        console.log('Pontos', pontos)
    }

}
