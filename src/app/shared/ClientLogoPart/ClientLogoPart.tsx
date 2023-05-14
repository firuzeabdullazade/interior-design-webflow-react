import './ClientLogoPart.scss';
import firstLogo from '../../../assets/icons/01.svg';
import secondLogo from '../../../assets/icons/02.svg'
import thirdLogo from '../../../assets/icons/03 (1).svg'
import fourthLogo from '../../../assets/icons/04.svg'
import fifthLogo from '../../../assets/icons/05 - Copy (2).svg'
export const ClientLogoPart = () => {
    return (
        <div className="logo-part">
            <img src={firstLogo} alt="" />
            <img src={secondLogo} alt="" />
            <img src={thirdLogo} alt="" />
            <img src={fourthLogo} alt="" />
            <img src={fifthLogo} alt="" />
        </div>
    )
};