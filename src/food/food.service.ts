/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { sample_foods } from 'src/data/data';

@Injectable()
export class FoodService {
    
    getFoods(): any[] {
        return sample_foods;
    }

    getFoodsByCondition(keyword: string) {
        const foods = sample_foods.filter(food => food.name.toLowerCase().includes(keyword.toLowerCase()));
        return foods;
    }

    getFoodByFoodId(foodId: string) {
        const food = sample_foods.find(food => food.id == Number(foodId));
        return food;
    }
}
