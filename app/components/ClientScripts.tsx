'use client';
declare const $: any; // 👈 fixes TypeScript
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); // ✅ top-level, runs once
export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ------------- Helper: load AOS -------------
    const loadAOS = () =>
      new Promise<void>((resolve) => {
        if ((window as any).AOS) return resolve();
        const script = document.createElement('script');
        script.src = '/js/aos.js';
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    const initAOS = async () => {
      await loadAOS();
      const AOS = (window as any).AOS;
      if (!AOS.initialized) {
        AOS.init({ duration: 800, once: true });
        AOS.initialized = true;
      }
      AOS.refreshHard();
    };

    // ------------- GSAP Hero -------------
    const initGSAP = () => {
      const img = document.getElementById('frame') as HTMLImageElement | null;
      if (!img) return;

      ScrollTrigger.getAll().forEach((t) => t.kill());

      const frameCount = 245;
      const current = { frame: 0 };

      for (let i = 0; i <= frameCount; i++) {
        const image = new Image();
        image.src = `webp/sunpack_${String(i).padStart(3, '0')}.webp`;
      }

      gsap.to(current, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '+=1200',
          scrub: 1,
          pin: true,
		  anticipatePin: 1
        },
        onUpdate: () => {
          img.src = `webp/sunpack_${String(current.frame).padStart(3, '0')}.webp`;
        },
      });

      ScrollTrigger.refresh();
    };

    // ------------- Owl Carousel -------------
    const initOwl = () => {
      if (typeof $ === 'undefined') return;

      const slider = $('.slderbx');
      if (slider.hasClass('owl-loaded')) slider.trigger('destroy.owl.carousel');

      (slider as any).owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 5 },
        },
      });
    };

    // ------------- Navbar Scroll -------------
    const initNavbar = () => {
      if (typeof $ === 'undefined') return;

      const handleScroll = () => {
        if ($(window).scrollTop()! >= 10) {
          $('.navbar, .mobile-header').addClass('scrolled');
        } else {
          $('.navbar, .mobile-header').removeClass('scrolled');
        }
      };

      $(window).off('scroll.navbar').on('scroll.navbar', handleScroll);
      handleScroll();
    };

    // ------------- RUN ALL -------------
    setTimeout(() => {
      initGSAP();
      initOwl();
      initNavbar();
      initAOS();
    }, 300); // slight delay ensures DOM is ready

  }, [pathname]); // run every time route changes

  return null;
}