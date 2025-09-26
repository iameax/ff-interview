import './style.css'
import { init } from '../sdk/sdk'

const form = document.querySelector<HTMLFormElement>('#form')!
const checkout = init();

checkout.on('payment:success', (data) => {
  console.log(`Payment successful! Payment ID: ${data.paymentId}`);
});

checkout.on('payment:error', (error) => {
  console.log(`Payment failed: ${error.message}`);
});

checkout.on('init:error', (error) => {
  console.log(`Payment initialization failed: ${error.message}`);
});

checkout.on('init:success', () => {
  console.log(`Payment initialized successfully!`);
});

checkout.mount(form);
