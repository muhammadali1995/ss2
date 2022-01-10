module.exports = {
    content: ["./src/**/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    darker: '#11143A',
                    normal: '#2B64F5',
                    lighter: '#507DF0',
                },
                grey: {
                    normal: '#525967',
                    light: '#525967'
                },
                border: {
                    blue: {
                        normal: '#2B64F5'
                    }
                }
            },
            maxWidth: {
                mobile: '390px'
            },
            boxShadow: {
                medium: '0px 5px 20px rgba(0, 0, 0, 0.1);'
            }
        },
    },
    plugins: [],
}