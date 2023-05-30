import { Injectable, Logger } from "@nestjs/common";
import { S3 } from "aws-sdk";

@Injectable()
export class FileUploadService {
    async upload(file):Promise<any> {
        const { originalname } = file;
        return await this.uploadS3(file.buffer, originalname);
    }

    async uploadS3(file, originalname){
        const s3 = this.getS3();
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: String(originalname),
            Body: file,
        } 

        return new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => {
            if (err) {
                Logger.error(err);
                reject(err.message);
            }
            resolve(data);
            });
        });
    }

    getS3() {
        return new S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
}
