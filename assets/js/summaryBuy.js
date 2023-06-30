/* Manuel */

export function generateSummary(items = [], userInfo = {}, days = 1) {

    document.querySelector("#addressInfo").innerHTML = userInfo.address;

    document.querySelector("#listProducts").innerHTML = "";

    let costoTotal = 0;
    function imprimirLista(){
        const x = document.getElementById("listProducts");
        const length=items.length;

        for(var i=0; i<length; i++){
            const row = x.insertRow();
            const cell = row.insertCell();
            const cell2 = row.insertCell();
            cell.innerHTML = items[i].nombre;
            cell2.innerHTML = "$" + items[i].precio;
            costoTotal = costoTotal + items[i].precio;
        }
    }
    imprimirLista();

    const subTotal=costoTotal;
    document.querySelector("#subtotal > h5:nth-child(2)").innerHTML = "$" + subTotal;

    document.querySelector("#totales > h5:nth-child(2)").innerHTML = "$" + subTotal;
    document.querySelector("#totales > h5:nth-child(4)").innerHTML = "x" + days;
    const total = subTotal*days;
    document.querySelector("#totales > h5:nth-child(6)").innerHTML = "$" + total;

}