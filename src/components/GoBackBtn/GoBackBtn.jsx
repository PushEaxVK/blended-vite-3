import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
  const location = useLocation();
  const backLink = location.state ?? '/country';

  return (
    <Link className={css.link} to={backLink}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
