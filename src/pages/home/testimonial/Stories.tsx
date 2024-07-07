import { Button } from "@/components/ui/button";
import React from "react";

const Stories: React.FC = () => {
  //   const stories = [
  //     {
  //       title: "Empowering change",
  //       description:
  //         "Their work inspires hope and real change, fostering sustainable practices for a healthier planet.",
  //       name: "David Lee",
  //       role: "Environmentalist",
  //       image: "davidLee",
  //     },
  //     {
  //       title: "Inspiring commitment",
  //       description:
  //         "Their collaborations create lasting impact and change lives, empowering communities.",
  //       name: "Sarah Johnson",
  //       role: "Activist",
  //       image: "sarahJohnson",
  //     },
  //     {
  //       title: "Impactful work",
  //       description:
  //         "I trust their accountability and ethical practices, ensuring my contributions make a meaningful difference.",
  //       name: "Emily Davis",
  //       role: "Philanthropist",
  //       image: " emilyDavis",
  //     },
  //   ];

  return (
    <div>
      {/* <h1>
        Inspiring <span>stories</span> from supporters
      </h1>
      <p>
       
      </p> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex justify-between">
            {" "}
            <div>
              <h1 className="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-white">
                Inspiring <span className="text-[#E37423] ">stories</span> from
                <span> supporters</span>
              </h1>
              <p className="max-w-2xl mx-auto mt-6  text-gray-500 dark:text-gray-300">
                Discover heartfelt stories from our supporters, <br /> sharing
                their experiences and the impact of our work.
              </p>
            </div>
            <Button
              className=" mt-8 w-full px-5 py-2  text-sm font-medium text-white
           capitalize transition-colors duration-300 transform bg-[#E37423] rounded-md
           lg:w-auto hover:bg-[#E37423] focus:outline-none focus:bg-[#E37423]"
            >
              What do you think?
            </Button>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700 shadow-md">
              <h2 className="text-xl font-semibold">Empowering change</h2>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                Their work inspires hope and real change, fostering sustainable
                practices for a healthier planet.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Robert
                  </h1>
                  <span className="text-sm text-gray-500">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700 shadow-md">
              <h2 className="text-xl font-semibold">Inspiring commitment</h2>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                Their collaborations create lasting impact and change lives,
                empowering communities.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Jeny Doe
                  </h1>
                  <span className="text-sm text-gray-500">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700 shadow-md">
              <h2 className="text-xl font-semibold">Impactful work</h2>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                I trust their accountability and ethical practices, ensuring my
                contributions make a meaningful difference.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Ema Watson{" "}
                  </h1>
                  <span className="text-sm text-gray-500">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Stories;
