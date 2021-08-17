import React from 'react';

function PageView () {

return (
    <div>
        <label className="label">Principal:</label>
        <input id="principal" type="text" className="textFields"/>

        <label>Interest Rate:</label>
        <input name="interest-rate" type="text" className="textFields"/>

        <label>Frequency:</label>
        <input name="frequency" type="text" className="textFields"/>

        <label>Number of Years:</label>
        <input name="number-of-years" type="text" className="textFields"/>

        <label>Monthly Contribution:</label>
        <input name="monthly-contribution" type="text" className="textFields"/>
    </div>
        );
}
export default PageView;