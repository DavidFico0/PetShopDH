//Inportando arquivos
const petsArquivo = require('./arquivos/arquivoCaes');
const entradaPet = require('./arquivos/entradaPet');
//Importando funções
const dataNascimento = require('./funcoes/retornaDataNascimento');
const vacinado = require('./funcoes/vacinacao');
const listarPets = require('./funcoes/listarPets');
const petVacinar = require('./funcoes/petVacinar');
const novoPet = require('./funcoes/novoPet');
const corteUnha = require('./funcoes/corteUnhaPets');
const banhoPet = require('./funcoes/banhoPets');
const tosaPet = require('./funcoes/tosaPets');
const servicosPets = require('./funcoes/servicosPets');
const campVacina = require('./funcoes/campanhaVanciacao');
//const readline = require('readline');

function menu(){
    const PETSHOP = "Pet Shop DH";
    console.log("***** " + PETSHOP + " *****");
    //Abrindo entrada de dados para teclado;
    //const entrada = process.stdin;
    //const posPet = process.stdin;
    let pet = process.argv[2];
    
    console.log("Bem vindo: " + petsArquivo[pet].nome + " tipo: " + petsArquivo[pet].tipo);
     

    //Menu de funções do sistema
    console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
    console.log("(1.Listar Pets)");
    console.log("(2.Data nascimento do pet)");
    console.log("(3.Pet é vacinado?)");
    console.log("(4.Vacinar!)");
    console.log("(5.Novo Pet)");
    console.log("(6.Serviços)");
    console.log("(7.Campanha de Vacinação)");
    console.log("(8.Sair)");
    process.stdout.write("> ");

    //Função que chama a entrada de valor para acionar função específica
    process.stdin.on('data', function(data){
        //Função - Listar pets
        if(data == 1){
            console.log("  ---- Listar Pets ----  ");
            console.log(listarPets(petsArquivo));
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");

        }
        //Função - Data de nascimento do pet
        else if(data == 2){
            console.log(" **data de nascimento** ");
            console.log(dataNascimento(petsArquivo[pet]))
            console.log("");
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");
        }
        //Função - Confere se o pet é vacinado
        else if(data == 3){
            console.log(" ---- PET ---- ");
            console.log(vacinado(petsArquivo[2]));
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");

        }
        //Função - Vacinar pet
        else if(data == 4){
            console.log(" ---- PET ---- ");
            console.log(petVacinar(petsArquivo[pet]));
            console.log("");
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");

        }
        //Função - Inserir novo pet
        else if(data == 5){
            console.log(" ---- NOVO PET ---- ");
            console.log(novoPet(entradaPet));
            console.log("");
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");

        }
        //Função - Serviços disponíveis no pet shop
        else if(data == 6){
            console.log(" ---- SERVIÇOS ---- ");
            let arrayServicos = [corteUnha, banhoPet, tosaPet]
            console.log(servicosPets(petsArquivo[pet], arrayServicos));
            console.log("");
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");

        }
        //Função - Campanha de vacinação, vacina pets não vacinados
        else if(data == 7){
            console.log(" ---- CAMPANHA DE VACINAÇÃO ---- ");
            console.log(campVacina(petsArquivo));
            console.log("");
            console.log("---- MENU DE FUNÇÕES DO PETSHOP DH ----");
            console.log("(1.Listar Pets)");
            console.log("(2.Data nascimento do pet)");
            console.log("(3.Pet é vacinado?)");
            console.log("(4.Vacinar!)");
            console.log("(5.Novo Pet)");
            console.log("(6.Serviços)");
            console.log("(7.Campanha de Vacinação)");
            console.log("(8.Sair)");
            process.stdout.write("> ");

        }
        //Função - Sai do sistema.
        else if(data == 8){
            process.exit();
        }
    })
   
}
menu();



