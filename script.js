
const ASSIGNMENT_USER = 'admin';
const ASSIGNMENT_PASS = 'admin123';

function validateCredentials(inputUser, inputPass, requiredUser, requiredPass) {
    if(!inputUser || !inputPass) return false;
    return inputUser === requiredUser && inputPass === requiredPass;
}

document.getElementById('auth-submit-btn').addEventListener('click', function(e) { e.preventDefault();

const enterUsername = document.getElementById('auth-admin-username').value ;
const enterPassword = document.getElementById('auth-admin-password').value ;

const isAuthorized = validateCredentials(
    enterUsername,
    enterPassword,
    ASSIGNMENT_USER,
    ASSIGNMENT_PASS

);
if (isAuthorized) {

    document.getElementById('auth-container').classList.add('hidden');

    document.getElementById('auth-dashboard-wrapper').classList.remove('hidden');
    
    document.getElementById('auth-admin-username').value = '';

    document.getElementById('auth-admin-password').value = '' ;

}
else {
    alert('Invalid credentials. Please use admin and admin123.');
}
});