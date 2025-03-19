import hero from "../assets/hero.jpg";
import { CONTENT } from "../constants";
import Counter  from "./subcomponents/Counter";


const Hero = () => {
    return (
        <div className='pb-4 lg:mb-32'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <img
                            src={hero}
                            alt="hero"
                            className="rounded-3xl border-2 border-stone-700 hover:shadow-xs hover:shadow-blue-50"
                            width={400} height={400}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:items-start mt-7'>

                        <h1 className="text-5xl lg:text-8xl tracking-tighter pb-4">Lionel Messi</h1>

                        <span className="bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-transparent text-2xl tracking-tight">
                            Argentine footballer
                        </span>

                        <p className="mt-5 mb-2 lg:mt-6 lg:mb-7  leading-relaxed">
                            {CONTENT}
                        </p>

                        <div className="flex gap-10 ">
                            <Counter end={800} label="Total Career Goals"/>
                            <Counter end={44} label="Total Trophies Won" />
                        </div>

                        <button className="mt-8 bg-gradient-to-br from-stone-300 to-white p-4 rounded-full  text-stone-900 font-semibold cursor-pointer">
                            Watch Latest Match
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
