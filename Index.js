let saldoInicial = 500;
let senhaCorreta = 5499;
let senhaUsuario;
let saque;
let depositar;
let opcao;
let valorDeposito;
let saldo;
do {
  senhaUsuario = parseInt(prompt("Digite uma Senha de 4 dígitos "));
if(senhaUsuario !== senhaCorreta) {
    alert("Senha inválida");
  }
} while(senhaUsuario !== senhaCorreta);
opcao = parseInt(prompt("Digite a opção Entre 1 a 4"));
switch (opcao) {
  case 1:
    console.log("Seu saldo é " + saldoInicial + " R$ ");
    break;
    case 2:
      saque = parseFloat(prompt("Digite o valor Do saque"));
      if(saque > 0 && saque < saldoInicial) {
      saldo = saldoInicial - saque;
     
      console.log("Seu saque é " + saque + " R$ ");
      console.log("Novo saldo " + saldo + " R$ ")
      } else {
        console.log("Inválido");
      }
      break;
      case 3:
        depositar = parseFloat(prompt("Digite o Valor do Depósito"));
        if(depositar > 0) {
          
        
        valorDeposito =  saldoInicial + depositar;
        console.log("Seu depósito é " + valorDeposito + " R$ ")
        } else {
          console.log("Inválido");
        }
        break;
        case 4:
          console.log("Obrigado Por utilizar o Caixa eletrônico ");
          break;
          default:
          console.log("Opção não Encontrada no menu");
          
}