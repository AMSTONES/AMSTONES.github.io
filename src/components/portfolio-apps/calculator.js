import React from 'react';

//todo
//rounding errors
//change multiple symbol, remove displayValue
//keyType not necessary?



const KEYARRANGEMENT = [
    [
        {
            id: 'seven',
            keyType: 'num',
            value: '7'
        },
        {
            id: 'eight',
            keyType: 'num',
            value: '8'
        },
        {
            id: 'nine',
            keyType: 'num',
            value: '9'
        },
        {
            id: 'empty1',
            keyType: 'space',
            value: null
        },
        {
            id: 'clear',
            keyType: 'clear',
            value: 'AC'
        }
    ],
    [
        {
            id: 'four',
            keyType: 'num',
            value: '4'
        },
        {
            id: 'five',
            keyType: 'num',
            value: '5'
        },
        {
            id: 'six',
            keyType: 'num',
            value: '6'
        },
        {
            id: 'subtract',
            keyType: 'operator',
            value: '-'
        },
        {
            id: 'divide',
            keyType: 'operator',
            value: '/'
        }
    ],
    [
        {
            id: 'one',
            keyType: 'num',
            value: '1'
        },
        {
            id: 'two',
            keyType: 'num',
            value: '2'
        },
        {
            id: 'three',
            keyType: 'num',
            value: '3'
        },
        {
            id: 'add',
            keyType: 'operator',
            value: '+'
        },
        {
            id: 'multiply',
            keyType: 'operator',
            value: '*',
            displayValue: 'X'
        }
    ],
    [
        {
            id: 'empty2',
            keyType: 'space',
            value: null
        },
        {
            id: 'zero',
            keyType: 'num',
            value: '0'
        },
        {
            id: 'decimal',
            keyType: 'decimal',
            value: '.'
        },
        {
            id: 'empty3',
            keyType: 'space',
            value: null
        },
        {
            id: 'equals',
            keyType: 'equals',
            value: '='
        }
    ]
]

class Key extends React.Component {
    handleClick(event) {
        this.props.handleInput(this.props.value);
    }
    render() {
        return (
            <div className={'key ' + this.props.type} id={this.props.id} value={this.props.value} onClick={this.handleClick.bind(this)}>
                {this.props.displayValue}
            </div>
        )
    }
}

class Keyboard extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.props.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleKeyPress);
    }

    render() {
        const allKeys = KEYARRANGEMENT.flat().map(key => {
            return (
                <Key id={key.id} type={key.keyType} value={key.value} key={key.id}
                    displayValue={key.displayValue || key.value}
                    handleInput={this.props.handleInput} />
            )
        })

        return (
            <div id='keyboard'>
                {allKeys}
            </div>
        )
    }
}

class Display extends React.Component {
    render() {
        //exclude if negative at front of result
        const opRegex = /[-+/*]/;
        let display
        if ((!this.props.currentOperation && !this.props.storedResult) ||
            (opRegex.test(this.props.storedResult.slice(-1)) && !this.props.currentOperation)) {
            display = '0'
        } else {
            if (!opRegex.test(this.props.storedResult.slice(-1)) && !this.props.currentOperation) {
                display = this.props.storedResult
            } else {
                display = this.props.currentOperation
            }
        }
        return (
            <div id='display-container'>
                <div id='storedEquation'>{(this.props.storedResult) ?
                    this.props.storedResult : '0'}
                </div>
                <div id='display'>
                    {display}
                </div>
            </div>
        )
    }
}



class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storedResult: '',
            currentOperation: ''
        }
        this.clear = this.clear.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.highlight = this.highlight.bind(this);
    }

    clear() {
        this.setState({
            storedResult: '',
            currentOperation: ''
        })
    }

    evaluate() {
        //results in doubling of
        let result = eval(this.state.storedResult + this.state.currentOperation);
        this.setState({
            storedResult: result.toString(),
            currentOperation: ''
        })
    }
    addNumToOperation(char) {
        if (char === null) return
        let addChar = ((this.state.currentOperation === '0' && char === '0') || (char === '.' && this.state.currentOperation.includes('.'))) ? '' : char;
        const opRegex = /[-+/*]/;
        let replaceResult = (addChar !== '' && !opRegex.test(this.state.storedResult)) ? '' : this.state.storedResult
        const opUpdate = this.state.currentOperation + addChar
        this.setState({
            storedResult: replaceResult,
            currentOperation: opUpdate
        })
    }


    //ADD PROPER RULES FOR - SYMBOL

    addOperator(char) {
        const current = this.state.currentOperation;
        const stored = this.state.storedResult;
        // const nonNegOp = /[+/*]/;

        if (char === '-') {
            if (stored.slice(-1) !== '-') {
                this.setState({
                    storedResult: stored + current + char,
                    currentOperation: ''
                })
            } else {
                this.setState({
                    storedResult: stored + current,
                    currentOperation: ''
                })
            }
        } else {
            this.setState({
                storedResult: stored + current + char,
                currentOperation: ''
            })

        }
    }

    handleInput(char) {
        const element = document.querySelector(`[value="${char}"]`);
        this.highlight(element);
        switch (true) {
            case /AC/.test(char):
                return this.clear();
            case /[-+*/]/.test(char):
                return this.addOperator(char);
            case /=|Enter/.test(char):
                return this.evaluate();
            default:
                return this.addNumToOperation(char);
        }
    }

    highlight(key) {
        if(key) {
            const background = '#fefefe';
            key.style.background = '#eef0c0';
            setTimeout(function () { key.style.background = background }, 100)
        }
    }

    handleKeyPress(event) {
        const regex = /\d|[-+*/=.]|Enter/
        if (event.key.match(regex)) { this.handleInput(event.key) }
    }
    render() {
        return (
            <div id='calc'>
                <Display currentOperation={this.state.currentOperation}
                    storedResult={this.state.storedResult} />
                <Keyboard handleKeyPress={this.handleKeyPress.bind(this)}
                    handleInput={this.handleInput.bind(this)} />
            </div>
        )
    }
}



export default Calculator;
