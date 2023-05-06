import "./WorkPart.scss";
import arrow from "../../../../../assets/icons/Vector.svg"
export const WorkPart = () => {
    return (
        <>
            <div className="work-part">
                <div className="info">
                    <div className="head">Project Plan</div>
                    <div className="subhead">
                        Efficient execution of our interior design project plan will ensure timely completion while delivering exceptional results that exceed our clients' expectations
                    </div>
                    <button>
                        <div className="text">Read More</div>
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div className="info"><div className="head">Interior Work</div>
                    <div className="subhead">
                    Expertly executing the interior work plan is essential to bringing your design vision to life, creating a harmonious and inviting space that reflects your unique style and personality.
                    </div>
                    <button>
                        <div className="text">Read More</div>
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div className="info"><div className="head">Realization</div>
                    <div className="subhead">
                    Closely adhering to our project realization plan will ensure a successful interior design outcome that fulfills both functional requirements and aesthetic preferences.
                    </div>
                    <button>
                        <div className="text">Read More</div>
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}