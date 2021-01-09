import Pll from 'react-pll'
function Skills () {
        return (
            <div className="skills">
                <h1>Skills</h1>
                <div className="skill-icons-container">
                    <Pll className="language-logo" language="html" alt="HTML logo" />
                    <Pll className="language-logo" language="css" alt="CSS logo" />
                    <Pll className="language-logo" language="javascript" alt="JavaScript logo" />
                    <Pll className="language-logo" language="php" alt="PHP logo" />
                    <img className="language-logo" src="/images/react-logo-small.png"/>
                </div>

            </div>

        )
}

export default Skills
