var Cantidad = 0;

function onSubmit(){
    Cantidad = +document.getElementById("Cantidad").value;
    if(Cantidad <= 0){
        alert("La cantidad no puede ser un numero negativo o cero")
        return;
    }
    document.getElementById("Cantidad").value = 0;
    let inputs = "<h3 class='text-center'>Ingrese las notas</h3>";

    for(let i = 0; i < Cantidad; i++)
       inputs += `
       <div class="row">
            <div class="col-md-auto"> 
                <h4 class="font-weight-bolder">Materia ${i+1}:</h4>
            </div>
            <div class="col">
                <select class="form-control" id="Select${i}">
                    <option value="4">A</option>
                    <option value="3">B</option>
                    <option value="2">C de campeon</option>
                    <option value="0">F</option>
                </select>
            </div>
            <div class="col">
                <input type="number" class="form-control" id="Input${i}" value="0" placeholder="Creditos">
            </div>
        </div><br>
       `
       inputs += '<button class="btn btn-success btn-block" type="button" onclick="onSubmit2()">Enviar</button>'   
       document.getElementById("Form2").innerHTML = inputs;
}

function onSubmit2(){
    let valor = 0, creditos = 0;
    for(let i = 0; i < Cantidad; i++){
        creditos += +document.getElementById("Input"+i).value;
        valor += +document.getElementById("Input"+i).value * +document.getElementById("Select"+i).value;
    }
    document.getElementById("Form2").innerHTML = ""
    document.getElementById("mostrarPromedio").innerText = "Tu promedio es: " + (valor/creditos).toFixed(1);
    document.getElementById("BtnReiniciar").style = "display: block;";
    document.getElementById("BtnReiniciar").addEventListener("click", function () {
        document.getElementById("BtnReiniciar").style = "display: none;";
        document.getElementById("mostrarPromedio").innerText = "";
    })
}