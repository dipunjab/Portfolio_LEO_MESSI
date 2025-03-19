import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
      <section className="py-12">
          <h2 className="text-4xl  text-center  mb-8">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              {ACHIEVEMENTS.map((item, index) => (
                  <div 
                      key={index} 
                      className="p-6 rounded-xl shadow-lg text-center cursor-pointer backdrop-blur-2xl bg-gradient-to-br from-stone-800/10 to-stone-900 
                      transition-transform duration-300 hover:scale-105 hover:shadow-stone-400 hover:shadow-lg"
                  >
                      <div className="p-4">
                          <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-48 object-contain mx-auto mb-4 rounded-lg" 
                          />
                          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                          <p className="text-3xl font-bold text-stone-200 my-2">{item.count}</p>
                          <p className="text-gray-300">{item.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  );
};

export default Achievements;
