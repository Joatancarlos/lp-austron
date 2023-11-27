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
            src=""
            alt="Ilustrações de um e-commerce"
            width={500}
            height={500}
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
      </main>
    </div>
  )
}
