// chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

// controllo non ci siano numeri dentro il cognome inserito
for (var i = 0; i < cognomeUtente.length; i++) {
  if (!isNaN(cognomeUtente[i])) {
    alert("ricarica la pagina e ricordati di non inserire numeri");
  }
}

// correggo eventuali prime lettere minuscole nell'inserimento da parte dell'utente
var cognomeUtenteCorretto = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1).toLowerCase();

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

// stampo la posizione "umana" della posizione utente
document.getElementById('pos_utente').innerHTML = "il tuo cognome si trova in " + (listaOrdinata.indexOf(cognomeUtenteCorretto) + 1) + "a posizione nella lista!";
