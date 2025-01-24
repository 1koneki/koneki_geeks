function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {
    const passwordContainer = document.getElementById('password-container');
    passwordContainer.innerHTML = ''; 

    for (let i = 0; i < 6; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        const randomNum = getRandomInt(0, 9); 
        cell.textContent = randomNum; 
        passwordContainer.appendChild(cell); 
    }
}

generatePassword();

document.getElementById('generate-btn').addEventListener('click', generatePassword);










 
