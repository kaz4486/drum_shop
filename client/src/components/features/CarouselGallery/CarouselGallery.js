import Carousel, {
  Dots,
  slidesToShowPlugin,
  autoplayPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useState } from 'react';
import styles from './CarouselGallery.module.scss';
import { Link } from 'react-router-dom';

const CarouselGallery = () => {
  const [value, setValue] = useState(0);

  const slides = [
    <Link to={'/products/8d3dcd52-e923-4b57-8821-5a040fb3f51d'}>
      <img
        src={`${process.env.PUBLIC_URL}/images/carousel/Theodore.jpg`}
        alt="john theodore"
        className={styles.img}
      />
    </Link>,

    <Link to={'/products/337ae709-ddb4-4e3f-bfc0-0eb1ff52682a'}>
      <img
        src={`${process.env.PUBLIC_URL}/images/carousel/Chad.jpg`}
        alt="chad smiths"
        className={styles.img}
      />
    </Link>,

    <Link to={'/products/32b311a7-7173-48a0-ade6-e9e8effcc91b'}>
      {' '}
      <img
        src={`${process.env.PUBLIC_URL}/images/carousel/Hawkins.jpg`}
        alt="taylor hawkins"
        className={styles.img}
      />
    </Link>,
  ];

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Carousel
        value={value}
        slides={slides}
        onChange={onChange}
        // className={styles.carousel}
        // offset={20}
        animationSpeed={1000}
        // itemWidth={20}
        plugins={
          ([
            'infinite',
            'centered',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 6000,
              },
            },
          ],
          [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ])
        }
        className={styles.carousel}
      />
      <Dots
        value={value}
        onChange={onChange}
        number={slides.length}
        className={styles.dots}
      />
    </div>
  );
};

export default CarouselGallery;
