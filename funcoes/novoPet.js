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
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
        console.log(listPets(petsArquivo));

    }
    else {
        console.log("Verifique se o nome e idade estão preenchigos corretamente.")
    }

};

const listPets = (pets) => {
    let i = 0;
    for(let pet in pets){
        console.log(`Nome: ${pets[pet].nome}`);
        console.log(`Tipo: ${pets[pet].tipo}`);
        console.log(`Raça: ${pets[pet].raca}`);
        console.log(pets[pet].genero == "F"? "Gener: Femea" : "Genero: Macho");
        console.log(`Idade: ${pets[pet].idade}`);
        console.log(pets[pet].vacinado ? "Vacinado? Sim" : "Vaciando? Não" );
        console.log(`Serviços: ${pets[pet].servicos}`);
        console.log("--------------------------------------------------------");
    }
} 

module.exports = adicionarPet;