/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
                // New: Added a subtle float for cards
                'floating': 'floating 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                floating: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            colors: {
                // More vibrant, neon-leaning palette
                lightHover: '#f0e1ff',
                darkHover: '#3b0066',
                darkTheme: '#0a0014', // Deeper black for better contrast
                accent: {
                    cyan: '#00f2ff',
                    pink: '#ff00d4',
                    purple: '#9d00ff',
                },
                // Custom gradients simplified as colors
                'glass-white': 'rgba(255, 255, 255, 0.05)',
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
                // New: Glow effect for dark mode cards
                'neon-purple': '0 0 15px rgba(157, 0, 255, 0.3)',
                'neon-cyan': '0 0 15px rgba(0, 242, 255, 0.3)',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}