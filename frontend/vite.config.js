import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api':{
      targer: 'http://localhost:3000',
      secure: false,
    },
  },
},
  plugins: [react()],
});
