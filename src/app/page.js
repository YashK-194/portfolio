import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigation />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Certificates />
				<Contact />
			</main>
		</div>
	);
}
