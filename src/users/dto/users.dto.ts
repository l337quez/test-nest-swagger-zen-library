import { ZenProperty, ZenPropertyOptional } from 'nest-swagger-zen';

export class CreateUserDto {
  @ZenProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;

  @ZenProperty({ example: 'john@example.com', description: 'The email of the user' })
  email: string;
}

export class UpdateUserDto {
  @ZenPropertyOptional({ example: 'John Doe Updated', description: 'The name of the user' })
  name?: string;

  @ZenPropertyOptional({ example: 'john.update@example.com', description: 'The email of the user' })
  email?: string;
}

export class UserResponseDto {
  @ZenProperty({ example: 1, description: 'User ID' })
  id: number;

  @ZenProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;

  @ZenProperty({ example: 'john@example.com', description: 'The email of the user' })
  email: string;
}

