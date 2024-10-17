import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Điểm ngắt cho màn hình nhỏ nhất (ví dụ: điện thoại di động)
      sm: 576, // Điểm ngắt cho màn hình nhỏ (ví dụ: máy tính bảng)
      md: 768, // Điểm ngắt cho màn hình trung bình (ví dụ: laptop nhỏ)
      lg: 992, // Điểm ngắt cho màn hình lớn (ví dụ: laptop lớn, desktop)
      xl: 1200, // Điểm ngắt cho màn hình rất lớn (ví dụ: màn hình 4K)
    },
  },
});

export default theme;
