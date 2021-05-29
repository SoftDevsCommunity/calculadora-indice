var cantidadMaterias = 0;

function onSubmit() {
    cantidadInput = document.getElementById("cantidadMaterias");
    formInput = document.getElementById("formulario");

    cantidadMaterias = +cantidadInput.value;

    if (cantidadMaterias <= 0) {
        alert("La cantidad no puede ser un número negativo o cero")
        return;
    }
    else {
        cantidadInput.value = 0;
        let inputs = "<h3 class='text-center mb-4'>Ingrese las notas</h3>";

        for (let i = 0; i < cantidadMaterias; i++)
            inputs += `
        <div class="row">
                <div class="col-md-auto"> 
                    <h4 class="font-weight-bolder">Materia ${i + 1}:</h4>
                </div>
                <div class="col">
                    <select class="form-control" id="Select${i}">
                        <option value="4">A</option>
                        <option value="3">B</option>
                        <option value="2">C de campeón</option>
                        <option value="0">F</option>
                    </select>
                </div>
                <div class="col">
                    <input type="number" class="form-control" id="Input${i}"  placeholder="Créditos">
                </div>
            </div><br>
        `;

        inputs += '<button class="btn btn-success btn-block w-100" type="button" onclick="calcularIndice()">Calcular Índice</button>';
        formInput.innerHTML = inputs;
    }
}

function validateFiels() {

    for (let i = 0; i < cantidadMaterias; i++) {
        let data = document.getElementById(`Input${i}`).value;
        
        if(data == "" || data.length < 0) {
            return false;
        }
        else if (data < 0){
            return false;
        }  
    };

    return true ;
}

function calcularIndice() {

    if(validateFiels() == false){
        alert("Faltan campos por llenar || Los créditos deben ser mayor que cero."); 
        return ; 
    };

    let valor = 0, creditos = 0;

    for (let i = 0; i < cantidadMaterias; i++) {
        creditos += +document.getElementById("Input" + i).value;
        valor += +document.getElementById("Input" + i).value * +document.getElementById("Select" + i).value;
    }

    document.getElementById("formulario").innerHTML = "";
    document.getElementById("mostrarPromedio").innerText = "Tu promedio es: " + (valor / creditos).toFixed(1);
    document.getElementById("btnReiniciar").style = "display: block;";
    document.getElementById("btnReiniciar").addEventListener("click", function () {
        document.getElementById("btnReiniciar").style = "display: none;";
        document.getElementById("mostrarPromedio").innerText = "";
    })
}
