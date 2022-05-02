/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function About() {
	return (
		<div>
			<div className="banner1">
				<div className="container">
					<div className="w3_agileits_banner_main_grid">
						<div className="w3_agile_logo">
							<h1>
								<a href="/">
									<span>N</span>ifem<i>MDR</i>
								</a>
							</h1>
						</div>
						<div className="agile_social_icons_banner">
							<ul className="agileits_social_list">
								<li>
									<a href="#" className="w3_agile_facebook">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#" className="agile_twitter">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#" className="w3_agile_vimeo">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="agileits_w3layouts_menu">
							<div className="shy-menu">
								<a className="shy-menu-hamburger">
									<span className="layer top"></span>
									<span className="layer mid"></span>
									<span className="layer btm"></span>
								</a>
								<div className="shy-menu-panel">
									<nav
										className="menu menu--horatio link-effect-8"
										id="link-effect-8">
										<ul className="w3layouts_menu__list">
											<li>
												<a href="/">Home</a>
											</li>
											<li className="active">
												<a href="/about">About Us</a>
											</li>
											<li>
												<a href="/services">Services</a>
											</li>
											<li>
												<a href="/contact">Contact Us</a>
											</li>
										</ul>
									</nav>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			<div
				className="modal video-modal fade"
				id="myModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="myModal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							NIFEM MDR
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<section>
							<div className="modal-body">
								<img src="images/4.jpg" alt=" " className="img-responsive" />
								<p>
									Our Company, NIFEM MULTIDYNAMIC RESOURCES LIMITED is a
									standard Mushroom production and services company. Our aim is
									to establish a sustainable and productive mushroom producing
									organization that is capable of producing enough mushroom to
									sustain the investment and also compete favorably with other
									organizations both locally and internationally. To this end we
									adopt the best business approach, following our plans
									efficiently and effectively.
									<i>
										"Agriculture is our wisest pursuit, because it will in the
										end contribute most to real wealth, good morals &
										happiness."
									</i>
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div className="breadcrumbs">
				<div className="container">
					<div className="w3layouts_breadcrumbs_left">
						<ul>
							<li>
								<i className="fa fa-home" aria-hidden="true"></i>
								<a href="/">Home</a>
								<span>/</span>
							</li>
							<li>
								<i className="fa fa-info-circle" aria-hidden="true"></i>About
							</li>
						</ul>
					</div>
					<div className="w3layouts_breadcrumbs_right">
						<h2>About Us</h2>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						Why <span>Choose</span> Us
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						<b>Mission statement: </b>Exploring the dynamism of nature for
						all-round benefits of mankind.
					</p>
					<div className="w3ls_news_grids">
						<div className="col-md-6 w3_agile_about_grid_left">
							<h3>
								VISION: To continually improve our operations in order to
								increase value to customers, enhace the livelihood of our
								employees and leave a footmark in the society.
							</h3>
							<p style={{ marginTop: 20 }}>
								<i>
									<b>
										NIFEM MDR is a full-service Agro-allied agency that aims to
										build brands through creative stories.
									</b>
								</i>
							</p>
							<p style={{ marginTop: 20 }}>
								Our Company, NIFEM MULTIDYNAMIC RESOURCES LIMITED is a standard
								Mushroom production and services company. Our aim is to
								establish a sustainable and productive mushroom producing
								organization that is capable of producing enough mushroom to
								sustain the investment and also compete favorably with other
								organizations both locally and internationally. To this end we
								adopt the best business approach, following our plans
								efficiently and effectively.
							</p>
						</div>
						<div className="col-md-6 w3_agile_about_grid_right">
							<div>
								<p
									style={{
										fontSize: "20px",
										display: "flex",
										alignItems: "center",
										fontFamily: "Bree Serif",
									}}>
									<i
										className="fa fa-check-square-o fa-3x"
										style={{ color: "green" }}>
										{" "}
									</i>
									<b style={{ marginLeft: "10px" }}>
										Market Driven Basic Implementation:{" "}
									</b>
								</p>
								<p
									style={{
										fontSize: "18px",
										opacity: "0.7",
										marginLeft: "70px",
									}}>
									Upholding the spirit of innovation and creativity in shaping a
									solution that can be accepted by the wider community.
								</p>
							</div>
							<div>
								<p
									style={{
										fontSize: "20px",
										display: "flex",
										alignItems: "center",
										marginTop: "10px",
										fontFamily: "Bree Serif",
									}}>
									<i
										className="fa fa-check-square-o fa-3x"
										style={{ color: "green" }}>
										{" "}
									</i>
									<b style={{ marginLeft: "10px" }}>SEM Implementation: </b>
								</p>
								<p
									style={{
										fontSize: "18px",
										opacity: "0.7",
										marginLeft: "70px",
									}}>
									The services we offer are based on data and analysis that are
									very precise and focused on the challenges of Agricultural
									product marketing in Nigeria.
								</p>
							</div>

							<div>
								<p
									style={{
										fontSize: "20px",
										display: "flex",
										alignItems: "center",
										marginTop: "10px",
										fontFamily: "Bree Serif",
									}}>
									<i
										className="fa fa-check-square-o fa-3x"
										style={{ color: "green" }}>
										{" "}
									</i>
									<b style={{ marginLeft: "10px" }}>Decrease Industry GAP: </b>
								</p>
								<p
									style={{
										fontSize: "18px",
										opacity: "0.7",
										marginLeft: "70px",
									}}>
									The services offered are based on sound market decisions so
									that they can have long-lasting health and financial impact on
									both investors and consumers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="about-bottom">
				<div className="container">
					<h3>
						<span>Agriculture</span> not only gives riches to a nation, but the
						only riches she can call her own
					</h3>
					<div className="agileits_w3layouts_learn_more agileits_learn_more hvr-radial-out">
						<a href="#" data-toggle="modal" data-target="#myModal">
							Read More
						</a>
					</div>
				</div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						Meet Our <span>Amazing</span> Team
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						We are a team of passionate individuals with vested interest in
						Agriculture and finance. Our strength is in the summation of the
						culmulated years of individual experiences in these fields.
					</p>
					<div className="w3ls_news_grids w3_agileits_team_grids">
						<div className="col-md-4 w3_agileits_team_grid">
							<div
								className="w3layouts_news_grid"
								style={{ display: "flex", justifyContent: "center" }}>
								<img src="images/27.png" alt=" " className="img-responsive" />
							</div>
							<h4>Femi Oloyade</h4>
							<p>Chief Executive Officer & Founder</p>
						</div>
						<div className="col-md-4 w3_agileits_team_grid">
							<div
								className="w3layouts_news_grid"
								style={{ display: "flex", justifyContent: "center" }}>
								<img src="images/29.png" alt=" " className="img-responsive" />
							</div>
							<h4>Seun Lalude</h4>
							<p>Chief Operating Officer/MD</p>
						</div>
						<div className="col-md-4 w3_agileits_team_grid">
							<div
								className="w3layouts_news_grid"
								style={{ display: "flex", justifyContent: "center" }}>
								<img src="images/28.png" alt=" " className="img-responsive" />
							</div>
							<h4>Nike Jolaiya</h4>
							<p>Chief Marketing Officer</p>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="container">
					<div className="w3agile_footer_grids">
						<div className="col-md-3 agileinfo_footer_grid">
							<div className="agileits_w3layouts_footer_logo">
								<h2>
									<a href="/">
										<span>N</span>IFEM<i>MDR</i>
									</a>
								</h2>
							</div>
						</div>
						<div className="col-md-6 agileinfo_footer_grid">
							<h3>Contact Info</h3>
							<h5 style={{ color: "#fff" }}>
								Call Us <span>+234-813-446-2512, +234-810-475-6061</span>
							</h5>
							<p>
								Email:{" "}
								<a href="mailto:nifemmdr@gmail.com">nifemmdr@gmail.com</a>
							</p>
							<p>
								PLOT 2, TOKUNBO OJO STREET, <span> OJOO, IBADAN.</span>
							</p>
							<ul className="agileits_social_list">
								<li>
									<a href="#" className="w3_agile_facebook">
										<i className="fa fa-facebook" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#" className="agile_twitter">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="#" className="w3_agile_vimeo">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-2 agileinfo_footer_grid agileinfo_footer_grid1">
							<h3>Navigation</h3>
							<ul className="w3layouts_footer_nav">
								<li>
									<a href="/">
										<i
											className="fa fa-long-arrow-right"
											aria-hidden="true"></i>
										Home
									</a>
								</li>
								<li>
									<a href="/about">
										<i
											className="fa fa-long-arrow-right"
											aria-hidden="true"></i>
										About Us
									</a>
								</li>
								<li>
									<a href="/services">
										<i
											className="fa fa-long-arrow-right"
											aria-hidden="true"></i>
										Services
									</a>
								</li>
								<li>
									<a href="/contact">
										<i
											className="fa fa-long-arrow-right"
											aria-hidden="true"></i>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="w3_agileits_footer_copy">
					<div className="container">
						<p>&#169; 2022 NIFEM MDR</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
