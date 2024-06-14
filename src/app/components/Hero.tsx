import React from 'react';
import Image from 'next/image';
import OrderButton from './OrderButton';

const Hero: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      background: '#000',
    }}>
      <Image
        src="/hero.png" // Replace with your image path
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        style={{
            opacity: 0.6,
        }}
      />
      <div style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '8rem',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
      }}>
        <h1 style={{
          fontSize: '3.6rem',
          color: '#fff',
          fontWeight: 400,
          width: '100%',
          paddingInline: '1rem',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
        }}>
          Lotus Blossom
        </h1>
        <OrderButton />
      </div>
    </div>
  );
};

export default Hero;
