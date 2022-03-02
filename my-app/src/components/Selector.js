// Selector.js

const Selector = ({ setCountry, countriesJson}) => {
    return (
        <div className="selector-container">
            {/* event は e や eve と略せる */}
            <select onChange={(event) => setCountry(event.target.value)}>
                {/* <option>Select a Country</option> */}
                {countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}          
            </select>
        </div>
    );
};

export default Selector;