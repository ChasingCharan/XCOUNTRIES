import CountryCard from "./CountryCard";

const Countries = ({ countries }) => {
    return (
        <>
            {countries.map((country) => (
                <CountryCard key={country.abba} country={country} />
            ))}
        </>
    );
};

export default Countries;