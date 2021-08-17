import React from 'react';

function PageView () {

return (
    <div>
        <label className="labels">Principal:</label>
        <input id="principal" type="text" className="textFields"/>

        <label className="labels">Interest Rate:</label>
        <input name="interest-rate" type="text" className="textFields"/>

        <label className="labels">Frequency:</label>
        <input name="frequency" type="text" className="textFields"/>

        <label className="labels">Number of Years:</label>
        <input name="number-of-years" type="text" className="textFields"/>

        <label className="labels">Monthly Contribution:</label>
        <input name="monthly-contribution" type="text" className="textFields"/>
    </div>
        );

}
export default PageView;