import Head from 'next/head';
import Hero from '../Sections/Layout/SectionHero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* add favicon href */}
        <link rel="icon" href="" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}