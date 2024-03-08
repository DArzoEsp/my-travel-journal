import logo from '../images/logo-globe.png'

export default function Header() {
    return (
        <div className='header'>
            <img className="header--logo" src={logo} alt="globe picture" />
            <p>my travel journal.</p>
        </div>
    )
}