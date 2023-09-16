import React from "react";
import Header from "./Header";
import Page from "./Page";

function App() {

  return (
    <>
      <div className="h-screen overflow-y-scroll bg-[#88b2c4]">
        {/* Header */}
        <Header />

        {/* Page */}
        <Page />

        {/* Email */}
        <div className="flex w-full justify-center bg-[#f3eee8] mt-[5rem] md:mt-0 h-[50%]">
          <img src="https://chungiyoo.com/img/arrow-small.svg" alt="Arrow mark" className="w-[2rem] h-[4rem] md:w-[4rem] md:h-[7rem] relative mt-0 mb-8 md:mt-8 z-10" />
        </div>
      </div>
    </>
  );
}

export default App;
