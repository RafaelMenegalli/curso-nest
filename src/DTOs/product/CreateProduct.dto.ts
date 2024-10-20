import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, Length, maxLength, Min, ValidateNested } from "class-validator";
import { CreateCharacteristicsDTO } from "./CreateCharacteristics.dto";
import { CreateImageDTO } from "./CreateImage.dto";
import { Type } from "class-transformer";

export class CreateProductDTO {
    @IsNotEmpty()
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @IsPositive()
    valor: number;

    @IsNumber()
    @Min(0)
    quantidadeDisponivel: number;

    @IsNotEmpty()
    @Length(0, 1000)
    descricao: string;

    @ValidateNested()
    @IsArray()
    @Type(() => CreateCharacteristicsDTO)
    @ArrayMinSize(3)
    caracteristicas: CreateCharacteristicsDTO[]

    @ValidateNested()
    @IsArray()
    @Type(() => CreateImageDTO)
    @ArrayMinSize(1)
    imagens: CreateImageDTO[]

    @IsNotEmpty()
    categoria: string;

    dataCriacao: Date;
    dataAtualizacao: Date;
}