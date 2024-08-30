let abrigos = []

function cadastroDoAbrigo() {

let abrigo = {

    Estado: prompt("Qual é seu Estado do seu abrigo?"),
    Nome: prompt("Qual o nome do seu abrigo?"),
    Endereço: prompt("Qual é o endereço do seu abrigo?"),
    Cidade: prompt("Qual a cidade do seu abrigo?"),
    Telefone: prompt("Qual o telefone do seu abrigo?"),
    Capacidade: prompt("Qual a capacidade do seu Abrigo?"),

}
abrigos.push(abrigo)
}

function buscarUnsAbrigo() {
    if (abrigos.lenght != 0) {
        for ( let V = 0; V < abrigos.length; V++) {
            const I = abrigos[V];
            alert(`           Abrigos Registrados          \nCódigo: ${[V + 1] }\nEstado: ${I.Estado}\nNome: ${I.Nome}\nEndereço: ${I.Endereço}\nCidade: ${I.Cidade}\nTelefone: ${I.Telefone}\nCapacidade: ${I.Capacidade}`)
        }
    }

    else {
        alert("Nenhum abrigo foi encontrado. Cadastre-se em um abrigo!!!")
       
    }
}

function procurarAbrigo() {
    let pergunta = prompt("Qual cidade você deseja procurar?")
    if (abrigos.length !=0) {
        for (let Z = 0; Z < abrigos.length; Z++) {
        if (abrigos[Z].Cidade === pergunta ) {  
            alert(`               Abrigos Registrados          \nCódigo: ${[Z + 1] }\nEstado: ${abrigos[Z].Estado}\nNome: ${abrigos[Z].Nome}\nEndereço: ${abrigos[Z].Endereço}\nCidade: ${abrigos[Z].Cidade}\nTelefone: ${abrigos[Z].Telefone}\nCapacidade: ${abrigos[Z].Capacidade}`)
            }
        }
    }
}

let menuzin = 0

while (menuzin != 4) {
    menuzin = prompt("                 ABRIGOS TEMPORÁRIOS        \nDigite o número 1 para se cadastrar no abrigo.\nDigite o número 2 para listar o abrigo.\nDigite o número 3 para procurar o abrigo.\nDigite o número 4 para sair.\nEscolha uma opção:")
    switch (menuzin) {
        case `1`:
        cadastroDoAbrigo()
        break;

        case`2`:
        buscarUnsAbrigo()   
        break;

        case`3`:
        procurarAbrigo()

        break;

        case`4`:
        alert("Você encerrou o programa, muito obrigado por ter participado.")
        break

    default:
        alert("Alguma coisa deu errado tente novamente.")
        break;
}
}
