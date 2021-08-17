import React, {useState} from 'react';

function PageView() {

    const [principal, setPrincipal] = useState('$0.00')
    const [interestRate, setInterestRate] = useState('6.00%')
    const [compoundFrequency, setCompoundFrequency] = useState('12')
    const [yearsToCompound, setYearsToCompound] = useState('20')
    const [contribution, setContribution] = useState('$100.00')
    const [investedAmount, setInvestedAmount] = useState('')

    const handlePrincipal = (e) => {
        setPrincipal(e.target.value);
    }

    const handleInterestRate = (e) => {
        setInterestRate(e.target.value);
    }

    const handleCompoundFrequency = (e) => {
        setCompoundFrequency(e.target.value);
    }

    const handleYearsToCompound = (e) => {
        setYearsToCompound(e.target.value);
    }

    const handleContributions = (e) => {
        setContribution(e.target.value);
    }

return (
    <div>
        <label className="labels">Principal:</label>
        <input id="principal" type="text" className="textFields" placeholder={principal}
               onChange={(e) => {
                   handlePrincipal(e)
               }}/>

        <label className="labels">Interest Rate:</label>
        <input name="interest-rate" type="text" className="textFields" placeholder={interestRate}
               onChange={(e) => {
                   handleInterestRate(e)
               }}/>

        <label className="labels">Compounding Frequency:</label>
        <input name="frequency" type="text" className="textFields" placeholder={compoundFrequency}
               onChange={(e) => {
                   handleCompoundFrequency(e)
               }}/>

        <label className="labels">Number of Years:</label>
        <input name="number-of-years" type="text" className="textFields" placeholder={yearsToCompound}
               onChange={(e) => {
                   handleYearsToCompound(e)
               }}/>

        <label className="labels">Monthly Contribution:</label>
        <input name="monthly-contribution" type="text" className="textFields" placeholder={contribution}
               onChange={(e) => {
                   handleContributions(e)
               }}/>
    </div>
        );

}


export default PageView;