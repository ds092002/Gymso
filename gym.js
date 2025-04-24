document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('nav ul > li > a');
	const checkBox = document.getElementById('check');
  
	navLinks.forEach(link => {
	  link.addEventListener('click', function () {
		// Remove active from all and set the current one
		navLinks.forEach(nav => nav.classList.remove('active'));
		this.classList.add('active');
  
		// Hide the nav menu on mobile
		if (checkBox.checked) {
		  checkBox.checked = false;
		}
	  });
	});
  });
  