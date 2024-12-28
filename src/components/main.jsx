
import Foods from "./main/foods";
import FreeDelivery from "./main/free-delivery";
import Hero from "./main/hero";

const Main = () => {
  return (
    <div className='flex-1 space-y-8'>
      <Hero />
      <FreeDelivery />
      <Foods />
    </div>
  );
};

export default Main;
