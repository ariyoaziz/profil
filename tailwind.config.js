/* eslint-disable no-undef */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Menambahkan Roboto sebagai font default
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        orbit: "orbit 10s linear infinite",
        "move-horizontal": "moveHorizontal 6s ease-in-out infinite",
        typewriter: "typewriter 2s steps(50) forwards",
        caret:
          "typewriter 2s steps(50) forwards, blink 1s steps(50) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            width: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateX(150%) translateY(-10%) rotate(0deg)", // Mulai dari sisi kanan
          },
          "25%": {
            transform:
              "rotate(90deg) translateX(150%) translateY(-10%) rotate(90deg)", // Pindah ke atas
          },
          "50%": {
            transform:
              "rotate(180deg) translateX(150%) translateY(-10%) rotate(180deg)", // Pindah ke kiri
          },
          "75%": {
            transform:
              "rotate(270deg) translateX(150%) translateY(-10%) rotate(270deg)", // Pindah ke bawah
          },
          "100%": {
            transform:
              "rotate(360deg) translateX(150%) translateY(-10%) rotate(360deg)", // Kembali ke kanan
          },
        },

        moveHorizontal: {
          "0%": {
            transform: "translateX(-100%)", // Mulai di sebelah kiri layar
          },
          "25%": {
            transform: "translateX(-100%)", // Mulai di sebelah kiri layar
          },
          "50%": {
            transform: "translateX(100%)", // Bergerak ke kanan layar
          },
          "75%": {
            transform: "translateX(100%)", // Bergerak ke kanan layar
          },
          "100%": {
            transform: "translateX(-100%)", // Kembali ke kiri layar
          },
        },
      },
    },
  },
  plugins: [],
};
