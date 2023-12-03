/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';
import { Stripe } from 'stripe';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  stripe: {
    secret_key: process.env.STRIPE_SECRET_KEY,
    public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
