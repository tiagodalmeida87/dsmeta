import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo DSMeta" />
                <h1>DSMeta</h1>
                
                <p>
                <br></br>Desenvolvido por
                    <a href="https://github.com/tiagodalmeida87" target="_blank"> @tiagodalmeida87</a>
                </p>
            </div>
        </header>
    )
}

export default Header
