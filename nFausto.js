var imgs = [
    "https://i.imgur.com/XPstlFz.jpg",
    "https://i.imgur.com/tcE6Gd9.jpg",
    "https://i.imgur.com/nyLyRwk.jpg",
    "https://i.imgur.com/yTVQ6UI.png",
    "https://i.imgur.com/Ujy8VIe.jpg",
    "https://i.imgur.com/2VMTFKy.jpg"
]

function mudarImgs(){
    var imagens = document.getElementsByTagName('img');
    for (var i = 0, l = imagens.length; i < l; i++) {
        if(!imgs.includes(imagens[i].src))
            imagens[i].src = imgs[Math.floor(Math.random() * imgs.length)];
    }
    setTimeout(function() {
        mudarImgs();
    },2000);
}
mudarImgs();