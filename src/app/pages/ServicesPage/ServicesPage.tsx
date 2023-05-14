import "./ServicesPage.scss";
import backImage from "../../../assets/images/services back image.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { InfoPartGridItem } from "./components/InfoPartGridItem/InfoPartGridItem";
import { Contact } from "../../shared/Contact/Contact";
import { WorkPartGridItem } from "./components/WorkPartGridItem/WorkPartGridItem";
import contentFirst from "../../../assets/images/content first.png";
import firstIcon from "../../../assets/icons/content first icon.svg";
import secondIcon from "../../../assets/icons/content second icon.svg";
import contentSecond from "../../../assets/images/content second.png";
import contentThird from "../../../assets/images/content third.png";
import thirdIcon from "../../../assets/icons/content third icon.svg";
import contentFourth from "../../../assets/images/content fourth.png";
import fourthIcon from "../../../assets/icons/content fourth icon.svg";

export const ServicesPage = () => {
  const servicesPageState = useSelector(
    (state: RootState) => state.servicesPage
  );
  const works = [
    {
      imageSrc: contentFirst,
      iconSrc: firstIcon,
      number: "01",
      subhead: "Concept & Details",
      title:
        "The concept of interior design involves developing a cohesive vision for a space by considering factors such as client requirements, functionality, aesthetics, spatial planning, color schemes, furniture selection, lighting design, material choices, and decorative elements.",
      isLeft: false,
    },
    {
      imageSrc: contentSecond,
      iconSrc: secondIcon,
      number: "02",
      subhead: "Idea for Work",
      title:
        "The idea of interior design work revolves around transforming spaces by combining creativity, functionality, and aesthetics to meet the needs and preferences of clients while enhancing the overall atmosphere and usability of the environment.",
      isLeft: true,
    },
    {
      imageSrc: contentThird,
      iconSrc: thirdIcon,
      number: "03",
      subhead: "Design",
      title:
        "Design encompasses the process of envisioning and creating solutions that are visually appealing, functional, and purposeful, incorporating elements such as form, function, aesthetics, materials, and usability.",
      isLeft: false,
    },
    {
      imageSrc: contentFourth,
      iconSrc: fourthIcon,
      number: "04",
      subhead: "Perfection",
      title:
        "Perfection in design is achieved through a meticulous attention to detail, thoughtful consideration of every element, and the pursuit of excellence in creating a harmonious, functional, and visually pleasing solution that fulfills its intended purpose flawlessly.",
      isLeft: true,
    },
  ];
  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Services</h1>
        </div>
        <img src={backImage} alt="" />
      </div>
      <div className="info-part">
        {servicesPageState.reviews.map((info) => (
          <InfoPartGridItem
            key={`post-${info.head}`}
            head={info.head}
            title={info.title}
          />
        ))}
      </div>
      <div className="working-layout">
        <div className="introduction">
          <h1>How We Work</h1>
          <p>
            Our designers create captivating and functional spaces by blending
            design elements, colors, textures, and furniture.
          </p>
        </div>
        <div className="description">
          {works.map((card) => (
            <WorkPartGridItem
              key={`post-${card.imageSrc}`}
              imageSrc={card.imageSrc}
              iconSrc={card.iconSrc}
              number={card.number}
              subhead={card.subhead}
              title={card.title}
              isLeft={card.isLeft}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};
