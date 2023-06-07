import learn1 from '../../assets/home/cardoctor.png'
const LearnSec = () => {
    return (
        <div>
            <div className="mx-auto text-center lg:my-20 md:w-4/12 ">
                <p className="text-yellow-600 font-bold mb-2">---Check it Out---</p>
                <h3 className="text-3xl uppercase border-y-4 py-4">Featured Item</h3>
            </div>
            <div className="hero lg:min-h-[250px] lg:my-12">
  <div className="hero-content flex-col lg:flex-row-reverse  p-10 lg:px-20">
    <img  src={learn1} className="lg:max-w-sm  mr-16 lg:rounded-full shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold  text-yellow-500">Lets Start!</h1>
      <p className="py-6">Make your business shine online with a custom car website designed just for you by a professional designer. Need ideas? We’ve collected some amazing examples of car websites from our global community of designers. Get inspired and start planning the perfect car web design today.</p>
      
    </div>
  </div>
</div>
        </div>

    );
};

export default LearnSec;