/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const h1 = document.querySelector("h1");
const changeTitle = function (title) {
  title.innerText = "Nuovo titolo";
};

changeTitle(h1);

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function (title) {
  title.classList.add("myHeading");
};

addClassToTitle(h1);

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
const pChildrenOfDiv = document.querySelectorAll("div p");
const changePcontent = function (p) {
  p.forEach((node) => (node.innerText = "Questo è il nuovo testo dopo l'esercizio 3"));
};

changePcontent(pChildrenOfDiv);

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
const links = document.querySelectorAll("a:not(footer a)");
const changeUrls = function (link) {
  link.forEach((link) => (link.href = "https://www.google.com"));
};

changeUrls(links);

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
const secondList = document.getElementById("secondList");
const addToTheSecond = function (tag) {
  const newLi = document.createElement("li");
  newLi.innerText = "new list item";
  tag.appendChild(newLi);
};

addToTheSecond(secondList);

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
const firstDiv = document.querySelector("div");
const addParagraph = function (tag) {
  const newP = document.createElement("p");
  newP.innerText = `Nuovo paragrafo dopo l'esercizio 6. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit esse quo neque ullam officiis dolore.`;
  tag.appendChild(newP);
};

addParagraph(firstDiv);

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const firstUl = document.querySelector("ul");
const hideFirstUl = function (tag) {
  tag.remove();
};

hideFirstUl(firstUl);

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {};

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {};

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {};

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
