import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Tension } from './components/Tension';
import { Comparison } from './components/Comparison';
import { Proof } from './components/Proof';
import { Solutions } from './components/Solutions';
import { Methodology } from './components/Methodology';
import { DPS } from './components/DPS';
import { Content } from './components/Content';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Pular para conteúdo</a>
      <Nav />
      <main id="main">
        <Hero />
        <Tension />
        <Comparison />
        <Proof />
        <Solutions />
        <Methodology />
        <DPS />
        <Content />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
