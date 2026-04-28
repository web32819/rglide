"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse visible-lg visible-md homenav">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
            <div className="col-md-3 no-pad">
				<Link href="/" className="navbar-brand">
					<Image src="/images/logo.svg" alt="Logo" width={134} height={45} className="img-responsive" />
				</Link>
            </div>

            <div className="col-md-6 no-pad">
				<div className="collapse navbar-collapse no-pad" id="myNavbar">
					<ul className="nav navbar-nav text-center">
						<li><Link href="/#home" className="hvr-fade">Home</Link></li>
						<li><Link href="/#about" className="hvr-fade">About</Link></li>
						<li><Link href="/#product" className="hvr-fade">Products</Link></li>
						<li><Link href="/#application" className="hvr-fade">Applications</Link></li>
						<li><Link href="#" className="hvr-fade">Other Products</Link></li>
					</ul>
				</div>
            </div>
			
			<div className="col-md-2 col-md-offset-1 no-pad">
				<div className="contactbx ">
					<a href="/#contact" className="">Contact</a>
				</div>
			</div>

            <div className="clearfix"></div>

          </div>
        </div>
      </div>

      <div className="clearfix"></div>
    </nav>
  );
}