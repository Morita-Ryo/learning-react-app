//Card.js

const Card = ({ allCountriesData }) => {
    return (
        <div className="card-container">
            {allCountriesData.map((singleData, index) =>
                <div key={index} className="card">
                    <div>
                    <h2>{singleData.Country}</h2>
                    <p><span>新規感染者数: {singleData.NewConfirmed.toLocaleString()}</span></p>
                    <p><span>感染者総数: {singleData.TotalConfirmed.toLocaleString()}</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};
    
export default Card;