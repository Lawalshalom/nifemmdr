/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function About({ posts }) {
	const postObj = {};
	const aboutNewPosts = [];

	posts.forEach((post) => {
		postObj[post.header] = post;
		post.header === "New About Page Post" && aboutNewPosts.push(post);
	});
	return (
		<div>
			<Header page="about" />

			<div
				className="modal video-modal fade"
				id="myModal"
				tabIndex="-1"
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
								<img
									src={postObj["Popup Modal"]?.pictures[0].url}
									alt=" "
									className="img-responsive"
								/>
								<p>
									{postObj["Popup Modal"]?.posts[0].body}
									<i>{postObj["Popup Modal"]?.posts[1].body}</i>
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
						{postObj["Landing page"]?.posts[0].title.slice(0, 4)}{" "}
						<span>{postObj["Landing page"]?.posts[0].title.slice(4, 11)}</span>
						{postObj["Landing page"]?.posts[0].title.slice(11)}
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						<b>{postObj["Landing page"]?.posts[0].body.slice(0, 18)}</b>
						{postObj["Landing page"]?.posts[0].body.slice(18)}
					</p>
					<div className="w3ls_news_grids">
						<div className="col-md-6 w3_agile_about_grid_left">
							<h3>{postObj["Landing page"]?.posts[1].body}</h3>
							<p style={{ marginTop: 20 }}>
								<i>
									<b>{postObj["Landing page"]?.posts[2].title}</b>
								</i>
							</p>
							<p style={{ marginTop: 20 }}>
								{postObj["Landing page"]?.posts[2].body}
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
										{postObj["Strong Points"]?.posts[0].title}
									</b>
								</p>
								<p
									style={{
										fontSize: "18px",
										opacity: "0.7",
										marginLeft: "70px",
									}}>
									{postObj["Strong Points"]?.posts[0].body}
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
									<b style={{ marginLeft: "10px" }}>
										{postObj["Strong Points"]?.posts[1].title}
									</b>
								</p>
								<p
									style={{
										fontSize: "18px",
										opacity: "0.7",
										marginLeft: "70px",
									}}>
									{postObj["Strong Points"]?.posts[1].body}
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
									<b style={{ marginLeft: "10px" }}>
										{postObj["Strong Points"]?.posts[2].title}{" "}
									</b>
								</p>
								<p
									style={{
										fontSize: "18px",
										opacity: "0.7",
										marginLeft: "70px",
									}}>
									{postObj["Strong Points"]?.posts[2].body}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="about-bottom"
				style={{
					background: `url(${postObj["Strong Points"]?.pictures[0].url}) no-repeat 0px 0px`,
					backgroundAttachment: "fixed",
				}}>
				<div className="container">
					<h3>
						<span>{postObj["Strong Points"]?.posts[3].body.slice(0, 12)}</span>
						{postObj["Strong Points"]?.posts[3].body.slice(12)}
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
						{postObj["Team Details"]?.posts[0].title.slice(0, 8)}{" "}
						<span>{postObj["Team Details"]?.posts[0].title.slice(8, 16)}</span>{" "}
						{postObj["Team Details"]?.posts[0].title.slice(16)}
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">{postObj["Team Details"]?.posts[0].body}</p>
					<div className="w3ls_news_grids w3_agileits_team_grids">
						<div className="col-md-4 w3_agileits_team_grid">
							<div
								className="w3layouts_news_grid"
								style={{ display: "flex", justifyContent: "center" }}>
								<img
									src={postObj["Team Details"]?.pictures[0].url}
									alt=" "
									className="img-responsive"
								/>
							</div>
							<h4>Femi Oloyade</h4>
							<p>Chief Executive Officer & Founder</p>
						</div>
						<div className="col-md-4 w3_agileits_team_grid">
							<div
								className="w3layouts_news_grid"
								style={{ display: "flex", justifyContent: "center" }}>
								<img
									src={postObj["Team Details"]?.pictures[1].url}
									alt=" "
									className="img-responsive"
								/>
							</div>
							<h4>Seun Lalude</h4>
							<p>Chief Operating Officer/MD</p>
						</div>
						<div className="col-md-4 w3_agileits_team_grid">
							<div
								className="w3layouts_news_grid"
								style={{ display: "flex", justifyContent: "center" }}>
								<img
									src={postObj["Team Details"]?.pictures[2].url}
									alt=" "
									className="img-responsive"
								/>
							</div>
							<h4>Nike Jolaiya</h4>
							<p>Chief Marketing Officer</p>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			{aboutNewPosts.length > 0 &&
				aboutNewPosts.map((post) => (
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
		</div>
	);
}

export default About;
