import React from 'react';

// Let’s recap what happens when you edit an input:

// 1. React calls the function specified as onChange on the DOM <input>. In our case, this is the handleChange method in the TemperatureInput component.
// 
// 2. The handleChange method in the TemperatureInput component calls this.props.onTemperatureChange() with the new desired value. 
// Its props, including onTemperatureChange, were provided by its parent component, the Calculator.
// 
// 3. When it previously rendered, the Calculator had specified that onTemperatureChange of the Celsius TemperatureInput is the Calculator’s handleCelsiusChange method, 
// and onTemperatureChange of the Fahrenheit TemperatureInput is the Calculator’s handleFahrenheitChange method. 
// So either of these two Calculator methods gets called depending on which input we edited.
// 
// 4. Inside these methods, the Calculator component asks React to re-render itself by calling this.setState() with the new input value and 
// the current scale of the input we just edited.
// 
// 5. React calls the Calculator component’s render method to learn what the UI should look like. The values of both inputs are recomputed based on the current 
// temperature and the active scale. The temperature conversion is performed here.
// 
// 6. React calls the render methods of the individual TemperatureInput components with their new props specified by the Calculator. 
// It learns what their UI should look like.
// 
// 7. React calls the render method of the BoilingVerdict component, passing the temperature in Celsius as its props.
// 
// 8. React DOM updates the DOM with the boiling verdict and to match the desired input values. 
// The input we just edited receives its current value, and the other input is updated to the temperature after conversion.
// 
// 9. Every update goes through the same steps so the inputs stay in sync.
// 
// re: https://reactjs.org/docs/lifting-state-up.html

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                    onChange={this.handleChange} />
        </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
        <div>
            <h1>Temperature calculator!</h1>
            <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
        );
    }
}

export default Calculator;


  