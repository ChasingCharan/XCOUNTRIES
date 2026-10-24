const CountryCard = ({country}) =>{
    return (
        <div className="country-card">
            <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
            <h2 className="country-name">{country.name}</h2>
        </div>
    );

}

export default CountryCard;