import { useEffect, useState } from "react";

const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 20));

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, 30);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">{count}+</h2>
            <p className="text-gray-400 text-lg">{label}</p>
        </div>
    );
};

export default Counter