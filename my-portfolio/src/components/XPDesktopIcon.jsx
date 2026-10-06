import { useId } from 'react';

export default function XPDesktopIcon({ name, className = 'h-9 w-9' }) {
    const gradientPrefix = useId().replaceAll(':', '');
    const blueGradient = `${gradientPrefix}-blue`;
    const goldGradient = `${gradientPrefix}-gold`;

    let artwork;

    switch (name) {
        case 'about':
            artwork = (
                <>
                    <circle cx="24" cy="24" r="19" fill={`url(#${blueGradient})`} stroke="#fff" strokeWidth="1.5" />
                    <path d="M24 21v12" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="24" cy="14" r="2.4" fill="#fff" />
                </>
            );
            break;
        case 'skills':
            artwork = (
                <>
                    <rect x="4" y="6" width="40" height="36" rx="4" fill={`url(#${blueGradient})`} stroke="#fff" strokeWidth="1.5" />
                    <circle cx="18" cy="19" r="6" fill="#f6d7a7" stroke="#315a8b" strokeWidth="1.5" />
                    <path d="M8 36c1-6 5-9 10-9s9 3 10 9" fill="#d8e9f8" stroke="#315a8b" strokeWidth="1.5" />
                    <path d="M32 17h8M32 23h8M32 29h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </>
            );
            break;
        case 'projects':
            artwork = (
                <>
                    <path d="M4 11a3 3 0 0 1 3-3h12l5 5h17a3 3 0 0 1 3 3v21a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" fill={`url(#${goldGradient})`} stroke="#fff" strokeWidth="1.5" />
                    <path d="M5 19h38l-4 17a3 3 0 0 1-3 2H8a3 3 0 0 1-3-3z" fill="#ffd65a" stroke="#d19b18" strokeWidth="1.5" />
                    <path d="M8 22h31" stroke="#fff0a7" strokeWidth="2" />
                </>
            );
            break;
        case 'contact':
            artwork = (
                <>
                    <rect x="4" y="10" width="40" height="29" rx="3" fill="#f8fbff" stroke="#fff" strokeWidth="2" />
                    <path d="m6 13 18 14 18-14" fill="none" stroke="#4685c5" strokeWidth="3" strokeLinejoin="round" />
                    <path d="m6 36 13-11m23 11L29 25" fill="none" stroke="#83b8e6" strokeWidth="2" />
                </>
            );
            break;
        case 'windows':
            artwork = (
                <>
                    <path d="m5 10 17-3v16H5z" fill="#f44336" />
                    <path d="m25 6 18-3v20H25z" fill="#7dbb3f" />
                    <path d="M5 26h17v16L5 39z" fill="#2786d1" />
                    <path d="M25 26h18v20l-18-3z" fill="#f5c542" />
                    <path d="m4 9 40-7M4 40l40 7" stroke="#fff" strokeOpacity=".55" strokeWidth="1" />
                </>
            );
            break;
        case 'door':
            artwork = (
                <>
                    <path d="M7 5h34v38H7z" fill="#dcebf8" stroke="#fff" strokeWidth="1.5" />
                    <path d="M11 8h25v32H11z" fill="#15385b" stroke="#6e9ec8" strokeWidth="1.5" />
                    <path d="m12 10 17-3v33l-17-2z" fill="#2786d1" stroke="#b8ddfa" strokeWidth="1.5" />
                    <path d="m15 13 11-2v26l-11-1z" fill="#57a9e7" />
                    <circle cx="25" cy="25" r="1.8" fill="#f5c542" stroke="#9c7114" strokeWidth=".8" />
                </>
            );
            break;
        default:
            artwork = <circle cx="24" cy="24" r="18" fill={`url(#${blueGradient})`} stroke="#fff" strokeWidth="1.5" />;
    }

    return (
        <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id={blueGradient} x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#76c9ff" />
                    <stop offset=".48" stopColor="#2784dc" />
                    <stop offset="1" stopColor="#0753a4" />
                </linearGradient>
                <linearGradient id={goldGradient} x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#fff2a5" />
                    <stop offset="1" stopColor="#e5aa23" />
                </linearGradient>
            </defs>
            {artwork}
        </svg>
    );
}