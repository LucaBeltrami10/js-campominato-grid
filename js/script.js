/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/**
 * 1)seleziono bottone in doom
 * 2)eventlistener su bottone. al click:
 *  -> FUNZIONE DI GENERAZIONE QUADRATI - genero un quadrato. return un ELEMENT
 *  -> CICLO FOR: 
 *      -> aggiungere il quadrato (ELEMENT) generato alla graglia un numero X di volte (bonus. inizialmente 100)
 *      -> aggiungi contenuto (num da 1 a 100, usa index del ciclo)
 *      -> aggiungi classi css
 *      -> addEventListener su ELEMENT. al click
 *          = classlist.add(classe css colore)
 *          = console.log(THIS)(index ciclo usato per aggiungere contenuto)  (prova THIS, teoricamente dovrebbe essere il soggetto del listener. verrà stampato il tag o il contenuto? penso il tag)
 *
 */

const playButton = document.getElementById('play-button')

playButton.addEventListener('click', function(){
    
})
