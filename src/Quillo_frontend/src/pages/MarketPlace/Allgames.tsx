import { Quillo_backend, createActor } from "../../declarations/Quillo_backend";
import { usePlugWallet } from "../../store";
import { useEffect, useState } from "react";

const Allgames = () => {
  const { plug } = usePlugWallet((state) => state);
  const [games, setGames] = useState([]);

  const agent = plug?.agent; // use plug's agent so that caller is authenticated user
  console.log(agent);
  console.log(`Type of agent is ${typeof agent}`);

  let actor = Quillo_backend;
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", { agent });

  async function getGames() {
    try {
      let response = await actor.get_projects();
      console.log(response[0][1].system_params.project_details[0].tokenomics[0].token_image)
      setGames(response);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  useEffect(() => {
    getGames(); // call getGames on component mount
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-center text-primary text-3xl font-bold mb-8">All Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
          >
            <h2 className="text-primary text-2xl font-bold mb-4">
              {game[1].system_params.project_details[0].project_name}
            </h2>

            <div className="mb-4">
              <h3 className="text-text_primary text-xl font-semibold">Tokenomics</h3>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 mr-4">
                  <img
                    src={`data:image/jpeg;base64,${game[1].system_params.project_details[0].tokenomics[0].token_image}`}
                    alt="Token"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-secondary text-lg">
                  {game[1].system_params.project_details[0].tokenomics[0].token_name} (
                  {game[1].system_params.project_details[0].tokenomics[0].token_symbol})
                </span>
              </div>
              <p className="text-text_secondary">
                Total Supply: {Number(game[1].system_params.project_details[0].tokenomics[0].total_supply)}
              </p>
              <p className="text-text_secondary">
                Transfer Fee: {Number(game[1].system_params.project_details[0].tokenomics[0].transfer_fee)} %
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allgames;
