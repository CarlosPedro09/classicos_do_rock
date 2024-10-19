document.addEventListener('DOMContentLoaded', function() {
    const musicasRock = [
        "Led Zeppelin - Stairway to Heaven",
        "Pink Floyd - Comfortably Numb",
        "Queen - Bohemian Rhapsody",
        "AC/DC - Back In Black",
        "The Rolling Stones - Paint It Black",
        "The Beatles - Hey Jude",
        "Deep Purple - Smoke on the Water",
        "Nirvana - Smells Like Teen Spirit",
        "Guns N' Roses - Sweet Child O' Mine",
        "Metallica - Enter Sandman"
    ];

    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        if (numeroMaximo >= 1 && numeroMaximo <= 10) {
            let numeroAleatorio = Math.random() * numeroMaximo;
            numeroAleatorio = Math.floor(numeroAleatorio + 1);

            let musicaSorteada = musicasRock[numeroAleatorio - 1];
            document.getElementById('resultado-valor').innerText = musicaSorteada;
            document.querySelector('.resultado').style.display = 'block';
        } else {
            document.getElementById('resultado-valor').innerText = "Por favor, insira um número entre 1 e 10.";
            document.querySelector('.resultado').style.display = 'block';
        }
    });
});
