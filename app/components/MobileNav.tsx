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
						
						<div className="socialbx">
							<h4>Follow Us:</h4>
							<ul>
								<li>
									<a href="#" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
									</a>
								</li>
								
								<li>
									<a href="#" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>
									</a>
								</li>
							</ul>
						</div>
			
					</div>

					<div id="main">
					
						<a href="/#contact"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M351.8 25c7.8-18.8 28.4-28.9 48.1-23.5l5.5 1.5c64.6 17.6 119.8 80.2 103.7 156.4-37.1 175-174.8 312.7-349.8 349.8-76.3 16.2-138.8-39.1-156.4-103.7l-1.5-5.5c-5.4-19.7 4.7-40.3 23.5-48.1l97.3-40.5c16.5-6.9 35.6-2.1 47 11.8l38.6 47.2c70.3-34.9 126.8-93.3 159.3-164.9l-44.1-36.1c-13.9-11.3-18.6-30.4-11.8-47L351.8 25z"/></svg></a>
					  <button className="openbtn" onClick={openNav}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z"/></svg>
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
