import React from 'react';

/**
 * TranslationBox is a Component that takes 2 "props":
 * 1. value - An English value to translate
 * 2. targetLanguage - A language to translate the value to
 * 
 * And displays the the translation inside a Box.
 */
class TranslationBox extends React.Component {

    constructor() {
        super();

        this.state = {
            translation: '' // HINT
        };

        this.expensiveTranslate = this.expensiveTranslate.bind(this);
    }

    // TODO - You need to implmement "componentWillReceiveProps"
    // componentWillReceiveProps(nextProps) {}

    // You're not allowed to change this method
    expensiveTranslate(englishValue, targetLanguage) {
        new Promise(function(resolve, reject) {
            setTimeout(resolve, 2000);
        }).then(() => {
            this.setState({
                translation: `${englishValue} [${targetLanguage}]`
            });
        });
    }

    render() {
        // TODO - Change the render function so it shows the translation without calling "expensiveTranslate"
        return (
            <div>
                <h3>Translation:</h3>
                <p className='translation'>No translation... :(</p>
            </div>
        );
    }
}

export default TranslationBox;