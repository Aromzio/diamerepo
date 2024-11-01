"use client"
import Image from "next/image";
import HeartButton from "./componentes/corazones";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-emerald-200 to-emerald-50">
      <main className="">
        <h1 className="flex row text-2xl p-10 text-pink-400">¡¡Feliz Aniversario Mi Amor!!</h1>

        <div className="flex row px-5 text-sm items-center">
          <p>Hoy hace un año, me propusiste ser tu novio, sin embargo yo era tuyo desde la primera vez en que hablamos. No hay palabras, ni expresiones que me hagan poder hacerte entender la cantidad de cosas que producis en mi y todo lo que me motivas.<br/> Sos una mujer unica en todos los aspectos, tu voz tan sutil y dulce, tus ojos cafe almendrados me sumergen en un completo sueño, tus hermosos labios con una forma y textura exquisitas me vuelven adicto, tu nariz tan esplendida hace que tu rostro luzca simplemente divino, tu piel tan fina, tu cuerpo tan idealmente proporcionado, la forma tan tierna en la que reaccionas, el modo en el que hablas de las cosas que te gustan, tu forma de defender tus pensamientos, lo sensible que sos y todo lo que te haga ser vos me hacen sentirme el novio mas afortunado del mundo.<br/> Gracias por amarme, gracias por escucharme, gracias por ser vos, gracias por permitirme ser tu novio, gracias por entenderme, gracias por compartir tu vida conmigo.
         <br/>Te amo Diamela, quiero tenerte en mi futuro por el resto de mi vida, quiero seguir mejorando como hombre y persona junto a tu lado, quiero verte feliz, quiero ver como logras todos tus objetivos y sueños, quiero estar siempre que me necesites, quiero ver siempre tu sonrisa. Quiero que siempre seas mi princesa, mi preciosa, mi mundo... el amor de toda mi vida. </p> 
        </div>
        <div>
         <HeartButton/> 
        </div>
      </main>
    </div>
  );
}
