import { useState } from "react";
import { LEGENDS_QUOTES } from "../constants/index.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Legends = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalQuotes = LEGENDS_QUOTES.length;

    const prevQuote = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalQuotes - 1 : prevIndex - 1));
    };

    const nextQuote = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalQuotes - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="py-12 text-center">
            <h2 className="text-4xl font-bold mb-8">Legends on Messi</h2>
            <div className="relative max-w-lg mx-auto p-6 rounded-xl shadow-md bg-stone-800">
                <button onClick={prevQuote} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-stone-700 rounded-full hover:bg-stone-600">
                    <ChevronLeft size={24} />
                </button>
                <div>
                    <img src={LEGENDS_QUOTES[currentIndex].image} alt={LEGENDS_QUOTES[currentIndex].name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                    <h3 className="text-xl font-semibold">{LEGENDS_QUOTES[currentIndex].name}</h3>
                    <p className="text-sm text-stone-400">{LEGENDS_QUOTES[currentIndex].title}</p>
                    <p className="text-stone-300 italic mt-3">"{LEGENDS_QUOTES[currentIndex].quote}"</p>
                </div>
                <button onClick={nextQuote} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-stone-700 rounded-full hover:bg-stone-600">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default Legends;
