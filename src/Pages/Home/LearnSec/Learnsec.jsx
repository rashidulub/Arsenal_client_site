import learn1 from '../../../assets/slider/slider4.png'
import { Fade, Slide } from "react-awesome-reveal";

const LearnSec = () => {
  return (
    <div>
      <div className="mx-auto text-center lg:my-20 md:w-4/12 ">

        <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Learn Sports</h3>
      </div>
      <div className="hero lg:min-h-[250px] lg:my-12">
        <div className="hero-content flex-col lg:flex-row-reverse  p-10 lg:px-20">
          <img src={learn1} className="lg:max-w-sm  mr-16 lg:rounded-full shadow-2xl" />
          <div>
            <Slide>
              <h1 className="text-5xl font-bold  text-yellow-500">Lets Start!</h1>
            </Slide>

            <Fade delay={1e3}  damping={1e-1}>

              <p className="py-6 text-white">Make your business shine online with a custom car website designed just for you by a professional designer. Need ideas? We’ve collected some amazing examples of car websites from our global community of designers. Get inspired and start planning the perfect car web design today.</p>
            </Fade>


          </div>
        </div>
      </div>
    </div>

  );
};

export default LearnSec;