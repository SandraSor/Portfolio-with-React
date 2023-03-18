import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../buttonDarkMode/BtnDarkMode';
import './styles.css';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/Portfolio-with-React' className='logo'>
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink
								to='/Portfolio-with-React'
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/skills'
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Skills
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/contacts'
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
