import { useState, useEffect } from 'react';
import Window from '../components/Window';

export default function Home() {
    const [windows, setWindows] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [startMenuOpen, setStartMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isWizzing, setIsWizzing] = useState(false);

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
            icon: "ℹ️",
            content: (
                <div className="bg-black text-pink-500 p-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    {/* En-tête MySpace style */}
                    <div className="text-center mb-6 border-b-2 border-pink-500 pb-4">
                        <h1 className="text-3xl font-bold animate-pulse">~*~ Arthur Genestier ~*~</h1>
                        <p className="text-blue-400 animate-bounce">★≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣★</p>
                        {/* Lecteur audio */}
                        <div className="bg-black p-2 rounded" aria-label="Lecteur audio">
                            <audio controls className="w-full custom-audio">
                                <source src="/public/musiques/song.mp3" type="audio/mpeg" />
                                Votre navigateur ne supporte pas l'élément audio.
                            </audio>
                        </div>
                    </div>

                    {/* Infos personnelles style MySpace */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-pink-500 p-4 rounded">
                            <h2 className="text-xl mb-2 text-blue-400">♪ À propos de moi ♪</h2>
                            <p>♥ Status: Développeur Front-End & Intégrateur Web</p>
                            <p>♥ Ici depuis: 2024</p>
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
                            <p>♥ WordPress: Création de thèmes sur mesure, développement de plugins, optimisation des performances et du référencement.</p>
                            <p>♥ Intégration Web: Maîtrise de HTML5, CSS3, JavaScript (ES6), SCSS, et des frameworks comme Bootstrap et Tailwind CSS.</p>
                            <p>♥ UI/UX Design: Conception d'interfaces utilisateur intuitives et responsives, prototypage avec des outils comme Figma et Adobe XD.</p>
                            <p>♥ Accessibilité: Implémentation des normes WCAG pour des sites web accessibles à tous.</p>
                        </div>
                    </div>

                    {/* Section amis */}
                    <div className="mt-6">
                        <h2 className="text-xl text-blue-400 mb-4">~*~ Présentation ~*~</h2>
                        <div className="text-center">
                            <div className="border-2 border-pink-500 p-2">
                                <p className="text-white">
                                    En tant que développeur front-end spécialisé en WordPress, j'ai acquis une solide expérience dans la création de thèmes personnalisés et l'optimisation de sites web. Mon expertise en intégration web me permet de transformer des designs en interfaces utilisateur fonctionnelles et performantes. Je suis passionné par le développement de solutions innovantes et je suis toujours à la recherche de nouveaux défis pour mettre à profit mes compétences en UI/UX design et en développement web.
                                </p>
                                <p className="text-white mt-2">
                                    Mon parcours m'a permis de travailler sur des projets variés, allant de la création de sites vitrines pour des PME à la mise en place de boutiques en ligne complexes. J'accorde une importance particulière à l'accessibilité et à l'optimisation des performances, afin de garantir une expérience utilisateur optimale.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Commentaires simulés */}
                    <div className="mt-6 border-t-2 border-pink-500 pt-4">
                        <h2 className="text-xl text-blue-400 mb-4">♪ Commentaires ♪</h2>
                        <div className="bg-gray-900 p-3 mb-2 rounded">
                            <p className="text-white">Super dev! Continue comme ça! <span className="text-pink-500">xXx</span></p>
                            <p className="text-xs text-gray-400">Posted by Fake.js - 2024</p>
                        </div>
                        <div className="bg-gray-900 p-3 mb-2 rounded">
                            <p className="text-white">Arthur a vraiment le souci du détail et livre toujours un travail impeccable. <span className="text-pink-500">yYy</span></p>
                            <p className="text-xs text-gray-400">Posted by ClientSatisfait - 2024</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'skills',
            name: "Profil",
            icon: "⚙️",
            content: (
                <div className="bg-gradient-to-b from-blue-900 to-black text-white p-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                    {/* En-tête style Encarta */}
                    <div className="text-center mb-6 border-b border-blue-500 pb-4">
                        <h1 className="text-3xl font-serif">Arthur Genestier</h1>
                        <p className="text-blue-300 text-sm">© 2024 Développeur Front-End</p>
                    </div>

                    {/* Contenu Principal */}
                    <div className="space-y-4">
                        {/* Section Expérience */}
                        <div className="bg-blue-900/30 p-4 rounded border border-blue-800">
                            <h2 className="text-xl text-blue-300 font-serif mb-3 border-b border-blue-700 pb-2">
                                [Expérience Professionnelle]
                            </h2>
                            <div className="pl-4">
                                <h3 className="text-lg text-blue-200 mb-2">Mindoza (2022-2024)</h3>
                                <p className="text-blue-100 italic mb-2">Développeur Front End - Spécialisation WordPress</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                    <li>Développement de thèmes personnalisés et optimisation WordPress</li>
                                    <li>Application des technologies front-end : HTML, CSS, JavaScript, jQuery, Twig, Bootstrap</li>
                                    <li>Optimisation des performances et du référencement</li>
                                    <li>Conception responsive et UX design</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section Certifications */}
                        <div className="bg-blue-900/30 p-4 rounded border border-blue-800">
                            <h2 className="text-xl text-blue-300 font-serif mb-3 border-b border-blue-700 pb-2">
                                [Certifications]
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3">
                                    <h3 className="text-blue-200">O&apos;Clock Integrally</h3>
                                    <p className="text-gray-300">2021 - Développement Front-end</p>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-blue-200">Opquast</h3>
                                    <p className="text-gray-300">2021 - Qualité Web</p>
                                </div>
                            </div>
                        </div>

                        {/* Section Compétences */}
                        <div className="bg-blue-900/30 p-4 rounded border border-blue-800">
                            <h2 className="text-xl text-blue-300 font-serif mb-3 border-b border-blue-700 pb-2">
                                [Compétences Techniques]
                            </h2>
                            <div className="space-y-4">
                                {/* Thème : Développement Web */}
                                <div>
                                    <h3 className="text-blue-200">Développement Web</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3">
                                            <p className="text-gray-300">HTML5</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">CSS</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">SCSS</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">JavaScript</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">PHP</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">React</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">Vue.js</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Thème : Frameworks & Outils */}
                                <div>
                                    <h3 className="text-blue-200">Frameworks & Outils</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3">
                                            <p className="text-gray-300">Bootstrap</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">Tailwind CSS</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">Git</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Thème : CMS */}
                                <div>
                                    <h3 className="text-blue-200">CMS</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3">
                                            <p className="text-gray-300">WordPress</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">Drupal</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">PrestaShop</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Thème : Autres */}
                                <div>
                                    <h3 className="text-blue-200">Autres</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3">
                                            <p className="text-gray-300">Accessibilité (WCAG)</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">SEO</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">UI/UX Design</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-gray-300">SQL</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
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
            icon: "✉️",
            content: (() => {
                const handleWizz = () => {
                    const audio = document.getElementById('wizz-audio');
                    audio.currentTime = 0; // Réinitialiser le son pour qu'il rejoue depuis le début
                    audio.play();
                    setIsWizzing(true);
                    setTimeout(() => setIsWizzing(false), 200);
                };

                return (
                    <div className="bg-gradient-to-b from-[#B5D4EF] to-[#86B5E3] p-4 h-full" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                        <div className={isWizzing ? 'wizz-animation' : ''}>
                            {/* En-tête MSN */}
                            <div className="bg-white rounded-t-lg p-3 shadow-md">
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500 text-xl" aria-hidden="true">●</span>
                                    <span className="font-semibold">Arthur Genestier</span>
                                    <span className="text-gray-500 text-sm">(En ligne)</span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1 italic">
                                    &quot;Développeur Front-End disponible pour de nouveaux projets 💻&quot;
                                </div>
                            </div>

                            {/* Fenêtre de conversation */}
                            <div className="bg-white p-4 shadow-md border border-gray-200 h-[calc(100%-120px)]">
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
                            <div className="bg-[#F0F0F0] p-2 rounded-b-lg border-t border-gray-300 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleWizz}
                                        disabled={isWizzing}
                                        className={`px-3 py-1 rounded bg-[#0E62A7] text-white hover:bg-[#0D4F8C]
                                            transition-colors ${isWizzing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        aria-label="Envoyer un Wizz"
                                    >
                                        Envoyer un Wizz!
                                    </button>
                                </div>
                            </div>

                            {/* Lecteur audio pour le son "Wizz" */}
                            <audio id="wizz-audio" src="/public/musiques/wizz.mp3" style={{ display: 'none' }} />
                        </div>
                    </div>
                );
            })()
        }
        ,
        {
            id: 'projects',
            name: "Mes Projets",
            icon: "📁",
            content: (
                <div className="bg-black text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {/* Header Skyblog style */}
                    <div className="bg-pink-500 text-center p-4 mb-6">
                        <h1 className="text-2xl font-bold">♥ Mes Projets ♥</h1>
                    </div>

                    {/* Articles style Skyblog */}
                    <div className="space-y-8">
                        {/* Article 1 */}
                        <article className="bg-gray-900 p-4 rounded">

                            <a href="https://yellow-studio.vercel.app/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Yellow Studio ~</h2>
                                <img
                                    src="/public/images/logoyellow.png"
                                    alt="yellow studio"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">React</p>
                                <p>Site vitrine</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design responsive</li>
                                    <li>Accesibilité RGAA</li>
                                    <li>Animations</li>
                                </ul>
                            </div>
                            <div className="text-right text-xs text-pink-400">
                                14 likes ♥
                            </div>{/* TODO faire vraiment un compteur */}
                        </article>
                        <article className="bg-gray-900 p-4 rounded">

                            <a href="https://www.surete-ferroviaire.sncf.com/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Sûrete SNCF ~</h2>
                                <img
                                    src="/public/images/sncf-logo.png"
                                    alt="SNCF SURETEé"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">WordPress</p>
                                <p>Theme personnalisé Timber</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design responsive</li>
                                    <li>Création de blocs ACF administrables</li>
                                    <li>Accesibilité RGAA</li>
                                    <li>Optimisation SEO</li>
                                </ul>
                            </div>
                            <div className="text-right text-xs text-pink-400">
                                14 likes ♥
                            </div>{/* TODO faire vraiment un compteur */}
                        </article>
                        {/* Article 2 */}
                        <article className="bg-gray-900 p-4 rounded">

                            <a href="https://www.lesmouettesvertes.fr/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Les Mouettes Vertes ~</h2>
                                <img
                                    src="/public/images/logo-lmv.png"
                                    alt="Nutrition & Santé"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">WordPress</p>
                                <p>Theme personnalisé Elementor</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Fiche produit personnalisé</li>
                                    <li>Accesibilité RGAA</li>
                                    <li>Optimisation SEO</li>
                                </ul>
                            </div>
                            <div className="text-right text-xs text-pink-400">
                                12 likes ♥
                            </div>{/* TODO faire vraiment un compteur */}
                        </article>
                        {/* Article 3 */}
                        <article className="bg-gray-900 p-4 rounded">

                            <a href="https://www.nutritionetsante-foodservice.fr/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Nutrition & Santé ~</h2>
                                <img
                                    src="/public/images/logons.png"
                                    alt="Nutrition & Santé"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">WordPress</p>
                                <p>Theme personnalisé Timber</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Import catalogue produits via API</li>
                                    <li>Design responsive</li>
                                    <li>Création de blocs ACF administrables</li>
                                    <li>Accesibilité RGAA</li>
                                    <li>Optimisation SEO</li>
                                </ul>
                            </div>
                            <div className="text-right text-xs text-pink-400">
                                15 likes ♥
                            </div>{/* TODO faire vraiment un compteur */}
                        </article>
                        {/* Article 4 */}
                        <article className="bg-gray-900 p-4 rounded">
                            <a href="https://www.britline.com/" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                            <h2 className="text-xl text-pink-500">~ Crédit Agricole Britline ~</h2>
                                <img
                                    src="/public/images/logo.png"
                                    alt="Nutrition & Santé"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>
                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">Intégration</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design responsive</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            <div className="text-right text-xs text-pink-400">
                                10 likes ♥
                            </div>{/* TODO faire vraiment un compteur */}
                        </article>
                        {/* Article 5 */}
                        <article className="bg-gray-900 p-4 rounded">
                            <a href="https://www.nissannow.be/fr-BE/home" target="_blank" rel="noopener noreferrer" className="block text-center pb-4 bg-white">
                                <h2 className="text-xl text-pink-500">~ Nissan Now ~</h2>
                                <img
                                    src="/public/images/logo-nissan.png"
                                    alt="Nissan Now"
                                    className="mx-auto mt-4"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            </a>

                            <div className="border-2 border-pink-500 p-4 mb-4">
                                <p className="mb-2">Intégration</p>
                                <p>React</p>
                                <ul className="list-disc pl-5 text-pink-300">
                                    <li>Design responsive</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            <div className="text-right text-xs text-pink-400">
                                13 likes ♥
                            </div>{/* TODO faire vraiment un compteur */}
                        </article>

                    </div>

                </div>
            )
        }
    ];

    const handleIconClick = (icon) => {
        setSelectedIcon(icon.id);
        if (!windows.find(w => w.id === icon.id)) {
            setWindows([...windows, {
                id: icon.id,
                title: icon.name,
                content: icon.content
            }]);
        }
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
            role="application"
            aria-label="Interface de bureau"
        >
            <div className="absolute inset-0 bg-black/40">  {/* Overlay pour meilleure lisibilité */}
                {/* Bureau avec icônes */}
                <nav className="grid grid-cols-1 sm:grid-cols-6 gap-8 p-8 my-4" aria-label="Bureau">
                    {desktopIcons.map((icon) => (
                        <button
                            key={icon.id}
                            className={`w-24 mx-auto rounded text-center text-white cursor-pointer focus:outline-none
                  ${selectedIcon === icon.id ? 'bg-blue-600/50' : 'hover:bg-blue-600/30'}`}
                            onClick={() => handleIconClick(icon)}
                            aria-label={`Ouvrir ${icon.name}`}
                        >
                            <div className="text-3xl mb-1" aria-hidden="true">{icon.icon}</div>
                            <div className="text-sm break-words">{icon.name}</div>
                        </button>
                    ))}
                </nav>

                {/* Fenêtres */}
                {windows.map((window, index) => (
                    <Window
                        key={window.id}
                        title={window.title}
                        onClose={() => closeWindow(window.id)}
                        initialPosition={{ x: 100 + index * 30, y: 100 + index * 30 }}
                        isWizzing={window.id === 'contact' && isWizzing}
                        aria-labelledby={`window-title-${window.id}`}
                    >
                        <h2 id={`window-title-${window.id}`} className="sr-only">{window.title}</h2>
                        {window.content}
                    </Window>
                ))}

                {/* Barre des tâches Windows XP */}
                <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-[#245EDC] to-[#0078D7] flex items-center px-2 shadow-lg z-50" role="menubar" aria-label="Barre des tâches">
                    {/* Menu Démarrer */}
                    <div className="relative">
                        <button
                            onClick={() => setStartMenuOpen(!startMenuOpen)}
                            className="h-10 px-4 py-2 flex items-center gap-2 font-bold text-white bg-gradient-to-r from-[#378EE5] to-[#378EE5] hover:from-[#3687D9] hover:to-[#3687D9] rounded focus:outline-none"
                            aria-controls="start-menu"
                            aria-expanded={startMenuOpen}
                            aria-label="Ouvrir le menu Démarrer"
                        >
                            <span className="text-xl" aria-hidden="true">🪟</span>
                            Démarrer
                        </button>

                        {startMenuOpen && (
                            <div id="start-menu" className="absolute bottom-full left-0 w-64 bg-white border-2 border-[#0078D7] rounded-t-lg shadow-xl mb-1" role="menu">
                                {desktopIcons.map((icon) => (
                                    <button
                                        key={icon.id}
                                        onClick={() => {
                                            handleIconClick(icon);
                                            setStartMenuOpen(false);
                                        }}
                                        className="w-full flex items-center gap-2 p-2 hover:bg-[#E5F3FF] text-left focus:outline-none"
                                        role="menuitem"
                                    >
                                        <span className="text-2xl" aria-hidden="true">{icon.icon}</span>
                                        <span>{icon.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Raccourcis rapides */}
                    <div className="hidden sm:flex items-center gap-2 ml-4 border-l border-[#1D4AAD] pl-4" aria-label="Raccourcis rapides">
                        {desktopIcons.map(icon => (
                            <button
                                key={icon.id}
                                onClick={() => handleIconClick(icon)}
                                className="p-2 hover:bg-[#3687D9] rounded focus:outline-none"
                                aria-label={`Ouvrir ${icon.name}`}
                            >
                                <span aria-hidden="true">{icon.icon}</span>
                            </button>
                        ))}
                    </div>

                    {/* Fenêtres ouvertes */}
                    <div className="flex-1 flex items-center gap-2 ml-2" aria-label="Fenêtres ouvertes">
                        {windows.map(window => (
                            <button
                                key={window.id}
                                className="h-8 px-3 text-white bg-[#3687D9] hover:bg-[#3C9BF7] rounded flex items-center gap-2 focus:outline-none"
                                aria-label={`Fenêtre ${window.title}`}
                            >
                                <span className="text-lg mr-1" aria-hidden="true">{desktopIcons.find(i => i.id === window.id)?.icon}</span>
                                <span>{window.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Horloge */}
                    <div className="px-4 text-white" aria-live="polite">
                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>
            </div>
        </div>
    );
}
