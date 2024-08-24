import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});


// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
//   resolve: {
//     alias: {
//       '@': '/src', // Example alias for src directory
//     },
//   },
// });
