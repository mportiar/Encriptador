function procesarTexto(action) {
    const inputText = document.getElementById('input-text').value;
    let resultado = '';

    if (action === 'encriptar') {
        resultado = encriptar(inputText);
    } else {
        resultado = desencriptar(inputText);
    }

    // Redirigir a la página de resultado con el texto procesado en la URL
    window.location.href = `resultado.html?texto=${encodeURIComponent(resultado)}`;
}

function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function copiarTexto() {
    const texto = document.getElementById('result-text').innerText;
    navigator.clipboard.writeText(texto);

    range.selectNodeContents(resultText);
    selection.removeAllRanges();
    selection.addRange(range);
    
}


// Mostrar el texto en la página cuando se carga
document.addEventListener('DOMContentLoaded', () => {
    const texto = getQueryParam('texto');
    document.getElementById('result-text').innerText = texto;
});