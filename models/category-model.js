const data = [
    {
        id: 'Eletronics',
        descricao: 'Eletronicos'
    },
    {
        id: 'drinkAndFood',
        descricao: 'Comidas e Bebidas'
    },
    {
        id: 'auto',
        descricao: 'Automóvel'
    }
]
export const categoryModel = {
    getAll: () => {
        return data;
    },
    getById: (id) => {
        const resposta = data.find((item) =>{
            return item.id === id
        });
        return resposta;
    }
}