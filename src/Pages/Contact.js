/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Contact() {
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
											<li>
												<a href="/about">About Us</a>
											</li>
											<li>
												<a href="/services">Services</a>
											</li>
											<li className="active">
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
							NIFEM Multidynamic Resources Ltd.
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
								<i className="fa fa-envelope-o" aria-hidden="true"></i>Contact
							</li>
						</ul>
					</div>
					<div className="w3layouts_breadcrumbs_right">
						<h2>Contact Us</h2>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						Get in<span> touch</span> with us
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						We are always available to answer your questions and clarify your
						doubts about our company, product and investment plans.
					</p>

					<div className="w3ls_news_grids">
						<div className="col-md-8 w3_agile_mail_left">
							<div className="agileits_mail_grid_right1 agile_mail_grid_right1">
								<form>
									<span>
										<i>Name</i>
										<input
											type="text"
											name="Name"
											placeholder=" "
											required=""
										/>
									</span>
									<span>
										<i>Email</i>
										<input
											type="email"
											name="Email"
											placeholder=" "
											required=""
										/>
									</span>
									<span>
										<i>Subject</i>
										<input
											type="text"
											name="Subject"
											placeholder=" "
											required=""
										/>
									</span>
									<span>
										<i>Message</i>
										<textarea
											name="Message"
											placeholder=" "
											required=""></textarea>
									</span>
									<div className="w3_submit">
										<input type="submit" disabled={true} value="Submit Now" />
									</div>
								</form>
							</div>
						</div>
						<div className="col-md-4 w3_agile_mail_right">
							<div className="w3_agileits_mail_right_grid">
								<h4>NIFEM MULTIDYNAMIC RESOURCES LTD.</h4>
								<p>
									Exploring the dynamism of nature for all-round benefits of
									mankind.
								</p>
								<h5>Follow Us On</h5>
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
										<a href="#" className="w3_agile_dribble">
											<i className="fa fa-instagram" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
								<div className="w3_agileits_mail_right_grid_pos">
									<img src="images/22.jpg" alt=" " className="img-responsive" />
								</div>
							</div>
							<div className="w3_agileits_mail_right_grid_main">
								<div className="w3layouts_mail_grid_left">
									<div className="w3layouts_mail_grid_left1 hvr-radial-out">
										<span
											className="glyphicon glyphicon-envelope"
											aria-hidden="true"></span>
									</div>
									<div className="w3layouts_mail_grid_left2">
										<h3>Mail Us</h3>
										<a href="mailto:nifemmdr@gmail.com">nifemmdr@gmail.com</a>
									</div>
									<div className="clearfix"> </div>
								</div>
								<div className="w3layouts_mail_grid_left">
									<div className="w3layouts_mail_grid_left1 hvr-radial-out">
										<span
											className="glyphicon glyphicon-home"
											aria-hidden="true"></span>
									</div>
									<div className="w3layouts_mail_grid_left2">
										<h3>Address</h3>
										<p>Plot 2, Tokunbo Ojo Street, Ojoo, Ibadan.</p>
									</div>
									<div className="clearfix"> </div>
								</div>
								<div className="w3layouts_mail_grid_left">
									<div className="w3layouts_mail_grid_left1 hvr-radial-out">
										<span
											className="glyphicon glyphicon-earphone"
											aria-hidden="true"></span>
									</div>
									<div className="w3layouts_mail_grid_left2">
										<h3>Phone</h3>
										<p>+234-813-446-2512 </p>
										<p>+234-810-475-6061</p>
									</div>
									<div className="clearfix"> </div>
								</div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
			<div id="map"></div>

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
						<p>&#169; 2022 NIFEM Multidynamic Resources Ltd.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
