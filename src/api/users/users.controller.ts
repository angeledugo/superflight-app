import { Controller, Get } from '@nestjs/common';
import { FindAll } from '../../domain/user/findAll';


@Controller('api/v1/user')
export class UsersController {
    constructor(
        private readonly findAllUser: FindAll
	){}

    @Get()
    public async findAll() {
        return await this.findAllUser.FindAll();
    }
}
