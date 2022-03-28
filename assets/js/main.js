// variabile form
let formElement = document.querySelector("form")

// variabile btn generate
let generate_ticketElement = document.querySelector(".generate_ticket_btn")

// variabile sezione il tuo biglietto
let yourticketElement = document.querySelector(".your_ticket")

// click su genera per nome e cognome riporta i dati sotto
// listen form element
formElement.addEventListener("submit", function (event) {

    // per non refresciare il form una volta premuto btn genera
    event.preventDefault()

    // per disabilitare il btn genera una volta cliccato
    generate_ticketElement.setAttribute("disabled","disabled")

    // per mostrare il layout del biglietto nascosto 
    yourticketElement.classList.remove("d-none")

    // calcoli per biglietto
    let username = document.getElementById("input_name").value;
    document.getElementById("nome_passeggero").innerHTML = username;


    // distanza in km

    let distance_inkm = document.getElementById("distance_km").value;

    // minorenne o over65

    let passenger_age = document.getElementById("user_age").value;

    let normal_ticket_price = 0.21 * distance_inkm;

    // sconti

    if (passenger_age === "Minorenne"){
        ticket_price = normal_ticket_price - (normal_ticket_price * 0.2);
    } else if (passenger_age === "Over 65") {
        ticket_price = normal_ticket_price - (normal_ticket_price * 0.4);
    } else {
        ticket_price = normal_ticket_price
    }

    document.getElementById("ticket_price_show").innerHTML = `${ticket_price.toFixed(2)}&euro;`

    // sezione offerta

    if (passenger_age === "Minorenne"){
        show_discount = "Sconto Minorenne";
    } else if (passenger_age === "Over 65"){
        show_discount = "Sconto Over 65";
    } else {
        show_discount = "nessun sconto applicato";
    }

    document.getElementById("discount_type").innerHTML = show_discount;

    // carrozza numero random

    let show_vagon_number = Math.floor(Math.random() * 10);
    
    document.getElementById("vagon").innerHTML = show_vagon_number;

    // codice CP

    let show_cp_code = Math.floor(Math.random() * 100000);

    document.getElementById("cp_code").innerHTML = show_cp_code;

})
