const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/upload')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

/**function fileFilter (req, file, cb) {
  if (file.mimetype.startsWith('image/')){
    cb(null, true)
  } else {
    cb(new Error('Bạn chỉ được phép đăng hình ảnh!'))
  }
}**/

module.exports = multer({storage: storage});
