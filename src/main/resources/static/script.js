document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone')
    };

    fetch('/saveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert('Registered');
        document.getElementById('userForm').reset();
    })
    .catch(error => console.error('Error:', error));
});
