import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  // YAxis,
  // Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "./card";

const data = {
  volume: [
    { name: "Aug 24", value: 437.09 },
    { name: "Aug 25", value: 859.9 },
  ],
  tvl: [
    { name: "Aug 24", value: 15150 },
    { name: "Aug 25", value: 15780 },
  ],
  transactions: [
    { name: "Aug 24", value: 320 },
    { name: "Aug 25", value: 512 },
  ],
};
const cardData = {
  tokens: [
    { name: "DOGM", percentage: "100.00%", amount: "336.58 M ", locked: true },
    { name: "ICP", percentage: "0.00%", amount: "941.25", locked: false },
  ],
  tradingFeeRate: "0.30%",
  tvl: "$15.73 K",
  volatilityCoefficient: "0.5",
  volume24h: "$568.53",
};

const SinglePool: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<
    "volume" | "tvl" | "transactions"
  >("volume");

  return (
    <div className="min-h-screen flex    flex-col  w-full text-white md:px-28 px-2  py-8">
      <div className="mb-6">
        <a href="#" className="text-lg text-gray-400 flex items-center space-x-2">
          <span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YXJyb3dfbGVmdDwvdGl0bGU+CiAgICA8ZyBpZD0icGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ3JlYXRlLWEtcG9vbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4OC4wMDAwMDAsIC04Ny4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iZWRpdC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODguMDAwMDAwLCA4NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhcnJvd19sZWZ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0icmVjdGFuZ2xlIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0icGF0aCIgZmlsbD0iIzhCOUFDOSIgcG9pbnRzPSI1LjUwMDAwNzgxIDEzLjAwMDAwNzggMyAxMy4wMDAwMDc4IDQuOTk5OTkyMTkgMTEuMSA4LjEgNy45OTk5OTIxOSA5LjMgOS4xOTk5OTIxOSA3LjM5OTk5MjE5IDExLjEgMjEgMTEuMSAyMSAxMy4wMDAwMDc4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="arrow"/></span><span className="text-gray-400 hover:text-[#8b9ac9]"> Go back</span>
        </a>
      </div>

      <div className="bg-[#121935] flex justify-between items-center mb-6 px-2">
        <div className="flex flex-row gap-4 ">
          <div className="text-xl font-bold flex items-center">
            <div className=" flex  mr-2 ">
             
              <img
                src="/images/donCoin.png"
                alt="DOGMI"
                className="h-6 w-6  "
              />
              <img
                src="/images/icpCoin.png"
                alt="icp"
                className="h-6 w-6  rounded-full "
              />
            </div>
            <h1>DOGMI/ICP</h1>
          </div>
          <span className="  bg-[#1F2946]  text-center w-2/3 py-2  rounded text-xs text-gray-500">
                      private Pool
                      </span>
        </div>
        <div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md mr-2">
            Add Liquidity
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
            Swap
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs">1 DOGMI = 0.0005279 ICP</p>
          <p className="text-xs">1 ICP = 358.42K DOGMI</p>
        </div>
        <div className="text-gray-400 text-xs">398.91B</div>
      </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 mb-6 w-full">
        <Card {...cardData} />

        <div className=" bg-[#121935] px-4  py-4 rounded-lg w-full">
          <div className="flex flex-row  justify-between mb-4 w-full ">

            <div className="flex flex-col font-leagueSpartan ">
              <h2 className=" text-[#8b9ac9] text-base font-leagueSpartan capitalize">{selectedMetric} . &nbsp;</h2>
              <h2 className=" text-white text-xl font-leagueSpartan">$437.09</h2>
              <h2 className=" text-[#8572ff] text-sm font-leagueSpartan"> Aug 25,2024</h2>
            </div>

            <div className="flex flex-row space-x-4  h-10 items-center bg-[#1F2946]  rounded-md ">
              <button

                onClick={() => setSelectedMetric("volume")}
                className={`py-2 px-4 inline-block ${
                  selectedMetric === "volume" ? "bg-indigo-600" :""
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
                  selectedMetric === "transactions"
                    && "bg-indigo-600"
                   
                } rounded`}
              >
                Transactions
              </button>
            </div>
          </div>

          <ResponsiveContainer className="" width="100%" height={200}>
            <BarChart data={data[selectedMetric]}>
              <XAxis dataKey="name" stroke="#ccc" />
              {/* <YAxis stroke="#ccc" /> */}
              {/* <Tooltip /> */}
              <Bar dataKey="value" fill="#7F6DF5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SinglePool;
