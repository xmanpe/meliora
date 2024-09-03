import './TopInfo.scss';

import melioraLogo from '../../images/logo/meliora yellow.svg';

const TopInfo = () => {
    return (
        <div className="top-info">
            <div className="box-info">
                <img className="logo" src={melioraLogo} alt="" />
                <p className="nama">Meliora</p>
            </div>
            <p className="copyright">© Caksana, Baskara, Lavanya, dan Nayanika OMB UMN 2024</p>
        </div>
    );
}
 
export default TopInfo;