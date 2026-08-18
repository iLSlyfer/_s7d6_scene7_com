const iframe = document.createElement("iframe");

iframe.src = "https://ilslyfer.github.io/_s7d6_scene7_com/index.html";
iframe.width = "800";
iframe.height = "600";
iframe.style.border = "none";

// Centrar el iframe
iframe.style.position = "fixed";
iframe.style.top = "50%";
iframe.style.left = "50%";
iframe.style.transform = "translate(-50%, -50%)";
iframe.style.zIndex = "9999";

document.body.appendChild(iframe);

alert("THEOKEEN");
