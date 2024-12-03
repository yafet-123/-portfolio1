import { navItems } from "../data/index.js";

import Hero from "../components/Hero";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Approach from "../components/Approach";
import Experience from "../components/Experience";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  setTheme("dark")
  return (
    <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-20 px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}
