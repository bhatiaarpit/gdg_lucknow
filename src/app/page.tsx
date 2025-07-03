// In your layout or page component
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Navbar from '../components/Navbar';

export default function Layout({ }) {
  return (
    <div>
      <Header />
      <Hero/>
      <Footer/>
    </div>
  );
}