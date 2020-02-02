const petVacinar = (pets) => {
    pets.vacinado = true;
    console.log("Vacinado com sucesso!");
    console.log(pets);
}

module.exports = petVacinar;