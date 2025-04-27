import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error when fetch countries: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default Home;
