import "./WorkPart.scss";
import arrow from "../../../../../assets/icons/Vector.svg"
export const WorkPart = () => {
    return (
        <>
            <div className="work-part">
                <div className="info">
                    <h2>Project Plan</h2>
                    <h3>
                        Efficient execution of our interior design project plan will ensure timely completion while delivering exceptional results that exceed our clients' expectations
                    </h3>
                    <button>
                        <div className="text">Read More</div>
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div className="info">
                    <h2>Interior Work</h2>
                    <h3>
                    Expertly executing the interior work plan is essential to bringing your design vision to life, creating a harmonious and inviting space that reflects your unique style and personality.
                    </h3>
                    <button>
                        <div className="text">Read More</div>
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div className="info">
                    <h2>Realization</h2>
                    <h3>
                    Closely adhering to our project realization plan will ensure a successful interior design outcome that fulfills both functional requirements and aesthetic preferences.
                    </h3>
                    <button>
                        <div className="text">Read More</div>
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}