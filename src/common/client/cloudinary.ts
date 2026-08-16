import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';

export const uploadBase64Image = async (
  base64String: string,
): Promise<UploadApiResponse | UploadApiErrorResponse> => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME?.trim(),
    api_key: process.env.CLOUDINARY_API_KEY?.trim(),
    api_secret: process.env.CLOUDINARY_API_SECRET?.trim(),
  });

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      base64String,
      {
        folder: 'tickets',
        resource_type: 'image',
        access_mode: 'public',
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve(result);
        }
      },
    );
  });
};

export default cloudinary;
