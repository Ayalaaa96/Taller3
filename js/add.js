var ing = [];

function addCar(pName, pDui, pPlaca, pnit, pFechaNac, pMarca, pModelo, pFallas){

var newCar ={
Name : pName,
Dui : pDui,
Placa : pPlaca,
nit : pnit, 
FechaNac : pFechaNac,
Marca: pMarca,
Modelo : pModelo,
Fallas : pFallas 
    };

    ing.push(newCar);
}

function geting(){
    return ing;
}
