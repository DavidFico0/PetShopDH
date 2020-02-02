const listPets = (pets) => {
    let i = 0;
    while(i < pets.length){
        console.log("Nome: " + pets[i].nome);
        console.log("Tipo: " + pets[i].tipo);
        console.log("Raça: " + pets[i].raca);
        console.log(pets[i].genero == "F"? "Gener: Femea" : "Genero: Macho");
        console.log("Idade: " + pets[i].idade);
        console.log(pets[i].vacinado ? "Vacinado? Sim" : "Vaciando? Não" );
        console.log("Serviços: " + pets[i].servicos);
        console.log("--------------------------------------------------------");
        i++
    }
} 

module.exports = listPets;