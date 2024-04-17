import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import './header.styles.css';


const HeaderComponent = () => {
	return (
		<div className='header-component'>
			<div className='city-container'>
				<h1>London, UK</h1>
				<p>Monday 29 August</p>
			</div>
			<form>
				<input className='search-input' type='text' placeholder='London, UK' />
				<FontAwesomeIcon className='search-icon' icon={faLocationDot} />
			</form>
		</div>
	);
}

export default HeaderComponent;