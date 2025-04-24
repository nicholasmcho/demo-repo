// import { useState } from "react";
import IMAGES from "./Images/Images";

function App() {
  // const [count, setCount] = useState(0);
  {
    /* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
  }
  return (
    <>
      <div
        id="header"
        className="w-full h-1/6 justify-center-safe p-10 border-b flex flex-row"
      >
        <input type="text"></input>
        <div className="grid grid-rows-1 grid-cols-5 gap-4 ">
          <div className="col-span-1 flex-none tag">
            <h1>nicholas cho</h1>
            <span>full stack developer</span>
          </div>
          <div className="tag">
            <a className="border">about</a>
          </div>
          <div className="tag">
            <a className="border">experience</a>
          </div>
          <div className="tag">
            <a className="border">projects</a>
          </div>
          <div className="tag">
            <a className="border">contact</a>
          </div>
        </div>
      </div>
      <div
        id="main-page"
        className="p-10 border-2 h-3/4 justify-center-safe justify-items-center-safe grid grid-cols-2"
      >
        <div className="">
          <div
            id="tooltip-profile"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-xs opacity-0 tooltip"
          >
            Hi, I'm Nicholas!
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <img
            data-tooltip-target="tooltip-profile"
            className="w-96 h-96 rounded-full ring-2"
            src={IMAGES.profile}
            alt="Headshot"
          />
        </div>
        <div>
          <h2 className="font-medium text-2xl">Nicholas Cho</h2>
          <h3 className="font-light text-xl">A little bit about me.</h3>
          <p className="font-extralight">
            Highly skilled and versatile Full Stack Developer with 2+ years of
            experience building scalable, accessible web applications for
            government clients. Adept in React, Node.js, Flask, and Microsoft
            Azure, with a strong focus on CI/CD pipelines and Agile
            methodologies. Known for delivering exceptional user experiences in
            a fast-paced, collaborative environment with strengths in
            problem-solving, critical thinking, communication, and adaptability.
            Committed to learning continuously and leveraging emerging
            technologies to optimize development processes.
          </p>
        </div>
      </div>
      <div
        id="footer"
        className="w-full h-1/12 justify-center-safe p-10 border-b-2 flex flex-row"
      >
        <span>2025</span>
      </div>
    </>
  );
}

export default App;
