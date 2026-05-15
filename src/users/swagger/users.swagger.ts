import { ZenSwagger, ZenBodyExamples } from 'nest-swagger-zen';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../dto/users.dto';

const createUserExamples: ZenBodyExamples = {
  'Usuario Estándar': {
    value: {
      name: 'John Doe',
      email: 'john@example.com'
    },
    summary: 'Ejemplo de un usuario común'
  },
  'Usuario VIP': {
    value: {
      name: 'Jane Smith',
      email: 'jane.vip@example.com'
    },
    summary: 'Ejemplo de un usuario con correo corporativo'
  }
};

export const CreateUserDocs = () => ZenSwagger({
  summary: 'Create a new user',
  description: 'Endpoint to create a new user.',
  status: 201,
  body: CreateUserDto,
  bodyExamples: createUserExamples,
  response: UserResponseDto
});

export const GetUsersDocs = () => ZenSwagger({
  summary: 'Get all users',
  description: 'Endpoint to retrieve all users with a custom search query.',
  status: 200,
  response: UserResponseDto,
  isPaginated: true,
  queries: [{ name: 'search', required: false, description: 'Filter users by name' }]
});

export const GetUserByIdDocs = () => ZenSwagger({
  summary: 'Get user by ID',
  description: 'Endpoint to retrieve a user by their ID.',
  status: 200,
  response: UserResponseDto,
  params: [{ name: 'id', description: 'The unique numeric ID of the user' }]
});

export const UpdateUserDocs = () => ZenSwagger({
  summary: 'Update user',
  description: 'Endpoint to update an existing user.',
  status: 200,
  body: UpdateUserDto,
  response: UserResponseDto
});

export const DeleteUserDocs = () => ZenSwagger({
  summary: 'Delete user',
  description: 'Endpoint to delete a user by their ID.',
  status: 200,
  example: { message: 'User deleted successfully' },
  deprecated: true,
  isBearerAuth: true
});

export const UploadUserAvatarDocs = () => ZenSwagger({
  summary: 'Upload User Avatar',
  description: 'Upload a multipart file for the user avatar.',
  status: 201,
  consumes: ['multipart/form-data'],
  example: { message: 'Avatar uploaded' }
});

export const HiddenSecretDocs = () => ZenSwagger({
  summary: 'Secret Endpoint',
  description: 'This shouldn\'t appear in swagger.',
  exclude: true
});
