import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51O8KzzIaPYcQYvtPpZSuZprbGNNr4Ae5nLOV0y1DbA3XPoQCpS2d5lDYMJ6Q40adkwREkIh3biub5ekkjdgRCeEN00szRlz78D');
const prisma = new PrismaClient();

export const createCheckout = async (req, res) => {
  const { name, email, donationAmount } = req.body;

  try {
    const checkout = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Doação',
              description: 'Doação para a sua causa'
            },
            currency: 'BRL',
            unit_amount: 25
          },
          quantity: 1,
        }
      ],
      mode: 'payment',
      success_url: 'http://localhost:3001/success',
      cancel_url: 'http://localhost:3001/cancel'
    });

    await prisma.donation.create({
      data: {
        amount: 25,
        user: {
          create: {
            name,
            email,
          },
        },
      },
    });

    return res.json(checkout);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create donation' });
  }
};
