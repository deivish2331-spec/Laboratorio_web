const term = document.getElementById('terminal');

async function type(text, delay) {
    const div = document.createElement('div');
    term.appendChild(div);
    for (let char of text) {
        div.innerHTML += char;
        await new Promise(r => setTimeout(r, Math.random() * 50));
    }
}

async function start() {
    await type("> Iniciando Handshake...", 500);
    await type("> Accediendo a permisos de cámara/ubicación...", 1000);
    await type("> Extrayendo tokens de sesión...", 1500);
    await type("> [||||||||||          ] 45%", 800);
    await type("> [||||||||||||||||    ] 82%", 800);
    await type("> ¡ERROR: Dispositivo expuesto!", 200);
    
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="text-align:center; padding-top: 50px;">
                <h1 style="color:red;">⚠️ ALERTA DE SEGURIDAD</h1>
                <p>El código QR que escaneaste contenía un script de prueba de vulnerabilidades.</p>
                <hr>
                <p><b>Lección aprendida:</b> Nunca escanees códigos QR sin verificar la URL de destino. Podrías estar permitiendo el acceso total a tu dispositivo.</p>
                <button onclick="location.reload()" style="padding:10px; background:red; color:white;">Entendido</button>
            </div>
        `;
    }, 2000);
}

start();