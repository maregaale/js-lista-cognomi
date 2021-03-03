// chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

// creo array con lista cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// inserisco il cognome dell'utente nell'array e stampo l'array
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);
