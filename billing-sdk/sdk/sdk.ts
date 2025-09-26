export interface ICheckout {
  on(event: 'payment:success', callback: (data: { paymentId: string }) => void): void;
  on(event: 'payment:error', callback: (error: Error) => void): void;
  on(event: 'init:success', callback: (data: { paymentId: string }) => void): void;
  on(event: 'init:error', callback: (error: Error) => void): void;

  mount(element: HTMLFormElement): void;
}

class Checkout implements Checkout {
  on(event: string, callback: Function): void {
    // Implementation here
  }

  mount(element: HTMLFormElement): void {
    // Implementation here
  }
}

export function init(): ICheckout {
  return new Checkout();
}
