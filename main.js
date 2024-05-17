const scrollingImgIds = ['img7', 'img8', 'img9', 'img10', 'img11', 'img12'];

async function fadeInImages() {
    while (true) {
        for (let i = 0; i < scrollingImgIds.length; i++) {
            const currentImg = document.getElementById(scrollingImgIds[i]);
            if (currentImg) {
                currentImg.style.opacity = '1';
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
            currentImg.style.opacity = '0'
        }
    }
}
fadeInImages();