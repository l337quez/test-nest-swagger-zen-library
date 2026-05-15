import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  CreateUserDocs,
  GetUsersDocs,
  GetUserByIdDocs,
  UpdateUserDocs,
  DeleteUserDocs,
  UploadUserAvatarDocs,
  HiddenSecretDocs
} from './swagger/users.swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @CreateUserDocs()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @GetUsersDocs()
  findAll(@Query('page') page?: number, @Query('limit') limit?: number, @Query('search') search?: string) {
    // pagination and search parameters are documented via ZenSwagger
    return this.usersService.findAll();
  }

  @Get(':id')
  @GetUserByIdDocs()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UpdateUserDocs()
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @DeleteUserDocs()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  @Post(':id/avatar')
  @UseInterceptors(FileInterceptor('file'))
  @UploadUserAvatarDocs()
  uploadAvatar(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: any) {
    return { message: 'Avatar uploaded' };
  }

  @Get('secret/dashboard')
  @HiddenSecretDocs()
  secretInfo() {
    return { message: 'This should not appear in Swagger' };
  }
}
