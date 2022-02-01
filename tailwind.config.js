module.exports = {
    content: ["./src/**/**/*.{html,js}",
        "./node_modules/@themesberg/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    darker: '#11143A',
                    normal: '#2B64F5',
                    lighter: '#507DF0',
                    dark: ' #11153D'
                },
                grey: {
                    normal: '#525967',
                    light: '#525967'
                },
                green: {
                    normal: '#08A647'
                },
                light: '#F2F3FC',
                border: {
                    blue: {
                        normal: '#2B64F5'
                    }
                }
            },
            backgroundColor: {
                normal: '#2B64F5'
            },
            maxWidth: {
                mobile: '390px'
            },
            boxShadow: {
                medium: '0px 5px 20px rgba(0, 0, 0, 0.1);'
            }
        },
    },
    plugins: [
        require('@themesberg/flowbite/plugin')
    ],
}