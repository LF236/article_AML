const fs = require('fs');

// Nombre del archivo
const nombreArchivo = 'texto.txt';

// Lee el archivo de texto
fs.readFile(nombreArchivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Remueve caracteres especiales y divide el texto en palabras
  const palabras = data.replace(/[^\w\s]/gi, '').split(/\s+/);

  // Cuenta el número de palabras
  const totalPalabras = palabras.length;

  // Imprime el resultado
  console.log(`El archivo "${nombreArchivo}" contiene ${totalPalabras} palabras.`);
});
