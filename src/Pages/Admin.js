import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Form, Modal, Button, Input, message } from "antd";
import { Redirect } from "react-router-dom";
import ButtonBox from "../Components/button";
import { Helmet } from "react-helmet";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Axios from "axios";
import config from "../config";
const { Content } = Layout;

const { baseUrl } = config;

export const ContentBox = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.auth-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 50%;
	}
`;

export const Logo = styled.div`
	height: 40px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 40px;
	img {
		height: 100%;
	}
`;

const Title = styled.h1`
	text-align: right;
	font-weight: 700;
	margin-bottom: 30px;
	font-size: 40px;
`;
const Sider = styled.div`
	width: 50%;
	background-color: #e4ffa98f;
	height: 100%;

	h2 {
		color: #7eb800;
		font-weight: 800;
		font-size: 28px;
	}
	h3 {
		margin-top: 10rem;
		font-weight: 800;
		font-size: 44px;
		padding: 20px;

		span {
			color: #7eb800;
		}
	}
`;

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
	const [redirect, setRedirect] = useState("");

	const [form] = Form.useForm();

	const handleLogin = () => {
		form.validateFields().then((values) => {
			setLoading(true);
			Axios.post(`${baseUrl}/api/admin/login`, values)
				.then((res) => {
					setLoading(false);
					if (res.data.success) {
						localStorage.setItem("user-details", JSON.stringify(res.data.user));
						localStorage.setItem("token", res.data.token);
						setRedirect("/admin/home");
					} else return message.error(res.data.error);
				})
				.catch((err) => {
					setLoading(false);
					message.error(err.response?.data?.error);
				});
		});
	};
	const ResetPassword = () => {
		const [loading, setLoading] = useState(false);
		const [form] = Form.useForm();

		const handleResetPassword = () => {
			form
				.validateFields()
				.then(async (val, err) => {
					if (err) return;
					setLoading(true);
					const res = await Axios.post(
						`${baseUrl}/api/admin/reset-password`,
						val
					);
					setLoading(false);
					if (res.data.success) {
						form.resetFields();
						Modal.success({
							title: "Password reset successful",
							onOk: () => setShowForgotPasswordModal(false),
						});
					} else message.error(res.data.error);
				})
				.catch((err) => {
					setLoading(false);
					message.error(err.message);
				});
		};

		return (
			<Modal
				visible={showForgotPasswordModal}
				title="Reset Password"
				onCancel={() => setShowForgotPasswordModal(false)}
				footer={[
					<Button
						type="ghost"
						onClick={() => setShowForgotPasswordModal(false)}>
						Cancel
					</Button>,
					<Button
						type="primary"
						loading={loading}
						onClick={handleResetPassword}>
						Submit
					</Button>,
				]}>
				<Form form={form} layout="vertical">
					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								required: true,
								message: "Enter email address to continue",
							},
						]}>
						<Input
							placeholder="Enter email address"
							type="email"
							size="large"
						/>
					</Form.Item>

					<Form.Item
						name="secretKey"
						label="Enter secret code"
						rules={[
							{ required: true, message: "Enter your secret code to continue" },
						]}>
						<Input.Password
							placeholder="Enter secret code"
							size="large"
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
						/>
					</Form.Item>

					<Form.Item
						name="password"
						label="Enter New Password"
						rules={[
							{
								required: true,
								message: "Enter your new password to continue",
							},
						]}>
						<Input.Password
							placeholder="Enter new password"
							size="large"
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
						/>
					</Form.Item>
				</Form>
			</Modal>
		);
	};

	if (redirect) return <Redirect to={redirect} />;

	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>NIFEM MDR - Admin Login</title>
			</Helmet>
			<Content>
				<ResetPassword />
				<ContentBox>
					<Sider>
						<h2>
							<b>
								<a href="/">NIFEM MDR</a>
							</b>
						</h2>
						{/* <h2>
								NIFEM MDR
								 <img style={{ width: "200px" }} src={""} alt="logo" />
							</h2> */}
						<h3>
							<span>Welcome!</span> NIFEM Multidynamic Resources Ltd. Admin
						</h3>
					</Sider>
					<div className="auth-box">
						<Title>Sign In</Title>

						<Form form={form} layout="vertical">
							<Form.Item
								name="email"
								label="Email"
								rules={[{ required: true, message: "Enter email" }]}>
								<Input placeholder="Email address" size="large" type="email" />
							</Form.Item>

							<Form.Item
								name="password"
								label="Password"
								rules={[{ required: true, message: "Enter password" }]}>
								<Input.Password
									placeholder="Password"
									size="large"
									iconRender={(visible) =>
										visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
									}
								/>
							</Form.Item>

							<div
								style={{
									display: "flex",
									justifyContent: "flex-end",
									marginBottom: "10px",
								}}>
								<Button
									type="link"
									onClick={() => setShowForgotPasswordModal(true)}>
									Forgot Password
								</Button>
							</div>
							<ButtonBox
								text="Login"
								htmlType="submit"
								onAction={handleLogin}
								loading={loading}
							/>
						</Form>
					</div>
				</ContentBox>
			</Content>
		</Layout>
	);
};

export default Login;
