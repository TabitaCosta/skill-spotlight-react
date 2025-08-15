import Header from "./components/Header";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const skills = ["PHP", "Java", "Angular", "TypeScript", "Laravel", "HTML", "CSS"];

  return (
    <div className="container">
      <Header />
      <section className="skills-grid">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
