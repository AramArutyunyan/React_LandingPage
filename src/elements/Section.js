import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

export function Services(){
    return(
        <div className="wrapper">
            <div className="sevices-box">
                <div className="box">
                    <img src={require('./img/service-1.png')} alt="service-1" />
                    <div className="description">
                        <div className="title">Lorem ipsum</div>
                        <div className="desc">Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</div>
                    </div>  
                </div>
                <div className="box">
                    <img src={require('./img/service-2.png')} alt="service-1" />
                    <div className="description">
                        <div className="title">Lorem ipsum</div>
                        <div className="desc">Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</div>
                    </div>  
                </div>
                <div className="box">
                    <img src={require('./img/service-3.png')} alt="service-1" />
                    <div className="description">
                        <div className="title">Lorem ipsum</div>
                        <div className="desc">Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</div>
                    </div>  
                </div>
                <div className="box">
                    <img src={require('./img/service-4.png')} alt="service-1" />
                    <div className="description">
                        <div className="title">Lorem ipsum</div>
                        <div className="desc">Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</div>
                    </div>  
                </div>
                
            </div>
        </div>
    );
}

export function Creativity(){
    return(
        <div className="creativity">
            <a href="#">Ask for price</a>
        </div>
    );
}

export function How_we_work(){
    return(
        <div className="howWeWork">
            <div className="wrapper">
                <div className="content">
                    <div className="howWeWork_Slogan">
                        <h3 className='contentTitle'>How we work!</h3>
                        <p className='contentDescription'>We are the best and we know it!</p>
                    </div>
                    <div className="innerContent">
                        <img src={require('./img/how_we_work.png')} alt="How we work" className="workMap" />
                        <div className="workDescription">
                            <p>Nam accumsan nunc sit amet elementum sollicitudin. Integer vel lacus eget tortor lobortis tincidunt sed eu dolor. Phasellus cursus augue ac pulvinar cursus.</p>
                            <p>Quisque ut erat ornare, feugiat turpis a, fringilla felis. Nulla molestie lorem et orci sagittis, et accumsan ex porta.</p>
                            <p>Maecenas consequat velit tellus, vel hendrerit massa fringilla eu. Suspendisse potenti. Maecenas viverra tortor sed metus euismod, at luctus massa aliquam.</p>
                        </div>
                    </div>
                    <a href="#">Ask for price</a>
                </div>
            </div>
        </div>
    );
}

export function Opininon(){
    let linePos = 0;
    function LeftSwipe(){
        let line = document.querySelector('.line');
        if(linePos <= -300){
            linePos = 0
            line.style.left = linePos;
        }else{
            linePos-=100;
            line.style.left = linePos + '%';
        }
    }
    function RightSwipe(){
        let line = document.querySelector('.line');
        if(linePos >= 0){
            linePos = -400;
            line.style.left = linePos;
        }else{
            linePos+=100;
            line.style.left = linePos + '%';
        }
    }
    return(
        <div className="Opinion">
            <div className="wrapper">
                <div className="buttonLeft" onClick={LeftSwipe}><FiChevronLeft className='leftIcon' /></div>
                <div className="buttonRight" onClick={RightSwipe}><FiChevronRight className='rightIcon' /></div>
                <div className="window">
                    <div className="line">
                        <div className="block">
                            <img src={require('./img/person-1.png')} alt="Jan Kowalski" />
                            <p className="personalInformation">“You add a comment anywhere on a project, this is a fast and easy way to gather input and proposed changes from your client.”</p>
                            <p className="personName">Jan Kowalski from <a href="#">Windu.org</a></p>
                        </div>

                        <div className="block">
                            <img src={require('./img/person-2.png')} alt="Jan Kowalski" />
                            <p className="personalInformation">“You add a comment anywhere on a project, this is a fast and easy way to gather input and proposed changes from your client.”</p>
                            <p className="personName">Jan Kowalski from <a href="#">Windu.org</a></p>
                        </div>

                        <div className="block">
                            <img src={require('./img/person-3.png')} alt="Jan Kowalski" />
                            <p className="personalInformation">“You add a comment anywhere on a project, this is a fast and easy way to gather input and proposed changes from your client.”</p>
                            <p className="personName">Jan Kowalski from <a href="#">Windu.org</a></p>
                        </div>

                        <div className="block">
                            <img src={require('./img/person-4.png')} alt="Jan Kowalski" />
                            <p className="personalInformation">“You add a comment anywhere on a project, this is a fast and easy way to gather input and proposed changes from your client.”</p>
                            <p className="personName">Jan Kowalski from <a href="#">Windu.org</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function OurTeam(){
    return(
        <div className="ourTeam_section">
            <div className="wrapper">
                <div className="ourTeam">
                    <div className="ourTeam_lable">
                        <h1 className="ourTeam_title">Meet our team</h1>
                        <p className="ourTeam_lableDescription">We are the best!</p>
                    </div>
                    <div className="ourTeam_description">
                        <div className="ourTeam_block">
                            <img src={require('./img/person-1.png')} alt="Person Name" className="ourTeam_personImage" />
                            <h4 className="ourTeam_personName">Lorem ipsum</h4>
                            <p className="ourTeam_personDescription">Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</p>
                        </div>

                        <div className="ourTeam_block">
                            <img src={require('./img/person-2.png')} alt="Person Name" className="ourTeam_personImage" />
                            <h4 className="ourTeam_personName">Aenean eget</h4>
                            <p className="ourTeam_personDescription">Donec sagittis accumsan diam, eu efficitur nunc lobortis eget. Pellentesque posuere.</p>
                        </div>

                        <div className="ourTeam_block">
                            <img src={require('./img/person-3.png')} alt="Person Name" className="ourTeam_personImage" />
                            <h4 className="ourTeam_personName">Nulla felis quam</h4>
                            <p className="ourTeam_personDescription">Nulla felis quam, malesuada quis tincidunt vitae, iaculis id massa. Mauris pellentesque.</p>
                        </div>

                        <div className="ourTeam_block">
                            <img src={require('./img/person-4.png')} alt="Person Name" className="ourTeam_personImage" />
                            <h4 className="ourTeam_personName">Mauris</h4>
                            <p className="ourTeam_personDescription">Pellentesque posuere nisl a posuere mattis. Quisque nuet congue at, variuse. </p>
                        </div>
                    </div>
                    <a href="#" className='ourTeam_askButton'>Ask for price</a>
                </div>
            </div>
        </div>
    );
}

export function Map(){
    return(
        <div className="map">
            <a href="#"><div className="map"><img src={require('./img/mark.png')} alt="Marker" className='marker' /></div></a>
        </div>
    );
}