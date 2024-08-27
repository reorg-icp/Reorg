import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  // YAxis,
  // Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "./card";
import { formatId, PoolData, poolData } from "../types";
import TransactionTable from "./TransactionTable";

const SinglePool: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<
    "volume" | "tvl" | "transactions"
  >("volume");

  const { id } = useParams();
  const [pool, setPool] = useState<Partial<PoolData> | null>(null);
console.log({id});
console.log("page");
  useEffect(() => {
    // Filter the data based on the ID from the URL
    const fetchDetails = () => {
      const data = poolData.find((pool) => pool.id === id);
      setPool(data);
    };

    fetchDetails();
  }, [id, poolData]);
  if (!pool) return <div>Loading...</div>;
  return (
    <div className="min-h-screen flex flex-col  w-full text-white md:px-28 px-2  py-8">
      <div className="mb-6">
        <a
          href="#"
          className="text-lg text-gray-400 flex items-center space-x-2"
        >
          <span>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfbGVmdDwvdGl0bGU+CiAgICA8ZyBpZD0icGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ3JlYXRlLWEtcG9vbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4OC4wMDAwMDAsIC04Ny4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iZWRpdC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODguMDAwMDAwLCA4NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhcnJvd19sZWZ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0icmVjdGFuZ2xlIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0icGF0aCIgZmlsbD0iIzhCOUFDOSIgcG9pbnRzPSI1LjUwMDAwNzgxIDEzLjAwMDAwNzggMyAxMy4wMDAwMDc4IDQuOTk5OTkyMTkgMTEuMSA4LjEgNy45OTk5OTIxOSA5LjMgOS4xOTk5OTIxOSA3LjM5OTk5MjE5IDExLjEgMjEgMTEuMSAyMSAxMy4wMDAwMDc4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
              alt="arrow"
            />
          </span>
          <span className="text-gray-400 hover:text-[#8b9ac9]"> Go back</span>
        </a>
      </div>

      <div className="bg-[#121935] flex-col space-y-4 mb-6 px-4 py-4 w-full border border-transparent rounded-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full space-y-4 sm:space-y-0">
          {/* coins with their icons and type of pool */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
            <div className="text-lg sm:text-xl font-bold flex items-center space-x-2">
              <span className="relative flex items-center">
                <img
                  src={pool.tokenImages[0]}
                  alt={pool.tokens[0].name}
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                />
                <img
                  src={pool.tokenImages[1]}
                  alt={pool.tokens[0].name}
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full -ml-2"
                />
              </span>
              <h1 className="ml-2">{pool.tradingPair}</h1>
            </div>
            <span className="bg-[#1F2946] text-center py-1 px-3 rounded text-xs text-gray-400 w-auto">
              {pool.type}
            </span>
          </div>

          {/* id section and share and copy icon */}
          <span className="flex items-center flex-row gap-2 text-sm sm:text-base">
            <p className="text-[#8572ff]">{formatId(pool.id)}</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/images/share.png" className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <img
              src="/images/copy.png"
              className="cursor-pointer h-4 w-4 sm:h-5 sm:w-5"
            />
          </span>

          {/* cycles + add cycles */}
          <span className="flex space-x-1 border border-[0.15px] border-[#8572ff] rounded-md px-2 py-1 text-sm sm:text-base">
            <span className="">{pool.volume24H} B |</span>
            <span className="text-[#8572ff] cursor-pointer">+ Add Cycles</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-start sm:items-center text-gray-100 text-xs sm:text-sm">
            <span className="flex space-x-1 items-center">
              <img
                src={pool.tokenImages[0]}
                alt={pool.tokens[0].name}
                className="h-3 w-3 sm:h-4 sm:w-4 rounded-full"
              />
              <span> {pool.conversionRates.fromCoinAtoCoinB}</span>
            </span>
            <span className="flex space-x-1 items-center">
              <img
                src={pool.tokenImages[1]}
                alt={pool.tokens[1]?.name}
                className="h-3 w-3 sm:h-4 sm:w-4 rounded-full"
              />
              <span>{pool.conversionRates.fromCoinBtoCoinA}</span>
            </span>
          </div>
          {/* button actions */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Link
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-indigo-600 hover:border-indigo-500 rounded-md text-center text-sm"
              to="/pool"
            >
              <button>Add Liquidity</button>
            </Link>
            <Link
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-[#8572ff] hover:bg-indigo-600 rounded-md text-center text-sm"
              to="/dex"
            >
              <button>Swap</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 mb-6 w-full">
        <Card {...pool} />

        <div className=" bg-[#121935] px-4  py-4 rounded-lg w-full">
          <div className="flex flex-row  justify-between mb-4 w-full ">
            <div className="flex flex-col font-leagueSpartan ">
              <h2 className=" text-[#8b9ac9] text-base font-leagueSpartan capitalize">
                {selectedMetric} . &nbsp;
              </h2>
              <h2 className=" text-white text-xl font-leagueSpartan">
                $ {pool.historicalData[selectedMetric][0].value}
              </h2>
              <h2 className=" text-[#8572ff] text-sm font-leagueSpartan">
                {" "}
                {pool.historicalData[selectedMetric][0].name}
              </h2>
            </div>

            <div className="flex md:flex-row  flex-col md:space-x-4 md:space-y-0 space-y-4  md:h-10  mb-mb-0  mb-6 items-center bg-[#1F2946] border border-transparent rounded-md ">
              <button
                onClick={() => setSelectedMetric("volume")}
                className={`py-2 px-4 inline-block ${
                  selectedMetric === "volume" ? "bg-indigo-600" : ""
                } rounded`}
              >
                Volume
              </button>
              <button
                onClick={() => setSelectedMetric("tvl")}
                className={`px-4 py-2 ${
                  selectedMetric === "tvl" && "bg-indigo-600"
                } rounded`}
              >
                TVL
              </button>
              <button
                onClick={() => setSelectedMetric("transactions")}
                className={`px-4 py-2 ${
                  selectedMetric === "transactions" && "bg-indigo-600"
                } rounded`}
              >
                Transactions
              </button>
            </div>
          </div>

          <ResponsiveContainer className="" width="100%" height={200}>
            <BarChart data={pool.historicalData[selectedMetric]}>
              <XAxis dataKey="name" stroke="#ccc" />
              {/* <YAxis stroke="#ccc" /> */}
              {/* <Tooltip /> */}
              <Bar dataKey="value" fill="#7F6DF5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
};

export default SinglePool;
