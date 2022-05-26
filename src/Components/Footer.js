/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { message } from "antd";
import config from "../config";

const { baseUrl } = config;

function Footer() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const postObj = {};

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

	posts.forEach((post) => {
		postObj[post.header] = post;
	});

	return (
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
							Call Us <span>{postObj["Contact Address"]?.posts[2].body}</span>
						</h5>
						<p>
							Email:{" "}
							<a href="mailto:nifemmdr@gmail.com">
								{postObj["Contact Address"]?.posts[0].body}
							</a>
						</p>
						<p>{postObj["Contact Address"]?.posts[1].body.toUpperCase()}</p>
						<ul className="agileits_social_list">
							<li>
								<a
									href={postObj["Social Media Links"]?.posts[0].body}
									className="w3_agile_facebook">
									<i className="fa fa-facebook" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a
									href={postObj["Social Media Links"]?.posts[2].body}
									className="agile_twitter">
									<i className="fa fa-twitter" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a
									href={postObj["Social Media Links"]?.posts[1].body}
									className="w3_agile_vimeo">
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
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
									Home
								</a>
							</li>
							<li>
								<a href="/about">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
									About Us
								</a>
							</li>
							<li>
								<a href="/services">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
									Services
								</a>
							</li>
							<li>
								<a href="/contact">
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
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
	);
}

export default Footer;
