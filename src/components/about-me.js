import React, { Component } from 'react';

class AboutMe extends Component {

    render() {
        return (
            <div className="about">
                <h1 className="about__headline">Hello, I'm Alex</h1>
                <div className="about__lower-text">
                    <h3 className="about__role">
                        Full stack web developer
                    </h3>
                    <p className="about__desc">
                        Some text about me a little intro to give some idea of who I am and what I can do.
                    </p>
                </div>
            </div>

        )
    }
}

export default AboutMe
