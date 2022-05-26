import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import { message } from "antd";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Layout from "./Pages/Layout";
import AdminHome from "./Pages/admin/Home";
import AdminAbout from "./Pages/admin/About";
import AdminServices from "./Pages/admin/Services";
import AdminContact from "./Pages/admin/Contact";
import Accounts from "./Pages/admin/Accounts";
import Error from "./Error";
import config from "./config";
import "antd/dist/antd.less";

const { baseUrl } = config;

const App = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const homePosts = posts.filter((post) => post.page === "home");
	const aboutPosts = posts.filter((post) => post.page === "about");
	const servicesPosts = posts.filter((post) => post.page === "services");
	const contactPosts = posts.filter((post) => post.page === "contact");

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

	return (
		<>
			<Switch>
				<Route
					path="/"
					render={(props) => <Homepage posts={homePosts} {...props} />}
					exact
				/>
				<Route
					path="/about"
					render={(props) => <About posts={aboutPosts} {...props} />}
				/>
				<Route
					path="/services"
					render={(props) => <Services posts={servicesPosts} {...props} />}
				/>
				<Route
					path="/contact"
					render={(props) => <Contact posts={contactPosts} {...props} />}
				/>
				<Route path="/admin/login" component={Admin} />
				<Layout>
					<Route path="/admin/home" component={AdminHome} />
					<Route path="/admin/about" component={AdminAbout} />
					<Route path="/admin/services" component={AdminServices} />
					<Route path="/admin/contact" component={AdminContact} />
					<Route path="/admin/accounts" component={Accounts} />
				</Layout>
				<Route component={Error} />
			</Switch>
		</>
	);
};

export default App;
