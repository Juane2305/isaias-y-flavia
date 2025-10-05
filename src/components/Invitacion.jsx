import cancion from "../assets/song.mp3";
import Countdown from "./Countdown";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";
import { GalleryPraga } from "./GalleryPraga";
import LugaresPraga from "./LugaresPraga";
import hojasVerdes2 from "../assets/hojasVerdes2.svg";
import hojasVerdesIzq from "../assets/hojasVerdesIzq.svg";

const Invitacion = () => {


  const targetDate = new Date("2025-11-15T20:30:00-03:00");

  const colorPrincipal =  "#a4bba4"

  return (
    <div className="w-full relative font-modernaText overflow-hidden">
        <div className="absolute">
          <MusicScreen cancion={cancion} />
        </div>
      <div className="relative flex items-center justify-center h-screen w-full text-center bg-fondo-praga-mobile md:bg-fondo-praga bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black" />
        <img 
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1759509409/Disen%CC%83o_sin_ti%CC%81tulo_75_qidoqc.jpg" 
          alt="Fondo nombres" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
        />
        <div
          data-aos="fade-in"
          className="relative z-10 flex flex-col items-center text-center"
        >
          <p className="text-md md:text-xl uppercase tracking-widest text-white mb-5 font-montserrat">
            ¡Nos Casamos!
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 font-tangerine">
            Isaías &amp; Flavia
          </h1>
          <p className="text-lg md:text-xl text-white font-montserrat">15 / 11 / 2025</p>
        </div>
      </div>
      <div>
          <section
            id="contador"
            className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
          >
            <Countdown
              containerClasses={
                "w-full flex flex-col justify-center items-center gap-y-5 font-montserrat"
              }
              targetDate={targetDate}
            />
          </section>
        
        <LugaresPraga
            linkCeremonia="https://maps.app.goo.gl/ti4NALQacYfefyg76"
            nombreIglesia="Registro Civil Cruz del Eje"
            horaIglesia="20:30 hs"
            linkCivil="https://maps.app.goo.gl/6LYqpiG6wb2zK1Hq9"
            linkFiesta="https://maps.app.goo.gl/zcGyeoDYEedXEP4t9"
            nombreSalon="Salón Luz y Fuerza"
            horaFiesta="21:00 hs"
            horaCivil="21:00hs"
            claseContainer="flex flex-col md:flex-row items-center justify-center gap-8 my-8 font-montserrat"
            claseTexto="text-gray-900"
        />
        
          <div className="bg-[#a4bba4] text-center text-white relative font-montserrat px-3">
            <GoogleCalendarButton
              background={{backgroundColor: colorPrincipal}}
              titleCalendar="Casamiento de Isaías y Flavia"
              fechaComienzo="20251115T203000"
              fechaFin="20251116T050000"
              salon="Registro Civil Cruz del Eje"
              imgClass="text-white"
              buttonClass="bg-white hover:bg-transparent text-gray-800 hover:text-white border-white"
            />
          </div>
          <div className="relative">
          <img
              src={hojasVerdesIzq}
              alt="Decoración"
              className="absolute left-[-80px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
              <DressCode dress_code="Elegante Sport" />
            <img
              src={hojasVerdes2}
              alt="Decoración"
              className="absolute right-[-80px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
          </div>
          <Asistencia
            clase="pt-10 bg-fondo-banner font-montserrat"
            claseButton="border-2 py-3 px-6 rounded-full border-gray-800 hover:border-gray-700 hover:bg-white hover:text-gray:800"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLScPuSvMuOogNvBtEunwaQun7BEjqWlC_EiecwWAQxRb67wxPw/viewform?usp=header"
          />
        <TextoFinal textoFinal="Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!  " textClass="font-cormorantGaramond text-2xl text-gray-600 italic"/>
        <TextoFinal textoFinal="Eclesiastés 4:12" textClass="font-cormorantGaramond text-xl text-gray-600 italic"/>
        
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
