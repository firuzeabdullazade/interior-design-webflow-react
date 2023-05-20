import './ProjectDetails.scss';
import image from '../../../assets/images/Images.png'


export const ProjectDetails = () => {
    return (
        <>
            <div className="hero-back">
                <div className="intro">
                    <h1>Project Details</h1>
                </div>
                <img src={image} alt="" />
            </div>
            <div className='project-container'>
                <div className="info-part">
                    <div className="box">
                        <ul>
                            <li>Client</li>
                            <li>Category</li>
                            <li>Tags</li>
                            <li>Date</li>
                            <li>Link</li>
                        </ul>
                        <ul>
                            <li className='box-text'>Nature Home</li>
                            <li className='box-text'>Interiors</li>
                            <li className='box-text'>Interior,Home</li>
                            <li className='box-text'>Date 03/02/2022</li>
                            <li className='box-text'><a href="#" className='link'>nature-home.com</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    );
};