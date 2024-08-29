import React from 'react';
import { getDriveUrlById } from '../utils';

export default function Experience() {
  return (
    <div className=" mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
      <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className=" mb-10" key={`experience${exp.company}`}>
            <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
              <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                <img
                  className="max-h-full max-w-full transform cursor-pointer rounded-md transition ease-in hover:scale-105"
                  src={
                    exp.img ||
                    'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                  }
                  alt=""
                  onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
                />
              </div>

              <div className="flex-1 cursor-pointer">
                <div className="text-lg font-bold md:text-lg">{exp.company}</div>
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="text-md md:text-md font-semibold text-gray-600">
                    {exp.position}
                  </div>
                  <div className="font-semibold text-sm">{exp.date}</div>
                </div>
              </div>
            </div>

            <div className=" pl-4 tracking-wide text-sm text-gray-500">
              <ul className="list-disc">
                {exp.details.map((detail, index) => (
                  <li key={`exp-details${index + exp.company}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Web Development',
    company: 'Skill Intern india',
    details: [
      'Worked on Amazon Prime Clone Project, in Javascript and Java to plan, todesign and develop the Front-end.',
      'Working with third-party APIs to fetch data or integrate external services into your web applications.',
      'learn popular frontend frameworks/libraries like React.js, Express and node.js',
    ],
    date: 'May 2023 - Jun 2023',
    img: '',
    companyUrl: '',
  },
  {
    position: 'Full Stack Development',
    company: 'Code Blind Technologies',
    details: [
      'Designed and implemented a file processor service utilizing java.nio to facilitate the seamless update of trading holiday, order details, and fund information from CSV files into a MySQL database.',
      'Contributed to migrating the IPO backend service from Node.js to Spring Boot, enhancing concurrency and strengthening platform reliability within the Java ecosystem, resulting in improved performance and scalability.',
      'Contributed to enhancing the user interface of mutual funds and IPO applications, leveraging React.JS for development.',
    ],
    date: 'Jan 2022 - Jul 2023',
    img: 'https://codebindtechnologies.com/wp-content/uploads/2018/07/codebin-why-page.png',
    companyUrl: 'https://codebindtechnologies.com/',
  },
  {
    position: 'Android App Development with IOT',
    company: 'NSIC - Technical Service Center',
    details: [
      'Learning Android application development with IoT integration can encompass a range of topics and skills. Understanding the fundamentals of Android app development, including user interface design, activities, fragments, intents, and the Android application lifecycle.',
      'Created a app using an IOT.',
    ],
    date: 'Jun 2023 - July 2023',
    img: '',
    companyUrl: 'https://www.nsic.co.in/',
  },
  {
    position: 'Full-Stack Developer Intern',
    company: 'CoftSoft',
    details: [
      'Developed a Vendor Management System and Auction Platform, incorporating secure authentication with Auth0. Utilized Express.js, React.js, and Redux for efficient implementation.',
      'Built a globally-serving platform catering to top multinational corporations.',
    ],
    date: 'Aug 2021 - Oct 2021',
    img: getDriveUrlById('1KZ58TeoC6spgG2HIJUwE8OTCyqR8bw-Q'),
    companyUrl: 'http://www.sorceotech.com/',
  },
];
