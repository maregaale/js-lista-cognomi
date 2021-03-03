// chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
var cognomeUtenteCorretto = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);

// creo array con lista cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// inserisco il cognome dell'utente nell'array e stampo l'array
listaCognomi.push(cognomeUtenteCorretto);

// ordino la lista cognomi
var listaOrdinata = listaCognomi.sort();

// stampo la lista ordinata alfabeticamente
for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('lista').innerHTML += "<li>" + listaOrdinata[i] + "</li>"
}
