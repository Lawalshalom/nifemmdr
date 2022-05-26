import { Button, Card, Form, Input, message, Modal } from "antd";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import config from "../../config";

const { baseUrl } = config;

function About() {
	const [loading, setLoading] = useState(false);
	const [showAddPostModal, setShowAddPostModal] = useState(false);
	const [posts, setPosts] = useState([]);
	const [customPosts, setCustomPosts] = useState([]);
	const [editPost, setEditPost] = useState(null);
	const [editPostLoading, setEditPostLoading] = useState(false);
	const [addPostLoading, setAddPostLoading] = useState(false);

	const [form] = Form.useForm();

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = () => {
		setLoading(true);
		const token = localStorage.getItem("token");
		const headers = {
			authorization: `Bearer ${token}`,
		};
		Axios.get(`${baseUrl}/api/posts/all`, { headers })
			.then((res) => {
				setLoading(false);
				if (res.data.posts) {
					const aboutPosts = res.data.posts.filter(
						(post) => post.page === "about"
					);
					setPosts(aboutPosts);
				} else message.error(res.data.error);
			})
			.catch((err) => {
				setLoading(false);
				console.log({ err });
				message.error(err.response.data.error);
			});
	};

	const handleCreatePost = () => {
		form.validateFields().then((values) => {
			const posts = [{ title: values.title, body: values.body }];
			customPosts.forEach((post, index) => {
				const postObj = {
					title: values[`title-${index + 1}`],
					body: values[`body-${index + 1}`],
				};
				posts.push(postObj);
			});
			const payload = {
				header: values.header,
				posts,
				page: "about",
			};

			const token = localStorage.getItem("token");
			const headers = {
				authorization: `Bearer ${token}`,
			};

			setAddPostLoading(true);
			Axios.post(`${baseUrl}/api/posts/new`, payload, { headers })
				.then((res) => {
					setAddPostLoading(false);
					if (res.data.success) {
						return Modal.success({
							title: "Post created successfully",
							onOk: () => {
								getAllPosts();
								setShowAddPostModal(false);
								setCustomPosts([]);
							},
						});
					}
				})
				.catch((err) => {
					setAddPostLoading(false);
					message.error(err.response?.data?.error || err.message);
				});
		});
	};

	const handleEditPost = () => {
		form.validateFields().then((values) => {
			const posts = [];
			console.log({ values });
			let count = 0;
			while (values[`title-${count}`]) {
				posts.push({
					title: values[`title-${count}`],
					body: values[`body-${count}`],
				});
				count += 1;
			}
			const payload = {
				...editPost,
				header: values.header,
				posts,
			};

			const token = localStorage.getItem("token");
			const headers = {
				authorization: `Bearer ${token}`,
			};
			setEditPostLoading(true);
			Axios.post(`${baseUrl}/api/posts/edit`, payload, { headers })
				.then((res) => {
					setEditPostLoading(false);
					if (res.data.success) {
						return Modal.success({
							title: "Post edited successfully",
							onOk: () => {
								getAllPosts();
								setEditPost(null);
							},
						});
					}
				})
				.catch((err) => {
					setEditPostLoading(false);
					message.error(err.response?.data?.error || err.message);
				});
		});
	};

	const addMorePostBody = () => {
		const length = editPost ? editPost.posts.length : customPosts.length + 1;
		const body = (
			<>
				<Form.Item
					name={`title-${length}`}
					label="Post sub-title"
					rules={[
						{ required: true, message: "Enter post sub-title to continue" },
					]}>
					<Input.TextArea size="large" placeholder="Enter post sub-title" />
				</Form.Item>
				<Form.Item
					name={`body-${length}`}
					label="Post body"
					rules={[{ required: true, message: "Enter post body to continue" }]}>
					<Input.TextArea size="large" placeholder="Enter post body" />
				</Form.Item>
			</>
		);
		setCustomPosts((prev) => [...prev, body]);
	};

	const handleDeletePost = (id) => {
		Modal.confirm({
			title: "Delete Post",
			content: "Are you sure you want to delete this post?",
			onOk: async () => {
				const token = localStorage.getItem("token");
				const headers = {
					authorization: `Bearer ${token}`,
				};
				await Axios.post(
					`${baseUrl}/api/posts/delete`,
					{ id },
					{
						headers,
					}
				)
					.then((res) => {
						if (res.data.success) {
							Modal.success({
								title: "Post deleted successfully",
								onOk: getAllPosts,
							});
						} else message.error(res.data.error);
					})
					.catch((err) => {
						message.error(err.response?.data?.message || err.message);
					});
			},
		});
	};

	return (
		<Card
			title="About Page"
			loading={loading}
			extra={[
				<Button type="primary" onClick={() => setShowAddPostModal(true)}>
					Add Post
				</Button>,
			]}>
			{posts.map((post) => (
				<div key={post.id}>
					<h2>
						<b>Title: {post.header}</b>
						{post.header === "New About Page Post" && <DeleteOutlined
							style={{ float: "right" }}
							onClick={() => handleDeletePost(post._id)}
						/>}
					</h2>
					{post.posts.map((body) => (
						<>
							<h4>
								<b>Sub-title: {body.title}</b>
							</h4>
							<p>Body: {body.body}</p>
						</>
					))}
					<Button type="primary" onClick={() => setEditPost(post)}>
						Edit Post
					</Button>
				</div>
			))}

			{editPost && (
				<Modal
					visible={editPost}
					title="Edit Post"
					onCancel={() => setEditPost(null)}
					footer={[
						<Button onClick={() => setEditPost(null)}>Cancel</Button>,
						<Button
							type="primary"
							onClick={handleEditPost}
							loading={editPostLoading}>
							Edit
						</Button>,
					]}>
					<Form layout="vertical" form={form}>
						<Form.Item
							label="title"
							initialValue={editPost.header}
							//	rules={[{ required: true, message: "Enter post title to continue" }]}
							name="header">
							<Input size="large" disabled={true} />
						</Form.Item>
						{editPost.posts.map((post, index) => (
							<>
								<Form.Item
									label="sub-title"
									initialValue={post.title}
									name={`title-${index}`}
									rules={[
										{
											required: true,
											message: "Enter post sub-title to continue",
										},
									]}>
									<Input.TextArea size="large" />
								</Form.Item>
								<Form.Item
									label="body"
									initialValue={post.body}
									name={`body-${index}`}
									//</>			rules={[{ required: true, message: "Enter post body to continue" }]}
								>
									<Input.TextArea size="large" />
								</Form.Item>
							</>
						))}
						{customPosts}
						<Button type="primary" onClick={addMorePostBody}>
							Add more
						</Button>
					</Form>
				</Modal>
			)}

			{showAddPostModal && (
				<Modal
					visible={showAddPostModal}
					title="Add new post"
					onCancel={() => setShowAddPostModal(false)}
					footer={[
						<Button onClick={() => setShowAddPostModal(false)}>Cancel</Button>,
						<Button
							type="primary"
							onClick={handleCreatePost}
							loading={addPostLoading}>
							Create Post
						</Button>,
					]}>
					<Form form={form} layout="vertical">
						<Form.Item
							name="header"
							label="Post title"
							initialValue="New About Page Post"
							rules={[
								{ required: true, message: "Enter post title to continue" },
							]}>
							<Input size="large" placeholder="Enter post header" disabled={true} />
						</Form.Item>
						<Form.Item
							name="title"
							label="Post sub-title"
							rules={[
								{ required: true, message: "Enter post sub-title to continue" },
							]}>
							<Input.TextArea size="large" placeholder="Enter post sub-title" />
						</Form.Item>
						<Form.Item
							name="body"
							label="Post body"
							rules={[
								{ required: true, message: "Enter post body to continue" },
							]}>
							<Input.TextArea size="large" placeholder="Enter post body" />
						</Form.Item>
						{customPosts}
						<Button type="primary" onClick={addMorePostBody}>
							Add more
						</Button>
					</Form>
				</Modal>
			)}
		</Card>
	);
}

export default About;
