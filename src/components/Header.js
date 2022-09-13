import '../styles/Header.css'

function Header() {
  return (
    <header>
      <div className="Header--logo">
        <h2>Buddey</h2>        
        <img width="25px" height="25px"></img>
      </div>
      <nav>
        <a href="/bills/">Bills</a>
      </nav>
    </header>
  )
}

export default Header