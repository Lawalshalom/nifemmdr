/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, message, Modal, Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import config from "../config";

const { baseUrl } = config;

function Contact({ posts }) {
	const contactNewPosts = [];
	const postObj = {};

	posts.forEach((post) => {
		postObj[post.header] = post;
		post.header === "New Contact Page Post" && contactNewPosts.push(post);
	});

	const [submitLoading, setSubmitLoading] = useState(false);
	const [form] = Form.useForm();

	const handleSubmit = (e) => {
		e.preventDefault();
		form.validateFields().then((values) => {
			setSubmitLoading(true);
			axios
				.post(`${baseUrl}/api/posts/message`, values)
				.then((res) => {
					setSubmitLoading(false);
					if (res.data.success) {
						Modal.success({
							title: "Message sent successfully",
							onOk: () => form.resetFields(),
						});
					}
				})
				.catch((err) => {
					setSubmitLoading(false);
					message.error(err.message);
				});
		});
	};

	return (
		<div>
			<Header page="contact" />

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
						{postObj["Contact Intro"]?.posts[0].title.slice(0, 7)}
						<span>
							{postObj["Contact Intro"]?.posts[0].title.slice(7, 13)}
						</span>{" "}
						{postObj["Contact Intro"]?.posts[0].title.slice(13)}
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						{postObj["Contact Intro"]?.posts[0].body}
					</p>

					<div className="w3ls_news_grids">
						<div className="col-md-8 w3_agile_mail_left">
							<div className="agileits_mail_grid_right1 agile_mail_grid_right1">
								<Form form={form}>
									<span>
										<i>Name</i>
										<Form.Item
											name="name"
											rules={[
												{ required: true, message: "Please enter your name" },
											]}>
											<Input />
										</Form.Item>
									</span>
									<span>
										<i>Email</i>
										<Form.Item
											name="email"
											rules={[
												{
													required: true,
													message: "Please enter your email address",
												},
											]}>
											<Input type="email" />
										</Form.Item>
									</span>
									<span>
										<i>Subject</i>
										<Form.Item
											name="subject"
											rules={[
												{
													required: true,
													message: "Please enter your subject",
												},
											]}>
											<Input />
										</Form.Item>
									</span>
									<span>
										<i>Message</i>
										<Form.Item
											name="message"
											rules={[
												{
													required: true,
													message: "Please enter your message",
												},
											]}>
											<Input.TextArea />
										</Form.Item>
									</span>
									<div className="w3_submit">
										<Button
											type="primary"
											onClick={handleSubmit}
											loading={submitLoading}
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												float: "right",
											}}>
											Submit Now
										</Button>
									</div>
								</Form>
							</div>
						</div>
						<div className="col-md-4 w3_agile_mail_right">
							<div className="w3_agileits_mail_right_grid">
								<h4>{postObj["Contact Intro"]?.posts[1].title}</h4>
								<p>{postObj["Contact Intro"]?.posts[1].body}</p>
								<h5>Follow Us On</h5>
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
											className="w3_agile_dribble">
											<i className="fa fa-instagram" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
								<div className="w3_agileits_mail_right_grid_pos">
									<img
										src={postObj["Contact Intro"]?.pictures[0].url}
										alt=" "
										className="img-responsive"
									/>
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
										<a href="mailto:nifemmdr@gmail.com">
											{postObj["Contact Address"]?.posts[0].body}
										</a>
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
										<p>{postObj["Contact Address"]?.posts[1].body}</p>
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
										{postObj["Contact Address"]?.posts[2].body
											.split("\n")
											.map((text) => (
												<p key={Math.random()}>{text}</p>
											))}
									</div>
									<div className="clearfix"> </div>
								</div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			{contactNewPosts.length > 0 &&
				contactNewPosts.map((post) => (
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

export default Contact;
