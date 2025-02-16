function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('hidden');
}

document.getElementById('partnerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create FormData object
    const formData = new FormData(this);
    
    // Convert FormData to object
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Log form data (replace with your API call)
    console.log('Form submitted:', formObject);
    
    // Optional: Show success message
    alert('Thank you for your submission! We will contact you soon.');
    
    // Optional: Reset form
    this.reset();
});

// Optional: Add smooth scroll for "Get in touch" button
document.querySelector('.bg-red-600').addEventListener('click', function() {
    document.querySelector('#partnerForm').scrollIntoView({ 
        behavior: 'smooth' 
    });
});