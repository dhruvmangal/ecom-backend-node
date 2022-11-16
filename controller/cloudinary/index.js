var cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

var cloudinaryHandler = new Object();

cloudinaryHandler.upload = async (file, filetype, publicId, overwrite=true, notificationUrl) =>{
    return await cloudinary.v2.uploader
    .upload(file, 
      {resource_type: filetype, public_id: publicId,
      overwrite: overwrite, notification_url: notificationUrl})
    .then((result)=>result)
    .catch(err=>{ throw err});
}

module.exports = cloudinaryHandler
