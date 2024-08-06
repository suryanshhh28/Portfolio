"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Sury</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            ansh
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        <Link target="_blank" href="https://github.com/suryanshhh28">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/suryansh-chaudhary-2ba888217/"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link target="_blank" href="https://x.com/twtsuryansh">
          <Image src="/twitter.png" alt="" width={24} height={24} />
        </Link>
        <Link target="_blank" href="https://leetcode.com/suryanshnevercodes">
          <Image src="/leetcode.png" alt="" width={24} height={24} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/sssuryanshhh/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/playlist/3FTxPDubZtm6mmoKjoxetc?si=00dfd7344ae5453d"
        >
          <Image src="/spotify.png" alt="" width={24} height={24} />
        </Link>
        <Link target="_blank" href="https://www.chess.com/member/demonnknight">
          <Image src="/chess.png" alt="" width={16} height={16} />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className=""
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
