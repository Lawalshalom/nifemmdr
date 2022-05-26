import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button, Card, Form, Input, message, Modal, Table } from "antd";
import {
	EyeInvisibleOutlined,
	EyeTwoTone,
	DeleteOutlined,
} from "@ant-design/icons";
import config from "../../config";

const { baseUrl } = config;

const Accounts = () => {
	const [loading, setLoading] = useState(false);
	const [addAdminLoading, setAddAdminLoading] = useState(false);
	const [showAddAdminModal, setShowAddAdminModal] = useState(false);
	const [admins, setAdmins] = useState([]);

	const [form] = Form.useForm();

	useEffect(() => {
		getAllAdmins();
	}, []);

	const getAllAdmins = () => {
		setLoading(true);
		const token = localStorage.getItem("token");
		const headers = {
			authorization: `Bearer ${token}`,
		};
		Axios.get(`${baseUrl}/api/admin/all`, { headers })
			.then((res) => {
				setLoading(false);
				if (res.data.admins) {
					setAdmins(res.data.admins);
				} else message.error(res.data.error);
			})
			.catch((err) => {
				setLoading(false);
				message.error(err.response.data.error);
			});
	};

	const handleCreateAdmin = () => {
		form.validateFields().then((values) => {
			const token = localStorage.getItem("token");
			const headers = {
				authorization: `Bearer ${token}`,
			};
			setAddAdminLoading(true);
			Axios.post(`${baseUrl}/api/admin/new`, values, { headers })
				.then((res) => {
					setAddAdminLoading(false);
					if (res.data.success) {
						return Modal.success({
							title: "Admin created successfully",
							onOk: () => {
								setShowAddAdminModal(false);
								getAllAdmins();
							},
						});
					} else return message.error(res.data.error);
				})
				.catch((err) => {
					setAddAdminLoading(false);
					message.error(err.response.data.error);
				});
		});
	};

	const columns = [
		{
			title: "Username",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Date Added",
			dataIndex: "date",
			key: "date",
			render: (data) => new Date(data).toLocaleDateString(),
		},
		{
			title: "Actions",
			dataIndex: "id",
			key: "id",
			render: (value, data) =>
				data.email !== "nifemmdr@gmail.com" ? (
					<>
						<DeleteOutlined
							title="delete admin"
							style={{ marginLeft: "10px" }}
							onClick={() => deleteAdmin(data)}
						/>{" "}
					</>
				) : null,
		},
	];

	const deleteAdmin = (admin) => {
		Modal.confirm({
			title: "Delete Admin",
			content: "Are you sure you want to delete this admin?",
			onOk: async () => {
				const token = localStorage.getItem("token");
				const headers = {
					authorization: `Bearer ${token}`,
				};
				await Axios.post(`${baseUrl}/api/admin/delete`, admin, {
					headers,
				})
					.then((res) => {
						if (res.data.success) {
							Modal.success({
								title: "Admin deleted successfully",
								onOk: getAllAdmins,
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
			title="Admin Users"
			loading={loading}
			extra={[
				<Button type="primary" onClick={() => setShowAddAdminModal(true)}>
					Add Admin
				</Button>,
			]}>
			{admins.length > 0 && (
				<Table
					columns={columns}
					dataSource={admins}
					onRow={() => ({
						onClick: () => {},
					})}
				/>
			)}
			{admins.length < 1 && <b>You have no other admin accounts added yet.</b>}

			{showAddAdminModal && (
				<Modal
					visible={showAddAdminModal}
					title="Add new post"
					onCancel={() => setShowAddAdminModal(false)}
					footer={[
						<Button onClick={() => setShowAddAdminModal(false)}>Cancel</Button>,
						<Button
							type="primary"
							onClick={handleCreateAdmin}
							loading={addAdminLoading}>
							Create Admin
						</Button>,
					]}>
					<Form form={form} layout="vertical">
						<Form.Item
							name="name"
							label="Username"
							rules={[
								{ required: true, message: "Enter admin username to continue" },
							]}>
							<Input size="large" placeholder="Enter username" type="text" />
						</Form.Item>
						<Form.Item
							name="email"
							label="Email"
							rules={[
								{ required: true, message: "Enter admin email to continue" },
							]}>
							<Input size="large" placeholder="Enter email" type="email" />
						</Form.Item>
						<Form.Item
							name="password"
							label="Password"
							rules={[
								{ required: true, message: "Enter password to continue" },
							]}>
							<Input.Password
								size="large"
								placeholder="Enter password"
								iconRender={(visible) =>
									visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
								}
							/>
						</Form.Item>
						<Form.Item
							name="secretKey"
							label="Secret key"
							rules={[
								{
									required: true,
									message: "Enter admin secret key to continue",
								},
							]}>
							<Input size="large" placeholder="Enter secret key" />
						</Form.Item>
					</Form>
				</Modal>
			)}
		</Card>
	);
};

export default Accounts;
