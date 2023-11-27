import Image from "next/image";
import { Button } from "./ui/button";
import { dataOffers } from "./lib/dataOffers"
import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";
import Offer from "./ui/offer";
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
        <section className="flex justify-between my-8">
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
            src="/images/3d-rendered-ecommerce.png"
            alt="Ilustrações de um e-commerce"
            width={750}
            height={500}
            className="mt-[-95px]"
          />
        </section>
        <section>
          <ul className="flex flex-wrap justify-between my-8">
            { dataOffers.map(({ image, title, text }) => {
              return (
                <li key={title}>
                  <Offer
                    image={image}
                    title={title}
                    text={text}
                  />
                </li>
              )
            }) }
          </ul>
        </section>
        <section className="flex justify-around my-20">
          <div className="w-96">
            <h2 className="font-semibold text-4xl capitalize mb-3">
              sua oportunidade para o sucesso;
            </h2>
            <p className="text-center">
              Criamos a ponte definitiva entre vendedores visionários e fornecedores de elite. Austron é mais que uma plataforma - é o caminho acelerado para lucros extraordinários e conquista de mercado. Entre para o jogo dos grandes. Austron é onde ambição encontra oportunidade.
            </p>
          </div>
          <Image
            src=""
            alt="Ilustração de um foguete decolando"
            width={300}
            height={350}
          />
        </section>
        <section className="flex justify-around my-20">
          <Image 
            src="/images/5224471.png"
            alt="Ilustração de uma pessoa com um notebook"
            width={400}
            height={400}
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
      </main>
    </div>
  )
}
