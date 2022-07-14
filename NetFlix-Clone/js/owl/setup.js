$('.owl-carousel').owlCarousel({ //botao liga desliga do carrosel
    loop:true, //permite que ao chegar no final da lista de filme volte ao primeiro
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{ // 600px ou menos ele coloca 3 elementos na tela 
            items:3
        },
        1000:{ //quando a tela tiver 1000px ou mais pode colocar 5 elementos na tela
            items:5
        }
    }
})