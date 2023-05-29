import { Header, Hero, Portfolio, Services, Testimonials, Contact, Footer} from './components';
import { useState } from "react";

function App() {
  // Dark mode useState
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
