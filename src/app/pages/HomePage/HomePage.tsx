import './HomePage.scss';
import { Banner } from './components/Banner/Banner';
import { TestimonialPart } from './components/TestimonialPart/TestimonialPart';
import { Project } from "./components/Project/Project";

import firstImage from "../../../assets/images/firstImage.png";
import secondImage from "../../../assets/images/secondImage.png";
import thirdImage from "../../../assets/images/thirdImage.png";
import fourthImage from "../../../assets/images/fourthImage.png";

export const HomePage = () => {
  const projects = [
    {
      imageSrc: firstImage,
      head: "Modern Kitchan",
    },

    {
        imageSrc: secondImage,
        head: "Modern Sideboard",
    },

    {
        imageSrc: thirdImage,
        head: "System Table",
    },

    {
        imageSrc: fourthImage,
        head: "Minimal Livingroom",
    },
  ];

  return (
    <>
      <Banner />
      <TestimonialPart />
      <section className="project">
        <div className="heading">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="grid-projects">
            {projects.map((project) => (
                <Project
                imageSrc = {project.imageSrc}
                head = {project.head}
                />
            ))}
        </div>
      </section>

    </>
  );
};
