import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DestinosService } from './destinos.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';

@Controller('destinos')
@UsePipes(new ValidationPipe())
export class DestinosController {
  constructor(private readonly destinosService: DestinosService) {}

  @Post()
  create(@Body() createDestinoDto: CreateDestinoDto) {
    console.log(createDestinoDto);
    return this.destinosService.create(createDestinoDto);
  }

  @Get()
  findAll() {
    return this.destinosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDestinoDto: UpdateDestinoDto) {
    return this.destinosService.update(+id, updateDestinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinosService.remove(+id);
  }
}
