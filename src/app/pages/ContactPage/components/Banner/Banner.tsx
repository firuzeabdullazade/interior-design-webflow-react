import './Banner.scss';
import background from '../../../../../assets/images/contact us background.png';

export const Banner = () => {
    return (
        <>
            <div className="banner-contact">
                <img src={background} alt="" />
                <div className="content">
                    <div className="intro">Contact Us</div>
                </div>
            </div>
        </>
    );
};