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

// gym.js (Handling form submission)

document.querySelector('.form_btn').addEventListener('click', async () => {
	const name = document.querySelector('input[placeholder="Name"]').value;
	const email = document.querySelector('input[placeholder="Email"]').value;
	const message = document.querySelector('textarea').value;
  
	if (!name || !email || !message) {
	  alert("Please fill in all fields.");
	  return;
	}
  
	const response = await fetch('http://localhost:3001/contact', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify({ name, email, message }),
	});
  
	const result = await response.json();
	alert(result.message);
  
	// Clear the form after submission
	if (response.ok) {
	  document.querySelector('input[placeholder="Name"]').value = '';
	  document.querySelector('input[placeholder="Email"]').value = '';
	  document.querySelector('textarea').value = '';
	}
  });
  
  
