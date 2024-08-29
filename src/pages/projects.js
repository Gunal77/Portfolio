import React from 'react';
import Starbucks from '../assets/Starbucks.png';
import DinoGame from '../assets/dinoGame.png';
import ChatBot from '../assets/Amazon.png';
import AmazonPrime from '../assets/Amazon.png';


export default function Projects() {
  return (
    <div className=" relative overflow-hidden bg-slate-50" id="projects">
      <div className=" mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
        <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
          Projects
        </div>

        <div className="overflow-x-auto space-x-4 no-scrollbar snap-x-mandatory">
        <div className='flex gap-4 py-4 snap-start'>
        {projects.map((proj, index) => {
            return (
              <div className="space-y-4 bg-white p-4 shadow-md min-w-[300px]" key={`project${index}`}>
                <div className="relative h-32 overflow-hidden border-b">
                  {/* <img alt="" src={proj.img} className="absolute left-0 my-auto w-full "></img> */}
                  <img alt="" src={proj.img} className="absolute left-0 my-auto w-full "></img>
                </div>
                <div className="text-2xl text-cyan-500">{proj.title}</div>
                <div className="h-20 overflow-y-auto text-xs font-light text-gray-400">
                  {proj.details}
                </div>
                <div className="flex items-center justify-end space-x-4 opacity-40">
                  {proj.links.map((link, index) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="flex h-5 cursor-pointer items-center text-2xl text-gray-500"
                        key={`project-link${index + proj.title}`}
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Starbucks',
    details:
    'Designing a fully functional application using JavaScript and React.React hooks for state management and implemented drag-and-drop functionality for an intuitive user experience.',
    img: Starbucks,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://starbucks-gunal.vercel.app/',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/Gunal77/Starbucks',
      },
    ],
  },
  {
    title: 'Dino Game',
    details: "Designing a simple dinosaur game in JavaScript, similar to the Chrome Dino game, can be a fun project.",
    img: DinoGame,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://dino-game-gunal.vercel.app/',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'hhttps://github.com/Gunal77/dino-game',
      },
    ],
  },
  {
    title: 'Amazon Prime Clone',
    details:
      'A web app that will bridge the gap between waste donors and waste collectors and will have a huge positive impact on collection of recyclable waste.',
    img: AmazonPrime,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://amazon-prime-clone-gunal.vercel.app/',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/Gunal77/Amazon-prime-clone',
      },
    ],
  },
  {
    title: 'ChatBot',
    img: ChatBot,
    details: 'Designed to Chat user and Solve there Problems Based on Reddit Data set which has more than 3.2 TB of data inspired from Chat GPT',
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://github.com/Gunal77/ChatBot',
      },
      {
        icon: <i className="devicon-github-original"></i>,
        link: 'https://github.com/Gunal77/ChatBot',
      },
    ],
  },
  // {
  //   title: 'Tradenza',
  //   details: 'An Attempt to create a platform that will host a trading contest. Still in progress.',
  //   img: Tradenza,
  //   links: [
  //     {
  //       icon: (
  //         <img
  //           alt=""
  //           src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
  //           className="h-full"
  //         ></img>
  //       ),
  //       link: 'https://60f5901158dfc928b3aef62c--tradenza.netlify.app/',
  //     },
  //   ],
  // },
];
