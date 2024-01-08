import Link from 'next/link';
import Container from '../Components/Container/Container.tsx';
import './globals.scss';

function NotFound() {
  return (
    <Container>
      <div className="not_found_wrapper">
        <div className="left_block_not_found">
          <h1 className="not_found_title">404</h1>
          <p className="not_Found_description">
            Вибачте, ви потрапили на сторінку, яку ми не змогли знайти.
            Здається, ви загубилися серед цифр і букв нашого віртуального
            простору. Можливо, ця сторінка пішла у відпустку або вирішила
            зникнути в іншому вимірі. Приносимо свої вибачення за незручності.
          </p>
          <Link href="/" className="not_found_link_return">
            Повернутися додому
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
