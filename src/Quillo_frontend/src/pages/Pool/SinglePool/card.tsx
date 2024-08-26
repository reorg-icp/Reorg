
import React from "react";
import { PoolData } from "../types";

const Card: React.FC<Partial<PoolData>> = ({
  tokens,
  tradingFeeRate,
  volatilityCoefficient,
  historicalData,
  volume24h,
}) => {
  return (
    <div className="bg-[#121935]  text-[#5486C4] rounded-md md:w-[350px] w-full  ">
      <div className="bg-[#1F2946] space-y-2 mb-4 w-full px-2 py-4 rounded-t-md border border-[o.15px] border-blue-300 ">
        <h2 className="text-sm text-[##8b9ac9] font-semibold mb-2">Distribution of tokens</h2>
        {tokens.map((token, index) => (
          <div
            key={index}
            className="flex justify-between font-light items-center "
          >
            <div className="flex items-center ">
              <img
                src="https://metrics.icpex.org/images/edypu-bqaaa-aaaak-afknq-cai.png"
                className="w-5 h-5 rounded-full mr-1 "
              ></img>
              <span className="text-sm font-small mr-1">{token.name}..</span>
              <span className="text-sm ">{token.percentage}</span>
            </div>
            <div className="flex  flex-col items-center font-leagueSpartan">
              {/* <span className="text-xs ">{token.amount}</span> */}
              {/* {token.locked && <span className="ml-1 text-xs">(0🔒)</span>} */}
              <span className="text-sm flex items-center ">
                {token.amount} M ( 0{" "}
                <span
                  role="img"
                  aria-label="lock"
                  className="anticon anticon-lock"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="lock"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1156 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z"></path>
                  </svg>
                </span>
                )
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 px-2  py-2 w-full">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col w-full">
            <h3 className=" whitespace-nowrap">
              Trading Fee Rate
            </h3>
            <p className="text-gray-100 text-lg font-semibold">{tradingFeeRate}</p>
          </div>
          <div className="flex  flex-col w-full">
            <h3 className=" whitespace-nowrap">TVL</h3>
            <p className="text-gray-100 text-lg font-semibold">${historicalData.tvl[0].value} K</p>
          </div>
        </div>
        <div className="flex  flex-row  gap-12 ">
          <div className=" flex flex-col w-full ">
            <h3 className=" whitespace-nowrap">
              Volatility Coefficient
            </h3>
            <p className="text-gray-100 text-lg font-semibold">{volatilityCoefficient}</p>
          </div>
          <div className=" flex flex-col w-full">
            <h3 className="  whitespace-nowrap">Volume 24H</h3>
            <p className="text-gray-100 text-lg font-semibold">{volume24h}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
