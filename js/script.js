function play(guaSuit) {
    const suit = ['batu', 'gunting', 'kertas'];
    const komputerSuit = suit[Math.floor(Math.random() * 3)];
    const hasil = cekPemenang(guaSuit, komputerSuit);
    displayhasil(guaSuit, komputerSuit, hasil);
}

function cekPemenang(gua, komputer) {
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

function displayhasil(gua, komputer, hasil) {
    const hasilElement = document.getElementById('hasil');
    hasilElement.innerHTML = `
        Kamu memilih: ${gua} <span class="emoji">${getEmoji(gua)}</span><br>
        Komputer memilih: ${komputer} <span class="emoji">${getEmoji(komputer)}</span><br>
        Hasil: ${hasil}
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
