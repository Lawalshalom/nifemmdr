/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect} from "react";
import Axios  from "axios";
import { message } from "antd";
import config from "../config";

const { baseUrl } = config;

function Header({ page, }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = () => {
		Axios.get(`${baseUrl}/api/posts/all`)
			.then((res) => {
				if (res.data.posts) {
					setPosts(res.data.posts);
				} else message.error(res.data.error);
			})
			.catch((err) => {
				console.log({ err });
				message.error(err.response.data.error);
			});
	};

	const postObj = {};
	posts.forEach((post) => {
		postObj[post.header] = post;
	});
	return (
		<div className={page === "home" ? "banner" : "banner1"} style={{
			background: `url(${postObj["landing page"]?.pictures[0].url}) no-repeat 0px 0px`,
		}}>
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
								<a href={postObj["Social Media Links"]?.posts[0].body} className="w3_agile_facebook">
									<i className="fa fa-facebook" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href={postObj["Social Media Links"]?.posts[2].body} className="agile_twitter">
									<i className="fa fa-twitter" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href={postObj["Social Media Links"]?.posts[1].body} className="w3_agile_vimeo">
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
										<li className={page === "home" ? "active" : ""}>
											<a href="/">Home</a>
										</li>
										<li className={page === "about" ? "active" : ""}>
											<a href="/about">About Us</a>
										</li>
										<li className={page === "services" ? "active" : ""}>
											<a href="/services">Services</a>
										</li>
										<li className={page === "contact" ? "active" : ""}>
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
				{page === "home" && (
					<>
						<div className="w3_banner_info">
							<div className="w3_banner_info_grid">
								<h3 className="test">
									NIFEM MULTIDYNAMIC RESOURCES LIMITED: Taking Mushroom
									production to the next level!
								</h3>
								<p>{postObj["landing page"]?.posts[0].body}</p>
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
					</>
				)}
			</div>
		</div>
	);
}

export default Header;
