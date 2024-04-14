function gallery(parentSelector, imgsSelector, urlToImg) {
    const wrapper = document.querySelector(parentSelector),
          imgs = wrapper.querySelectorAll(imgsSelector);

    function checkImageDimensions() {
        const wrapperImg = document.querySelector('.gallery-wrapper'),
              img = wrapperImg.querySelector('img');

        function setSizeImg() {
            const windowHeight = window.screen.height,
                  wrapperPadding = window.getComputedStyle(wrapperImg),
                  wrapperPaddingheight = parseInt(wrapperPadding.paddingTop) +
                      parseInt(wrapperPadding.paddingBottom),
                  imgHeight = img.scrollHeight,
                  imgWidth = img.scrollWidth;

            if (windowHeight <= (imgHeight + wrapperPaddingheight)) {
                img.classList.add('resize-img');
            }

            if (Math.floor(imgWidth / 4 * 3) + 1 < Math.floor(imgHeight)) {
                img.classList.remove('resize-img');
            }
        }

        window.addEventListener('resize', setSizeImg);
        setSizeImg();

        wrapperImg.addEventListener('click', (e) => {
            const t = e.target;
            
            if (t && (t === wrapperImg)) {
                wrapperImg.remove();
                document.body.style.overflow = '';
                window.removeEventListener('resize', setSizeImg);
            }
        });
    }

    function createImg(i) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="gallery-wrapper">
                <img class="gallery-img" src="${urlToImg}${i + 1}.png">
            </div>
        `);
        document.body.style.overflow = 'hidden';
        
        checkImageDimensions();
    }

    wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        const t = e.target;

        if (t && t.matches(imgsSelector)) {
            imgs.forEach((img, i) => {
                if (t === img) {
                    createImg(i);
                }
            });
        }
    });
}

export default gallery;