"use client";
import { useEffect } from "react";
import { useState } from "react";
export default function HomePage() {

	useEffect(() => {
   const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header") as HTMLElement | null;
    const icon = header?.querySelector("i") as HTMLElement | null;
    const content = item.querySelector(".accordion-content") as HTMLElement | null;

    // Open active item on page load
    if (item.classList.contains("active") && content) {
      content.style.height = `${content.scrollHeight}px`;
      content.style.padding = "10px";
    }

    header?.addEventListener("click", (e) => {
      e.preventDefault();

      accordionItems.forEach((i) => {
        const iContent = i.querySelector(".accordion-content") as HTMLElement | null;
        const iIcon = i.querySelector("i") as HTMLElement | null;

        if (i !== item && iContent && iIcon) {
          i.classList.remove("active");

          iContent.style.height = `${iContent.scrollHeight}px`;
          requestAnimationFrame(() => {
            iContent.style.height = "0";
          });
          iContent.style.padding = "15px 10px";

          iIcon.classList.remove("fa-minus");
          iIcon.classList.add("fa-plus");
        }
      });

      if (!content || !icon) return;

      const isActive = item.classList.contains("active");

      if (isActive) {
        content.style.height = `${content.scrollHeight}px`;
        requestAnimationFrame(() => {
          content.style.height = "0";
        });
        content.style.padding = "15px 10px";

        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      } else {
        content.style.height = `${content.scrollHeight}px`;
        content.style.padding = "15px";

        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");

        content.addEventListener("transitionend", function resetHeight() {
          content.style.height = "auto";
          content.removeEventListener("transitionend", resetHeight);
        });
      }

      item.classList.toggle("active");
    });
  });
}, []);
	
	const [activeTab, setActiveTab] = useState("London");
	

	useEffect(() => {
	  const img = document.querySelector(".rotating-img") as HTMLElement;
	  if (!img) return;

	  let autoAngle = 0;
	  let mouseX = 0;
	  let mouseY = 0;
	  let currentX = 0;
	  let currentY = 0;

	  const animate = () => {
		autoAngle += 0.3;

		currentX += (mouseX - currentX) * 0.1;
		currentY += (mouseY - currentY) * 0.1;

		img.style.transform = `
		  rotate(${autoAngle}deg)
		  rotateX(${currentY}deg)
		  rotateY(${currentX}deg)
		`;

		requestAnimationFrame(animate);
	  };

	  animate();

	  const handleMove = (e: MouseEvent) => {
		const rect = img.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		mouseX = ((x - centerX) / centerX) * 15;
		mouseY = -((y - centerY) / centerY) * 15;
	  };

	  const reset = () => {
		mouseX = 0;
		mouseY = 0;
	  };

	  img.addEventListener("mousemove", handleMove);
	  img.addEventListener("mouseleave", reset);

	  return () => {
		img.removeEventListener("mousemove", handleMove);
		img.removeEventListener("mouseleave", reset);
	  };
	}, []);
	
	useEffect(() => {

		const handleScroll = () => {
		const scrollY = window.scrollY;

		const elements = [
		  ".triangle",
		  ".triangle-one",
		  ".triangle-two",
		  ".triangle-three",
		  ".triangle-seven"
		];

		elements.forEach((selector) => {
		  const el = document.querySelector(selector) as HTMLElement | null;
		  if (el) {
			el.style.transform = `translateY(${scrollY * 0.2}px)`;
		  }
		});
	  };

	  window.addEventListener("scroll", handleScroll);

	  return () => {
		window.removeEventListener("scroll", handleScroll);
	  };

	}, []);
	

	return (
	<>
	
		<section className="bannersctn padsctn" id="home">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 no-pad">
					
						<div className="owl-carousel owl-theme">
							
							<div className="item">
								<div className="container">
									<div className="row">

										<div className="col-md-12 no-pad">
											
												<div className="bannrBox">
													<div className="bnnrbxtxt">
														<h1>R-<span>Glide</span></h1>
														<h2>composite bearings</h2>
														<h3>By Royal Composite Pvt Ltd.</h3>
														<a href="#product" className="bttn lrnmr"><i className="fas fa-arrow-right"></i> Explore Products</a>
													</div>
													<div className="bnnrbxtxt rotating-wrapper">
														<img src="/images/banner-image.png" className="img-responsive " alt="" />
													</div>
													<div className="clearfix"></div>
												</div>
											
											<div className="clearfix"></div>
										</div>

									</div>
								</div>
								
							</div>
							
						</div>
						
						
						<div className="triangle"></div>
						<div className="triangle-one"></div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section className="keysctn">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
						<div className="keycntnr">
							<div className="keycntnrbx">
								<p><img src="/images/key-box/self-icon.svg" className="img-responsive" alt=""/>Self Lubrication</p>
							</div>
							<div className="keycntnrbx">
								<p><img src="/images/key-box/load-icon.svg" className="img-responsive" alt=""/>Upto 600 MPA Load</p>
							</div>
							<div className="keycntnrbx">
								<p><img src="/images/key-box/temparature-icon.svg" className="img-responsive" alt=""/>-150*C to 220*C</p>
							</div>
							<div className="keycntnrbx">
								<p><img src="/images/key-box/maintenance-icon.svg" className="img-responsive" alt=""/>Zero Maintenance</p>
							</div>
						</div>
					
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section className="aboutsctn padsctn" id="about">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
						<div className="col-md-9 col-md-offset-2"><h1>Redefining Tribology Through Material Science</h1></div>
						
						<div className="clearfix"></div>
						
						<div className="mtrlsctn">
						
							<div className="mtrlsctnbx hvr-grow">
								<div className="mtrltxtbx">
									<h3>EPB SERIES</h3>
								</div>
								<img src="/images/mtrlsctn/material-epb-series.webp" className="img-responsive" alt=""/>
							</div>
							
							<div className="mtrlsctnbx hvr-grow">
								<div className="mtrltxtbx">
									<h3>FRB SERIES</h3>
								</div>
								<img src="/images/mtrlsctn/material-frb-series.webp" className="img-responsive" alt=""/>
							</div>
							
							<div className="mtrlsctnbx hvr-grow">
								<div className="mtrltxtbx">
									<h3>FWB SERIES</h3>
								</div>
								<img src="/images/mtrlsctn/material-fwb-series.webp" className="img-responsive" alt=""/>
							</div>
							
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="bronzesctn padsctn" id="">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						
						<div className="bronzcntnr">
						
							<div className="bronzcntnrbx">
								<h1>Replace Bronze Where It Fails In <br className="visible-lg visible-md visible-sm"/>The Field</h1>
								<p>Bronze bushings have been the default for decades — but defaults aren't always optimal. In demanding applications, bronze fails in ways that composite bearings don't.</p>
							</div>
							
							<div className="bronzcntnrbx">
							
								<div className="accordion" id="myAccordion">

									<div className="accordion-item active">
										<div className="accordion-header">
										  <a href="#" className="accordion-toggle">Low friction without grease dependency <i className="fas fa-plus"></i></a>
										</div>
										<div className="accordion-content">
										  <p>R-Glide composites use embedded PTFE and solid lubricants for inherent self-lubrication. No grease guns, no re-lubrication schedules, no contamination risk. Friction coefficients as low as 0.03 — dry.</p>
										</div>
									</div>

									<div className="accordion-item">
										<div className="accordion-header">
										  <a href="#" className="accordion-toggle">Predictable wear instead of seizure<i className="fas fa-plus"></i></a>
										</div>
										<div className="accordion-content">
										  <p>Bronze bearings can seize without warning under boundary lubrication. R-Glide composites wear gradually and predictably, giving maintenance teams time to plan replacements rather than react to failures.</p>
										</div>
									</div>
							
									<div className="accordion-item">
										<div className="accordion-header">
										  <a href="#" className="accordion-toggle">Contamination and harsh-environment tolerance<i className="fas fa-plus"></i></a>
										</div>
										<div className="accordion-content">
										  <p>Bronze corrodes in marine, chemical, and high-humidity environments. R-Glide composites are inherently corrosion-resistant — no plating, no coatings, no galvanic risk when paired with steel shafts.</p>
										</div>
									</div>
							
									<div className="accordion-item">
										<div className="accordion-header">
										  <a href="#" className="accordion-toggle">Corrosion resistance by design<i className="fas fa-plus"></i></a>
										</div>
										<div className="accordion-content">
										  <p>Dust, mud, sand, slurry — environments that destroy bronze bearings' lubrication film. R-Glide composites don't rely on oil films, so contaminant ingress doesn't cause catastrophic failure.</p>
										</div>
									</div>
									
									<div className="accordion-item">
										<div className="accordion-header">
										  <a href="#" className="accordion-toggle">Lightweighting that matters<i className="fas fa-plus"></i></a>
										</div>
										<div className="accordion-content">
										  <p>Composite bearings are up to 70% lighter than bronze equivalents. In mobile equipment and rotating machinery, that weight reduction compounds across every bearing position in the system.</p>
										</div>
									</div>

								</div>
							</div>
							
							<div className="bronzcntnrbximg"><img src="/images/object-image.png" className="img-responsive" alt=""/></div>
							
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="prdctsctn padsctn" id="product">
			
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1><span>Start Standard</span> Customize when it matters</h1>
						
						<div className="prdctsxtsctn">
						
							<div className="prdctsxtbx">
								<h3><span>EPB</span> SERIES</h3>
								<p>Engineering Plastic Bearings</p>
								<div className="imgbx">
									<img src="/images/product/epb/product-epb.png" className="img-responsive" alt=""/>
								</div>
								<div className="txtbx">
									<h4>Material</h4>
									<hr/>
									<ul>
										<li>Polyamide, Aromatic Polyamide, POM</li>
										<li>Glass Fibers + PTFE, MoS₂, Graphite</li>
										<li>Dry Running Operations</li>
									</ul>
								</div>
								<div className="txtbx">
									<h4>Key Benefits</h4>
									<hr/>
									<ul>
										<li>Low Friction (No Lubrication)</li>
										<li>Light weight and corrosion resistant</li>
										<li>Excellent wear resistance</li>
									</ul>
								</div>
								<div className="txtbx">
									<h4>Applications</h4>
									<hr/>
									<ul>
										<li>Automation · Hydraulics · Agriculture</li>
									</ul>
								</div>
							</div>
							
							<div className="prdctsxtbx">
								<h3><span>EPB</span> SERIES</h3>
								<p>Engineering Plastic Bearings</p>
								<div className="imgbx">
									<img src="/images/product/epb/product-frb.png" className="img-responsive" alt=""/>
								</div>
								<div className="txtbx">
									<h4>Material</h4>
									<hr/>
									<ul>
										<li>Polyamide, Aromatic Polyamide, POM</li>
										<li>Glass Fibers + PTFE, MoS₂, Graphite</li>
										<li>Dry Running Operations</li>
									</ul>
								</div>
								<div className="txtbx">
									<h4>Key Benefits</h4>
									<hr/>
									<ul>
										<li>Low Friction (No Lubrication)</li>
										<li>Light weight and corrosion resistant</li>
										<li>Excellent wear resistance</li>
									</ul>
								</div>
								<div className="txtbx">
									<h4>Applications</h4>
									<hr/>
									<ul>
										<li>Automation · Hydraulics · Agriculture</li>
									</ul>
								</div>
							</div>
							
							<div className="prdctsxtbx">ss</div>
							
						</div>

						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="lowersctn padsctn" id="application">
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<div className="col-md-8 col-md-offset-2">
							<h1>Where Bronze Struggles, Composites Shine</h1>
							<p>Bronze bushings have been the default for decades — but defaults aren't always optimal. In demanding applications, bronze fails in ways that composite bearings don't.</p>
						</div>
						
						<div className="clearfix"></div>

						<div className="imagebxcntnr">
						
							<div className="image-box">
								<img src="/images/shine/construction.webp" alt="construction" className="img-responsive" width={1140} height={802} />
								<div className="overlay">
									<h1>Construction</h1>
									<ul>
										<li>Excavator boom & arm pivots — eliminates daily greasing</li>
										<li>Concrete pump wear rings — handles abrasive slurry</li>
										<li>Crane slew bearings — reliable under shock loads</li>
									</ul>
								</div>
								<h2 className="title">Construction</h2>
							</div>
							
							<div className="image-box">
								<img src="/images/shine/marine.webp" alt="marine" className="img-responsive" width={1140} height={802} />
								<div className="overlay">
									<h1>Marine</h1>
									<ul>
										<li>Rudder bearings — seawater-resistant, no galvanic corrosion</li>
										<li>Deck crane pivots — zero maintenance in salt spray</li>
										<li>Stabiliser fin shafts — low friction under oscillating loads</li>
									</ul>
								</div>
								<h2 className="title">Marine</h2>
							</div>
							
							<div className="image-box">
								<img src="/images/shine/agriculture.webp" alt="agriculture" className="img-responsive" width={1140} height={802} />
								<div className="overlay">
									<h1>Agriculture</h1>
									<ul>
										<li>Combine header pivots — dust and chaff tolerant</li>
										<li>Plough pin bushings — high load in abrasive soil</li>
										<li>Sprayer boom joints — chemical and UV resistant</li>
									</ul>
								</div>
								<h2 className="title">Agriculture</h2>
							</div>
							
							<div className="image-box">
								<img src="/images/shine/industrial.webp" alt="industrial" className="img-responsive" width={1140} height={802} />
								<div className="overlay">
									<h1>Industrial</h1>
									<ul>
										<li>Conveyor roller bearings — maintenance-free in dusty plants</li>
										<li>Press ram guides — sustained high load at low speed</li>
										<li>Valve actuator bushings — wide temperature range</li>
									</ul>
								</div>
								<h2 className="title">Industrial</h2>
							</div>
						
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
				
				<div className="triangle-two"></div>
				
				<div className="triangle-three"></div>
				
				<div className="row" id="contact">
					<div className="col-md-12">
						
						<div className="col-md-10 col-md-offset-1">
							<h1>Send us your duty cycle. We'll recommend the right build</h1>
							<p>If you are replacing bronze, the details matter. Share load motion type, environment and <br className="visible-lg visible-md"/>target life-and we will map the best R-Glide option ( Liner, Reinforcement, Matrix)</p>
						</div>
					
						<div className="clearfix"></div>
						
						<div className="contactsctn">
							
							<div className="contactsctnbx">
								<p><img src="images/contact/mail-box.svg" className="img-responsive" alt=""/><a href="mailto:gaurav@royalseals.co.in">gaurav@royalseals.co.in</a></p>
								
								<p className="cntxt">OEM enquiries and co-development projects welcome.</p>
								
								<hr/>
								
								<h4>What to include</h4>
								<ul>
									<li><img src="images/contact/tick-icon.svg" className="img-responsive" alt=""/>Bore / OD / Length</li>
									<li><img src="images/contact/tick-icon.svg" className="img-responsive" alt=""/>Motion type & speed</li>
									<li><img src="images/contact/tick-icon.svg" className="img-responsive" alt=""/>Shaft material & hardness</li>
									<li><img src="images/contact/tick-icon.svg" className="img-responsive" alt=""/>Load (static & dynamic)</li>
									<li><img src="images/contact/tick-icon.svg" className="img-responsive" alt=""/>Operating environment</li>
									<li><img src="images/contact/tick-icon.svg" className="img-responsive" alt=""/>Target service life</li>
								</ul>
								
							</div>
							
							<div className="contactsctnbx">
							
								<div className="contactbox">
									<form action="/enquiry.php" method="post" id="form" className="frmbx">
									
										{/* Honeypot */}
										<div style={{ display: "none" }}>
											<label>Leave this field blank</label>
											<input type="text" name="website" id="website" />
										</div>
										
									
										<div className="col-md-6">
											<div className="form-box">
												<input type="text" placeholder="Name" name="name" id="Name" className="form-control" required />
											</div>
										</div>
										
										<div className="col-md-6">
											<div className="form-box">
												<input type="tel" placeholder="Phone" name="phone" id="Phone" className="form-control" required />
											</div>
										</div>
										
										<div className="col-md-6">
											<div className="form-box">
												<input type="email" placeholder="Email" name="email" id="email" className="form-control" required />
											</div>
										</div>
										
										<div className="col-md-6">
											<div className="form-box">
												<input type="text" placeholder="Company" name="company" id="company" className="form-control" required />
											</div>
										</div>
										
										<div className="col-md-12">
											<div className="form-box">
												<textarea
												  name="message"
												  id="Message"
												  placeholder="Message"
												  className="form-control"
												  rows={4}
												  required
												/>
											</div>
										</div>
										
										<div className="col-md-6">
											<div className="form-box">
												<button name="submit" className="btn btn-warning btn-custom sbmt lrnmr hvr-fade"><i className="fas fa-arrow-right"></i>Send</button>
											</div>
										</div>
										
										<div className="col-md-6">
											<div className="form-box">
												<p>By submitting this form, you consent to RoyalGlide contacting you regarding your enquiry. We will not share your information with third parties.</p>
											</div>
										</div>
										
										<div className="clearfix"></div>
										
									</form>
								</div>
							
							</div>
						
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
				
				
			</div>
		</section>
		
		
	</>
);
}