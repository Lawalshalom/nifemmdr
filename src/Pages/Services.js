/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Form, Modal, Input, message } from "antd";
import axios from "axios";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import config from "../config";

const { baseUrl } = config;

function Services({ posts }) {
	const [showSendMessage, setShowSendMessage] = useState(null);
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

	const postObj = {};

	const servicesNewPosts = [];

	posts.forEach((post) => {
		postObj[post.header] = post;
		post.header === "New Services Page Post" && servicesNewPosts.push(post);
	});
	return (
		<div>
			<Header page="services" />

			<Modal
				visible={!!showSendMessage}
				title="Send Message"
				onCancel={() => {
					setShowSendMessage(null);
					form.resetFields();
				}}
				footer={[
					<Button
						onClick={() => {
							setShowSendMessage(null);
							form.resetFields();
						}}>
						Cancel
					</Button>,
					<Button type="primary" loading={submitLoading} onClick={handleSubmit}>
						Send Message
					</Button>,
				]}>
				<Form layout="vertical" form={form}>
					<Form.Item
						name="name"
						label="Name"
						rules={[{ required: true, message: "Please enter your name" }]}>
						<Input size="large" />
					</Form.Item>
					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								required: true,
								message: "Please enter your email address",
							},
						]}>
						<Input type="email" size="large" />
					</Form.Item>
					<Form.Item
						name="subject"
						label="Subject"
						rules={[
							{
								required: true,
								message: "Please enter your subject",
							},
						]}>
						<Input size="large" placeholder={showSendMessage} />
					</Form.Item>
					<Form.Item
						name="message"
						label="Message"
						rules={[
							{
								required: true,
								message: "Please enter your message",
							},
						]}>
						<Input.TextArea
							placeholder={`I am interested in ${showSendMessage?.trim()}. I would like to ...`}
						/>
					</Form.Item>
				</Form>
			</Modal>

			<div
				className="modal video-modal fade"
				id="myBatchAModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="myModal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							BATCH A
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
									<b> {postObj["Batch A details"]?.posts[0].title}</b>{" "}
									{postObj["Batch A details"]?.posts[0].body}
								</p>
								<p>
									<b> {postObj["Batch A details"]?.posts[1].title}</b>
									{postObj["Batch A details"]?.posts[1].body}
								</p>
								<p>
									<b> {postObj["Batch A details"]?.posts[2].title} </b>{" "}
									{postObj["Batch A details"]?.posts[2].body}
								</p>
								<p>
									<i> {postObj["Batch A details"]?.posts[3].body}</i>
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div
				className="modal video-modal fade"
				id="myBatchBModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="myModal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							BATCH B
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
									<b> {postObj["Batch B details"]?.posts[0].title}</b>{" "}
									{postObj["Batch B details"]?.posts[0].body}
								</p>
								<p>
									<b> {postObj["Batch B details"]?.posts[1].title} </b>{" "}
									{postObj["Batch B details"]?.posts[1].body}
								</p>
								<p>
									<b> {postObj["Batch B details"]?.posts[2].title}</b>{" "}
									{postObj["Batch B details"]?.posts[2].body}
								</p>
								<p>
									<i> {postObj["Batch B details"]?.posts[3].body}</i>
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>

			<div
				className="modal video-modal fade"
				id="myBatchCModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="myModal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							BATCH C
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
									<b> {postObj["Batch C details"]?.posts[0].title} </b>
									{postObj["Batch C details"]?.posts[0].body}
								</p>
								<p>
									<b>{postObj["Batch C details"]?.posts[1].title} </b>
									{postObj["Batch C details"]?.posts[1].body}
								</p>
								<p>
									<b>{postObj["Batch C details"]?.posts[2].title}</b>
									{postObj["Batch C details"]?.posts[2].body}
								</p>
								<p>
									{" "}
									<i>{postObj["Batch C details"]?.posts[3].body}</i>
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
								<i className="fa fa-cogs" aria-hidden="true"></i>Services
							</li>
						</ul>
					</div>
					<div className="w3layouts_breadcrumbs_right">
						<h2>Services</h2>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>

			<div className="welcome">
				<div className="container">
					<h3 className="agileits_w3layouts_head">
						{postObj["Services Intro"]?.posts[0].title.slice(0, 4)}{" "}
						<span>
							{postObj["Services Intro"]?.posts[0].title.slice(4, 13)}
						</span>{" "}
						{postObj["Services Intro"]?.posts[0].title.slice(13)}
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						{postObj["Services Intro"]?.posts[0].body}
					</p>
					<div className="w3_agile_services_grids">
						<div
							className="col-md-6 w3_agile_services_grid"
							style={{ cursor: "pointer" }}
							onClick={() =>
								setShowSendMessage(postObj["Services Intro"]?.posts[1].title)
							}>
							<div className="col-xs-4 w3_agile_services_grid_left">
								<div className="agile_services_grid_left1 hvr-radial-out">
									<img src="images/13.png" alt=" " className="img-responsive" />
								</div>
							</div>
							<div className="col-xs-8 w3_agile_services_grid_right">
								<h4>{postObj["Services Intro"]?.posts[1].title}</h4>
								<p>{postObj["Services Intro"]?.posts[1].body}</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div
							className="col-md-6 w3_agile_services_grid"
							style={{ cursor: "pointer" }}
							onClick={() =>
								setShowSendMessage(postObj["Services Intro"]?.posts[2].title)
							}>
							<div className="col-xs-4 w3_agile_services_grid_left">
								<div className="agile_services_grid_left1 hvr-radial-out">
									<img src="images/14.png" alt=" " className="img-responsive" />
								</div>
							</div>
							<div className="col-xs-8 w3_agile_services_grid_right">
								<h4>{postObj["Services Intro"]?.posts[2].title}</h4>
								<p>{postObj["Services Intro"]?.posts[2].body}</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div
							className="col-md-6 w3_agile_services_grid"
							style={{ cursor: "pointer" }}
							onClick={() =>
								setShowSendMessage(postObj["Services Intro"]?.posts[3].title)
							}>
							<div className="col-xs-4 w3_agile_services_grid_left">
								<div className="agile_services_grid_left1 hvr-radial-out">
									<img src="images/15.png" alt=" " className="img-responsive" />
								</div>
							</div>
							<div className="col-xs-8 w3_agile_services_grid_right">
								<h4>{postObj["Services Intro"]?.posts[3].title}</h4>
								<p>{postObj["Services Intro"]?.posts[3].body}</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div
							className="col-md-6 w3_agile_services_grid"
							style={{ cursor: "pointer" }}
							onClick={() =>
								setShowSendMessage(postObj["Services Intro"]?.posts[4].title)
							}>
							<div className="col-xs-4 w3_agile_services_grid_left">
								<div className="agile_services_grid_left1 hvr-radial-out">
									<img src="images/16.png" alt=" " className="img-responsive" />
								</div>
							</div>
							<div className="col-xs-8 w3_agile_services_grid_right">
								<h4>{postObj["Services Intro"]?.posts[4].title}</h4>
								<p>{postObj["Services Intro"]?.posts[4].body}</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			<div className="services-bottom">
				<div className="container">
					<h3 className="agileits_w3layouts_head agileinfo_head w3_head">
						{postObj["Investment Plans"]?.posts[0].title.slice(0, 11)}{" "}
						<span>{postObj["Investment Plans"]?.posts[0].title.slice(11)}</span>
					</h3>
					<div className="w3_agile_image">
						<img src="images/17.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para agileits_para">
						{postObj["Investment Plans"]?.posts[0].body}
					</p>
					<div className="w3ls_news_grids">
						<div className="col-md-4 w3_agileits_services_bottom_grid">
							<div className="wthree_services_bottom_grid1">
								<img src="images/5.jpg" alt=" " className="img-responsive" />
								<div className="wthree_services_bottom_grid1_pos">
									<h4>{postObj["Investment Plans"]?.posts[1].title}</h4>
								</div>
							</div>
							<div className="agileinfo_services_bottom_grid2">
								<p>
									<b>{postObj["Investment Plans"]?.posts[1].body}</b>
								</p>
								<div className="agileits_w3layouts_learn_more hvr-radial-out">
									<a href="#" data-toggle="modal" data-target="#myBatchAModal">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 w3_agileits_services_bottom_grid">
							<div className="wthree_services_bottom_grid1">
								<img src="images/6.jpg" alt=" " className="img-responsive" />
								<div className="wthree_services_bottom_grid1_pos">
									<h4>{postObj["Investment Plans"]?.posts[2].title}</h4>
								</div>
							</div>
							<div className="agileinfo_services_bottom_grid2">
								<p>
									<b>{postObj["Investment Plans"]?.posts[2].body}</b>
								</p>
								<div className="agileits_w3layouts_learn_more hvr-radial-out">
									<a href="#" data-toggle="modal" data-target="#myBatchBModal">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 w3_agileits_services_bottom_grid">
							<div className="wthree_services_bottom_grid1">
								<img src="images/3.jpg" alt=" " className="img-responsive" />
								<div className="wthree_services_bottom_grid1_pos">
									<h4>{postObj["Investment Plans"]?.posts[3].title}</h4>
								</div>
							</div>
							<div className="agileinfo_services_bottom_grid2">
								<p>
									<b>{postObj["Investment Plans"]?.posts[3].body}</b>
								</p>
								<div className="agileits_w3layouts_learn_more hvr-radial-out">
									<a href="#" data-toggle="modal" data-target="#myBatchCModal">
										Read More
									</a>
								</div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>

			<div className="testimonials">
				<div className="container" style={{ marginBottom: "40px" }}>
					<h3 className="agileits_w3layouts_head">
						{postObj["Featured Services"]?.posts[0].title.slice(0, 4)}{" "}
						<span>
							{postObj["Featured Services"]?.posts[0].title.slice(4, 13)}
						</span>{" "}
						{postObj["Featured Services"]?.posts[0].title.slice(13)}
					</h3>
					<div className="w3_agile_image">
						<img src="images/1.png" alt=" " className="img-responsive" />
					</div>
					<p className="agile_para">
						{postObj["Featured Services"]?.posts[0].body}
					</p>
					<div className="w3ls_news_grids">
						<div
							className="col-md-6 w3_agile_about_grid_left"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<h3>{postObj["Featured Services"]?.posts[1].title}</h3>
							<div style={{ marginLeft: 30 }}>
								{postObj["Featured Services"]?.posts[1].body
									.split("•")
									.map((text) => (text.length > 1 ? <p>• {text}</p> : null))}
							</div>
						</div>
						<div className="col-md-6 w3_agile_about_grid_right">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<h3 style={{ fontFamily: "Bree Serif" }}>
									{postObj["Featured Services"]?.posts[2].title}
								</h3>
								<div style={{ margin: "20px 0 0 20px", opacity: "0.7" }}>
									{postObj["Featured Services"]?.posts[2].body
										.split("\n")
										.map((text) =>
											text.length > 1 ? (
												<p
													style={{
														fontSize: "16px",

														margin: "10px",
													}}>
													<i
														className="fa fa-check-square-o fa-lg"
														style={{ color: "green", marginRight: "10px" }}>
														{" "}
													</i>
													{text}
												</p>
											) : null
										)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{servicesNewPosts.length > 0 &&
				servicesNewPosts.map((post) => (
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

export default Services;
