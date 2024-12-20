function openMenu(evt, menuName){
    var tabs = document.querySelectorAll('.menu_btn');
    var tabMenus = document.querySelectorAll('.menu');

    for (let index = 0; index < tabMenus.length; index++) {
        const element = tabMenus[index];
        element.style.display = 'none';    
    }

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];

        element.className = element.className.replace('active', ' ');
        
    }

    document.getElementById(menuName).style.display = 'block';
    evt.currentTarget.className += '  active';
    console.log(evt.currentTarget);
}

document.getElementById('default_btn').click();