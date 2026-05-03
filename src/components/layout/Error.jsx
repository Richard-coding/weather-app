import React, { useContext } from "react";
import Retry from "../../assets/images/icon-retry.svg?react";
import Header from "../../components/layout/Header";
import ErrorIcon from "../../assets/images/icon-error.svg?react";
import { WeatherContext } from "../../context/WeatherContext";

const Error = () => {
  const { selected, request } = useContext(WeatherContext);

  const handleRetry = () => {
    request(selected); // tenta novamente
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center text-center gap-6 mt-16">
        <ErrorIcon className="w-12 h-[50px]" />
        <p className="text-preset-4">Something went wrong.</p>
        <p>
          We couldn’t connect to the server (API error). Please try again in a
          few moments.
        </p>
        <button
          className="flex gap-[10px] items-center bg-neutral-800 px-4 py-3 rounded-8"
          onClick={() => handleRetry()}
        >
          <Retry className="w-4 h-4" /> Retry
        </button>
      </div>
    </>
  );
};

export default Error;
