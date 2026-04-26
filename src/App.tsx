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
import './styles/global.css';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Pular para conteúdo</a>
      <Nav />
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
      <Footer />
    </>
  );
}
