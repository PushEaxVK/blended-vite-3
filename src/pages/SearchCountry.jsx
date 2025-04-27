import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const SearchCountry = () => {
  const [regionCountries, setRegionCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRegion = async () => {
      if (!region) {
        return;
      }
      try {
        setIsLoading(true);
        const newCountries = await fetchByRegion(region);
        setRegionCountries(newCountries);
      } catch (error) {
        console.error('Error when fetch by region: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegion();
  }, [region, searchParams]);

  const handleSearch = value => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('region', value);
    setSearchParams(updatedParams);
  };

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {regionCountries.length > 0 && (
          <CountryList countries={regionCountries} />
        )}
      </Container>
    </Section>
  );
};

export default SearchCountry;
