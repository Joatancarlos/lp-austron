import Image from "next/image";
import { Button } from "./ui/button";
import { dataOffers } from "./lib/dataOffers";
import { dataHowWork } from "./lib/dataHowWork";
import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";
import Offer from "./ui/offer";
import Link from "next/link";
import HowWork from "./ui/howWork";
import Rocket from "./ui/rocket";


export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto bg-[url(/images/blob2.svg)] bg-no-repeat bg-[-155px_-10%] bg-[length:55rem] lg:bg-none">
      <header className="px-6 md:px-11">
        <NavLinks />
      </header>
      <main className="px-6 md:px-11">
        {/* Apresentação */}
        <section className="flex justify-between my-20">
          <div className="w-full md:w-[30rem]">
            <h1
              className="text-center md:text-left font-bold text-5xl tracking-tighter leading-[4.5rem] capitalize">
              desperte seu potencial empreendedor;
            </h1>
            <p className="text-center text-xl md:text-left font-normal md:font-semibold md:w-80 my-10 md:mt-4">
              Seu negócio, suas regras. Venda online e viva a vida dos seus sonhos. Comece agora com a Austron.
            </p>
            <Button
              className="rounded-full bg-[#f51357] w-full md:w-auto px-6 py-3 text-white font-bold shadow-xl transition-all hover:bg-[#da0b49] duration-200"
            >Alcance o Sucesso!</Button>
          </div>
          <Image
            src="/images/3d-rendered-ecommerce.webp"
            alt="Ilustrações de um e-commerce"
            width={700}
            height={500}
            className="hidden md:block mt-[-60px]"
          />
        </section>
        {/* O que oferece */}
        <section>
          <ul className="flex flex-wrap justify-between my-40">
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
        <section className="relative md:static flex justify-around mb-20 items-center">
          <div className="z-50 md:z-0 w-full md:w-96">
            <h2 className="text-center md:text-left font-bold text-4xl capitalize">
              sua oportunidade para o sucesso;
            </h2>
            <p className="text-xl md:text-base text-center md:text-start my-10">
              Criamos a ponte definitiva entre vendedores visionários e fornecedores de elite. Austron é mais que uma plataforma - é o caminho acelerado para lucros extraordinários e conquista de mercado. Entre para o jogo dos grandes. Austron é onde ambição encontra oportunidade.
            </p>
          </div>
          <Rocket />
        </section>
        {/* Transforme */}
        <section className="relative md:static flex justify-around items-center">
          <Image 
            src="/images/5224471.png"
            alt="Ilustração de uma pessoa com um notebook"
            width={600}
            height={600}
            className="bg-[url(/images/blob1.svg)] bg-[length:80%] bg-center bg-no-repeat ml-[-230px] md:ml-0"
          />
          <div className="absolute top-10 right-0 md:static w-72 md:w-64 text-end md:text-start">
            <span className="text-[#9B2FE9] font-bold text-3xl">
              {"// transforme"}
              </span>
            <p className="font-bold text-5xl md:text-6xl tracking-tighter leading-[4.5rem] capitalize my-4">
              Cliques 
              <span className="block md:my-2">
                em
              </span>
              Conquistas.
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
              <Image 
                src="/images/wave.svg"
                alt="figura com efeito de onda na cor lilás"
                width={1200}
                height={300}
              />
              <div className="md:absolute bg-[#9B2FE9] md:bg-inherit mt-[-60px] md:mt-0 top-[-60px] w-full px-10">
                <ul className="flex flex-wrap justify-between text-white">
                  <li>
                    <HowWork
                      image="/images/box.png"
                      title="Você vende..."
                      text="Escolha os produtos e compartilhe-os online. Seja nas redes sociais, campanha de marketing ou aplicativos, você tem total liberdade para criar campanhas que atraem e engajam."
                      widthImg={200}
                      heightImg={180}
                    />
                  </li>
                  <li>
                    <HowWork
                      image="/images/sino.png"
                      title="Recebemos o pedido..."
                      text="Assim que você consegue uma venda, nós entramos em ação. Nossa equipe recebe o pedido e cuida de todos os detalhes. Você não precisa se preocupar com estoque, processamento de pedidos ou logística."
                      widthImg={150}
                      heightImg={160}
                    />
                  </li>
                  <li>
                    <HowWork
                      image="/images/box.png"
                      title="Fornecedores Enviam!"
                      text="Uma vez que o pedido é recebido, os fornecedores se encarregam da logistica. Preparamos, embalamos e enviamos o produto diretamente para o cliente. Rápido, eficiente e sem complicações. Você não precisa se preocupar com nenhuma etapa da entrega."
                      widthImg={200}
                      heightImg={180}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#9B2FE9] pt-20 md:pt-40 pb-10 text-white">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/money1.png"
                  alt="Ilustração de duas cédulas de dinheiro"
                  width={150}
                  height={150}
                  className="moneyShadow mb-[-40px]"
                />
                <h2 className="font-bold text-3xl md:text-4xl tracking-tighter my-7">
                  Abra as portas do seu futuro
                </h2>
                <div className="flex flex-wrap md:flex-nowrap justify-between md:w-2/3 m-auto px-6 md:p-0">
                  <p className="text-center md:text-start md:w-1/3 pb-8 md:pb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sit magnam omnis inventore perferendis amet eum dicta praesentium impedit doloremque maxime minus facere excepturi vitae molestias ad optio, dignissimos fugit!
                  </p>
                  <p className="text-center md:text-end md:w-1/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi dolorem corporis, magnam voluptatibus vero, cum, reiciendis earum labore eaque facere porro atque illum minus. Beatae quae consequatur deleniti necessitatibus?
                  </p>
                </div>
                <Button
                  className="rounded-full bg-[#f51357] w-96 py-3 my-8 text-white font-bold shadow-2xl transition-all hover:bg-[#da0b49] duration-200"
                >
                  Alcance o Sucesso!
                </Button>
                <Link href="/" className="capitalize underline underline-offset-2 hover:no-underline ">
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
