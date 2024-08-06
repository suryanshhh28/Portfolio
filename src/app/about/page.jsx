"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/brain";
import Link from "next/link";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const projectsRef = useRef();
  const isProjectsRefInView = useInView(projectsRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0% " }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl ">ABOUT ME</h1>
            <p className="text-lg">
              I am a Full Stack Developer and a final-year Computer Science
              student with a keen interest in web development, artificial
              intelligence, and problem-solving. My academic journey and
              hands-on experience have equipped me with a robust understanding
              of both front-end and back-end technologies. I am passionate about
              creating innovative solutions and continuously expanding my
              knowledge in these dynamic fields. I look forward to connecting
              with professionals and organizations where I can further hone my
              expertise and make meaningful contributions :)
            </p>
            <span className="italic">
              We fall down and we stand up, continuing this cycle until our soul
              departs from our body.
            </span>
            {/* SIGN SVG  */}
            <div className="self-end">
              <p>~</p>
              <svg
                width="125"
                height="100"
                viewBox="0 0 666 645"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="666" height="645" fill="none" />
                <path
                  d="M74 342C113.93 321.808 155.117 304.071 192.167 278.611C223.618 256.998 250.449 231.358 270.222 198.444C280.565 181.228 295.76 152.925 294 131.389C293.033 119.562 278.362 118.178 269.333 120.111C241.768 126.014 219.155 150.709 202.611 171.389C175.267 205.569 156.69 243.879 146.556 286.444C138.583 319.93 137.044 354.829 135.667 389.056C134.533 417.229 139.109 459.168 111.778 477.389C81.8552 497.337 60.5916 453.661 51.5556 431.833C45.9339 418.253 39.2734 400.718 39.6667 385.444C39.725 383.18 40.9988 378.171 44.3333 378.778C48.9174 379.611 53.3818 386.29 55.4444 389.667C63.7766 403.305 68.4775 419.197 73.1111 434.333C77.2526 447.862 80.7142 461.501 84.1111 475.222C84.7671 477.872 84.7388 479.698 87.3889 480.556C106.192 486.639 119.93 459.868 128.5 447.889C139.94 431.9 150.779 415.236 159.667 397.667C162.266 392.528 165.064 386.715 166.222 381C167.661 373.903 167.145 365.871 165.556 358.833C165.344 357.895 164.767 355.066 165 356C165.803 359.212 165.81 364.719 166 367.556C166.863 380.408 167 393.238 167 406.111C167 408.905 167.275 410.731 170.333 411.444C174.972 412.527 179.276 407.636 181.667 404.444C192.98 389.344 199.834 370.769 206 353.167C210.393 340.626 217 324.559 217 310.722C217 296.834 218.358 338.487 220 352.278C220.719 358.318 220.459 372.941 223.667 379C226.296 383.967 231.666 370.891 234.333 365.944C243.244 349.419 250.355 331.935 255.889 314C258.641 305.08 263.022 292.325 262.444 282.5C261.825 271.962 239.382 292.454 244.556 293.833C254.36 296.448 264.459 284.71 269.222 277.944C273.036 272.527 275.476 266.036 279.056 260.667C279.969 259.296 279.697 263.91 279.778 265.556C280.03 270.702 279.872 275.853 280.056 281C280.206 285.205 282.461 284.202 285 281.556C297.079 268.963 302.49 249.392 308.611 233.5C309.309 231.687 314.009 218.545 314.111 219.389C315.102 227.565 314.772 239.01 318.667 246.389C324.47 257.385 340.767 222.269 341.278 220.722C344.492 210.989 345.869 201.038 346.778 190.889C347.316 184.884 347.347 185.837 348.556 193.611C356.468 244.513 360.991 298.651 344.333 348.333C340.901 358.571 337.909 364.899 332.278 373.444C330.256 376.512 325.617 383.238 323.778 375.444C319.937 359.169 322.25 339.392 324.444 323.333C328.616 292.804 337.009 263.415 348.889 235C356.618 216.513 366.229 198.847 376.667 181.778C377.986 179.621 379.357 177.496 380.667 175.333C381.731 173.576 385.602 169.703 383.556 169.889C378.461 170.352 363.458 198.846 363.389 199C358.226 210.438 352.592 232.55 373.222 232.778C395.634 233.025 389.842 191.53 389 178C388.588 171.386 388 164.854 388 158.222C388 148.234 392.207 177.751 394.111 187.556C395.551 194.972 396.967 202.433 397.833 209.944C397.964 211.075 397.804 213.17 399.556 211.444C412.049 199.141 415.942 175.502 419.111 159.111C419.303 158.119 421.183 144.737 421.444 145.556C425.564 158.476 428.39 173.114 429 186.667C429.045 187.664 428.79 190.548 428.444 189.611C426.789 185.119 428.056 176.635 428.556 172.556C431.008 152.533 436.309 131.311 452.111 117.556C459.073 111.495 460.733 113.765 464.222 121.333C466.591 126.47 472.616 147.333 478.111 132.889C480.142 127.55 490.701 77.518 475.556 82.2222C470.099 83.9169 462.765 92.955 470 97C486.85 106.42 509.202 102.169 523.333 118.111C530.634 126.347 528.908 136.252 524.333 145.167C523.391 147.002 515.264 161.862 510.667 153.556C504.526 142.46 506.813 123.391 507.722 111.778C509.008 95.3546 512.299 79.529 516.111 63.5555C520.542 44.9908 522.093 26.9948 518.222 8.1111C517.793 6.01698 515.579 -0.014769 516.111 2.05555C518.849 12.7019 523.406 23.3563 526.667 33.7778C537.354 67.9328 544.096 101.202 547.556 136.667C547.625 137.383 547.901 143.947 547.5 137.056C546.806 125.121 547.706 113.004 549.667 101.222C551.95 87.503 555.26 56.9077 572.667 52.4444C574.966 51.855 577.07 53.0873 579.222 53.6667C586.71 55.6827 594.458 56.5931 602.222 56.2222C608.378 55.9281 614.52 54.7067 620.167 52.2222C624.178 50.4573 620.624 52.8503 618.333 55.1111C497.906 173.964 373.064 288.313 247.889 402.111C174.211 469.093 98.1209 534.416 30.5 607.722C21.3218 617.672 11.8267 627.504 4.33333 638.778C-7.75771 656.968 38.1038 610.99 53.7778 595.778C166.218 486.651 278.696 378.123 395.667 273.778C474.139 203.775 554.385 136.092 635.778 69.5555C641.933 64.5235 648.168 59.5874 654.278 54.5C657.328 51.9601 666.808 45.4242 662.944 46.3333C658.347 47.4152 651.622 54.4741 648.111 57.1111C642.526 61.3056 636.726 66.758 630 69"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* SCROLL SVG  */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                EJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Typescript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postgres
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REST API
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Neo4j
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postgres
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Github
              </div>
            </motion.div>
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* PROJECTS  */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={projectsRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isProjectsRefInView ? { x: "0" } : {}}
              className="font-bold text-2xl"
            >
              PROJECTS
            </motion.h1>
            <motion.div
              className=""
              initial={{ x: "-300px" }}
              animate={isProjectsRefInView ? { x: "0" } : {}}
            >
              {/* PROJECT LIST ITEM  */}
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Ecommerce Store
                  </div>
                  <ul className="flex flex-col gap-0">
                    <li>
                      <div className="p-3 text-sm italic">
                        1. MERN stack ecommerce store
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        2. Used NoSQL MongoDB + Firebase + Caching for fast
                        access
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        3. Stripe payment gateway, for payments
                      </div>
                    </li>
                  </ul>
                  <div className="text-red-400 text-sm font-semibold">
                    January 2024
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3"></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    D-Crypto
                  </div>
                  <ul className="flex flex-col gap-0">
                    <li>
                      <div className="p-3 text-sm italic">
                        1. Fetch latest crypto prices
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        2. Get details about market as well as exchanges
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        3. Made with React.js and Love {"<3"}
                      </div>
                    </li>
                  </ul>
                  <div className="text-red-400 text-sm font-semibold">
                    July 2023
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Data Insights
                  </div>
                  <ul className="flex flex-col gap-0">
                    <li>
                      <div className="p-3 text-sm italic">
                        1. Machine learning comes into picture
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        2. Credit Card Fraud Detection, Stock Price analysis
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        3. Customer churn and little bit Python
                      </div>
                    </li>
                  </ul>
                  <div className="text-red-400 text-sm font-semibold">
                    June 2023
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3"></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Tinder Clone
                  </div>
                  <ul className="flex flex-col gap-0">
                    <li>
                      <div className="p-3 text-sm italic">
                        1. I never found a match, so I made my own tinder
                        algorithm
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        2. Used Neo4j graph database to match people, with
                        GraphQL
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        3. Authentication + Authorization supported
                      </div>
                    </li>
                  </ul>
                  <div className="text-red-400 text-sm font-semibold">
                    July 2024
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Your Books
                  </div>
                  <ul className="flex flex-col gap-0">
                    <li>
                      <div className="p-3 text-sm italic">
                        1. Search for a book and read it for free XD
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        2. React.js with REST API
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        3. Nothing much here, just read and enjoy
                      </div>
                    </li>
                  </ul>
                  <div className="text-red-400 text-sm font-semibold">
                    July 2024
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3"></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Portfolio
                  </div>
                  <ul className="flex flex-col gap-0">
                    <li>
                      <div className="p-3 text-sm italic">
                        1. Yeah yeah, this is my portfolio :/
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        2. This project taught me Next.js :D
                      </div>
                    </li>
                    <li>
                      <div className="p-3 text-sm italic">
                        3. Updating regularly!
                      </div>
                    </li>
                  </ul>
                  <div className="text-red-400 text-sm font-semibold">
                    August 2024
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden sticky top-0 z-30 lg:block w-1/3 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
