/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        colorBlink: "colorBlink 1s infinite", // 색상 깜빡이는 애니메이션
      },
      textShadow: {
        glow: "0 0 10px rgba(45, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.6)", // 광 효과 추가
      },
      keyframes: {
        colorBlink: {
          "0%, 100%": { color: "rgb(59, 130, 246)" }, // 파란색 (Tailwind `text-blue-500`)
          "50%": { color: "rgb(255, 255, 255)" }, // 흰색
        },
      },
    },
  },
  plugins: [],
};
