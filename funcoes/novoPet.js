const petsArquivo = require('../arquivos/arquivoCaes');   
const validaPets = (dadosPet) => {
    return (dadosPet.nome && 
    dadosPet.idade && 
    dadosPet.genero && 
    dadosPet.tipo &&
    dadosPet.raca)
}

const adicionarPet = (novoPet) => {
    //Valida dados.
    if(typeof novoPet == "object" && validaPets(novoPet)){
        //Converte
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);
        if(!novoPet.servico){
            novoPet.servicos = [];
        }
        //Adiciona
        petsArquivo.push(novoPet);
        console.log(novoPet.nome + " foi adicionado com sucesso!");
        console.log(listPets(petsArquivo));

    }
    else {
        console.log("Verifique se o nome e idade estão preenchigos corretamente.")
    }

};

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

module.exports = adicionarPet;