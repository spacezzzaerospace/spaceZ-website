import { useEffect, useRef, useState } from 'react';

export type Page = 'home' | 'projects' | 'about' | 'get-involved';

const links: { page?: Page; href: string; label: string }[] = [
  { page: 'home', href: '/', label: 'Home' },
  { page: 'projects', href: '/projects/', label: 'Projects' },
  { page: 'about', href: '/about/', label: 'About' },
  { page: 'get-involved', href: '/get-involved/', label: 'Get involved' },
  { href: '/#community', label: 'Our community' },
];

export default function Navigation({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const lastFocused = useRef<EventTarget | null>(null);

  useEffect(() => {
    // Keep this breakpoint aligned with the navigation CSS.
    const mobile = window.matchMedia('(max-width: 900px)');
    function resetMenu() {
      const focusedLink = lastFocused.current instanceof Node && navigation.current?.contains(lastFocused.current);
      const focusedButton = lastFocused.current === button.current;
      setOpen(false);
      if (mobile.matches && focusedLink) button.current?.focus();
      if (!mobile.matches && focusedButton) {
        navigation.current?.querySelector<HTMLAnchorElement>('[aria-current="page"]')?.focus();
      }
    }
    mobile.addEventListener('change', resetMenu);
    return () => mobile.removeEventListener('change', resetMenu);
  }, []);

  return (
    <header className="site-header" onFocus={event => { lastFocused.current = event.target; }} onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        button.current?.focus();
      }
    }} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setOpen(false);
        // A breakpoint may hide the focused element before the media event.
        if (event.relatedTarget) lastFocused.current = null;
      }
    }}>
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="SpaceZ Aerospace home">
          <img src="/assets/spacez-official-wordmark.png" alt="SpaceZ Aerospace" width="629" height="240" />
        </a>
        <button ref={button} className="nav-toggle" type="button"
          aria-expanded={open} aria-controls="main-navigation"
          onClick={() => setOpen(previous => !previous)}>
          <span>{open ? 'Close menu' : 'Menu'}</span>
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav ref={navigation} id="main-navigation" className={`main-navigation${open ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(link => (
            <a key={link.href} href={link.href}
              aria-current={link.page === page ? 'page' : undefined}
              onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </nav>
        <span className="header-location">York University<br /><span>Toronto, Canada</span></span>
      </div>
    </header>
  );
}
