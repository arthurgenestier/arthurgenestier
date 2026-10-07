import { useState, useEffect } from 'react';
import Window from '../components/Window';
import XPDesktopIcon from '../components/XPDesktopIcon';

export default function Home() {
    const [windows, setWindows] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [startMenuOpen, setStartMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isWizzing, setIsWizzing] = useState(false);
    const [isBooting, setIsBooting] = useState(true);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const bootTimer = window.setTimeout(() => setIsBooting(false), prefersReducedMotion ? 300 : 4550);
        return () => window.clearTimeout(bootTimer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const desktopIcons = [
        {
            id: 'about',
            name: "À propos",
            content: (
                <div className="bg-black text-pink-500 p-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    {/* En-tête MySpace style */}
                    <div className="text-center mb-6 border-b-2 border-pink-500 pb-4">
                        <div className="mb-4 flex items-center justify-between border border-blue-400 bg-gradient-to-r from-[#003399] to-[#6699cc] px-3 py-1 text-left text-sm text-white shadow">
                            <strong className="text-lg">MyArthurSpace</strong>
                            <span>Accueil | Profil | Musique</span>
                        </div>
                        <h1 className="text-3xl font-bold animate-pulse">~*~ Arthur Genestier ~*~</h1>
                        <p className="text-blue-400 animate-bounce">★≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣★</p>
                        {/* Lecteur audio */}
                        <div className="bg-black p-2 rounded" aria-label="Lecteur audio">
                            <audio controls className="w-full custom-audio">
                                <source src="/musiques/song.mp3" type="audio/mpeg" />
                                Votre navigateur ne supporte pas l'élément audio.
                            </audio>
                        </div>
                    </div>

                    {/* Infos personnelles style MySpace */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-pink-500 p-4 rounded">
                            <h2 className="text-xl mb-2 text-blue-400">♪ À propos de moi ♪</h2>
                            <p>♥ Poste: Développeur Front-End, Intégrateur & Webmaster</p>
                            <p>♥ Webmaster chez BERNER depuis avril 2025</p>
                            <p>♥ Mood: Coding 💻 & Designing 🎨</p>

                            <div className="flex justify-center mb-4">
                                <img
                                    src="/images/profil.png"
                                    alt="Photo d'Arthur Genestier"
                                    className=""
                                />
                            </div>
                        </div>

                        <div className="border-2 border-pink-500 p-4 rounded">
                            <h2 className="text-xl mb-2 text-blue-400">♪ Expertise ♪</h2>
                            <p>♥ WordPress : création de thèmes sur mesure, développement de plugins et optimisation des performances et du référencement.</p>
                            <p>♥ Intégration web : maîtrise de HTML5, CSS3, JavaScript (ES6), SCSS et de frameworks comme Bootstrap et Tailwind CSS.</p>
                            <p>♥ UI/UX design : conception d'interfaces intuitives et adaptatives, prototypage avec Figma et Adobe XD.</p>
                            <p>♥ Accessibilité : application des recommandations WCAG pour concevoir des sites accessibles à tous.</p>
                        </div>
                    </div>

                    {/* Section amis */}
                    <div className="mt-6">
                        <h2 className="text-xl text-blue-400 mb-4">~*~ Présentation ~*~</h2>
                        <div className="text-center">
                            <div className="border-2 border-pink-500 p-2">
                                <p className="text-white">
                                    Développeur front-end et webmaster, je crée et optimise des pages web en portant une attention particulière à l'expérience utilisateur, à la conversion et au référencement naturel. Depuis avril 2025, je travaille chez BERNER sur les contenus marketing avec SmartEdit (CMS SAP), l'optimisation de pages et le blog WordPress.
                                </p>
                                <p className="text-white mt-2">
                                    Mon parcours m'a permis de travailler sur des projets web variés, de l'intégration front-end à la gestion de contenu. J'accorde une importance particulière à l'accessibilité, à la qualité éditoriale et à l'optimisation des performances.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            )
        },
        {
            id: 'skills',
            name: "Profil",
            content: (
                <div className="min-h-full bg-[#eaf1f8] p-4 text-[#1d3652]" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                    {/* En-tête style Encarta */}
                    <div className="mb-5 border border-[#8aa9c9] bg-gradient-to-r from-[#164678] via-[#3675ac] to-[#164678] px-4 py-3 text-center shadow-inner">
                        <p className="mb-1 text-left text-xs font-bold text-[#d5e7f7]">GENESTIERPÉDIA | DOSSIER PROFESSIONNEL</p>
                        <h1 className="text-3xl font-serif text-white">Arthur Genestier</h1>
                            <p className="text-sm text-[#d5e7f7]">© 2026 Développeur front-end, intégrateur & webmaster</p>
                    </div>

                    <div className="mb-4 border-y-2 border-[#d1ad54] bg-[#dce8f4] px-3 py-2 text-xs font-bold text-[#334f6c]">
                        ARTICLE DE RÉFÉRENCE | PARCOURS PROFESSIONNEL
                    </div>

                    {/* Contenu Principal */}
                    <div className="space-y-4">
                        {/* Section Expérience */}
                        <div className="border border-[#a9bfd4] bg-white p-4 shadow-sm">
                            <h2 className="mb-3 border-b border-[#d2b65b] pb-2 text-xl font-serif text-[#164678]">
                                [Expérience Professionnelle]
                            </h2>
                            <div className="pl-4">
                                <h3 className="mb-2 text-lg text-[#23486c]">BERNER (avril 2025 - aujourd'hui)</h3>
                                <p className="mb-2 italic text-[#405f7d]">Webmaster</p>
                                <ul className="mb-6 list-disc space-y-2 pl-6 text-[#354b61]">
                                    <li>Création et mise à jour de contenus marketing avec SmartEdit (CMS SAP)</li>
                                    <li>Refonte et optimisation de pages marketing dans un objectif de conversion</li>
                                    <li>Optimisation du référencement naturel lors de la création de pages</li>
                                    <li>Optimisation de tableaux JavaScript liés à la création de pages</li>
                                    <li>Gestion du blog WordPress et refonte des pages d'articles</li>
                                </ul>
                                <h3 className="mb-2 text-lg text-[#23486c]">Mindoza (2022-2024)</h3>
                                <p className="mb-2 italic text-[#405f7d]">Développeur front-end - spécialisation WordPress</p>
                                <ul className="list-disc space-y-2 pl-6 text-[#354b61]">
                                    <li>Développement de thèmes personnalisés et optimisation WordPress</li>
                                    <li>Application des technologies front-end : HTML, CSS, JavaScript, jQuery, Twig, Bootstrap</li>
                                    <li>Optimisation des performances et du référencement</li>
                                    <li>Conception responsive et UX design</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border border-[#a9bfd4] bg-white p-4 shadow-sm">
                            <h2 className="mb-3 border-b border-[#d2b65b] pb-2 text-xl font-serif text-[#164678]">
                                [Compétences Techniques]
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <h3 className="mb-2 text-[#23486c]">Développement web</h3>
                                    <p className="text-[#354b61]">HTML5, CSS3, SCSS, JavaScript, PHP, React, Vue.js</p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-[#23486c]">Frameworks & outils</h3>
                                    <p className="text-[#354b61]">Bootstrap, Tailwind CSS, Git</p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-[#23486c]">CMS</h3>
                                    <p className="text-[#354b61]">WordPress, Drupal, PrestaShop, SAP SmartEdit</p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-[#23486c]">Autres</h3>
                                    <p className="text-[#354b61]">SEO, accessibilité (WCAG), UI/UX, SQL</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#a9bfd4] bg-white p-4 shadow-sm">
                            <h2 className="mb-3 border-b border-[#d2b65b] pb-2 text-xl font-serif text-[#164678]">
                                [Certifications]
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3">
                                    <h3 className="text-[#23486c]">O&apos;Clock Integrally</h3>
                                    <p className="text-[#354b61]">2021 - Développement Front-end</p>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-[#23486c]">Opquast</h3>
                                    <p className="text-[#354b61]">2021 - Qualité Web</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        ,
        {
            id: 'contact',
            name: "Contact",
            content: (() => {
                const handleWizz = () => {
                    const audio = document.getElementById('wizz-audio');
                    audio.currentTime = 0; // Réinitialiser le son pour qu'il rejoue depuis le début
                    audio.play();
                    setIsWizzing(true);
                    setTimeout(() => setIsWizzing(false), 200);
                };

                return (
                    <div className="h-full border-x border-white/70 bg-gradient-to-b from-[#c2def5] via-[#a8cfee] to-[#80b4df] p-4" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                        <div className={isWizzing ? 'wizz-animation' : ''}>
                            {/* En-tête MSN */}
                            <div className="mb-2 overflow-hidden border border-[#6e91b3] bg-white shadow-md">
                                <div className="flex items-center justify-between border-b border-[#4c79a4] bg-gradient-to-r from-[#286299] to-[#82b5df] px-3 py-1 text-sm font-semibold text-white">
                                    <span>Messeng&apos;Arthur</span>
                                    <span className="text-xs font-normal">Conversation</span>
                                </div>
                                <div className="p-3">
                                <div className="flex items-center gap-2">
                                    <span className="inline-block h-3 w-3 rounded-full border border-[#397c26] bg-gradient-to-b from-[#a6e478] to-[#43a522] shadow-sm" aria-label="En ligne" />
                                    <span className="font-semibold">Arthur Genestier</span>
                                    <span className="text-gray-500 text-sm">(En ligne)</span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1 italic">
                                    &quot;Développeur Front-End disponible pour de nouveaux projets 💻&quot;
                                </div>
                                </div>
                            </div>

                            {/* Fenêtre de conversation */}
                            <div className="h-[calc(100%-120px)] border border-[#7898b7] bg-white p-4 shadow-md">
                                <div className="bg-[#E8F0F8] p-3 rounded-lg mb-4">
                                    <p className="text-[#0E62A7] font-semibold mb-2">Arthur dit :</p>
                                    <p className="mb-2">Bonjour ! 👋</p>
                                    <p className="mb-2">Vous pouvez me contacter via :</p>
                                </div>

                                {/* Info contacts style MSN */}
                                <div className="space-y-3 p-3 bg-[#F5F8FA] rounded-lg">
                                    <div className="flex items-center gap-2 hover:bg-[#E8F0F8] p-2 rounded">
                                        <span className="text-[#0E62A7]" aria-hidden="true">📱</span>
                                        <a href="tel:+33625265151" className="text-[#0E62A7] hover:underline">
                                            06.25.26.51.51
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2 hover:bg-[#E8F0F8] p-2 rounded">
                                        <span className="text-[#0E62A7]" aria-hidden="true">📧</span>
                                        <a href="mailto:genestier.arthur@gmail.com" className="text-[#0E62A7] hover:underline">
                                            genestier.arthur@gmail.com
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2 hover:bg-[#E8F0F8] p-2 rounded">
                                        <span className="text-[#0E62A7]" aria-hidden="true">💼</span>
                                        <a href="https://www.linkedin.com/in/arthur-genestier/"
                                            target="_blank"
                                            className="text-[#0E62A7] hover:underline"
                                            rel="noopener noreferrer">
                                            LinkedIn
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2 hover:bg-[#E8F0F8] p-2 rounded">
                                        <span className="text-[#0E62A7]" aria-hidden="true">📸</span>
                                        <a href="https://www.instagram.com/art.hur0"
                                            target="_blank"
                                            className="text-[#0E62A7] hover:underline"
                                            rel="noopener noreferrer">
                                            Instagram
                                        </a>
                                    </div>
                                </div>

                                {/* Indicateur de frappe */}
                                <div className="text-gray-500 text-sm mt-4 italic" aria-live="polite">
                                    Arthur est en train d&apos;écrire...
                                </div>
                            </div>

                            {/* Barre d'outils MSN */}
                            <div className="flex items-center justify-between border border-[#839eb8] border-t-[#fff] bg-gradient-to-b from-[#f7f8fa] to-[#d6e0eb] p-2">
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleWizz}
                                        disabled={isWizzing}
                                        className={`border border-[#7b9bb9] bg-gradient-to-b from-[#fff] to-[#d9e7f3] px-3 py-1 text-[#244e75] shadow-sm hover:from-white hover:to-[#c5ddf1]
                                            transition-colors ${isWizzing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        aria-label="Envoyer un Wizz"
                                    >
                                        Envoyer un Wizz!
                                    </button>
                                </div>
                            </div>

                            {/* Lecteur audio pour le son "Wizz" */}
                            <audio id="wizz-audio" src="/musiques/wizz.mp3" style={{ display: 'none' }} />
                        </div>
                    </div>
                );
            })()
        }
        ,
        {
            id: 'projects',
            name: "Mes Projets",
            content: (
                <div className="bg-[#100d15] text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    {/* Header Skyblog style */}
                    <div className="mb-6 border-b-4 border-[#8d0549] bg-gradient-to-r from-[#ea1687] via-[#ff53aa] to-[#cc076b] p-4 text-center shadow-lg">
                        <p className="mb-1 text-xs text-white/90">MON BLOG DE PROJETS</p>
                        <h1 className="text-2xl font-bold">♥ Mes Projets ♥</h1>
                    </div>

                    {/* Articles style Skyblog */}
                    <div className="space-y-8 border-x-4 border-pink-600 px-4 py-2">
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">
                            <div className="bg-white p-4 mb-4">
                                <img
                                    src="https://blog.berner.eu/wp-content/uploads/2023/04/berner-logo-2023.svg"
                                    alt="Logo BERNER"
                                    className="mx-auto max-h-16 max-w-full"
                                />
                            </div>
                            <h2 className="text-xl text-pink-500 text-center mb-4">~ BERNER ~</h2>
                            <p className="text-pink-300 mb-4 text-center">Webmaster · avril 2025 - aujourd'hui</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <a
                                    href="https://shop.berner.eu/fr-fr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center p-4 bg-white text-pink-600 hover:bg-pink-50"
                                >
                                    <h3 className="font-bold">Boutique BERNER</h3>
                                    <p className="text-sm">Site e-commerce</p>
                                </a>
                                <a
                                    href="https://blog.berner.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center p-4 bg-white text-pink-600 hover:bg-pink-50"
                                >
                                    <h3 className="font-bold">Blog BERNER</h3>
                                    <p className="text-sm">Articles WordPress</p>
                                </a>
                            </div>
                            <div className="border-2 border-pink-500 p-4">
                                <p className="mb-2">SmartEdit · CMS SAP · WordPress · JavaScript · SEO</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Création et mise à jour de contenus marketing avec SmartEdit</li>
                                    <li>Optimisation de pages marketing pour améliorer leur conversion</li>
                                    <li>Optimisation SEO des pages créées</li>
                                    <li>Gestion du blog WordPress et refonte de pages articles</li>
                                    <li>Optimisation de tableaux JavaScript utilisés pour la création de pages</li>
                                </ul>
                            </div>
                        </article>

                        {/* Article 1 */}
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">

                            <a href="https://yellow-studio.vercel.app/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Yellow Studio ~</h2>
                                <img
                                    src="/images/logoyellow.png"
                                    alt="yellow studio"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">React</p>
                                <p>Site vitrine</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design adaptatif</li>
                                    <li>Accessibilité (RGAA)</li>
                                    <li>Animations</li>
                                </ul>
                            </div>
                        </article>
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">

                            <a href="https://www.surete-ferroviaire.sncf.com/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Sûreté SNCF ~</h2>
                                <img
                                    src="/images/sncf-logo.png"
                                    alt="Logo de la sûreté ferroviaire SNCF"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">WordPress</p>
                                <p>Thème personnalisé avec Timber</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design adaptatif</li>
                                    <li>Création de blocs ACF administrables</li>
                                    <li>Accessibilité (RGAA)</li>
                                    <li>Optimisation SEO</li>
                                </ul>
                            </div>
                        </article>
                        {/* Article 2 */}
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">

                            <a href="https://www.lesmouettesvertes.fr/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Les Mouettes Vertes ~</h2>
                                <img
                                    src="/images/logo-lmv.png"
                                    alt="Logo Les Mouettes Vertes"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">WordPress</p>
                                <p>Thème personnalisé avec Elementor</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Fiches produits personnalisées</li>
                                    <li>Accessibilité (RGAA)</li>
                                    <li>Optimisation SEO</li>
                                </ul>
                            </div>
                        </article>
                        {/* Article 3 */}
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">

                            <a href="https://www.nutritionetsante-foodservice.fr/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Nutrition & Santé ~</h2>
                                <img
                                    src="/images/logons.png"
                                    alt="Logo Nutrition & Santé"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">WordPress</p>
                                <p>Thème personnalisé avec Timber</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Import catalogue produits via API</li>
                                    <li>Design adaptatif</li>
                                    <li>Création de blocs ACF administrables</li>
                                    <li>Accessibilité (RGAA)</li>
                                    <li>Optimisation SEO</li>
                                </ul>
                            </div>
                        </article>
                        {/* Article 4 */}
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">
                            <a href="https://www.britline.com/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Crédit Agricole Britline ~</h2>
                                <img
                                    src="/images/logo.png"
                                    alt="Logo Crédit Agricole Britline"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">Intégration</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design adaptatif</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </article>
                        {/* Article 5 */}
                        <article className="border-2 border-dashed border-pink-500 bg-[#1b1722] p-4 shadow-lg">
                            <a href="https://www.nissannow.be/fr-BE/home" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                                <h2 className="text-xl text-pink-500">~ Nissan Now ~</h2>
                                <img
                                    src="/images/logo-nissan.png"
                                    alt="Nissan Now"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>

                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">Intégration</p>
                                <p>React</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design adaptatif</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </article>

                    </div>

                </div>
            )
        }
    ];

    const desktopIconOrder = ['about', 'skills', 'projects', 'contact'];
    const navigationIcons = desktopIconOrder.map((id) => desktopIcons.find((icon) => icon.id === id));
    const taskbarWindows = navigationIcons
        .map((icon) => windows.find((window) => window.id === icon.id))
        .filter((window) => window !== undefined);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon.id);
        const existingWindow = windows.find((window) => window.id === icon.id);

        if (existingWindow) {
            activateWindow(icon.id);
        } else {
            setWindows((openWindows) => [...openWindows, {
                id: icon.id,
                title: icon.name,
                content: icon.content,
                isMinimized: false
            }]);
        }
    };

    const minimizeWindow = (windowId) => {
        setWindows((openWindows) => openWindows.map((window) => (
            window.id === windowId ? { ...window, isMinimized: true } : window
        )));
    };

    const activateWindow = (windowId) => {
        setWindows((openWindows) => {
            const targetWindow = openWindows.find((window) => window.id === windowId);
            if (!targetWindow) return openWindows;

            return [
                ...openWindows.filter((window) => window.id !== windowId),
                { ...targetWindow, isMinimized: false }
            ];
        });
    };

    const closeWindow = (windowId) => {
        setWindows(windows.filter(w => w.id !== windowId));
    };

    return (
        <div
            className="fixed inset-0 overflow-hidden bg-cover bg-right bg-no-repeat"
            style={{
                backgroundImage: `url('/images/xplandscapeperso.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black/40">  {/* Overlay pour meilleure lisibilité */}
                {/* Bureau avec icônes */}
                <nav className="grid grid-cols-1 sm:grid-cols-6 gap-8 p-8 my-4" aria-label="Bureau">
                    {navigationIcons.map((icon) => (
                        <button
                            key={icon.id}
                            className={`w-24 min-h-24 mx-auto flex flex-col items-center justify-center gap-1 border px-2 py-2 text-center text-white cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white
                  ${selectedIcon === icon.id ? 'border-white/60 bg-[#245edb]/75' : 'border-transparent hover:border-white/50 hover:bg-[#245edb]/50'}`}
                            onClick={() => handleIconClick(icon)}
                            aria-label={`Ouvrir ${icon.name}`}
                        >
                            <XPDesktopIcon name={icon.id} className="h-10 w-10 drop-shadow-md" />
                            <span className="text-sm break-words [text-shadow:1px_1px_2px_#000]">{icon.name}</span>
                        </button>
                    ))}
                </nav>

                <main className="absolute bottom-16 left-6 right-6 z-10 max-w-2xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.95)] md:bottom-20" aria-labelledby="desktop-profile-title">
                    <h1 id="desktop-profile-title" className="text-2xl font-bold leading-tight md:text-3xl">Arthur Genestier</h1>
                    <p className="mt-1 text-base font-semibold md:text-lg">Développeur front-end · Intégrateur web · Webmaster</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed md:text-base">
                        Je crée et optimise des sites et des pages web accessibles, adaptatifs et pensés pour le référencement naturel. J’interviens de l’intégration front-end à la gestion des contenus.
                    </p>
                </main>

                {/* Fenêtres */}
                {windows.map((window, index) => (
                    <Window
                        key={window.id}
                        title={window.title}
                        onClose={() => closeWindow(window.id)}
                        onMinimize={() => minimizeWindow(window.id)}
                        onActivate={() => activateWindow(window.id)}
                        isMinimized={window.isMinimized}
                        icon={window.id}
                        initialPosition={{ x: 100 + index * 30, y: 100 + index * 30 }}
                        isWizzing={window.id === 'contact' && isWizzing}
                        aria-labelledby={`window-title-${window.id}`}
                    >
                        <h2 id={`window-title-${window.id}`} className="sr-only">{window.title}</h2>
                        {window.content}
                    </Window>
                ))}

                {/* Barre des tâches Windows XP */}
                <div className="fixed bottom-0 left-0 right-0 h-12 border-t border-[#7ab7f5] bg-gradient-to-b from-[#3b8cf4] via-[#1767d4] to-[#0753bb] flex items-center px-2 shadow-[0_-2px_8px_rgba(0,0,0,0.35)] z-50" role="menubar" aria-label="Barre des tâches Arthur XP">
                    {/* Menu Débuter */}
                    <div className="relative">
                        <button
                            onClick={() => setStartMenuOpen(!startMenuOpen)}
                            className="h-10 min-w-32 px-3 flex items-center gap-2 border border-[#8acb75] border-b-[#176116] rounded-r-xl rounded-l-md font-bold text-white bg-gradient-to-b from-[#68c44a] via-[#3caa2d] to-[#19720f] shadow-[inset_0_1px_#c1f4a4,1px_0_3px_rgba(0,0,0,0.45)] hover:from-[#7bd65b] hover:via-[#49b93a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                            aria-controls="start-menu"
                            aria-expanded={startMenuOpen}
                            aria-label="Ouvrir le menu Débuter"
                        >
                            <XPDesktopIcon name="door" className="h-7 w-7 drop-shadow" />
                            Débuter
                        </button>

                        {startMenuOpen && (
                            <div id="start-menu" className="absolute bottom-full left-0 w-64 bg-white border-2 border-[#0078D7] rounded-t-lg shadow-xl mb-1" role="menu">
                                {navigationIcons.map((icon) => (
                                    <button
                                        key={icon.id}
                                        onClick={() => {
                                            handleIconClick(icon);
                                            setStartMenuOpen(false);
                                        }}
                                        className="w-full flex items-center gap-2 p-2 hover:bg-[#E5F3FF] text-left focus:outline-none"
                                        role="menuitem"
                                    >
                                        <XPDesktopIcon name={icon.id} className="h-7 w-7" />
                                        <span>{icon.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Raccourcis rapides */}
                    <div className="hidden sm:flex items-center gap-2 ml-4 border-l border-[#1D4AAD] pl-4" aria-label="Raccourcis rapides">
                        {navigationIcons.map(icon => (
                            <button
                                key={icon.id}
                                onClick={() => handleIconClick(icon)}
                                className="p-1.5 hover:bg-[#3b80d8] focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                                aria-label={`Ouvrir ${icon.name}`}
                            >
                                <XPDesktopIcon name={icon.id} className="h-6 w-6" />
                            </button>
                        ))}
                    </div>

                    {/* Fenêtres ouvertes */}
                    <div className="flex-1 flex items-center gap-2 ml-2" aria-label="Fenêtres ouvertes">
                        {taskbarWindows.map(window => (
                            <button
                                key={window.id}
                                onClick={() => {
                                    const topWindow = [...windows].reverse().find((openWindow) => !openWindow.isMinimized);
                                    if (window.isMinimized || topWindow?.id !== window.id) {
                                        activateWindow(window.id);
                                    } else {
                                        minimizeWindow(window.id);
                                    }
                                }}
                                className={`h-8 max-w-48 px-2.5 border border-[#1853ad] border-t-[#78baff] text-white flex items-center gap-2 shadow-inner focus-visible:outline focus-visible:outline-1 focus-visible:outline-white ${window.isMinimized ? 'bg-[#2465bd] hover:bg-[#347bcf]' : 'bg-[#134b9e]'}`}
                                aria-label={`Fenêtre ${window.title}`}
                            >
                                <XPDesktopIcon name={window.id} className="h-5 w-5 shrink-0" />
                                <span className="truncate">{window.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Horloge */}
                    <div className="h-9 ml-2 px-4 border-l border-[#74a9e4] bg-[#124a9a]/40 flex items-center text-white" aria-live="polite">
                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>
            </div>

            {isBooting && (
                <div
                    className="xp-boot-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070b] text-white"
                    role="status"
                    aria-label="Démarrage d'Arthur XP"
                    aria-live="polite"
                >
                    <div className="flex items-center gap-4">
                        <XPDesktopIcon name="door" className="h-14 w-14 drop-shadow-[0_0_14px_rgba(80,160,255,0.7)]" />
                        <div className="leading-none">
                            <p className="text-sm text-gray-300">Arthur Genestier</p>
                            <p className="mt-1 text-4xl font-semibold tracking-[0.02em]">
                                Arthur<span className="ml-1 text-[#f27922]">XP</span>
                            </p>
                            <p className="mt-2 text-right text-sm italic text-gray-300">Édition Genestier</p>
                        </div>
                    </div>

                    <div className="absolute left-1/2 top-[68%] flex w-60 -translate-x-1/2 flex-col items-center gap-3">
                        <div className="h-3 w-full overflow-hidden border border-[#6d7480] bg-black p-[2px] shadow-[inset_0_1px_3px_#000]">
                            <div className="xp-boot-progress h-full w-1/3 bg-gradient-to-r from-[#1769c2] via-[#8cc8ff] to-[#1769c2]" />
                        </div>
                        <p className="text-xs text-gray-300">Démarrage du bureau...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
