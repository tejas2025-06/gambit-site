// Initialize EmailJS with your public key
(function() {
    emailjs.init('OoddZ_cRNqVF5M5u3');
})();
// Contact form initialization
(function() {
    emailjs.init('OoddZ_cRNqVF5M5u3');
})();

document.addEventListener('DOMContentLoaded', function() {
    // Handle both forms
    ['contact-form', 'tt-contact-form'].forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent page refresh

                // Get form data
                const formData = {
                    from_name: form.querySelector('#name').value,
                    from_email: form.querySelector('#email').value,
                    phone: form.querySelector('#phone').value,
                    subject: form.querySelector('#subject').value,
                    message: form.querySelector('#message').value,
                };

                // Send email using EmailJS
                emailjs.send('service_fsm2duz', 'template_s5aa7k3', formData)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('✓ Message sent successfully!');
                        form.reset(); // Clear the form
                    })
                    .catch(function(error) {
                        console.log('FAILED...', error);
                        alert('❌ Failed to send message. Please try again.');
                    });
            });
        }
    });
});
