import { IsString, MinLength, IsUUID, IsOptional } from "class-validator";

// en class-validator hay un montón de decoradores para hacer las validaciones 

export class UpdateCarDto {//se aconseja que los DTO sean readonly, los DTO siempre son clases

    @IsString()
    @IsUUID()
    @IsOptional() // si quieres que sea opcional este parametro
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    @MinLength(3) // en este caso model tiene que recibir un parametro minimo de 3 caracteres
    readonly model?: string;
}