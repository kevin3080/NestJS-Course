import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },

    ];

    findAll(){
        return this.cars;
    }

    findOneById(id:string){
        
        const car = this.cars.find( car => car.id === id );
        
        if( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);

        return car;
    }

    create( createCarDto: CreateCarDto){

        const newCar: Car = {
            id: uuid(),
            // brand: createCarDto.brand,
            // model: createCarDto.model
            ...createCarDto
        }

        this.cars.push( newCar );
        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`Car id is not valid inside body`)

        this.cars = this.cars.map( car => {

            if(car.id === id){
                carDB = {
                    ...carDB, // exparso todas las propiedades que tenga el carDB
                    ...updateCarDto, // exparso todas las propiedades que vengan actualizadas, esto va sobre escribir las propiedades anteriores, si aca biene un id parecido al UUID puede ser un riesgo
                    id, // este id sobre escribe el id que llege de updateCarDto
                }
                return carDB;
            }
            return car;
        })

        return carDB; // carro actualizado
    }

    delete( id: string ){
        const carDelete = this.findOneById(id);
        this.cars = this.cars.filter( car => car.id !== id); // usamos el metodo .filter para filtrar todos los id que sean diferentes al id dado, asi eliminamos el id que ingresamos
        return; // undefined
    }

    fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    }

}
