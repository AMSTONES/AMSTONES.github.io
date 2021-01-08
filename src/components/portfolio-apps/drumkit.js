import React from 'react';

const PADS = [
    { keyStroke: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', description: 'High Kick 1' },
    { keyStroke: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', description: 'Break Snare' },
    { keyStroke: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', description: 'Some Hat' },
    { keyStroke: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', description: 'Lil Hat' },
    { keyStroke: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', description: 'Clap' },
    { keyStroke: 'D', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', description: 'Big Hat' },
    { keyStroke: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', description: 'Kick & Hat' },
    { keyStroke: 'X', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', description: 'Low Kick' },
    { keyStroke: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', description: 'High Kick 2' }
];

class DrumDisplay extends React.Component {
    render() {

        return (
            <div id='drum-display'>
                {this.props.lastDrumElement.description}
            </div>
        )
    }
}

class Pads extends React.Component {
    componentDidMount() {
        const addShadows = () => {
            const pads = document.getElementsByClassName('drum-pad');
            for (const pad of pads) {
                pad.style.boxShadow = this.props.boxShadowValue();
            }
        }

        document.addEventListener('keydown', this.props.handleDrumKey);
        addShadows();
        document.onresize = function () { addShadows() };
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleDrumKey);
        document.onresize = null;
    }

    render() {
        const allPads = PADS.map(pad =>
            <div id={pad.description} className='drum-pad' onClick={this.props.handleDrumClick}>
                <span className='pad-text'>{pad.keyStroke}</span>
                <audio id={pad.keyStroke} className="clip"
                    src={pad.sound} type='audio/mpeg' preload='auto' />
            </div>
        );
        return (
            <div id='pad-container'>
                {allPads}
            </div>
        )
    }
}

class DrumkitApp extends React.Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleDrumKey = this.handleDrumKey.bind(this);
        this.handleDrumClick = this.handleDrumClick.bind(this);
        this.correlateDrum = this.correlateDrum.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.highlightPad = this.highlightPad.bind(this);
        this.boxShadowValue = this.boxShadowValue.bind(this);
        this.state = {
            lastDrumElement: ''
        };
    }

    correlateDrum(keyId) {
        return PADS.find(pad => {
            return pad.keyStroke === keyId;
        })
    }

    boxShadowValue() {
        const pads = document.getElementsByClassName('drum-pad');
        const blurPx = Math.round((pads[0].clientWidth / 250) * 40) + "px";
        return "inset 0px 0px " + blurPx + " #444";
    }


    playSound(drumKey) {
        const audioElement = document.getElementById(drumKey);
        console.log(audioElement)
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();
    }

    handleDrumKey(event) {
        const drumId = event.key.toUpperCase();
        if (/[QWEASDZXC]/.test(drumId) && drumId.length === 1) {
            this.handleInput(drumId);
        }
    }

    handleDrumClick(event) {
        const drumId = event.target.children[1].id;
        this.handleInput(drumId);
    }

    highlightPad(pad) {
        let shadow = this.boxShadowValue();
        const colorSplit = (shadow.split(' '));
        colorSplit.splice(4, 1, 'rgb(254, 254, 254)');
        const newShadow = colorSplit.join(' ');
        pad.style.boxShadow = newShadow;
        setTimeout(function () { pad.style.boxShadow = shadow }, 100)
    }

    handleInput(drumId) {
        const drumObject = this.correlateDrum(drumId);
        const drumElement = document.getElementById(drumObject.description);
        this.highlightPad(drumElement);
        this.setState({
            lastDrumElement: drumObject
        })
        this.playSound(drumId);
    }

    render() {
        return (
            <div id='drum-machine'>
                <div id='banner'>
                    <h2 id='title'>Simple Drum Pads</h2>
                </div>
                <Pads pads={PADS}
                    playSound={this.playSound}
                    handleDrumKey={this.handleDrumKey}
                    handleDrumClick={this.handleDrumClick}
                    lastDrumElement={this.state.lastDrumElement}
                    correlateDrum={this.correlateDrum}
                    highlightPad={this.highlightPad}
                    boxShadowValue={this.boxShadowValue}
                />
                <DrumDisplay lastDrumElement={this.state.lastDrumElement} pads={PADS} />
            </div>
        )
    }
}

export default DrumkitApp
//ReactDOM.render(<DrumkitApp />, document.getElementById('main-container'));
