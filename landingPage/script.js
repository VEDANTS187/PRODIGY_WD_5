const navMenu = document.getElementById('nav-menu');

// Change background color of navigation menu when scrolled
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) {
		navMenu.style.backgroundColor = '#da5c5c';
		navMenu.style.color = 'da5c5c';
	} else {
		navMenu.style.backgroundColor = '#333';
		navMenu.style.color = '#fff';
	}
});

// Change font color of menu item when hovered over
const menuItems = navMenu.getElementsByTagName('a');

for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('mouseover', () => {
		menuItems[i].style.color = '#333';
	});

	menuItems[i].addEventListener('mouseout', () => {
		menuItems[i].style.color = '#fff';
	});
}