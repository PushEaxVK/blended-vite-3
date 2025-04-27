import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import CountryInfo from '../components/CountryInfo/CountryInfo';

const Country = () => {
  const { countryId } = useParams();
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const data = await fetchCountry(countryId);
        console.log(data);
        setCountryData(data);
      } catch (error) {
        console.error('Error when fetch country info: ', error);
      }
    };
    fetchCountryData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading
          title={
            countryData?.countryName
              ? countryData?.countryName
              : 'SearchCountry'
          }
          bottom
        />
        <GoBackBtn />
        {countryData?.countryName && (
          <CountryInfo
            countryData={countryData}
            flag={countryData.flag}
            capital={countryData.capital}
            countryName={countryData.countryName}
            languages={countryData.languages}
            population={countryData.population}
          />
        )}
      </Container>
    </Section>
  );
};

export default Country;
