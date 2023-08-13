function play(guaSuit) {
    const suit = ['batu', 'gunting', 'kertas'];
    const komputerSuit = suit[Math.floor(Math.random() * 3)];
    const result = checkWinner(guaSuit, komputerSuit);
    displayResult(guaSuit, komputerSuit, result);
}

function checkWinner(gua, komputer) {
    if (gua === komputer) {
        return 'Seri! &#x1F914;';
    }
    if (
        (gua === 'batu' && komputer === 'gunting') ||
        (gua === 'gunting' && komputer === 'kertas') ||
        (gua === 'kertas' && komputer === 'batu')
    ) {
        return 'Kamu Menang! &#x1F60E;';
    } else {
        return 'Komputer Menang! &#x1F625;';
    }
}

function displayResult(gua, komputer, result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Kamu memilih: ${gua} <span class="emoji">${getEmoji(gua)}</span><br>
        Komputer memilih: ${komputer} <span class="emoji">${getEmoji(komputer)}</span><br>
        Hasil: ${result}
    `;

    // Animasi
    const playerButton = document.querySelector(`button[onclick="play('${gua}')"]`);
    playerButton.classList.add('shake');
    setTimeout(() => {
        playerButton.classList.remove('shake');
    }, 500);

}

function getEmoji(suit) {
    switch (suit) {
        case 'batu':
            return '&#x1F91C';
        case 'gunting':
            return '&#x2702;';
        case 'kertas':
            return '&#x1F4F0;';
        default:
            return '';
    }
}
