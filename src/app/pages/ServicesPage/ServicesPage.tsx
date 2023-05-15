import "./ServicesPage.scss";
import backImage from "../../../assets/images/services back image.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { InfoPartGridItem } from "./components/InfoPartGridItem/InfoPartGridItem";
import { Contact } from "../../shared/Contact/Contact";
import { WorkPartGridItem } from "./components/WorkPartGridItem/WorkPartGridItem";


export const ServicesPage = () => {
  const servicesPageState = useSelector(
    (state: RootState) => state.servicesPage
  );
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
          {servicesPageState.works.map((card) => (
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
