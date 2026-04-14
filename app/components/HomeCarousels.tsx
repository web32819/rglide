'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function HomeCarousels() {

  useEffect(() => {
    const init = () => {
      if (!(window as any).jQuery) return;

      const $ = (window as any).jQuery;

      if ($('.owl-carousel1').length) {
        $('.owl-carousel1').owlCarousel('destroy');
        $('.owl-carousel1').owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          dots: true,
          nav: true
        });
      }

      if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel('destroy');
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 20,
          autoplay: true,
          nav: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 4 }
          }
        });
      }
    };

    setTimeout(init, 300);
  }, []);

  return (
    <>
      <Script src="/js/owl.carousel.js" strategy="afterInteractive" />
    </>
  );
}
