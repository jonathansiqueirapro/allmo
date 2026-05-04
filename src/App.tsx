import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Tension } from './components/Tension';
import { Comparison } from './components/Comparison';
import { Proof } from './components/Proof';
import { Solutions } from './components/Solutions';
import { Methodology } from './components/Methodology';
import { Content } from './components/Content';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { DpsPage } from './pages/DpsPage';
import { MetodologiaPage } from './pages/MetodologiaPage';
import './styles/global.css';

function Home() {
  return (
    <main id="main">
      <Hero />
      <Sobre />
      <Tension />
      <Comparison />
      <Proof />
      <Solutions />
      <Methodology />
      <Content />
      <CTA />
    </main>
  );
}

function getRoute() {
  const redirectedPath = new URLSearchParams(window.location.search).get('path');

  if (redirectedPath) {
    const cleanPath = redirectedPath.replace(/^\/+|\/+$/g, '');
    window.history.replaceState(null, '', cleanPath ? `${import.meta.env.BASE_URL}${cleanPath}` : import.meta.env.BASE_URL);

    return cleanPath;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = window.location.pathname;
  const route = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;

  return route.replace(/^\/+|\/+$/g, '');
}

export default function App() {
  const route = getRoute();
  const Page = route === 'metodologia'
    ? MetodologiaPage
    : route === 'dps'
      ? DpsPage
      : Home;

  return (
    <>
      <a href="#main" className="skip-link">Pular para conteúdo</a>
      <Nav />
      <Page />
      <Footer />
    </>
  );
}
