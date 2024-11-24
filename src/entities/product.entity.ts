class ImageProduct {
    url: string;
    descricao: string;
}

class CharacteristicsProduct {
    nome: string;
    descricao: string;
}

export class ProductEntity {
    id: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    imagens: ImageProduct[];
    caracteristicas: CharacteristicsProduct[];
    descricao: string;
    categoria: string;
    dataCriacao: Date;
    dataAtualizacao: Date;
}