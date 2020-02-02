const petVacinado = (pets) => {
    if(pets.vacinado == false){
        console.log(pets);
        console.log("Não vacinado!");
        
    } else{
        console.log(pets);
        console.log("Vacinado!");
    }
}

module.exports = petVacinado;

