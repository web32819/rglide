"use client";

import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("multi"); // default open

  return (
    <>
      <div className="row">
        <div className="col-md-12">

          {/* TAB BUTTONS */}
          <div className="tab">
            <button
              className={`tablinks ${activeTab === "multi" ? "active" : ""}`}
              onClick={() => setActiveTab("multi")}
            >
              <img src="images/strategy/icon.svg" className="img-responsive" />
              Multi Strategy Fund
            </button>

            <button
              className={`tablinks ${activeTab === "balanced" ? "active" : ""}`}
              onClick={() => setActiveTab("balanced")}
            >
              <img src="images/strategy/icon.svg" className="img-responsive" />
              Balanced Fund
            </button>

            <button
              className={`tablinks ${activeTab === "arbitrage" ? "active" : ""}`}
              onClick={() => setActiveTab("arbitrage")}
            >
              <img src="images/strategy/icon.svg" className="img-responsive" />
              Arbitrage Fund
            </button>

            <button
              className={`tablinks ${activeTab === "sharia" ? "active" : ""}`}
              onClick={() => setActiveTab("sharia")}
            >
              <img src="images/strategy/icon.svg" className="img-responsive" />
              Long only equity strategy
            </button>
          </div>

          {/* TAB CONTENTS */}
          <div id="multi" className="tabcontent" style={{ display: activeTab === "multi" ? "block" : "none" }}>
            <h3 className="strayegytxt"><strong>Multi Asset Strategy:</strong> A Comprehensive Investment Solution</h3>
			<p>Our Multi Asset Strategy offers investors a sophisticated, actively managed portfolio that combines diverse asset classes to achieve optimal risk-adjusted returns. Our approach leverages market opportunities across equities, fixed income, structured finance, private equity, and derivatives.</p>
			
			<div className="nmbrbxtb"><h4>Key Features</h4></div>
			
			<div className="rsrcsctn strategyctnr">
			
				<div className="rsrcbx strategysctn">
					<div className="imgbx"><img src="images/strategy/multi-fund/diversification-icon.svg" className="img-responsive" alt=""/></div>
					<h4>Diversification</h4>
					<p>Broad exposure to developed and emerging markets, including both liquid & unlisted securities.</p>
				</div>
				
				<div className="rsrcbx strategysctn">
					<div className="imgbx"><img src="images/strategy/multi-fund/active-icon.svg" className="img-responsive" alt=""/></div>
					<h4>Active Management</h4>
					<p>Dynamic allocation based on current market conditions & risk-adjusted return potential.</p>
				</div>
				
				<div className="rsrcbx strategysctn">
					<div className="imgbx"><img src="images/strategy/multi-fund/quality-icon.svg" className="img-responsive" alt=""/></div>
					<h4>Quality Focus</h4>
					<p>Emphasis on high-quality businesses with strong free cash flows and high ROE.</p>
				</div>
				
				<div className="rsrcbx strategysctn">
					<div className="imgbx"><img src="images/strategy/multi-fund/risk-icon.svg" className="img-responsive" alt=""/></div>
					<h4>Risk Management</h4>
					<p>Careful credit risk and duration management in fixed income investments.</p>
				</div>
				
				<div className="rsrcbx strategysctn">
					<div className="imgbx"><img src="images/strategy/multi-fund/flexibility-icon.svg" className="img-responsive" alt=""/></div>
					<h4>Flexibility</h4>
					<p>Ability to use structured products for enhanced equity exposure when valuations are high.</p>
				</div>
				
			</div>
			
          </div>

          <div id="balanced" className="tabcontent" style={{ display: activeTab === "balanced" ? "block" : "none" }}>
            <h3 className="strayegytxt"><strong>Balanced Strategy:</strong> Diversified Investment Excellence with Statutory Protection</h3>
			<p>Experience the pinnacle of investment management with our Balanced strategies, a Mauritius based Segregated Portfolio Company. Our unique structure offers multiple independently managed and audited portfolios, protecting your assets from cross-liabilities and optimizing returns through rigorous research and global market coverage. Our team ensures investment excellence with stringent risk management and access to top-tier prime brokers.</p>
			
			<div className="nmbrbxtb"><h4>Key Features</h4></div>
			<div className="rsrcsctn strategyctnr">
					
						<div className="rsrcbx strategysctn">
							<div className="imgbx"><img src="images/strategy/balanced/secure-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Secure & Flexible Segregated Portfolios</h4>
							<p>Exempted company with unlimited, legally segregated portfolios.</p>
						</div>
						
						<div className="rsrcbx strategysctn">
							<div className="imgbx"><img src="images/strategy/balanced/strategic-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Strategic Leverage Management for Optimized Returns</h4>
							<p>Using leverage up to 100% equity, closely monitored and adjustable.</p>
						</div>
						
						<div className="rsrcbx strategysctn">
							<div className="imgbx"><img src="images/strategy/balanced/robust-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Robust Credit & Equity Strategies</h4>
							<p>Focus on Investment Grade institutions, diversified bonds, and high-quality equities.</p>
						</div>
						
						<div className="rsrcbx strategysctn">
							<div className="imgbx"><img src="images/strategy/balanced/duration-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Duration Risk Management</h4>
							<p>Managing bond portfolio duration between 3-4 years with close monitoring.</p>
						</div>
						
						<div className="rsrcbx strategysctn">
							<div className="imgbx"><img src="images/strategy/balanced/enhanced-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Enhanced Trading Capabilities</h4>
							<p>Access to global banks, around-the-clock trading, and multiple prime brokers.</p>
						</div>
						
					</div>
			
			
          </div>

          <div id="arbitrage" className="tabcontent" style={{ display: activeTab === "arbitrage" ? "block" : "none" }}>
            <h3 className="strayegytxt"><span>Global Arbitrage Strategy</span></h3>
			<p>Our Global Arbitrage strategy distinguishes itself through its specialized focus on exploiting cross-market inefficiencies, a strategy less common in traditional mutual funds. Unlike broad-market index funds or actively managed portfolios targeting sector-specific growth, this fund employs a geographical arbitrage approach, systematically identifying price discrepancies for the same asset across international markets-such as ADRs / GDRs versus their domestic counterparts-to generate returns uncorrelated to market direction with an overlay of volatility trading strategies designed to profit from changes in market volatility rather than directions price movements.</p>
			
			<div className="nmbrbxtb"><h4>Key Features</h4></div>
					
					<div className="rsrcsctn strategyctnr">
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/arbitrage/market-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Market-Neutral Strategy</h4>
							<p>Focusses on arbitrage opportunities rather than market appreciation, reducing reliance on overall market performance.</p>
						</div>
						
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/arbitrage/global-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Global Scope</h4>
							<p>Targets mispricings across diverse geographies, offering exposure to international markets without direct currency or single-region risks.</p>
						</div>
						
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/arbitrage/active-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Active Arbitrage Execution</h4>
							<p>Combines quantitative analysis with active trading to capitalize on fleeting pricing gaps, differing from passive index funds or traditional stock-picking strategies.</p>
						</div>
						
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/arbitrage/risk-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Risk Mitigation</h4>
							<p>Hedges positions across regions to minimize volatility, contrasting with conventional equity funds that bear full market risk.</p>
						</div>
						
					</div>
			
          </div>

          <div id="sharia"  className="tabcontent" style={{ display: activeTab === "sharia" ? "block" : "none" }}  >
            <h3 className="strayegytxt"><span>Long Short Strategy</span></h3>
			<p>Our Global Arbitrage strategy distinguishes itself through its specialized focus on exploiting cross-market inefficiencies, a strategy less common in traditional mutual funds. Unlike broad-market index funds or actively managed portfolios targeting sector-specific growth, this fund employs a geographical arbitrage approach, systematically identifying price discrepancies for the same asset across international markets-such as ADRs / GDRs versus their domestic counterparts-to generate returns uncorrelated to market direction with an overlay of volatility trading strategies designed to profit from changes in market volatility rather than directions price movements.</p>
			
			<p>Our Long Short Equity Strategy leverages our extensive experience across asset classes and global markets, integrating insights from our arbitrage, balanced, and multi-asset strategies. This cross-disciplinary expertise provides us with a unique, holistic perspective that enhances our ability to identify and capitalize on both long and short opportunities—making our approach to long short equity distinctively effective.</p>
					
			<p><strong>Why We Excel at Long Short Equity</strong></p>
					
			<p>Cross-Asset Expertise: Years of managing diverse strategies-arbitrage, balanced, and multi-asset—have honed our ability to analyze correlations, risk factors, and capital flows across equities, fixed income, currencies, and derivatives. This broad perspective enables us to spot relative value and mispricings that may be overlooked by equity-only managers.</p>
					
			<p>Global Reach: Our operational footprint spans multiple geographic regions, allowing us to source opportunities and manage risks in both developed and emerging markets. This global awareness helps us navigate shifting macroeconomic trends and regulatory environments, enhancing both alpha generation and risk mitigation.</p>
			
			<div className="nmbrbxtb"><h4>Key Features</h4></div>
					
					<div className="rsrcsctn strategyctnr">
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/arbitrage/market-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Market-Neutral Strategy</h4>
							<p>The strategy can be tailored to maintain neutral market exposure or to express a tactical market view, providing flexibility to adapt to changing market conditions.</p>
						</div>
						
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/sharia/alpha-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Alpha Generation from Both Sides</h4>
							<p>By taking long positions in undervalued stocks and short positions in overvalued ones, we seek to generate returns regardless of overall market direction.</p>
						</div>
						
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/arbitrage/global-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Global / Sector Diversification</h4>
							<p>Exposure to multiple regions and sectors reduces concentration risk and uncovers a broader set of investment opportunities.</p>
						</div>
						
						<div className="rsrcbx strategysctn arbitrage">
							<div className="imgbx"><img src="images/strategy/sharia/integration-icon.svg" className="img-responsive" alt=""/></div>
							<h4>Integration with Volatility and Arbitrage Strategies</h4>
							<p>Leveraging insights and tools from our volatility and arbitrage teams, we enhance alpha generation and risk-adjusted returns.</p>
						</div>
						
					</div>
			
          </div>

        </div>
      </div>
    </>
  );
}
