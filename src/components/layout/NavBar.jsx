import Logo from '../../img/netflix_logo.png'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <img src={Logo} alt="logo" />
        <ul>
          <select>
            <option>&#127760; Português</option>
          </select>
          <li>Entrar</li>
        </ul>
    </nav>
  )
}

export default NavBar