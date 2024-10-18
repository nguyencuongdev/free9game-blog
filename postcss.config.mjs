/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {}, // Xử lý @import CSS trước
    'tailwindcss': {},    // Chạy Tailwind CSS
    'autoprefixer': {},   // Thêm các tiền tố cho trình duyệt cũ (nếu cần)
  },
};

export default config;
