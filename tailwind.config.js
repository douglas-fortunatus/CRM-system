const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            screens: {
                'sl': {'max': '1440px'},
                // => @media (max-width: 1440px){ ... }
                'sl1': {'max': '1152px'},
            },
            width: {
                'setNav' : 'calc(100vw - 752px - 56px -240px)/2 + 240px',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'green-sale': '#08a742',
                't-primary' : '#26292c',
                't-secondary' : '#747678',
                't-link' : '#317ae2',
            },
            minWidth: {
                'main': '1080px',
                'cont': 'calc(100% - 56px) -240xp'
            },
            maxWidth: {
                'mod' : 'calc(100vw - 32px)*2',
            },
            flex: {
                '2': '0 0 auto',
                '3': '0 1 0%',
            },
            gridTemplateRows: {
                'cont':'56px calc(100% - 56px)',
                'innerNav':'auto min-content'
            },
            gridTemplateColumns: {
                'full':'100%',
            },
            boxShadow: {
                '3xl' : '0 1px 3px #00000012, 0 1px 2px #0000000f, 0 0 1px #0000000d',
                '4xl' : '0 8px 10px #0000001a, 0 6px 30px #0000000f, 0 16px 24px #0000000d, 0 0 2px #0000003d',
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
