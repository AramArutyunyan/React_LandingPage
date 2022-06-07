import Nav from './Nav.js';
import Slogan from './Slogan.js';
import { FaPlay } from 'react-icons/fa';
function Header(){
    return(
        <div className="header">
            
            <Nav />
            <Slogan />
            <div className="wrapper">
                <div className="mac">
                    <div className="play">Play <FaPlay className='playbtn'/></div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Header