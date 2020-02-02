const contarVacinados = pets => {
    //let arrayVacinados = [];
    //let arrayNVaciandos = [];
    let qtdV = 0;
    let qtdNV = 0;
    for(let i = 0; i < pets.length; i++){
        if(pets[i].vacinado)
            qtdV++;
        
        else 
            qtdNV++;
        
    }

    console.log("Foram encontrados " + qtdV + " vacinados!");
    console.log("Foram encontrados " + qtdNV + " não vacinados!");
    console.log("------------------ VACINAÇÃO DE PETS ---------------------")
    campanhaVacina(pets);

}
//contarVacinados(pets);

const campanhaVacina = (pets) => {
    let qtdV = 0;
    for(let i = 0; i < pets.length; i++){
        if(pets[i].vacinado){

        }
        else{
            pets.vacinado = true;
            qtdV ++

        }
            
    }
    console.log(qtdV + " pets foram vacinados nessa campanha!")

}

module.exports = contarVacinados;