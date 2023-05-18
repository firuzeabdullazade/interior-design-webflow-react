import './WorkPart.scss';
import arrow from '../../../../../assets/icons/Vector.svg';
export const WorkPart = () => {
  return (
    <>
      <div className="work-part">
        <div className="info-card">
          <h2>Project Plan</h2>
          <h3>
            Efficient execution of our interior design project plan will ensure timely completion while
            delivering exceptional results that exceed our clients' expectations.
          </h3>
          <button>
            <div className="text">Read More</div>
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className="info-card">
          <h2>Interior Work</h2>
          <h3>
            Interior work bridges the gap between imagination and reality, transforming spaces into
            captivating and functional designs. You can easily find them in our webpage.
          </h3>
          <button>
            <div className="text">Read More</div>
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className="info-card">
          <h2>Realization</h2>
          <h3>
            Realization is the pivotal stage where ideas take shape and come to life through meticulous
            planning, precise execution, and unwavering attention to detail.
          </h3>
          <button>
            <div className="text">Read More</div>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
