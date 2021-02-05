import Head from 'next/head'
import React, { useEffect } from 'react';
import Button from '../components/button';
import { ImFacebook2, ImInstagram, ImYoutube, ImWhatsapp, ImMail } from 'react-icons/im';
import Navbar from '../components/navbar';
import Image from 'next/image';
import 'glider-js/glider.min.css';
import Glider from 'react-glider';



export default function Home() {
  const year = new Date().getFullYear();
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
            <Button onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=553584788656&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20evento%20Sigla", "_blank");
            }} text="Saber mais" />
          </div>
          <div className="column is-12 is-flex is-align-items-center is-justify-content-center">
            <a href="">
              <ImFacebook2 className="is-size-3 is-size-3-mobile has-text-purple is-clickable" />
            </a>
            <a target="__blank" href="https://www.instagram.com/siglaevento/">
              <ImInstagram className="is-size-3 is-size-3-mobile mx-3 has-text-purple is-clickable" />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCg07O74cAtGAs08hL6_yL2w">
              <ImYoutube className="is-size-2 is-size-2-mobile has-text-purple is-clickable" />
            </a>
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

      <section id="produtos" className="column is-12 px-3 py-6">
        <div className="column is-6-desktop is-offset-3-desktop ">
          <h2 className="is-size-3 is-size-4-mobile has-text-purple has-text-weight-bold">
            Produtos
          </h2>
          <h3 className="is-size-4 is-size-5-mobile has-text-dark-purple has-text-weight-bold">
            Espalhe o amor com nossa linha
          </h3>
          <div className="column is-12">
            <Glider scrollLock={true} responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 'auto',
                  itemWidth: 150,
                  duration: 0.25
                }
              }
            ]} hasArrows={true} draggable={true}>
              <div className="column p-4 ">
                <div className="is-align-items-center is-justify-content-center is-flex " style={{ borderRadius: '20px', backgroundColor: 'white' }}>
                  <Image src="/images/mockup-camiseta.png" height="300px" width="300px" />
                </div>
              </div>
              <div className="column p-4 ">
                <div className="is-align-items-center is-justify-content-center is-flex " style={{ borderRadius: '20px', backgroundColor: 'white' }}>
                  <Image src="/images/mockup-camiseta.png" height="300px" width="300px" />
                </div>
              </div>
            </Glider>
          </div>
          <div className="column my-4 is-12 has-text-centered">
            <Button onClick={() => {
              window.open('https://api.whatsapp.com/send?phone=553584788656&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20do%20evento%20sigla', '__blank')
            }} color="#8148F5" text="Quero agora!" />
          </div>
        </div>

      </section>

      <section id="agenda" className="column is-12 px-3 py-6" style={{ backgroundColor: '#12022E' }}>
        <div className="column is-6-desktop is-offset-3-desktop ">
          <h2 className="is-size-3 is-size-4-mobile has-text-green has-text-weight-bold">
            Agenda
          </h2>
          <div className="column px-0 is-12 is-flex is-align-items-center is-justify-content-space-between">
            <p className="has-text-weight-bold is-size-4 is-size-5-mobile has-text-white">
              04/02/2021
            </p>
            <p className="is-size-5  is-size-6-mobile has-text-white">
              das 15:00-20:00
            </p>
          </div>
          <div className="column my-3 is-12 has-text-centered">
            <a target='__blank' href="https://www.instagram.com/siglaevento/" style={{ textDecoration: 'underline' }} className="has-text-purple is-flex is-justify-content-center has-text-weight-bold is-align-items-center">
              <ImInstagram className="is-size-4 is-size-5-mobile mx-3 is-clickable" />
              <p className="is-size-5">
                Mais informações
                </p>
            </a>
          </div>
        </div>
      </section>

      <section id="patrocinadores" className="column is-12 px-3 py-6">
        <div className="column is-6-desktop is-offset-3-desktop ">
          <h2 className="is-size-3 is-size-4-mobile has-text-purple has-text-weight-bold">
            Patrocinadores
          </h2>
          <h3 className="is-size-4 is-size-5-mobile has-text-dark-purple has-text-weight-bold">
            Junte-se a nós no link abaixo
          </h3>
          <div className="column is-12">
            <Glider scrollLock={true} responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 'auto',
                  itemWidth: 150,
                  duration: 0.25
                }
              }
            ]} hasArrows={false} draggable={true} >
              <div className="column p-4 ">
                <div className="is-align-items-center is-justify-content-center is-flex " style={{ borderRadius: '20px', backgroundColor: 'white' }}>
                  <Image src="/images/patrocinadores/300.jpeg" height="300px" width="300px" />
                </div>
              </div>
              <div className="column p-4 ">
                <div className="is-align-items-center is-justify-content-center is-flex " style={{ borderRadius: '20px', backgroundColor: 'white' }}>
                  <Image src="/images/patrocinadores/fernanda-motta.jpeg" height="250px" width="300px" />
                </div>
              </div>
            </Glider>
          </div>
          <div className="column my-4 is-12 has-text-centered">
            <Button onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=553584788656&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20os%20patroc%C3%ADnios%20do%20evento%20%22Sigla%22!", "_blank");
            }} color="#8148F5" text="Quero patrocinar!" />
          </div>
        </div>
      </section>

      <section id="contato" className="column is-12 px-3 py-6" style={{ backgroundColor: '#12022E' }}>
        <div className="column is-6-desktop is-offset-3-desktop ">
          <h2 className="is-size-3 is-size-4-mobile has-text-green has-text-weight-bold">
            Contato
          </h2>
          <h3 className="is-size-4 is-size-5-mobile has-text-dark-green has-text-weight-bold">
            Como quer falar conosco?
          </h3>
          <div className="column is-12 has-text-centered is-flex is-align-items is-justify-content-center">
            <a href="mailto:siglaam@gmail.com" >
              <ImMail className="is-size-2 has-text-purple is-clickable" />
            </a>

            <a target="__blank" href="https://api.whatsapp.com/send?phone=553584788656&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20evento%20Sigla">
              <ImWhatsapp className="is-size-2 ml-4 has-text-green is-clickable" />
            </a>
          </div>
        </div>
      </section>

      <section className="column is-12 has-text-centered px-3 py-6" style={{ backgroundColor: 'white' }}>
        <div className="column is-12 is-6-desktop is-offset-3-desktop">
          <p className="has-text-dark-purple is-size-5">
            "Somos importantes geração levando amor.
            Á paz é o nosso lema trabalhamos com vigor .
            Juntos esperamos um novo amanhã e Cristo é a razão da nossa União"
          </p>
        </div>
      </section>

      <footer className="is-12 column" style={{backgroundColor: '#1A072B'}}>
        <div className="column is-12 is-flex is-align-items-center is-justify-content-center">
          <a href="">
            <ImFacebook2 className="is-size-3 is-size-3-mobile has-text-green is-clickable" />
          </a>
          <a target="__blank" href="https://www.instagram.com/siglaevento/">
            <ImInstagram className="is-size-3 is-size-3-mobile mx-3 has-text-green is-clickable" />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCg07O74cAtGAs08hL6_yL2w">
            <ImYoutube className="is-size-2 is-size-2-mobile has-text-green is-clickable" />
          </a>
        </div>
        <div className="column is-12 has-text-centered">
            <Image src="/images/logo.png" alt="Logo Sigla" height="80px" width="300px" />
        </div>
        <div className="column is-12 has-text-centered">
          <p className="has-text-weight has-text-white is-size-5 is-size-6-mobile">
            SIGLA - {year}
          </p>
        </div>
      </footer>

    </div>
  )
}
