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
  tag.innerHTML = "";
};

hideFirstUl(firstUl);

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
const allUl = document.querySelectorAll("ul");
const paintItGreen = function (tag) {
  tag.forEach((element) => (element.style = "background-color: green"));
};

paintItGreen(allUl);

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  h1.innerText = h1.innerText.slice(0, -1);
};
h1.onclick = makeItClickable;

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
const footer = document.querySelector("footer");
const revealFooterLink = function () {
  const link = footer.querySelector("a");
  alert(link.href);
};

footer.onclick = revealFooterLink;

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const tableArea = document.getElementById("tableArea");
const generateTable = function () {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const title = ["Immagine", "Nome Prodotto", "Quantità", "Prezzo"];

  title.forEach((str) => {
    const th = document.createElement("th");
    th.innerText = str;
    th.style = `padding: 1rem 25px;`;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    const img = document.createElement("img");
    img.src = `https://picsum.photos/600/450?q=${i}`;
    img.alt = "Immagine prodotto";
    img.style = "width: 100px";

    const imgCell = document.createElement("td");
    imgCell.appendChild(img);

    const nameCell = document.createElement("td");
    nameCell.innerText = `Prodotto ${i + 1}`;

    const quantityCell = document.createElement("td");
    quantityCell.innerText = `${i + 1} pezzo/i`;

    const priceCell = document.createElement("td");
    priceCell.innerText = `$${(i + 1) * 10}.00`;

    tr.appendChild(imgCell);
    tr.appendChild(nameCell);
    tr.appendChild(quantityCell);
    tr.appendChild(priceCell);

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  tableArea.appendChild(table);
};

const generatedTable = generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
const addImg = document.createElement("img");
addImg.src = `https://picsum.photos/600/450?q=10`;
addImg.alt = "Immagine prodotto";
addImg.style = "width: 100px";

const addRow = function (img, name, quantity, price) {
  const tr = document.createElement("tr");

  const imgCell = document.createElement("td");
  imgCell.appendChild(img);

  const nameCell = document.createElement("td");
  nameCell.innerText = name;

  const quantityCell = document.createElement("td");
  quantityCell.innerText = quantity;

  const priceCell = document.createElement("td");
  priceCell.innerText = price;

  tr.appendChild(imgCell);
  tr.appendChild(nameCell);
  tr.appendChild(quantityCell);
  tr.appendChild(priceCell);

  generatedTable.appendChild(tr);
};

addRow(addImg, "Prodotto 6", "6 pezzi", "$60.00");

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
