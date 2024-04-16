function tabs(wrapperMenuSelector, menusSelector, contentsSelector,
    activeClassMenu, display = 'block') {
    const wrapperMenu = document.querySelector(wrapperMenuSelector),
          menus = wrapperMenu.querySelectorAll(menusSelector),
          contents = document.querySelectorAll(contentsSelector);

    function showTab(i = 0) {
        contents[i].style.display = display;
        menus[i].classList.add(activeClassMenu);
    }

    function hideTab() {
        contents.forEach(content => {
            content.style.display = 'none';
        });

        menus.forEach(menu => {
            menu.classList.remove(activeClassMenu);
        });
    }

    hideTab();
    showTab();

    wrapperMenu.addEventListener('click', (e) => {
        e.preventDefault();

        const t = e.target;
        if (t && t.closest(menusSelector)) {
            menus.forEach((menu, i) => {
                if (t.closest(menusSelector) === menu) {
                    hideTab();
                    showTab(i);
                }
            });
        }
    });
}

export default tabs;