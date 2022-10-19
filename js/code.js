// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

let nome = prompt('Inserire nome utente');
document.getElementById('nome').innerHTML = nome;

let cognome = prompt('Inserire cognome utente');
document.getElementById('cognome').innerHTML = cognome;

let colore = prompt('Inserire colore preferito utente');
document.getElementById('colore').innerHTML = colore;

let pass = nome + cognome + colore + 22
document.getElementById('pass').innerHTML = pass
console.log(pass)
