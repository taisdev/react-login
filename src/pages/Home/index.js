import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Nav from '../../components/Header'

export default function Home() {
  return (
    <>
    <Nav />
    <Container>
      <Title>Home</Title>
    </Container>
    </>
  );
}
