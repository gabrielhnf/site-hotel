"use client"

import instagram from "@/public/icons/instagram.svg";
import whatsapp from "@/public/icons/whatsapp-tile.svg"
import airbnb from "@/public/icons/airbnb-tile.svg";
import close from "@/public/icons/closebrown.svg";

import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";

const Contato = () => {

    return(
        <div className="relative flex h-[calc(100vh_-_4rem)] sm:h-[calc(100vh_-_5rem)]">

            <div className="relative flex flex-col items-center justify-evenly
                            w-full h-1/2 mb-auto mt-[25%] mx-2
                            sm:w-2/3 sm:h-1/2 sm:mx-auto sm:my-auto
                            md:w-2/3 md:h-2/3 md:mx-auto md:my-auto
                            lg:w-2/3 lg:h-2/3 lg:mx-auto lg:my-auto
                            xl:w-1/3
                            px-2 bg-white shadow-2xl rounded-2xl"
                 style={{animation: "pulseIn 0.5s forwards"}}>

                <h1 className="font-brittany text-[#754927]
                               text-3xl
                               md:text-4xl
                               lg:text-5xl my-10">Contatos</h1>

                <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Tem algum problema? Não hesite em nos procurar!</h1>

                <h1 className="text-[#754927]
                               text-md text-center
                               md:text-xl">Selecione um dos meios de contato!</h1>
            
                <div className="flex flex-row justify-evenly items-center
                                w-[16rem] gap-x-5
                                md:w-[20rem]
                                lg:w-[24rem]" style={{aspectRatio: "2 / 1"}}>

                    <Link href="https://wa.me/12981975865?text=Oi%2C queria tirar dúvidas sobre o apartamento 304 de itaguá." className="w-1/3 h-fit" target="__top">
                        <button className="flex flex-col items-center justify-evenly
                                           w-full h-fit
                                           bg-white
                                           transition-transform hover:scale-105 active:scale-100">
                            <Image src={whatsapp} alt="Casa" className="h-[50%] w-fit rounded-2xl"/>
                            <p className="max-w-[90%] text-ellipsis overflow-hidden text-[#754927]">Whatsapp</p>
                        </button>
                    </Link>

                    <Link href="https://www.instagram.com/ap304itagua" className="w-1/3 h-fit" target="__top">
                        <button className="flex flex-col items-center justify-evenly
                                           w-full h-fit
                                           bg-white
                                           transition-transform hover:scale-105 active:scale-100">
                            <Image src={instagram} alt="Casa" className="h-[50%] w-fit rounded-2xl"/>
                            <p className="max-w-[90%] text-ellipsis overflow-hidden text-[#754927]">Instagram</p>
                        </button>
                    </Link>

                    <Link href="https://www.airbnb.com.br/rooms/1237030016386778277" className="w-1/3 h-fit" target="__top">
                        <button className="flex flex-col items-center justify-evenly
                                           w-full h-fit
                                           bg-white
                                           transition-transform hover:scale-105 active:scale-100">
                            <Image src={airbnb} alt="Casa" className="h-[50%] w-fit rounded-2xl"/>
                            <p className="max-w-[90%] text-ellipsis overflow-hidden text-[#754927]">Airbnb</p>
                        </button>
                    </Link>

                </div>

                <button className="absolute top-5 right-5 w-fit h-fit" onClick={() => redirect("/guia", RedirectType.push)}>
                    <Image src={close} alt="Voltar" className="h-[1.5rem] sm:h-[2.5rem] w-fit"/>
                </button>

            </div>
        </div>
    )

}

export default Contato;