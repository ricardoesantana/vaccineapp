export const usuarios = [
    { id: 1, nome: 'Fulano', cpf: '1', email: 'fulano@teste.com', senha: 'senha123' },
    { id: 2, nome: 'Ciclano', cpf: '2', email: 'ciclano@teste.com', senha: 'senha456' },
    { id: 3, nome: 'Beltrano', cpf: '3', email: 'beltrano@teste.com', senha: 'senha789' },
];

export const lista = [
    {   id: 1, nome: 'Marcos Andrade',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HdzG1pEhoNcrazR62fZv_2gNXtiqlAq42A&usqp=CAU',
        telefone: '81 988553424', email: 'teste@teste.com.br'
    },
    {
        id: 2, nome: 'Patrícia Tavares',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JbwG0c_1MD5Wv_dDXcEXFPDzJAMA2SMqtA&usqp=CAU',
        telefone: '81 998765332', email: 'teste@teste.com.br'
    },
    {
        id: 3, nome: 'Rodrigo Antunes',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HdzG1pEhoNcrazR62fZv_2gNXtiqlAq42A&usqp=CAU',
        telefone: '81 987765525', email: 'teste@teste.com.br'
    },]

export function consultarUsuario(email, senha) {
    const index = usuarios.findIndex((usuario) => usuario.email === email && usuario.senha === senha);
    if (index !== -1) {
        return true;
    } else {
        return false;
    }
}

export function adicionarUsuario(usuario) {
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
}

export function adicionarContato(contato) {
    lista.push(contato);
}

export function removerUsuario(id) {
    const index = usuarios.findIndex((usuario) => usuario.id === id);
    if (index !== -1) {
        usuarios.splice(index, 1);
    }
}

export function atualizarContato(id, propriedadesAtualizadas) {
    const indice = lista.findIndex((contato) => contato.id === id);
    if (indice === -1) {
      throw new Error(`Contato com ID ${id} não encontrado`);
    }
    lista[indice] = { ...lista[indice], ...propriedadesAtualizadas };
}

export function removerContato(id) {
    const index = lista.findIndex((contato) => contato.id === id);
    if (index !== -1) {
        lista.splice(index, 1);
    }
}

