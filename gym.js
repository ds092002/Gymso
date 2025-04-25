document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('nav ul > li > a');
	const checkbox = document.getElementById('check');

	navLinks.forEach(link => {
		link.addEventListener('click', function () {
			// Remove 'active' class from all and add to current
			navLinks.forEach(nav => nav.classList.remove('active'));
			this.classList.add('active');

			// Uncheck the checkbox to close the navbar on mobile
			if (checkbox.checked) {
				checkbox.checked = false;
			}
		});
	});
});
