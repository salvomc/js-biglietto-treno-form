//dicharo le variabili
let inputNomeCognome;
let inputDistanzaViaggio;
let inputEtaPasseggero ;
let offertaMessage;
document.getElementById('nome_cognome').value='';
document.getElementById('distanza_viaggio').value='';
document.getElementById('eta_passeggero').value='';
let generaButton = document.getElementById('genera_button');
//evento bottone genera
generaButton.addEventListener('click', function(){
    //recupero valori inseriti in input
    let inputNomeCognome = document.getElementById('nome_cognome').value;
    let inputDistanzaViaggio = parseInt(document.getElementById('distanza_viaggio').value);
    let inputEtaPasseggero = parseInt(document.getElementById('eta_passeggero').value);
    let prezzoViaggio = inputDistanzaViaggio * 0.21;
    //calcolo prezzo
    if (isNaN(inputDistanzaViaggio) === false){
        if (inputEtaPasseggero === 2){
                (prezzoViaggio *= 0.8).toFixed(2);
                offertaMessage = `Biglietto Under-18`;  
        }
        else if (inputEtaPasseggero === 3){
                (prezzoViaggio *= 0.6).toFixed(2);
                offertaMessage = `Biglietto Over-65`; 
        }
        else {
                offertaMessage = `Biglietto Standard`;
        }
                document.getElementById('nome_passeggero').innerHTML = `${inputNomeCognome}`;
                document.getElementById('offerta').innerHTML = `${offertaMessage}`;
                document.getElementById('costo_biglietto').innerHTML = `${prezzoViaggio.toFixed(2)}€`;
        }
        else {
                document.getElementById('offerta').innerHTML = 'Biglietto non valido';
                document.getElementById('costo_biglietto').innerHTML = 'Devi inserire i KM';
        }

})
let annullaButton = document.getElementById('annulla_button');
//evento bottone annulla
annullaButton.addEventListener('click', function(){
document.getElementById('nome_cognome').value = '';
document.getElementById('distanza_viaggio').value = '';
document.getElementById('eta_passeggero').value = '';
document.getElementById('nome_passeggero').innerHTML = '';
document.getElementById('offerta').innerHTML = '';
document.getElementById('costo_biglietto').innerHTML = '';
})