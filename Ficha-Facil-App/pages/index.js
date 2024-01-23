import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Button from '../components/button';

export default function Home() {
    
  const [buttonText, setButtonText] = useState('Tenho interesse');

    const changeButton = () => {
      setButtonText('Obrigado pelo seu apoio!');
    };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ficha Fácil</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          E se fosse possível comprar fichas do Restaurante Universitário com Pix? 
        </h1>

        <div className={styles.grid}>
            <h2>Diga-nos se você tem interesse na proposta 😃</h2>
            <h3>Precisamos da sua opinião para darmos andamento ao projeto </h3>

            <div>
              <Button onClickFunction={changeButton} />
            </div>

        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
