
import Link from 'next/link'
import React from 'react'
import stl from './index.module.scss'

export default function Header() {
  return (
        <nav className={stl.nav}>
            <ul className={stl.navList}>
                <li className={stl.navItem}>
                    <Link href="/"  >
                        Home
                    </Link>
                </li>
                <li className={stl.navItem}  >
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className={stl.navItem} >
                    <Link href="/contact" >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
  )
}
