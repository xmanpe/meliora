import './TopInfo.scss';

const TopInfo = () => {
    return (
        <div className="top-info">
            <div className="box-info">
                <img className="logo" src="/Assets/images/logo/meliora yellow.svg" alt="" />
                <p className="nama">Meliora</p>
            </div>
            <p className="copyright">© Baskara, Lavanya, dan Nayanika OMB UMN 2024</p>
        </div>
    );
}
 
export default TopInfo;