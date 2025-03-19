import ballon from "../assets/images/ballon.jpg"
import laliga from "../assets/images/laliga.jpg"
import ucl from "../assets/images/ucl.jpg"
import fifa from "../assets/images/fifa.jfif"
import barca from "../assets/barca.png"
import argen from "../assets/argen.png"
import psg from "../assets/psg.png"
import mad from "../assets/mad.webp"
import france from "../assets/france.webp"
import brazil from "../assets/brazil.png"


import maradona from "../assets/maradona.jfif"
import pele from "../assets/pele.avif"
import pep from "../assets/pep.jpg"
import zal from "../assets/zaltan.jfif"
import arda from "../assets/arda.webp"


export const CONTENT = "From the streets of Rosario to the grandest stages of world football, I have always played with passion, humility, and dedication. With over two decades in the sport, I have been fortunate to win multiple Ballon d'Ors, lift the World Cup, and set records that define an era. At 36, my journey continues still striving, still competing, still chasing greatness." 



export const ACHIEVEMENTS = [
    {
        title: "Ballon d'Or Wins",
        count: 8,
        image: ballon, 
        description: "Record 8-time winner of football's most prestigious award.",
    },
    {
        title: "UEFA Champions League Titles",
        count: 4,
        image: ucl,
        description: "Won four UCL trophies with Barcelona, dominating European football.",
    },
    {
        title: "La Liga Titles",
        count: 10,
        image: laliga,
        description: "Secured 10 La Liga championships, shaping Barcelona’s golden era.",
    },
    {
        title: "FIFA World Cup",
        count: 1,
        image: fifa,
        description: "Led Argentina to victory in the 2022 FIFA World Cup in Qatar.",
    },
];


export const BEST_MATCHES = [
    {
        id: 1,
        teams: {
            left: { name: "Barcelona", logo: barca, score: 6 },
            right: { name: "PSG", logo: psg, score: 1 }
        },
        messiGoals: 2,
        date: "March 8, 2017",
        competition: "UEFA Champions League",
        link: "https://www.google.com/search?q=Barcelona+vs+PSG+2017"
    },
    {
        id: 2,
        teams: {
            left: { name: "Argentina", logo: argen, score: 3 },
            right: { name: "France", logo: france, score: 3 }
        },
        messiGoals: 2,
        date: "December 18, 2022",
        competition: "FIFA World Cup Final",
        link: "https://www.google.com/search?q=Argentina+vs+France+2022+World+Cup+Final"
    },
    {
        id: 3,
        teams: {
            left: { name: "Barcelona", logo: barca, score: 3 },
            right: { name: "Real Madrid", logo: mad, score: 2 }
        },
        messiGoals: 2,
        date: "April 23, 2017",
        competition: "El Clásico - La Liga",
        link: "https://www.google.com/search?q=Barcelona+vs+Real+Madrid+2017+El+Clasico"
    },
    {
        id: 4,
        teams: {
            left: { name: "Argentina", logo: argen, score: 4 },
            right: { name: "Brazil", logo: brazil, score: 3 }
        },
        messiGoals: 3,
        date: "June 9, 2012",
        competition: "International Friendly",
        link: "https://www.google.com/search?q=Argentina+vs+Brazil+2012"
    }
];

export const LEGENDS_QUOTES = [
    {
        name: "Pep Guardiola",
        title: "Former Barcelona Manager",
        image: pep,
        quote: "Don't try to explain him, don't try to write about him; just watch him."
    },
    {
        name: "Diego Maradona",
        title: "Argentine Football Legend",
        image: maradona,
        quote: "I have seen the player who will inherit my place in Argentine football, and his name is Messi."
    },
    {
        name: "Pelé",
        title: "Brazilian Football Legend",
        image: pele,
        quote: "I like Messi a lot; he's a great player. Technically, we're practically at the same level."
    },
    {
        name: "Zlatan Ibrahimović",
        title: "Former Teammate at FC Barcelona",
        image: zal,
        quote: "Messi does not need his right foot. He only uses the left, and he's still the best in the world."
    },
    {
        name: "Arda Turan",
        title: "Turkish International",
        image: arda,
        quote: "Lionel Messi could play in any era, as could Di Stefano, Pelé, Maradona, and Cruyff."
    }
];
