/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",,
  ],
  theme: {
    extend: {
      width: { 128: "32rem" },
    },
    backgroundImage: {
      eu: 'url("../assets/me-profile.jpeg")',
      euAbout: 'url("../assets/eu-sobre.jpg")',
      euProjects: 'url("../assets/github-image.jpg")',
      attekita: 'url("../assets/attekita.jpg")',
      guanabara: 'url("../assets/guanabara.jpg")',
      igor: 'url("../assets/igor.jpg")',
      diego: 'url("../assets/diego.png")',
      genshin: 'url("../assets/genshin.webp")',
      matrix: 'url("../assets/matrix.jpg")',
      jujutsu: 'url("../assets/jujutsu.png")',
      nirvana: 'url("../assets/nirvana.jpg")',
      background: 'url("../assets/background-main-page.jpg")',
    },
  },
  plugins: [],
};
