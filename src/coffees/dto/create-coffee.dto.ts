import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class CreateCoffeeDto {
  @ApiProperty({description: 'the name of the coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({description: 'the brand of the coffee' })
  @IsString()
  readonly brand: string;
  
  @ApiProperty({example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}