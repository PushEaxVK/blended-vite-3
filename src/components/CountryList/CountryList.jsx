import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {countries.map(country => (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`}>
              {country.country}
              <img src="" alt="" />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default CountryList;
