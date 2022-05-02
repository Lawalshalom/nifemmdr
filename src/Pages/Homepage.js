/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Homepage() {
	return (
		<>
			<div className="banner">
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
											<li className="active">
												<a href="/">Home</a>
											</li>
											<li>
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
					<div className="w3_banner_info">
						<div className="w3_banner_info_grid">
							<h3 className="test">
								NIFEM MULTIDYNAMIC RESOURCES LIMITED: Taking Mushroom production
								to the next level!
							</h3>
							<p>
								To continually improve our operations in order to increase value
								to customers, enhace the livelihood of our employees and leave a
								footmark in the society.
							</p>
							<ul>
								<li>
									<a href="/contact" className="w3l_contact">
										Contact Us
									</a>
								</li>
								<li>
									<a
										href="#"
										className="w3ls_more"
										data-toggle="modal"
										data-target="#myModal">
										Read More
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="thim-click-to-bottom">
						<a href="#welcome_bottom" className="scroll">
							<i className="fa  fa-chevron-down"></i>
						</a>
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

			<div className="banner-bottom">
				<div className="col-md-4 agileits_banner_bottom_left">
					<div className="agileinfo_banner_bottom_pos">
						<div className="w3_agileits_banner_bottom_pos_grid">
							<div className="col-xs-4 wthree_banner_bottom_grid_left">
								<div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
									<i className="fa fa-pagelines" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 wthree_banner_bottom_grid_right">
								<h4>Free Consultation</h4>
								<p>
									We are always available to answer your questions and clarify
									your doubts about our company, product and investment plans.
								</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="col-md-4 agileits_banner_bottom_left1">
					<div className="agileinfo_banner_bottom_pos">
						<div className="w3_agileits_banner_bottom_pos_grid">
							<div className="col-xs-4 wthree_banner_bottom_grid_left">
								<div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
									<i className="fa fa-certificate" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 wthree_banner_bottom_grid_right">
								<h4>Certified Products</h4>
								<p>
									Our Mushroom products are spongy and are widely consumed due
									to their high medicinal and nutritional value.
								</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="col-md-4 agileits_banner_bottom_left2">
					<div className="agileinfo_banner_bottom_pos">
						<div className="w3_agileits_banner_bottom_pos_grid">
							<div className="col-xs-4 wthree_banner_bottom_grid_left">
								<div className="agile_banner_bottom_grid_left_grid hvr-radial-out">
									<i className="fa fa-yelp" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col-xs-8 wthree_banner_bottom_grid_right">
								<h4>Invest and Earn!</h4>
								<p>
									Invest with us and get your returns in a cycle of 120 days.
									Whooping 15% ROI, risk-free!
								</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						Welcome to our <span>Plantation</span>
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						From dead plant matter to nematodes to bacteria, never underestimate
						the cleverness of mushrooms to find new food! - Paul Stametshroom
					</p>
				</div>

				<div className="mis-stage w3_agileits_welcome_grids">
					<ol className="mis-slider">
						<li className="mis-slide">
							<figure>
								<img
									src="https://res.cloudinary.com/lawfirm1000/image/upload/v1651496533/21_daw2y5.jpg"
									alt=" "
									className="img-responsive"
								/>
								{/* <figcaption>Strawberry</figcaption> */}
							</figure>
						</li>
						<li className="mis-slide">
							<figure>
								<img
									src="https://res.cloudinary.com/lawfirm1000/image/upload/v1651496532/24_yll91l.jpg"
									alt=" "
									className="img-responsive"
								/>
							</figure>
						</li>
						<li className="mis-slide">
							<figure>
								<img src="images/22.jpg" alt=" " className="img-responsive" />
							</figure>
						</li>
						<li className="mis-slide">
							<figure>
								<img src="images/25.jpg" alt=" " className="img-responsive" />
							</figure>
						</li>
						<li className="mis-slide">
							<figure>
								<img src="images/26.webp" alt=" " className="img-responsive" />
							</figure>
						</li>
						<li className="mis-slide">
							<figure>
								<img src="images/23.webp" alt=" " className="img-responsive" />
							</figure>
						</li>
					</ol>
				</div>
			</div>

			<div id="welcome_bottom" className="welcome-bottom">
				<div className="col-md-6 wthree_welcome_bottom_left">
					<h3>
						we work hard and make our investors <span>proud</span>
					</h3>
					<p>
						Upholding the spirit of innovation and creativity, we have developed
						a system that both tackles hunger and yeilds profits.
					</p>
					<p>
						"Maitake" means dancing mushroom in Japanese. The mushroom is said
						to have gotten its name after people danced with happiness upon
						finding it in the wild, such are its incredible healing properties.
						This mushroom is a type of adaptogen. Adaptogens assist the body in
						fighting against any type of mental or physical difficulty. They
						also work to regulate systems of the body that have become
						unbalanced. While this mushroom can be used in recipes for taste
						alone, it's considered to be a medicinal mushroom.
					</p>
				</div>
				<div className="col-md-6 wthree_welcome_bottom_right">
					<div className="agileinfo_grid">
						<figure className="agileits_effect_moses">
							<img src="images/4.jpg" alt=" " className="img-responsive" />
							<figcaption>
								<h4>
									Production <span>All Year Round</span>
								</h4>
								<p>
									We have been able to improvise several alternative sources of
									energy to combat the short-fall in the climate. Vis-a-vis
									solar energy, generators and well ventilated environment.
								</p>
							</figcaption>
						</figure>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						Why <span>Maitake</span> Mushroom?
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						Why are we choosing a mushroom product over other Agricultural
						products?
					</p>
					<div className="w3ls_news_grids">
						<div className="col-md-4 w3ls_news_grid">
							<div className="w3layouts_news_grid">
								<img
									style={{ height: 212 }}
									src="images/22.jpg"
									alt=" "
									className="img-responsive"
								/>
								<div className="w3layouts_news_grid_pos">
									<div className="wthree_text">
										<h3>maitake</h3>
									</div>
								</div>
							</div>
							<div className="agileits_w3layouts_news_grid">
								<h4>
									<a href="#" data-toggle="modal" data-target="#myModal">
										Global Popularity
									</a>
								</h4>
								<p>
									Although maitake mushroom has been used in Japan and China for
									thousands of years, it has only gained popularity in Nigeria
									and other part of the world over the last twenty years. People
									are praising this mushroom for its promises of health,
									vitality, and longevity.
								</p>
							</div>
						</div>
						<div className="col-md-4 w3ls_news_grid">
							<div className="w3layouts_news_grid">
								<img
									style={{ height: 212 }}
									src="images/25.jpg"
									alt=" "
									className="img-responsive"
								/>
								<div className="w3layouts_news_grid_pos">
									<div className="wthree_text">
										<h3>maitake</h3>
									</div>
								</div>
							</div>
							<div className="agileits_w3layouts_news_grid">
								<h4>
									<a href="#" data-toggle="modal" data-target="#myModal">
										Natural Effects
									</a>
								</h4>
								<p>
									Compared to other mushrooms, maitake has shown better results
									in preventing and treating cancer and other health conditions.
									Maitake also has a positive effect on overall immunity.
								</p>
							</div>
						</div>
						<div className="col-md-4 w3ls_news_grid">
							<div className="w3layouts_news_grid">
								<img
									style={{ height: 212 }}
									src="images/24.jpg"
									alt=" "
									className="img-responsive"
								/>
								<div className="w3layouts_news_grid_pos">
									<div className="wthree_text">
										<h3>maitake</h3>
									</div>
								</div>
							</div>
							<div className="agileits_w3layouts_news_grid">
								<h4>
									<a href="#" data-toggle="modal" data-target="#myModal">
										Health Benefits
									</a>
								</h4>
								<p>
									Maitake mushrooms are rich in antioxidants, vitamins B and C,
									fiber, minerals, amino acids etc. The mushrooms are also
									fat-free, low-sodium, low-calorie and cholesterol-free.
									Research shows maitake is effective in treating certain
									illnesses such as Cancer, Cholesterol and type 2 Diabetes.
								</p>
							</div>
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
		</>
	);
}

export default Homepage;
