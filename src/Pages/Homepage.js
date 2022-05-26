/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Homepage({ posts }) {
	const postObj = {};
	const homeNewPosts = [];

	posts.forEach((post) => {
		postObj[post.header] = post;
		post.header === "New Home Page Post" && homeNewPosts.push(post);
	});

	return (
		<>
			<Header page="home" posts={posts} />

			<div
				className="modal video-modal fade"
				id="myModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="myModal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							{postObj["Popup Modal"]?.posts[0].title}
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
									{postObj["Popup Modal"]?.posts[0].body}
									<i>{postObj["Popup Modal"]?.posts[1].body}</i>
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
								<h4>{postObj["landing page"]?.posts[1].title}</h4>
								<p>{postObj["landing page"]?.posts[1].body}</p>
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
								<h4>{postObj["landing page"]?.posts[2].title}</h4>
								<p>{postObj["landing page"]?.posts[2].body}</p>
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
								<h4>{postObj["landing page"]?.posts[3].title}</h4>
								<p>{postObj["landing page"]?.posts[3].body}</p>
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
						{postObj["picture carousel"]?.posts[0].title.slice(0, 15)}
						<span>{postObj["picture carousel"]?.posts[0].title.slice(15)}</span>
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						{postObj["picture carousel"]?.posts[0].body}
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
						{postObj["picture carousel"]?.posts[1].title.slice(0, 35)}{" "}
						<span>{postObj["picture carousel"]?.posts[1].title.slice(35)}</span>
					</h3>
					<p>{postObj["picture carousel"]?.posts[1].body}</p>
					<p>{postObj["picture carousel"]?.posts[2].body}</p>
				</div>
				<div className="col-md-6 wthree_welcome_bottom_right">
					<div className="agileinfo_grid">
						<figure className="agileits_effect_moses">
							<img src="images/4.jpg" alt=" " className="img-responsive" />
							<figcaption>
								<h4>
									{postObj["picture carousel"]?.posts[3].title.slice(0, 11)}{" "}
									<span>
										{postObj["picture carousel"]?.posts[3].title.slice(11)}
									</span>
								</h4>
								<p>{postObj["picture carousel"]?.posts[3].body}</p>
							</figcaption>
						</figure>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						{postObj["Maitake Introduction"]?.posts[0].title.slice(0, 4)}{" "}
						<span>
							{postObj["Maitake Introduction"]?.posts[0].title.slice(4, 12)}
						</span>{" "}
						{postObj["Maitake Introduction"]?.posts[0].title.slice(12)}
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						{postObj["Maitake Introduction"]?.posts[0].body}
					</p>
					<div className="w3ls_news_grids">
						<div className="col-md-4 w3ls_news_grid">
							<div
								className="w3layouts_news_grid"
								style={{
									display: "flex",
									justifyContent: "center",
								}}>
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
							<div
								className="agileits_w3layouts_news_grid"
								style={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<h4>
									<a href="#" data-toggle="modal" data-target="#myModal">
										{postObj["Maitake Introduction"]?.posts[1].title}
									</a>
								</h4>
								<p>{postObj["Maitake Introduction"]?.posts[1].body}</p>
							</div>
						</div>
						<div className="col-md-4 w3ls_news_grid">
							<div
								className="w3layouts_news_grid"
								style={{
									display: "flex",
									justifyContent: "center",
								}}>
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
							<div
								className="agileits_w3layouts_news_grid"
								style={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<h4>
									<a href="#" data-toggle="modal" data-target="#myModal">
										{postObj["Maitake Introduction"]?.posts[2].title}
									</a>
								</h4>
								<p>{postObj["Maitake Introduction"]?.posts[2].body}</p>
							</div>
						</div>
						<div className="col-md-4 w3ls_news_grid">
							<div
								className="w3layouts_news_grid"
								style={{
									display: "flex",
									justifyContent: "center",
								}}>
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
							<div
								className="agileits_w3layouts_news_grid"
								style={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<h4>
									<a href="#" data-toggle="modal" data-target="#myModal">
										{postObj["Maitake Introduction"]?.posts[3].title}
									</a>
								</h4>
								<p>{postObj["Maitake Introduction"]?.posts[3].body}</p>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			{homeNewPosts.length > 0 &&
				homeNewPosts.map((post) => (
					<div className="welcome">
						<div className="container">
							<h3 className="agileits_w3layouts_head">
								{post.posts[0].title.split(" ")[0]}{" "}
								<span>{post.posts[0].title.split(" ")[1]}</span>{" "}
								{post.posts[0].title.split(" ").slice(2)}
							</h3>
							<div className="w3_agile_image">
								<img src="images/1.png" alt=" " className="img-responsive" />
							</div>
							<p className="agile_para">{post.posts[0].body}</p>
						</div>
						{post.posts?.slice(1).map((onePost) => (
							<div className="w3_agileits_welcome_grids">
								<h4 style={{ marginLeft: "15%" }}>
									<b>{onePost.title}</b>
								</h4>
								<p style={{ marginLeft: "15%" }}>{onePost.body}</p>
							</div>
						))}
					</div>
				))}

			<Footer />
		</>
	);
}

export default Homepage;
