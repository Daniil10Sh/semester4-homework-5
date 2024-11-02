import { handleSubmit } from './formHandler';

document.getElementById('feedbackForm').addEventListener('submit', handleSubmit);
export function handleSubmit(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const formData = { name, email, message };

    console.log('Form Data:', formData);

    document.getElementById('responseMessage').innerText = 'Thank you for your feedback!';
}
