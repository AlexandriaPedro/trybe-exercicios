let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.

  console.log('Olá,', order.order.delivery.deliveryPerson, ', entrega para:', order.name, ', Telefone:', order.phoneNumber, ', R.' , order.address.street, ', Nº:', order.address.number, ', AP:', order.address.apartment);
}

customerInfo(order);

function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  let arrayKeysPizza = Object.keys(order.order.pizza);
  let arrayValueDrinkCoke = Object.values(order.order.drinks.coke);

  order.name = 'Luiz Silva';
  order.payment.total = 50.00;

  console.log('Olá,', order.name, ', o valor total de seu pedido de', arrayKeysPizza[0], ',', arrayKeysPizza[1],'e' , arrayValueDrinkCoke[0], 'é R$', order.payment.total);
}

orderModifier(order);