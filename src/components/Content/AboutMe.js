import React from 'react';
import s from './Content.module.css';
import '../../fonts/fonts.css';

function AboutMe() {
    return (
        <div className={s.AboutMe}>
            <div className={s.AboutMeWrapper}>
                <div className={s.AboutMeNav}>
                    <ul className={s.NavMenu}>
                        <li>About Me</li>
                        <li>Skills</li>
                        <li>Service</li>
                        <li>Interview</li>
                        <li>Award</li>
                        <li>Ex</li>
                    </ul>
                </div>
                <div className={s.AboutMeDescWrapper}>
                    <div className={s.left}>
                        <img src="https://spaceraceit.com/wp/growth/wp-content/uploads/2019/05/about-pic.png" alt=""/>
                    </div>
                    <div className={s.right}>
                        <div className={s.title}>Why hire me for your next project?</div>
                        <div className={s.desc}>
                            <p>
                                Meet my startup design agency Shape Rex Currently I am working at CodeNext as Product
                                Designer. Before that I’ve worked at SpurBee, Dhaka as a UX, UI Designer.
                            </p>

                            <p>
                                I love to work in User Experience & User Interface designing. Because I love to solve
                                the
                                design problem and find easy and better solutions to solve it. I always try my best to
                                make
                                good user interface with the best user experience. I have been working as a Visual
                                designer
                                from.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
