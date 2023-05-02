import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}
    


    @Get() // http://localhost:3000/cars
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id') // ejemplo http://localhost:3000/cars/2
    getCarById( @Param('id', ParseIntPipe ) id: number) { // ParseIntPipe es un 'pipe' de NestJs que transforma la info en numero. Fuente: https://docs.nestjs.com/pipes
        console.log({id});

        return {
            id,
            /* car: this.carsService.findOneById( Number(id) ) // tambien podemos usar la abreviacion utilizada en JavaScript +id | Number(id) son iguales */
            car: this.carsService.findOneById(id)
        }
    }

    @Post()
    createCar(@Body() body: any){
        return body
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any)
    {
        return body
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id: number ){
        return{
            method: 'delete',
            id
        }
    }

}
