const tosaPet = pets => {
    pets.servicos.push('tosa');
    console.log(pets.nome + " tosa executada com sucesso!");
}

module.exports = tosaPet;