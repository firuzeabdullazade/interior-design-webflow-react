import "./Counter.scss"
export const Counter = ()=>{
    return(
        <div className="counter">
        <div className="middle-counter">
            <div className="texts-line">
                <div className="content">
                    <p className="number">12</p>
                    <p className="text">Years Of Experiance</p>
                </div>
                <div className="line"></div>
            </div>
            <div className="texts-line">
                <div className="content">
                    <p className="number">85</p>
                    <p className="text">Success Project</p>
                </div>
                <div className="line"></div>
            </div>
            <div className="texts-line">
                <div className="content">
                    <p className="number">15</p>
                    <p className="text">Active Project</p>
                </div>
                <div className="line"></div>
            </div>
            <div className="texts-line">
                <div className="content">
                    <p className="number">95</p>
                    <p className="text">Happy Customers</p>
                </div>
            </div>
        </div>
    </div>
    )
}