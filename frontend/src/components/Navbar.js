import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
        <img src={logo} alt="Workout Buddy Logo" className="logo" />
        </Link>
        <nav>
        <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar