// components/Header.tsx
import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => (
  <header>
    <nav>
      <Link href="/">HomePage</Link>
      <Link href="/gallery">StudentCreations</Link>
      <Link href="/news">News</Link>
      <Link href="/login">Log In</Link>
    </nav>

    <style jsx>{`
      header {
        background: #fff;
        padding: 1rem 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      nav {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
      }
      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
      }
      a:hover {
        color: #0070f3;
      }
    `}</style>
  </header>
)

export default Header
