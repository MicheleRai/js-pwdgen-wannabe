// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

let nome = prompt('Inserire nome utente');
document.getElementById('nome').innerHTML = nome;
console.log('nome:' + nome);

let cognome = prompt('Inserire cognome utente');
document.getElementById('cognome').innerHTML = cognome;
console.log('cognome:' + cognome);

let colore = prompt('Inserire colore preferito utente');
document.getElementById('colore').innerHTML = colore;
console.log('colore:' + colore);

let pass = nome + cognome + colore + 22;
document.getElementById('pass').innerHTML = pass;
console.log('password:' + pass);
