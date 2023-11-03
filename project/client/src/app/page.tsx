'use client'
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled, { keyframes } from 'styled-components';
import quadra from '../../public/quadra.jpg';
import Button from './components/Button';
import Collapse from './components/Collapse';
import Header from './components/Header';



interface DonationData {
  id: number;
  value: number;
  currency: string;
}

const donations: DonationData[] = [
  { id: 1, value: 25, currency: 'BRL' },
  { id: 2, value: 50, currency: 'BRL' },
  { id: 3, value: 75, currency: 'BRL' },
];

export default function Home() {

  const publishableKey =
    'pk_test_51O8KzzIaPYcQYvtPqtwWXQSBefHxtMgDt4TrCMLxYZxpyCPxOhEuyQQq2varsCNDTcotmw5K9bp4JjaYoWFBPbVd004HQWogM5';
  const [donation, setDonation] = useState({
    name: 'Doação',
    price: 25,
  });
  const priceForStripe = donation.price * 100;

  const payNow = async (token) => {
    try {
      const { name, email } = token;
      const userData = { name, email };

      const response = await axios({
        url: "http://localhost:3001/create-checkout",
        method: "post",
        data: {
          amount: donation.price * 100,
          token,
          userData,
        },
      });

      if (response.status === 200) {
        console.log("Sucesso");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header />
      <div className="container-hero">
        <Image src={quadra} alt="Quadra poli esportiva" />
        <div className="container-text">
          <h1>
            Reforme Nossa Quadra: Junte-se a nós!
          </h1>
          <p>Bem-vindo à nossa campanha! Estamos empolgados em compartilhar esta emocionante iniciativa com você, onde buscamos transformar nossa quadra esportiva em um lugar ainda mais incrível para nossa comunidade. </p>
          <Collapse
            title="Por Que Reformar Nossa Quadra?"
            content="Nossa quadra é o coração de nosso bairro, onde famílias se reúnem, amigos se encontram e as crianças aprendem a jogar. No entanto, para continuar a ser um local vibrante e seguro, precisamos de sua ajuda para realizar reformas tão necessárias. Com sua contribuição, seremos capazes de melhorar as instalações, garantindo que todos desfrutem de um espaço esportivo de qualidade."
          />
          <Collapse
            title="Como Você Pode Contribuir"
            content="Na nossa página de lançamento (LP), você encontrará diversas opções de valores para doação, permitindo que você escolha o montante que melhor se adapte ao seu orçamento. Qualquer quantia, grande ou pequena, faz a diferença. Sua generosidade nos aproxima ainda mais de nosso objetivo."
          />
          <StripeCheckout
            stripeKey={publishableKey}
            label="Fazer doação"
            name="Pagar com cartão de crédito"
            currency="BRL"
            ComponentClass="div"
            billingAddress
            shippingAddress
            amount={priceForStripe}
            description={`Valor da doação $${donation.price}`}
            token={payNow}>
            <Button
              text="Doar R$25"
              color="#333333"
              background="#ffff"
              border="1px solid rgba(0, 0, 255, 0.2)"
              borderRadius="10px"
            />
          </StripeCheckout>
        </div>
      </div>
    </Container>
  )
}

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Container = styled.main`

.next-section {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;
   margin-top: 100px;
   margin-bottom: 100px;

   @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 50px;
   }
 }

 .icon-down {
   margin-top: 200px;
   animation: ${moveUpDown} 2s ease-in-out infinite;

   @media (max-width: 1024px) {
    margin-top: 40px;
   }
 }

 .container-hero {
  display: flex;
  justify-content: space-around;
  padding: 25px;
  margin-top: 45px;

  img {
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;

    img {
      width: 100%;
      object-fit: contain;
      margin-bottom: 60px;
    }
  }
 }

 .container-text {
  width: 650px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    width: fit-content;
    margin-bottom: 30px;
  }

  h1 {
    color: #f1f2f3;
  }

  p {
    word-break: keep-all;
    width: 550px;

    @media (max-width: 1024px) {
    width: fit-content;
  }
  }
 }

`


