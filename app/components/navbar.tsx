"use client";
import { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavLink = memo<NavLinkProps>(({ href, children, isActive = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={href}
                className={`relative pb-1 transition-colors duration-300 ease-in-out no-underline inline-block ${
                    isActive 
                        ? 'text-green-600 font-semibold' 
                        : isHovered 
                        ? 'text-green-600' 
                        : 'text-gray-800'
                }`}
            >
                {children}
            </Link>
            <span
                className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ease-in-out ${
                    isHovered || isActive ? 'w-full' : 'w-0'
                }`}
            />
        </div>
    );
});

NavLink.displayName = 'NavLink';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const navigationItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/products', label: 'Our Product' },
        { href: '/manufacturing', label: 'Manufacturing' },
        { href: '/distribution', label: 'Distribution' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className="w-full h-14 md:h-16 lg:h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 bg-white shadow-sm sticky top-0 z-50">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-1 group" aria-label="MHAHRR Home">
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0">
                    <Image
                        src="/logo_without_text_bgremove.png"
                        alt="MHAHRR Natural Logo"
                        fill
                        sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                        className="object-contain"
                        priority
                    />
                </div>
                <div>
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                        MHAHRR Natural's
                    </span>
                    <p className="text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300">Healing Solution</p>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                {navigationItems.map(({ href, label }) => (
                    <NavLink
                        key={href}
                        href={href}
                        isActive={pathname === href}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-800 hover:text-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-md"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                    
                    {/* Menu Panel */}
                    <div className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden z-50 border-t border-gray-100">
                        <div className="flex flex-col py-4 px-6 space-y-1">
                            {navigationItems.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={closeMenu}
                                    className={`py-3 px-4 rounded-lg transition-all duration-200 ${
                                        pathname === href
                                            ? 'text-green-600 bg-green-50 font-semibold'
                                            : 'text-gray-800 hover:text-green-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default memo(Navbar);
