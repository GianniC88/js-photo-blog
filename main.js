console.log("...");

//selezionare il nodo della DOM

//seleziona l'elemento ROw come elemento
const rowEl = document.querySelector("#section .row");
console.log(rowEl);

//creare una variabile per contenere l'endpoint dell'API REST da chiamare
const endpointUrl = "https://lanciweb.github.io/demo/api/pictures/";

//eseguire una richiesta ajax all'endpoint per ottenere i dati
fetch(endpointUrl);

//-eseguire un ciclo sui dati per ottenere il singolo oggetto post

//-creare il markup con il template literal da utilizzare per la card della colonna dei singoli post

//valori dall'oggetto destrutturato da inserire
/*
<div class="col-4">
  <div class="card">
    <img class="pin" src="./img/pin.svg" alt="" />
    <img
      class="padding"
      src="img/img card.jpeg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text">Accusamus Beate ad Facilis Cum Similique Qui Sunt</p>
    </div>
  </div>
</div>;
 xs*/

//aggiorno gli elementi della DOM (roeEl)
