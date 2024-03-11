import {useState} from 'react'

export default function UserInput() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    })
    
    function handleUserInput (inputIdentifier, newValue) {
        setUserInput( (prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label >Initial Investment</label>
                <input type="number" required 
                value={userInput.initialInvestment}
                onChange={(event) => handleUserInput('initialInvestment', event.target.value)}/>
                </p>
                <p>
                <label >Annual Investment</label>
                <input type="number" required
                value={userInput.annualInvestment}
                 onChange={(event) => handleUserInput('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                <label >Expected Return</label>
                <input type="number" required
                value={userInput.expectedReturn}
                 onChange={(event) => handleUserInput('expectedReturn', event.target.value)}/>
                </p>
                <p>
                <label >Duration</label>
                <input type="number" required
                value={userInput.duration}
                 onChange={(event) => handleUserInput('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}