"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const links = [
  { id: 1, title: "Portfolio", url: "/portfolio" },
  { id: 2, title: "Blog", url: "/blog" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          Home
        </Link>
      </div>

      {/* Nav Links */}
      <div className={styles.center}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <DarkModeToggle />
      </div>

      {/* Auth Buttons */}
      <div className={styles.right}>
        <SignedOut>
          <div className={styles.buttonGroup}>
            <SignUpButton mode="modal">
              <button className="auth-button signup">Sign Up</button>
            </SignUpButton>

            <SignInButton mode="modal">
              <button className="auth-button signin">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
