import { faker } from 'https://esm.sh/@faker-js/faker';

const generateButton = document.getElementById('generate-btn'); 
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const avatarField = document.getElementById('avatar');

generateButton.addEventListener('click', () => {
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();
  const randomAvatar = faker.image.avatar();

 
  nameField.textContent = randomName;
  emailField.textContent = randomEmail;
  avatarField.src = randomAvatar;
  avatarField.classList.remove('hidden'); 
});
