import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';

const SearchCountry = () => {
  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm />
      </Container>
    </Section>
  );
};

export default SearchCountry;
