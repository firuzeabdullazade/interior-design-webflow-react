/* eslint-disable prettier/prettier */
import './AboutPage.scss';
import banner from '../../../assets/images/BannerofAbout.png';
import arrow from '../../../assets/icons/Arrow.svg';
import pattern from '../../../assets/images/Pattern.png';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../shared/UserWidget/userWidget.slice';
import wwdimg from '../../../assets/images/wwd.png';
import ter from '../../../assets/images/theendresult.png';
import { Link } from 'react-router-dom';
import vector from '../../../assets/icons/Vector.svg';
import levi from '../../../assets/images/team1.png';
import gianna from '../../../assets/images/team2.png';
import natasha from '../../../assets/images/team3.png';
import nora from '../../../assets/images/team4.png';
export const AboutPage = () => {
    const dispatch = useDispatch();
    const onSendBittonClick = () => {
        const user = {
            id: 14,
            name: 'Benry Roll',
            email: 'benry.roll@mail.com',
            status: 'Regular',
        };

        const payload = {
            name: user.name,
            status: user.status,
        };

        dispatch(loadUser(payload));
    };
    return (
        <>
            <div className="about-intro">
                <img src={banner} alt="bg" />
                <div className="about-text">
                    <p>About Us</p>
                </div>
            </div>
            <div className="quotes">
                <img src={pattern} alt="pattern" />
                <div className='quotes-content'>
                    <p className='mark'>“</p>
                    <p className='texts'>
                        I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
                    </p>
                    <p className='name'> -BUNNY WILLIAMS</p>
                </div>
            </div>
            <div className="wwd-ter">
                <div className="wwd">
                    <div className="content">
                        <p>What We Do</p>
                        <div className="text">It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.</div>
                        <Link to=""><button>Our Concept
                            <img src={vector} alt="" /></button>
                        </Link>
                    </div>
                    <div className="photo"> <img src={wwdimg} alt="" /></div>
                </div>
                <div className="wwd">
                    <div className="photo"> <img src={ter} alt="" /> </div>
                    <div className="content">
                        <p>The End Result</p>
                        <div className="text">It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.</div>
                        <Link to="/project" className='link'>
                            <button>Our Portfolio
                                <img src={vector} alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="team">
                <div className="team-content">
                    <p className='title' >What the People Thinks About Us</p>
                    <div className="cards" >
                        <div className="flipcards">
                            <div className="front">
                                <img src={levi} alt="" />
                            </div>
                            <div className="back">
                                <div className="member">
                                    <p className='nameofmember'>Nattasha Julie </p>
                                    <p className='aboutmember'>Design, Australia</p>
                                </div>
                                <div className="sosialmedia"></div>
                                <div className='contact'>
                                    <Link to={''}> +1 (378) 400-1234</Link>
                                    <Link to={''}>julie@email.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flipcards">
                            <div className="front">
                                <img src={gianna} alt="" />
                            </div>
                            <div className="back">
                                <div className="member">
                                    <p className='nameofmember'>Nattasha Julie </p>
                                    <p className='aboutmember'>Design, Australia</p>
                                </div>
                                <div className="sosialmedia"></div>
                                <div className='contact'>
                                    <Link to={''}> +1 (378) 400-1234</Link>
                                    <Link to={''}>julie@email.com</Link>
                                </div></div>
                        </div>
                        <div className="flipcards">
                            <div className="front">
                                <img src={natasha} alt="" />
                            </div>
                            <div className="back">
                                <div className="member">
                                    <p className='nameofmember'>Nattasha Julie </p>
                                    <p className='aboutmember'>Design, Australia</p>
                                </div>
                                <div className="sosialmedia"></div>
                                <div className='contact'>
                                    <Link to={''}> +1 (378) 400-1234</Link>
                                    <Link to={''}>julie@email.com</Link>
                                </div></div>
                        </div>
                        <div className="flipcards">
                            <div className="front">
                                <img src={nora} alt="" />
                            </div>
                            <div className="back">
                                <div className="member">
                                    <p className='nameofmember'>Nattasha Julie </p>
                                    <p className='aboutmember'>Design, Australia</p>
                                </div>
                                <div className="sosialmedia"></div>
                                <div className='contact'>
                                    <Link to={''}> +1 (378) 400-1234</Link>
                                    <Link to={''}>julie@email.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="mailbox">
                <div className="content">
                    <p>Creative project? Let's have a productive talk.</p>
                    <form>
                        <div className="name-email">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="subject">
                            <textarea placeholder='Hello Iam Intrested in..' />
                        </div>
                    </form>
                    <button type='button' onClick={onSendBittonClick}>Send Now  <img src={arrow} alt="" /></button>
                </div>
            </div>
            {/* <div className="card" style={{position: 'relative'}}>
                <img src="" alt="some person" />
                <div className="hover-content" style={{position: 'absolute', top: 0, left: 0,  opacity: 0, transition: 'opacity .3s ease'}}>

                </div>
            </div>  
            <style>
                .card:hover .hover-content {
                    opacity: 1
                }
                </style>   */}
        </>
    );
};