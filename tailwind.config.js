tailwind.config = {
    theme:{
        container: {
            center: 'true',
            padding: '15px'
        },
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Outfit:["Outfit", "sans-serif"],
                Ovo:["Ovo", "serif"],
                primary: ["Bebas Neue", "sans-serif"]
            },
            colors:{
                primary: '#673AB7',
                secondary: '#00BFA5',
                third:'#d8e9f0',
                fourth:'#4f1c4c'
            }
            },
            boxShadow:{
                'black':'4px 4px 0 #000',
                'white':'4px 4px 0 #fff',
            }
        }
    }