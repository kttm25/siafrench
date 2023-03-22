import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './styles/index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Découvrir Lit - 5 min⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      {/* First section start */}
      <div className={styles.home_header}>
        <div className={styles.home_text}>
          <h1><span>Sia French</span>,<br /> Votre guide pour découvrir la
            plateforme de stockage décentralisé<span> Sia</span>
          </h1>
          <Link to='/docs/introduction'>
          <button>Commencer</button>
          </Link>
        </div>

        <div className={styles.home_image}>
          <img src='img/cuate.png' alt='home image' />
        </div>

      </div>
      {/* First section end */}

      {/* Second section start */}
      <div className={styles.home_section2}>
        <div>
          <img src='img/bro.png' alt='cour image' />
        </div>
        <div  className={styles.section2_text}>
        <h1>
          <span>Des cours,</span><br/>
          détaillés et approfondis pour permettre aux plus profanes de comprendre le fonctionement de la plateforme Blockchain <br/><span style={{color:"white"}}>Sia</span>
        </h1>
        </div>
      </div>
      {/* Second section end */}

      {/* Third section start */}
      <div className={styles.home_section3}>
      <div className={styles.home_text}>
          <h1>
          <span>Des tutoriels,</span><br/>intéractifs pour vous aider a expérimenter et prendre en main les outils que vous propose<br/><span>Sia</span> 
          </h1>
          <button>Découvrir</button>
        </div>

        <div>
          <img src='img/rafiki.png' alt='home image' />
        </div>

      </div>
      {/* Third section end */}

      {/* Fourth section start */}
      <div className={styles.home_section4}>
      <div>
          <img src='img/bropic.png' alt='cour image' />
        </div>
        <div  className={styles.section2_text}>
        <h1>
        <span>Des noeuds publics,</span><br/>a haute latence et grandes disponibilités pour vous permettre d’obtenir des données en provenance de la Blockchain Sia<br/><span style={{color:"white"}}>Sia</span>
        </h1>
        </div>
      </div>
      {/* Fourth section end */}
    </Layout>
  );
}
