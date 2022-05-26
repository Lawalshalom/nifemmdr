import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Menu, Tag, Button, Tooltip } from "antd";
import { IdcardTwoTone } from "@ant-design/icons";
import { Link, useHistory, Redirect } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

export const ContentBox = styled.div`
	padding: 25px;
	.site-page-header {
		border: 1px solid rgb(235, 237, 240);
	}
	.menu-img {
		svg {
			colorr: #fff;
		}
	}
`;

export const EmptyBox = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Logo = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 20px;
	img {
		margin-bottom: 20px;
	}
`;

const LayoutView = ({ children }) => {
	const [redirect, setRedirect] = useState("");
	const history = useHistory();
	const location = history.location.pathname;
	const user = JSON.parse(localStorage.getItem("user-details"));

	if (!user) {
		return <Redirect to="/admin/login" />;
	}

	const handleLogout = () => {
		localStorage.removeItem("user-details");
		localStorage.removeItem("token");
		localStorage.clear();
		setRedirect("/admin/login");
	};

	if (redirect) return <Redirect to={redirect} />;

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider theme="dark" width={300} collapsible={true}>
				<Logo>
					<p color="#fff">
						<b>
							<a href="/">NIFEM MDR</a>
						</b>
					</p>
					<Tooltip title={`${user?.name || "Admin"}`}>
						<IdcardTwoTone style={{ marginBottom: 10, fontSize: 30 }} />
					</Tooltip>
					<Tag color="#87d068" style={{ padding: "5px 20px" }}>
						Admin
					</Tag>
					<p style={{ marginTop: "10px", color: "#fff", textAlign: "center" }}>
						Nifem MDR
					</p>
				</Logo>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[location]}
					className="side-nav">
					<Menu.Item
						activeclassname="active"
						key="/admin/home"
						style={{ marginBottom: 15 }}>
						<Link to="/admin/home">Home</Link>
					</Menu.Item>
					<Menu.Item
						activeclassname="active"
						key="/admin/about"
						title="about"
						style={{ marginBottom: 15 }}>
						<Link to="/admin/about">About</Link>
					</Menu.Item>
					<Menu.Item
						activeclassname="active"
						key="/admin/services"
						title="services"
						style={{ marginBottom: 15 }}>
						<Link to="/admin/services">Services</Link>
					</Menu.Item>
					<Menu.Item
						activeclassname="active"
						key="/admin/contact"
						title="contact"
						style={{ marginBottom: 15 }}>
						<Link to="/admin/contact">Contact</Link>
					</Menu.Item>
					<Menu.Item
						activeclassname="active"
						key="/admin/accounts"
						title="accounts"
						style={{ marginBottom: 15 }}>
						<Link to="/admin/accounts">Account</Link>
					</Menu.Item>
				</Menu>
				<Logo>
					<Button onClick={handleLogout}>Log out</Button>
				</Logo>
			</Sider>
			<Layout className="site-layout">
				<Content>
					<ContentBox>{children}</ContentBox>
				</Content>
				<Footer style={{ textAlign: "center" }}>NIFEM MDR ©2022</Footer>
			</Layout>
		</Layout>
	);
};

export default LayoutView;
