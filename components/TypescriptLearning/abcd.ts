type Example = {
  name: string;
  [key: string]: string;
};

type OptionsExample<T> = {
  [Property in keyof T]: null | string;
};

type Final = OptionsExample<Example>;

//

type BaseEvent = {
  name: string;
  time: number;
};

type EventMap = {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
  abcd: boolean;
};

function sendEvent<Type extends keyof EventMap>(name: Type, data: EventMap[Type]): void {
  console.log([name, data]);
}

// sendEvent('addToCart', {name});
// sendEvent('checkout', { name: 'checkout', time: 123 });
// sendEvent('abcd', true);
