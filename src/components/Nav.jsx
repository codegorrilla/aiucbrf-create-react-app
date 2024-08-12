import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			<header>
				<h1 className="brand">
					<Link to="/">Lipsum</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Nav;
