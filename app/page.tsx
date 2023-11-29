import Image from "next/image";
import { Button } from "./ui/button";
import { dataOffers } from "./lib/dataOffers";
import { dataWork } from "./lib/dataWork";
import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";
import Offer from "./ui/offer";
import Link from "next/link";
// import './globals.css'

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto blob1-bg">
      <header className="flex justify-between items-center px-11">
        <Logo />
        <NavLinks />
        <div className="flex justify-between w-40">
          <Button>Registre-se</Button>
          <Button>Entrar</Button>
        </div>
      </header>
      <main className="px-11">
        {/* Apresentação */}
        <section className="flex justify-between my-20">
          <div className="w-[30rem]">
            <h1
              className="font-bold text-6xl tracking-tighter leading-[4.5rem] capitalize mb-4">
              desperte seu potencial empreendedor;
            </h1>
            <p className="font-semibold w-80 mb-4">
              Seu negócio, suas regras. Venda online e viva a vida dos seus sonhos. Comece agora com a Austron.
            </p>
            <Button
              className="rounded-full bg-[#f51357] px-6 py-3 text-white font-bold"
            >Alcance o Sucesso!</Button>
          </div>
          <Image
            src="/images/3d-rendered-ecommerce.webp"
            alt="Ilustrações de um e-commerce"
            width={700}
            height={500}
            className="mt-[-60px]"
          />
        </section>
        {/* O que oferece */}
        <section>
          <ul className="flex flex-wrap justify-between my-20">
            { dataOffers.map(({ image, title, text }) => {
              return (
                <li key={title}>
                  <Offer
                    image={image}
                    title={title}
                    text={text}
                    heightImg={100}
                    widthImg={100}
                  />
                </li>
              )
            }) }
          </ul>
        </section>
        {/* Oportunidade para o sucesso */}
        <section className="flex justify-around my-20 items-center">
          <div className="w-96">
            <h2 className="font-semibold text-4xl capitalize mb-3">
              sua oportunidade para o sucesso;
            </h2>
            <p className="text-center">
              Criamos a ponte definitiva entre vendedores visionários e fornecedores de elite. Austron é mais que uma plataforma - é o caminho acelerado para lucros extraordinários e conquista de mercado. Entre para o jogo dos grandes. Austron é onde ambição encontra oportunidade.
            </p>
          </div>
          <Image
            src="/images/foguete.png"
            alt="Ilustração de um foguete decolando"
            width={300}
            height={350}
          />
        </section>
        {/* Transforme */}
        <section className="flex justify-around items-center">
          <Image 
            src="/images/5224471.png"
            alt="Ilustração de uma pessoa com um notebook"
            width={600}
            height={600}
            className="bg-[url(/images/blob1.svg)] bg-[length:80%] bg-center bg-no-repeat "
          />
          <div className="w-64">
            <span className="text-[#9B2FE9] font-bold text-3xl">
              {"// transforme"}
              </span>
            <p className="font-bold text-6xl tracking-tighter leading-[4.5rem] capitalize mb-4">
              Clique em Conquistas.
            </p>
          </div>
        </section>
        {/* Como funciona */}
        <section className="">
          <div className="text-center my-20">
            <span className="text-[#9B2FE9] font-normal text-3xl block mb-8">
              {`"E como funciona?"`}
            </span>
            <h2 className="font-bold text-6xl tracking-tighter mb-4">
              É tudo muito simples;
            </h2>
          </div>
          <div className="mt-48">
            <div className="relative">
              <div className="absolute top-[-60px] w-full px-10">
                <ul className="flex flex-wrap justify-between text-white">
                  { dataWork.map(({ image, title, text }) => {
                    return (
                      <li key={title}>
                        <Offer
                          image={image}
                          title={title}
                          text={text}
                          widthImg={210}
                          heightImg={210}
                        />
                      </li>
                    )
                  }) }
                </ul>
              </div>
              <Image 
                src="/images/wave.svg"
                alt="figura com efeito de onda na cor lilás"
                width={1200}
                height={300}
              />
            </div>
            <div className="bg-[#9B2FE9] pt-60 pb-10 text-white">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/money1.png"
                  alt="Ilustração de duas cédulas de dinheiro"
                  width={150}
                  height={150}
                />
                <h2 className="font-bold text-4xl tracking-tighter my-7">
                  Abra as portas do seu futuro
                </h2>
                <div className="flex justify-between w-2/3 m-auto">
                  <p className="w-1/3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sit magnam omnis inventore perferendis amet eum dicta praesentium impedit doloremque maxime minus facere excepturi vitae molestias ad optio, dignissimos fugit!
                  </p>
                  <p className="text-end w-1/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi dolorem corporis, magnam voluptatibus vero, cum, reiciendis earum labore eaque facere porro atque illum minus. Beatae quae consequatur deleniti necessitatibus?
                  </p>
                </div>
                <Button
                  className="rounded-full bg-[#f51357] w-96 py-3 my-8 text-white font-bold"
                >
                  Alcance o Sucesso!
                </Button>
                <Link href="/" className="capitalize underline underline-offset-2">
                  ou entre em contato conosco
                </Link>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}
