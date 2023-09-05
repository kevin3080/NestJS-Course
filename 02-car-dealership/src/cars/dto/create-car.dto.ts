import { IsString, MinLength } from "class-validator";

// en class-validator hay un montón de decoradores para hacer las validaciones 

export class CreateCarDto {//se aconseja que los DTO sean readonly, los DTO siempre son clases

    @IsString()
    readonly brand: string;

    @IsString()
    @MinLength(3) // en este caso model tiene que recibir un parametro minimo de 3 caracteres
    readonly model: string;
}