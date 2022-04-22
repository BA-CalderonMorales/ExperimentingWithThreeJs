import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link.js';

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        My Three JS Experiments
        <p className={styles.description}>
          Brought to you by: <a href="https://nextjs.org">Next.js!</a>&nbsp;
          &amp;&nbsp;<a href="https://threejs.org">ThreeJs</a>
        </p>
      </h1>

      <p style={{marginTop: '-1rem'}} className={styles.description}>
        Experiments
      </p>
      <ul style={{marginTop: '-2rem'}}>
        {/* Box */}
        <li style={{listStyleType: 'none', marginLeft: '-2rem'}}>
          <Link href="/experiment-one/experiment-one">
            <a><code className={styles.code}>experiment-one</code></a>
          </Link>
          <ul>
              <li style={{fontSize: '14px', listStyleType: 'none'}}>
                Making a box
              </li>
          </ul>
        </li>
        {/* Sphere */}
        <li style={{listStyleType: 'none', marginLeft: '-2rem', marginTop: '2rem'}}>
          <Link href="/experiment-two/experiment-two">
            <a><code className={styles.code}>experiment-two</code></a>
          </Link>
          <ul>
            <li style={{fontSize: '14px', listStyleType: 'none'}}>
              Making a sphere
            </li>
          </ul>
        </li>
      </ul>

      <div className={styles.grid}>
        <h2>Helpful Next.js Tools Below</h2>
        <p>For anyone to reference when trying or extending any of these experiments.</p>
      </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
          <h2>Deploy &rarr;</h2>
          <p> Instantly deploy your Next.js site to a public URL with Vercel. </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
  );
}