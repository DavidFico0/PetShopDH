const atenderPet = (pets, servicos) => {
    console.log("Bem vindo " + pets.nome);
    for(let i = 0; i < servicos.length; i++){
        servicos[i](pets);
    }
    //return servico(pets);
    console.log(pets)
    const pagar = () => {
        console.log("Pagamento realizado com suce$$o!");
    }
    pagar();
    console.log("Volte sempre " + pets.nome + "!");
}

module.exports = atenderPet;