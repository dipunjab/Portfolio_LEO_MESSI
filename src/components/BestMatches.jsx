import { BEST_MATCHES } from "../constants";

const BestMatches = () => {
    return (
        <section className="py-12">
            <h2 className="text-4xl  text-center  mb-8">Best Matches</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                {BEST_MATCHES.map((match) => (
                    <a 
                        key={match.id} 
                        href={match.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block p-6 rounded-xl shadow-sm backdrop-blur-2xl bg-gradient-to-br from-stone-800/10 to-stone-900 transition-transform duration-300 hover:scale-105 hover:shadow-stone-400"
                    >
                        <p className="text-sm text-gray-400">{match.date} - {match.competition}</p>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                                <img 
                                    src={match.teams.left.logo} 
                                    alt={match.teams.left.name} 
                                    className="w-12 h-12 object-contain"
                                />
                                <h3 className="text-lg font-semibold text-white">{match.teams.left.name}</h3>
                            </div>

                            <div className="text-3xl font-bold text-white">
                                {match.teams.left.score} - {match.teams.right.score}
                            </div>

                            <div className="flex items-center space-x-4">
                                <h3 className="text-lg font-semibold text-white">{match.teams.right.name}</h3>
                                <img 
                                    src={match.teams.right.logo} 
                                    alt={match.teams.right.name} 
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                        </div>

                        <p className="mt-4 text-stone-300 font-medium text-center">
                            Messi Goals: <span className="font-bold text-xl">{match.messiGoals}</span>
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default BestMatches;
