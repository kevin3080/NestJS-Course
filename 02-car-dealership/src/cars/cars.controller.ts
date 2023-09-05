import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ParseUUIDPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/updateCarDto';

// los controladores no manejan la logica del negocio
// El unico objetivo es escuchar las solicitudes del cliente y regresar una respuesta 

@Controller('cars')
/* @UsePipes(ValidationPipe) // todos los metodos del controlador cars van a usar el validationPipe */
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}
    


    @Get() // http://localhost:3000/cars
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id') // ejemplo http://localhost:3000/cars/2
    getCarById( @Param('id', new ParseUUIDPipe({version: '4'})) id: string) { // ParseIntPipe es un 'pipe' de NestJs que transforma la info en numero. Fuente: https://docs.nestjs.com/pipes
        console.log({id});

        return {
            id,
            /* car: this.carsService.findOneById( Number(id) ) // tambien podemos usar la abreviacion utilizada en JavaScript +id | Number(id) son iguales */
            car: this.carsService.findOneById(id)
        }
    }


    // DTO Data Tranfers Object
    @Post()
   
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto)
    {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsService.delete(id)
    }

}
