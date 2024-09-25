const livros = [];

class Autor {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

class Bibliotecario {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }
}

class Livro {
  constructor(titulo, anoPubliccao, bibliotecario) {
    this.titulo = titulo;
    this.anoPublicacao = anoPubliccao;
    this.bibliotecario = bibliotecario;
    this.autores = [];
  }

  adicionarAutor(autor) {
    this.autores.push(autor);
  }

  removerAutor(nomeAutor) {
    this.autores = this.autores.filter((autor) => autor.nome !== nomeAutor);
  }

  alterarLivro(novoTitulo, novoAno) {
    this.titulo = novoTitulo || this.titulo;
    this.anoPublicacao = novoAno || this.anoPublicacao;
  }
}

function adicionarLivro(
  titulo,
  anoPublicacao,
  nomeBibliotecario,
  matriculaBibliotecario
) {
  let bibliotecario = new Bibliotecario(
    nomeBibliotecario,
    matriculaBibliotecario
  );
  let livro = new Livro(titulo, anoPublicacao, bibliotecario);
  livros.push(livro);
  return livro;
}

function exibirLivros() {
  livros.forEach((livro) => {
    console.log(`Livro: ${livro.titulo}, Ano: ${livro.anoPublicacao}`);
    console.log(
      `Bibliotecário: ${livro.bibliotecario.nome}, Matrícula: ${livro.bibliotecario.matricula}`
    );
    livro.autores.forEach((autor) => {
      console.log(`Autor: ${autor.nome}, Email: ${autor.email}`);
    });
    console.log("---------------");
  });
}

function adicionarAutorLivro(tituloLivro, nomeAutor, emailAutor) {
  let livro = livros.find((livro) => livro.titulo === tituloLivro);
  if (livro) {
    let autor = new Autor(nomeAutor, emailAutor);
    livro.adicionarAutor(autor);
  } else {
    console.log(`Livro não encontrado`);
  }
}

function removerAutorLivro(tituloLivro, nomeAutor) {
  let livro = livros.find((livro) => livro.titulo === tituloLivro);
  if (livro) {
    livro.removerAutor(nomeAutor);
  } else {
    console.log(`Livro não encontrado`);
  }
}

function alterarDadosLivro(tituloLivro, novoTitulo, novoAno) {
  let livro = livros.find((livro) => livro.titulo === tituloLivro);
  if (livro) {
    livro.alterarLivro(novoTitulo, novoAno);
  } else {
    console.log(`Livro não encontrado`);
  }
}

const totalizadores = () => {
  return livros.map((livro) => ({
    titulo: livro.titulo,
    totalAutores: livro.autores.length,
  }));
};

const livrosComMaisDeUmAutor = () =>
  livros.filter((livro) => livro.autores.length > 1);

const existeLivroComMaisDeDoisAutores = () =>
  livros.some((livro) => livro.autores.length > 2);

function gerarRelatorio() {
  livros.forEach((livro) => {
    let titulo = livro.titulo.toUpperCase();
    let autoresNomes = livro.autores.map((autor) => autor.nome).join(", ");
    console.log(`LIVRO: ${titulo}, AUTOR(ES): ${autoresNomes}`);
  });
}

function calcularPaginasFicticias(totalPaginas) {
  console.log(Math.ceil(totalPaginas));
  console.log(Math.floor(totalPaginas));
  console.log(Math.round(totalPaginas));
}

let livro1 = adicionarLivro("JavaScript Avançado", 2021, "Leandro", "123456");
let Livro2 = adicionarLivro("Algoritmos e Lógica", 2020, "Fernanda", "54321");

adicionarAutorLivro("JavaScript Avançado", "Angelica", "angelica@angelica.com");
adicionarAutorLivro("JavaScript Avançado", "joao", "joao@joao.com");
adicionarAutorLivro("Algoritmos e Lógica", "Angelica", "angelica@angelica.com");

exibirLivros();

alterarDadosLivro("JavaScript Avançado", "JavaScript Moderno", 2022);

removerAutorLivro("JavaScript Avançado", "joao");

console.log(totalizadores());
console.log(livrosComMaisDeUmAutor());
console.log(existeLivroComMaisDeDoisAutores());

gerarRelatorio();
