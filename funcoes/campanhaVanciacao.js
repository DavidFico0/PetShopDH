const contarVacinados = pets => {

    let vacinados = pets.filter(pet => pet.vacinado).length;
    let naoVacinados = pets.filter(pet => !pet.vacinado).length;

 
    console.log(`Foram encontrados ${vacinados} vacinados!`);
    console.log(`Foram encontrados ${naoVacinados} não vacinados!`);
    console.log("------------------ VACINAÇÃO DE PETS ---------------------")
    campanhaVacina(pets);

}
//contarVacinados(pets);

const campanhaVacina = (pets) => {
    let qtdV = 0;
    
    for(let pet of pets){
        pet.vacinado ? true : pet.vacinado = true && qtdV ++
        
    }
    console.log(`${qtdV} pets foram vacinados nessa campanha!`)

}

module.exports = contarVacinados;