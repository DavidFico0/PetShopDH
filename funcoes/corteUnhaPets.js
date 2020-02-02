//Função que controla corte de unhas do pet;
const corteUnhas = pets => {
    pets.servicos.push('corte unha');
    console.log(pets.nome + " corte de unhas executada com sucesso!");
}

module.exports = corteUnhas;