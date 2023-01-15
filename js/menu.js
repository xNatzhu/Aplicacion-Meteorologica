    
    function navResponsive() {
        const menuItemsClass = document.querySelectorAll(".menu-item-block");
        menuItemsClass.forEach(function (menuItem) {
          menuItem.addEventListener("click", function () {

            let currentItem = document.querySelector(".active");
            currentItem.classList.remove("active");
            this.classList.add("active");
          });
        });
      }
      navResponsive();

    
    
    export {navResponsive}; 