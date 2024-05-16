document.addEventListener("DOMContentLoaded", function() {
    fetch('airbook-introduction.html')
        .then(response => response.text())
        .then(data => {       
            document.getElementById('airbook-introduction').innerHTML = data;
        });

    fetch('phone-grid.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('phone-grid').innerHTML = data;
    });

    fetch('fleet-section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fleet-section').innerHTML = data;
    });

    fetch('nav.html')
    .then(response => response.text())
    .then(data => {       
        document.getElementById('nav').innerHTML = data;
    });

    fetch('airport-section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('airport-section').innerHTML = data;
    });

    fetch('reviews.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('reviews').innerHTML = data;
    });
    
    fetch('contact-section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contact-section').innerHTML = data;
    });                                                  
});