const letterContent = `Sé que a veces tu amor puede sentirse un poco distante,
que cambias, que te muestras de maneras que no siempre entiendo.
Pero eso es parte de ti, de tu esencia única,
y no quiero que cambies ni un ápice por mí.

Somos diferentes en todo, en formas, tiempos y maneras,
y aunque a veces eso nos haga chocar o confundir,
para mí nunca ha sido un problema.
Porque lo que importa es lo que hay en el corazón.

Puedo esperar, puedo comprender,
respetar ese espacio que necesitas,
y aunque a veces no sepa qué sentir,
quiero que sepas que aquí sigo,
firme, sincero y con ganas de estar contigo.

No pido que seas perfecta,
solo que seas tú,
con todas tus contradicciones,
con tus momentos de cariño y tus momentos de distancia.

Porque amar no es cambiar al otro,
es aceptarlo y quererlo tal como es.

Y así, con esa verdad,
quiero seguir a tu lado,
aunque el camino sea distinto al que soñamos,
porque tú, tal como eres,
has cambiado mi mundo para siempre.`;


let letterTyped = false; // evitar duplicar escritura

function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const error = document.getElementById('error');
    const music = document.getElementById('bg-music');
    const letterText = document.getElementById('letter-text');
    const passwordContainer = document.getElementById('password-container');

    const correctPassword = "1601";

    if (password === correctPassword) {
        message.classList.remove('hidden');
        error.classList.add('hidden');
        passwordContainer.classList.add('hidden');
        music.play();

        if (!letterTyped) {
            letterText.classList.remove('hidden');
            letterText.innerHTML = "";
            let i = 0;

            function typeLetter() {
                if (i < letterContent.length) {
                    letterText.innerHTML += letterContent[i] === '\n' ? '<br>' : letterContent[i];
                    i++;
                    setTimeout(typeLetter, 40);
                }
            }

            typeLetter();
            letterTyped = true;
        }

    } else {
        message.classList.add('hidden');
        error.classList.remove('hidden');
        music.pause();
        music.currentTime = 0;
        letterText.classList.add('hidden');
        letterText.innerHTML = "";
        letterTyped = false;
    }
}
