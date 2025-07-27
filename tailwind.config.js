import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/ts/**/*.tsx',
        './resources/ts/**/*.ts',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Space Grotesk',  // Your custom font first
                    'Figtree',       // Fallback font from your original config
                    ...defaultTheme.fontFamily.sans
                ]
            },
            animation: {
                'line-shadow': 'line-shadow 15s linear infinite',
                'shine': 'shine var(--duration, 2s) infinite linear',
                'float': 'float 8s ease-in-out infinite',
                'float-delay': 'float 8s ease-in-out infinite 2s',
            },
            keyframes: {
                'line-shadow': {
                    '0%': { 'background-position': '0 0' },
                    '100%': { 'background-position': '100% -100%' },
                },
                'shine': {
                    '0%': { 'background-position': '0% 0%' },
                    '50%': { 'background-position': '100% 100%' },
                    '100%': { 'background-position': '0% 0%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    },

    plugins: [forms, require("tailwindcss-animate")],
};