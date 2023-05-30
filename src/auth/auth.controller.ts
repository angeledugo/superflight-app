import { Body, Controller, HttpException, HttpStatus, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file.upload.service';
import { UserDTO } from '../api/users/userDto';
import { Create } from '../domain/user/create';
import { FindOne } from '../domain/user/findOne';
import { UpdateImage } from '../domain/user/updateImage';


@Controller('api/v1/auth')
export class AuthController {

    constructor(private readonly authService: AuthService, 
        private readonly fileUploadService: FileUploadService,
        private readonly findUser: FindOne,
        private readonly createUser: Create,
        private readonly updateImage: UpdateImage
        ){

    }


    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signin(@Req() req) {
        return await this.authService.signIn(req.user);
        
    }


    @Post('upload/image/user/:userid')
    @UseInterceptors(FileInterceptor('file'))
    async upload(@Param('userid') userid: string, @UploadedFile() file) {
       
        const img =  await this.fileUploadService.upload(file);
        if(img)
            return  await this.updateImage.UpdateImage(userid,img.Location)
    }
    
    @Post('signup')
    async signup(@Body() userDTO: UserDTO) {

        /// check if the user exists in the db    
        const { username, password, email } = userDTO;
        const userInDb = await this.findUser.FindOne(username);
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
        }
        const hash = await this.authService.hashPassword(userDTO.password);


        return await this.createUser.Create(userDTO, hash);
    }
}

