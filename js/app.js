var menu = document.getElementById('menu');
    var closeIcon = document.getElementById("menu_opener");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }