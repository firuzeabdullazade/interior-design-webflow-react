import { ClientLogoPart } from '../../shared/ClientLogoPart/ClientLogoPart';
import './ServiceSingle.scss';
import { Banner } from './components/Banner/Banner';
import { Counter } from './components/Counter/Counter';
import { Details } from './components/Details/Details';
import { Points } from './components/Points/Points';
import { Result } from './components/Result/Result';
import { Video } from './components/Video/Video';

export const ServiceSingle = () => {
    return (
        <>
        <Banner />
        <Details />
        <ClientLogoPart />
        <Video />
        <Points />
        <Result />
        <Counter />
        </>
    )
}