document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('nav ul > li > a');
	const checkbox = document.getElementById('check');

	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault(); // Stop instant jump

			// Remove 'active' class from all and add to current
			navLinks.forEach(nav => nav.classList.remove('active'));
			this.classList.add('active');

			// Smooth scroll to section
			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}

			// Close mobile menu
			if (checkbox.checked) {
				checkbox.checked = false;
			}
		});
	});
});
