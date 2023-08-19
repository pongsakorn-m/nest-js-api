/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('foods')
export class FoodController {
    constructor(private foodService: FoodService) { }

    @Get()
    getFoods(): any[] {
        return this.foodService.getFoods();
    }

    @Get('search')
    getFoodsByCondition(@Query('keyword') keyword: string) {
        console.log(keyword)
        return this.foodService.getFoodsByCondition(keyword);
    }

    @Get('getFoodByFoodId/:foodId')
    getFoodByFoodId(@Param('foodId') foodId: string) {
        return this.foodService.getFoodByFoodId(foodId);
    }
}
