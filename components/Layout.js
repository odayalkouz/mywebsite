import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Oday Alkouz</span>
              <span>Frontend</span>
            </h1>
            <h2>My Next Website</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 oday Alkouz</p>
      </footer>
    </div>
  )
}