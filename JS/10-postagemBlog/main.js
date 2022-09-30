// Criar um objeto de postagem de blog que vai conter as seguintes propriedades
//Postagem
/*
Título
Mensagem
Autor
Vizualisações
Comentarios (autor, mensagem)
Estao ao vivo
*/

let postagem = {
    titulo: 'Meu poste',
    mensagem: 'Bem vindo ao meu blog pessoal',
    autor: 'Alison',
    visualizacoes: 100,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'},
    ],
    estaAoVido: true
}

console.log(postagem)