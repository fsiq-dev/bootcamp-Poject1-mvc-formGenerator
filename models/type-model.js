const data = [
    {
        id: 'new',
        descricao: 'Novo'
    },
    {
        id: 'used',
        descricao: 'Usado'
    }
]

export const typeModel =  {
    getById: (id) => {
        const resposta = data.find((item) =>{
            return item.id === id
        });
        return resposta;
    },
    getAll: () => {
        return data;
    }
}