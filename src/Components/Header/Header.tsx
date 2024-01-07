import styles from './_header.module.scss';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
