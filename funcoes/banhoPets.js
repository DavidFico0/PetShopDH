//Função que controle Banho do pet
const banhoPet = pets => {
    pets.servicos.push('banho');
    console.log(`${pets.nome} banho executado com sucesso!`);
}

module.exports = banhoPet;