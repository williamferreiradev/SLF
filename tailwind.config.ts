import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC107',
          500: '#FFC107',
          600: '#E0A800',
        },
        dark: {
          bg: '#050505',
          surface: '#121212',
          border: '#1F1F1F',
          text: '#FFFFFF',
          muted: '#9CA3AF'
        }
      }
    }
  }
}
