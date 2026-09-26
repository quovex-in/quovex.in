import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="siteHeader">
      <Link href="/" className="brand" aria-label="QuoVex home"><span className="brandMark"><i /><i /><i /></span>QuoVex</Link>
      <div className="siteNav">
        <Link href="/services">Capabilities</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className="headerCta">Start a conversation <span>↗</span></Link>
      </div>
    </nav>
  );
}