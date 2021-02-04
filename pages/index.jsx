import Head from 'next/head'
import Button from '../components/button';
import { ImFacebook2, ImInstagram, ImYoutube } from 'react-icons/im';
import Navbar from '../components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-0 m-0 is-12">
      <Head>
        <title>Sigla - Festa Cristã</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section id="home" className="mt-6" style={{
        width: '100vw',
        minHeight: '60vh',
        backgroundColor: '#12022E',
        backgroundImage: "url('./images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="column is-12-mobile is-4-desktop px-5 py-6 is-flex is-align-items-center is-justify-content-center is-flex-direction-column is-offset-4-desktop">
          <h1 className="is-size-2 mt-6 is-size-3-mobile has-text-weight-bold has-text-green">
            Sigla : Um projeto digno para O Senhor
          </h1>
          <p className="has-text-grey my-3 is-size-5">
            Um evento para nossos irmãos e irmãs
            celebrarem nosso maior bem, o amor de nosso
            senhor!
          </p>
          <div className="column my-4 is-12 has-text-centered">
            <Button text="Saber mais" />
          </div>
          <div className="column is-12 is-flex is-align-items-center is-justify-content-center">
            <ImFacebook2 className="is-size-3 is-size-3-mobile has-text-purple is-clickable" />
            <ImInstagram className="is-size-3 is-size-3-mobile mx-3 has-text-purple is-clickable" />
            <ImYoutube className="is-size-2 is-size-2-mobile has-text-purple is-clickable" />
          </div>
        </div>

      </section>

      <section className="column is-12 has-text-centered px-3 py-6" style={{ backgroundColor: 'white' }}>
        <Image src="/images/sigla.png" height="400px" width="400px" />
      </section>

      <section className="column is-12 px-3 py-6" style={{ backgroundColor: '#12022E' }}>
        <div className="column is-6-desktop is-offset-3-desktop ">
          <h2 className="is-size-3 is-size-4-mobile has-text-green has-text-weight-bold">
            João
          </h2>
          <h3 className="is-size-4 is-size-5-mobile has-text-dark-green has-text-weight-bold">
            13:34-35
          </h3>
          <p className="has-text-grey is-size-5 my-3">
            "Novo mandamento vos dou : que vos ameis uns aos outros ; assim vos amei, que também vos ameis uns aos outros. 
            Nisto conhecerão todos que sois meus discípulos: se tiverdes amor uns aos outros. "
          </p>
        </div>

      </section>


    </div>
  )
}
