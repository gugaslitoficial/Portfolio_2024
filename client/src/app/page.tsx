import Menu from "@/components/menuLateral";
import Home from "@/components/home";
import About from "@/components/aboutMe";
import Service from "@/components/myService";
import GitHub from "@/components/portfolio";
import Contact from "@/components/contactMe";

export default function HomePage() {

  return (
    <div className="">
      <Menu />
      <Home />
      <About />
      <Service />
      <GitHub />
      <Contact />
    </div>
  );
}
