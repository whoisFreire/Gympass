import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UsersAlreadyExistsError } from './errors/user-already-exists-error'

interface registerUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: registerUseCaseRequest) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)
    if (userWithSameEmail) {
      throw new UsersAlreadyExistsError()
    }
    const password_hash = await hash(password, 6)

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
