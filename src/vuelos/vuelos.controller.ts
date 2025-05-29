import { Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';

@Controller('vuelos')
export class VuelosController {
  constructor(private readonly vuelosService: VuelosService) {}

  @Post()
  create(@Body() createVueloDto: CreateVueloDto) {
    console.log(createVueloDto);
    return this.vuelosService.create(createVueloDto);
  }

  @Get()
  findAll(@Query() query:string) {
    console.log(query);
    return this.vuelosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vuelosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVueloDto: UpdateVueloDto) {
    return this.vuelosService.update(+id, updateVueloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vuelosService.remove(+id);
  }
}
