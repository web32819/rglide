'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function MobileHeader() {

  const openNav = () => {
    const sidebar = document.getElementById('mySidebar');
    if (sidebar) sidebar.style.width = '80%';
  };

  const closeNav = () => {
    const sidebar = document.getElementById('mySidebar');
    if (sidebar) sidebar.style.width = '0';
  };

  useEffect(() => {
    const acc = document.getElementsByClassName('accordion');

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function (this: HTMLElement) {
        this.classList.toggle('active');
        const panel = this.nextElementSibling as HTMLElement;
        if (!panel) return;
        panel.style.display =
          panel.style.display === 'block' ? 'none' : 'block';
      });
    }
  }, []);

  return (
    <div className="mobile-header visible-sm visible-xs">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">

            <div className="col-xs-6 col-sm-2 no-pad">
              <div className="logoBox">
                <Link href="/" className="navbar-brand" onClick={closeNav}>
                  <img src="/images/logo.svg" className="img-responsive" alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="col-xs-6 col-sm-10 no-pad">
              <div className="navigatnBox">

                <div id="mySidebar" className="sidebar">

                  <div className="col-sm-6 col-xs-6">
                    <div className="sclbox">
                      <Link href="/" className="navbar-brand" onClick={closeNav}>
                        <img src="/images/logo.svg" className="img-responsive" alt="Logo" />
                      </Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xs-6">
                    <button className="closebtn" onClick={closeNav}>×</button>
                  </div>

                  <div className="clearfix"></div>

                  <Link href="/" onClick={closeNav}>Home</Link>
                  <Link href="/#about" onClick={closeNav}>About</Link>
                  <Link href="/#product" onClick={closeNav}>Products</Link>
                  <Link href="/#application" onClick={closeNav}>Application</Link>
                  <Link href="/#contact" onClick={closeNav}>Contact</Link>
                </div>

                <div id="main">
                  <button className="openbtn" onClick={openNav}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>

              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
