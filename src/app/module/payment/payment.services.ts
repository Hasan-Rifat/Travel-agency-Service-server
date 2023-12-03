import { stripe } from '../../../config';

const CreatePayment = async (data: { amount: number }) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount * 100,
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    payment_method_types: ['card'],
  });

  return paymentIntent.client_secret;
};

export const PaymentService = {
  CreatePayment,
};
