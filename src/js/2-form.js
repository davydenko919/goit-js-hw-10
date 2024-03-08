const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

//Відновлюєм значення
const storedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.message.value = storedState.message || '';
form.elements.email.value = storedState.email || '';

// Оновлюєм localStorage
function updateForm() {
  const currentState = {
    message: form.elements.message.value.trim(),
    email: form.elements.email.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
}
// Функція для перевірки чи не порожні та не складаються лише з пробілів
function isNotBlank(value) {
  return value.trim() !== '';
}

// Обробка відправки
function submitEvent(event) {
  event.preventDefault();

  const message = form.elements.message.value.trim();
  const email = form.elements.email.value.trim();

  //Перевірка на порожність чи пробіли
  function isNotBlank(value) {
    return value.trim() !== '';
  }
  if (!isNotBlank(message) || !isNotBlank(email)) {
    alert('Будь ласка, заповніть всі поля перед відправленням форми.');
    return;
  }

  console.log({Email: email, Message: message})
  localStorage.removeItem(localStorageKey);
  form.reset();
}

//сдухачі
form.addEventListener('input', updateForm);
form.addEventListener('submit', submitEvent);
