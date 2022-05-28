import {
	Button,
	Card,
	Form,
	Input,
	message,
	Modal,
	Avatar,
	Upload,
	Image,
} from "antd";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import "./admin.css";
import config from "../../config";

const { baseUrl } = config;

function Home() {
	const [loading, setLoading] = useState(false);
	const [showAddPostModal, setShowAddPostModal] = useState(false);
	const [posts, setPosts] = useState([]);
	const [customPosts, setCustomPosts] = useState([]);
	const [editPost, setEditPost] = useState(null);
	const [editPostLoading, setEditPostLoading] = useState(false);
	const [addPostLoading, setAddPostLoading] = useState(false);
	const [addPicture, setAddPicture] = useState(false);
	const [editPicture, setEditPicture] = useState(null);
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
					const homePosts = res.data.posts.filter(
						(post) => post.page === "home"
					);
					setPosts(homePosts);
				} else message.error(res.data.error);
			})
			.catch((err) => {
				setLoading(false);
				console.log({ err });
				message.error(err.response?.data.error);
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
				page: "home",
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

	const handleAddPictureToPost = (post) => {
		form.validateFields().then(async (values) => {
			setEditPostLoading(true);
			const url = await getImageUrl(values.file.fileList[0].thumbUrl);
			setEditPostLoading(false);
			const picture = {
				title: values.title,
				url,
			};
			const savedIndex = post.pictures.findIndex(
				(one) => one.title === picture.title
			);
			const payload = {
				...post,
			};

			if (savedIndex === -1) {
				payload.pictures = [...post.pictures, picture];
			} else payload.pictures[savedIndex] = picture;

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
							title: "Picture added successfully",
							onOk: () => {
								getAllPosts();
								setEditPicture(null);
								setAddPicture(null);
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

	const handleDeletePicture = () => {
		const { post, picture } = editPicture;
		const newPictures = post.pictures.filter(
			(one) => one.title !== picture.title
		);
		post.pictures = newPictures;

		const token = localStorage.getItem("token");
		const headers = {
			authorization: `Bearer ${token}`,
		};
		Axios.post(`${baseUrl}/api/posts/edit`, post, { headers })
			.then((res) => {
				if (res.data.success) {
					return Modal.success({
						title: "Picture deleted successfully",
						onOk: () => {
							getAllPosts();
							setEditPicture(null);
							setAddPicture(null);
						},
					});
				}
			})
			.catch((err) => message.error(err.response?.data?.error || err.message));
	};

	const getImageUrl = async (file) => {
		try {
			const res = await Axios.post(
				"https://api.cloudinary.com/v1_1/lawfirm1000/image/upload",
				{
					file,
					api_key: "262637492554747",
					timestamp: Date.now(),
					upload_preset: "nifemmdr_pictures",
				}
			);
			if (res.status === 200) {
				return res.data.url;
			} else return message.error("Uploading picture failed");
		} catch (error) {
			console.log({ error });
		}
	};

	const handleDeletePost = (id) => {
		Modal.confirm({
			title: "Delete Post",
			content: (
				<div>
					Are you sure you want to delete this post?
					<p style={{ color: "red", marginBottom: 0 }}>
						This action is irreversible!
					</p>
					<p style={{ color: "red" }}>Page layout will be disrupted!</p>
				</div>
			),
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

	const confirmDeletePicture = () => {
		Modal.confirm({
			title: "Delete Picture",
			content: "Are you sure you want to delete this picture?",
			onOk: async () => handleDeletePicture(),
		});
	};

	return (
		<Card
			title="Home Page"
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
						{post.header === "New Home Page Post" && (
							<DeleteOutlined
								style={{ float: "right" }}
								onClick={() => handleDeletePost(post._id)}
							/>
						)}
					</h2>
					{post.posts.map((body) => (
						<>
							<h4>
								<b>Sub-title: {body.title}</b>
							</h4>
							<p>Body: {body.body}</p>
						</>
					))}
					{post.pictures?.map((picture) => (
						<Avatar
							src={picture.url}
							alt={picture.title}
							size="large"
							shape="square"
							style={{ margin: 10, cursor: "pointer" }}
							onClick={() => setEditPicture({ picture, post })}
						/>
					))}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "60%",
						}}>
						<Button type="primary" onClick={() => setEditPost(post)}>
							Edit Post
						</Button>
						<Button onClick={() => setAddPicture(post)}>Add Pictures</Button>
					</div>
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
							initialValue="New Home Page Post"
							rules={[
								{ required: true, message: "Enter post title to continue" },
							]}>
							<Input
								size="large"
								disabled={true}
								placeholder="Enter post header"
							/>
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
			{addPicture && (
				<Modal
					visible={!!addPicture}
					title="Add new picture"
					onCancel={() => setAddPicture(null)}
					footer={[
						<Button onClick={() => setAddPicture(null)}>Cancel</Button>,
						<Button
							type="primary"
							onClick={() => handleAddPictureToPost(addPicture)}
							loading={editPostLoading}>
							Add Picture
						</Button>,
					]}>
					<Form form={form} layout="vertical">
						<Form.Item
							name="title"
							label="Picture title"
							rules={[
								{ required: true, message: "Enter post title to continue" },
							]}>
							<Input size="large" placeholder="Enter picture title" />
						</Form.Item>
						{/* <Form.Item
							name="url"
							label="url"
							rules={[
								{ required: true, message: "Enter post url to continue" },
							]}>
							<Input size="large" placeholder="Enter picture url" />
						</Form.Item> */}
						<Form.Item
							name="file"
							label="Upload Picture"
							rules={[
								{ required: false, message: "Upload picture to continue" },
							]}>
							<Upload
								listType="picture-card"
								accept="image/png, image/jpeg, image/jpg"
								multiple={false}
								maxCount={1}
								beforeUpload={() => false}>
								<div>
									<PlusOutlined />
									<div style={{ marginTop: 8 }}>Upload</div>
								</div>
							</Upload>
						</Form.Item>
					</Form>
				</Modal>
			)}

			{editPicture && (
				<Modal
					visible={!!editPicture}
					title="Edit picture"
					onCancel={() => setEditPicture(null)}
					footer={[
						<Button
							type="primary"
							style={{ backgroundColor: "red", marginRight: 10 }}
							onClick={confirmDeletePicture}>
							Delete Picture
						</Button>,
						<Button onClick={() => setEditPicture(null)}>Cancel</Button>,
						<Button
							type="primary"
							onClick={() => handleAddPictureToPost(editPicture.post)}
							loading={editPostLoading}>
							Save
						</Button>,
					]}>
					<Form form={form} layout="vertical">
						<Form.Item
							name="title"
							initialValue={editPicture.picture.title}
							label="Picture title"
							rules={[
								{ required: true, message: "Enter picture title to continue" },
							]}>
							<Input size="large" placeholder="Enter picture title" />
						</Form.Item>
						<Image src={editPicture.picture.url} alt="" />
						<Form.Item
							name="file"
							label="Change Picture"
							rules={[
								{ required: true, message: "Upload picture to continue" },
							]}>
							<Upload
								listType="picture-card"
								accept="image/png, image/jpeg, image/jpg"
								multiple={false}
								maxCount={1}
								beforeUpload={() => false}>
								<div>
									<PlusOutlined />
									<div style={{ marginTop: 8 }}>Upload</div>
								</div>
							</Upload>
						</Form.Item>
					</Form>
				</Modal>
			)}
		</Card>
	);
}

export default Home;
