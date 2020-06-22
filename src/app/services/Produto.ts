import {Vendedor} from './Vendedor';

export class Produto {
    id: number;
    nome_produto: string;
    valor_produto: number;
    descricao: string;
    imagem_produto: string;
    vendedor: Vendedor;
    tipo_produto: number;
    peso_produto: number
}