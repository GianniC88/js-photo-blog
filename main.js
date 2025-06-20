console.log("...");

//selezionare il nodo della DOM

//seleziona l'elemento ROw come elemento
const rowEl = document.querySelector("#section .row");
console.log(rowEl);

//creare una variabile per contenere l'endpoint dell'API REST da chiamare
const endpointUrl = "https://lanciweb.github.io/demo/api/pictures/";

//eseguire una richiesta ajax all'endpoint per ottenere i dati API che restituisce dati in formato JSON in JavaScript.
fetch(endpointUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    //-eseguire un ciclo sui dati per ottenere il singolo oggetto post
    data.forEach((element) => {
      //-creare il markup con il template literal da utilizzare per la card della colonna dei singoli post
      //valori dall'oggetto destrutturato da inserire
      const { title, date, url } = element;
      console.log(title, date, url)
      const postMarkupStr =
        `<div class = overlay-box>
            <div class = overlay-cont>
        </div>
         <button onclick="mostraOverlay"></button>
          </div>
         
        <div class="col-4">
          <div class="card">
            <img class="pin" src="./img/pin.svg" alt="" />
            <img class="padding" src=${url} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">${title},${date}</p>
            </div>
          </div>
         </div>
         
         `;
      //aggiorno gli elementi della DOM (roeEl)
      rowEl.insertAdjacentHTML('beforeend', postMarkupStr)

    });

  });






