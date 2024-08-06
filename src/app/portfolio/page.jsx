"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CiLink } from "react-icons/ci";
import "./styles.css";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Ecommerce Store",
    desc: "Welcome to our modern E-commerce Store, featuring a React and TypeScript frontend with advanced data management and a robust Node.js backend using Express. Firebase handles authentication, while MongoDB manages data. Stripe ensures secure transactions. With NodeCache for optimization and hosted on render.com.",
    img: "/ecommerce.png",
    link: "https://github.com/suryanshhh28/ecommerce-store-frontend",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Data Insights",
    desc: "This project leverages LSTM neural networks with TensorFlow and Keras to perform stock price prediction, customer churn analysis, and credit card fraud detection. It integrates these models into a user-friendly web application using Streamlit, providing real-time insights and predictions in a seamless, interactive interface.",
    img: "/datainsights.png",
    link: "https://github.com/suryanshhh28/DataInsights",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "D-Crypto",
    desc: "Are you fascinated by the world of cryptocurrencies, but find it challenging to keep track of the ever-changing prices, trends, and latest developments? Look no further! D-crypto is an innovative web application built with React and Chakra UI that empowers users to dive deep into the realm of digital currencies effortlessly.",
    img: "/dcrypto.png",
    link: "https://github.com/suryanshhh28/D-Crypto",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Your Books",
    desc: "You can search your favourite book and read it online by clicking on it, using the google's API, this project provides you the best possible results.",
    img: "/yourbooks.png",
    link: "https://github.com/suryanshhh28/Your-Books",
  },
  {
    id: 6,
    color: "from-red-300 to-green-300",
    title: "Tinder Clone",
    desc: "This Tinder clone, developed with Next.js, utilizes a Neo4j database and GraphQL for efficient data management and querying. It features a sophisticated matching algorithm designed to increase compatibility, ensuring that users are matched accurately and frequently with potential partners. The application provides a sleek, user-friendly interface for an enhanced dating experience.",
    img: "/tinder.png",
    link: "https://github.com/suryanshhh28/tinder-clone",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative no-scrollbar" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-md font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-46 md:w-86 md:h-54 lg:w-[400px] lg:h-[250px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded flex gap-1 items-center justify-center">
                      Github
                      <CiLink />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Still here?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                -------------------Full Stack Developer------------------
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me?
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
