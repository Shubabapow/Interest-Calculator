import React, { useState } from 'react';

function Calculations (props) {

    // const [principal, setPrincipal] = useState('$100.00')
    // const [interestRate, setInterestRate] = useState('6.00%')
    // const [compoundFrequency, setCompoundFrequency] = useState('12')
    // const [yearsToCompound, setYearsToCompound] = useState('20')
    // const [contribution, setContribution] = useState('$100.00')
    // const [investedAmount, setInvestedAmount] = useState('')
    //
    // function calculateInterest() {
    //     let interestFreq = interestRate / compoundFrequency;
    //     let compoundingTime = compoundFrequency * yearsToCompound;
    //
    //     let basicCompound = 1 + interestFreq
    //     let totalCompound = Math.pow(basicCompound, compoundingTime)
    //
    //     let firstPart = principal * totalCompound;
    //     let secondPart = (contribution * (totalCompound - 1) / interestFreq)
    //
    //     let thirdPart = secondPart * (1 + interestFreq)
    //
    //     let finalReturnValue = firstPart + secondPart;
    //     let otherReturnValue = firstPart + thirdPart;
    //
    //     setInvestedAmount(finalReturnValue.toFixed(2))
    //
    //     console.log('investedAmount: ', investedAmount)
    // }
    //
    // return (
    //     <div>
    //         <label className="labels">Principal:</label>
    //         <input id="principal" type="text" className="textFields" placeholder={principal}
    //                onChange={(e) => {
    //                    setPrincipal(e.target.value)
    //                    console.log(principal)
    //                }}/>
    //
    //         <label className="labels">Interest Rate:</label>
    //         <input name="interest-rate" type="text" className="textFields" placeholder={interestRate}
    //                onChange={(e) => {
    //                    setInterestRate(e.target.value)
    //                }}/>
    //
    //         <label className="labels">Compounding Frequency:</label>
    //         <input name="frequency" type="text" className="textFields" placeholder={compoundFrequency}
    //                onChange={(e) => {
    //                    setCompoundFrequency(e.target.value)
    //                }}/>
    //
    //         <label className="labels">Number of Years:</label>
    //         <input name="number-of-years" type="text" className="textFields" placeholder={yearsToCompound}
    //                onChange={(e) => {
    //                    setYearsToCompound(e.target.value)
    //                }}/>
    //
    //         <label className="labels">Monthly Contribution:</label>
    //         <input name="monthly-contribution" type="text" className="textFields" placeholder={contribution}
    //                onChange={(e) => {
    //                    setContribution(e.target.value)
    //                }}/>
    //
    //         <button name="monthly-contribution" type="text" className="textFields" placeholder={contribution}
    //                 onClick={calculateInterest}>Submit</button>
    //
    //         <label className="labels">Total Return: ${investedAmount}</label>
    //     </div>
    // );
}

export default Calculations;
