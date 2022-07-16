//Desafio 2:

enum  Profissao {
	Atriz,
	Padeiro,
}

interface IPessoa  {
	nome: string,
	idade: number,
	profissao?: Profissao,
}


let pessoa1 : IPessoa = {
	nome: 'Laura',
	idade: 25,
	profissao: Profissao.Atriz
}

let pessoa2 : IPessoa = {
	nome: 'Carlos',
	idade: 45,
	profissao: Profissao.Padeiro
}

let pessoa3 : IPessoa = {
	nome: 'João',
	idade: 14
}




