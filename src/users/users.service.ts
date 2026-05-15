import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: UserResponseDto[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto): UserResponseDto {
    const newUser: UserResponseDto = {
      id: this.idCounter++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): UserResponseDto[] {
    return this.users;
  }

  findOne(id: number): UserResponseDto {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): UserResponseDto {
    const user = this.findOne(id);
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: number): { message: string } {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(index, 1);
    return { message: 'User deleted successfully' };
  }
}
