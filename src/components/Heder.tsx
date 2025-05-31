import Link from "next/link";

export async function Header() {
  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav className="flex flex-row gap-4 text-blue-500">
        <Link href="/">Ana Sayfa</Link>
        <Link href="/panel">Panel (Protected Page)</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;