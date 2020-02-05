const listPets = (pets) => {
    let i = 0;
   
    for(let pet in pets){
        console.log("Nome: " + pets[pet].nome);
        console.log("Tipo: " + pets[pet].tipo);
        console.log("Raça: " + pets[pet].raca);
        console.log(pets[pet].genero == "F"? "Gener: Femea" : "Genero: Macho");
        console.log("Idade: " + pets[pet].idade);
        console.log(pets[pet].vacinado ? "Vacinado? Sim" : "Vaciando? Não" );
        console.log("Serviços: " + pets[pet].servicos);
        console.log("--------------------------------------------------------");
    }
} 

module.exports = listPets;