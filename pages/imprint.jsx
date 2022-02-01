import React from 'react';
import Container from '@/components/Container';

export default function Imprint() {
  return (
    <Container
      title="Max Grzanna - Imprint"
      description="Imprint for this website"
    >
      <div>
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Max Grzanna
          {' '}
          <br />
          Erfurter Straße
          <br />
          07743 Jena
          {' '}
          <br />
        </p>
        <p>
          <strong>Vertreten durch: </strong>
          <br />
          Max Grzanna
          <br />
        </p>
        <p>
          <strong>Kontakt:</strong>
          {' '}
          <br />
          Telefon: 0162-99540824
          <br />
          E-Mail:
          {' '}
          <a href="mailto:grzannamax@gmail.com">grzannamax@gmail.com</a>
          <br />
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br />
          Max Grzanna
          {' '}
          <br />
          Erfurter Straße
          <br />
          07743 Jena
          {' '}
          <br />
        </p>
        {' '}
        <br />
      </div>
    </Container>
  );
}
