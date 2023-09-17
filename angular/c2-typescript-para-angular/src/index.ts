type heroi = {
  name: string;
  vulgo: string;
};


function printaObjeto (pessoa: heroi) {
  console.log(pessoa);
}

printaObjeto({
  name: "bruce wayne",
  vulgo: "batman",
})

// tipos de variáveis: 

// tipos abrangentes: any, void

let retorno: void;
let retornoView: any = false;

// objeto - sem previsibilidade
let produto: object = {
  name: "leticia",
  cidade: "sp",
  idade: 30,
};


// objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
}

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 100
}

/**
 * arrays
 */

let dados: string[] = ["leticia", "ana", "adriana"];
let dados2: Array<string> = ["leticia", "ana", "adriana"];

let infos: (string | number)[] = ["leticia", 24, 1.68]

/**
 * tuplas
 */

let boleto: [string, number, number] = ["água conta", 199.9, 32342342]

/**
 * Datas
 */

let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())

// funções

function addNumber(x: number, y: number): number {
  return x + y
}
let soma: number = addNumber(4, 7);
console.log(soma)

function addToHello(name: string): string {
  return 'Hello ${name}';
}
console.log(addToHello("Leticia"))

function CallToPhone(phone: number | string): number | string{
  return phone;
}

console.log(CallToPhone(34995874521));

async function getDatabase(id: number): Promise<string>{
  return "leticia";
}