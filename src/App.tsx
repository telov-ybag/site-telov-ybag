import { useState, type ReactNode } from "react";

type TabId = "profile" | "quests" | "inventory";

type IconProps = {
  className?: string;
};

const icons: Record<TabId, (props: IconProps) => ReactNode> = {
  profile: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 13.5c3 0 5-2.6 5-5.8C17 4.5 15.3 3 12 3S7 4.5 7 7.7c0 3.2 2 5.8 5 5.8Z" />
      <path d="M4 21c.7-4 3.2-6 8-6s7.3 2 8 6" />
    </svg>
  ),
  quests: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h10v18l-5-3-5 3V3Z" />
      <path d="M10 7h4M10 10h4" />
    </svg>
  ),
  inventory: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 8h14v12H5V8Z" />
      <path d="M8 8V5h8v3M9 12h6M12 9v6" />
    </svg>
  ),
};

const tabs: { id: TabId; label: string; index: string }[] = [
  { id: "profile", label: "Profile", index: "I" },
  { id: "quests", label: "Quests", index: "II" },
  { id: "inventory", label: "Inventory", index: "III" },
];

const experiences = [
  {
    period: "Jan. 2025 - May 2025",
    role: "Intern",
    place:  "SENS Laboratory, Grenoble Alpes Univ.",
    description:
      "Creation of digital tools compliant with FAIR principles for the DAYSTRESS project (Sport Psychology)",
    status: "Quest completed",
  },
  {
    period: "Sept. 2024 - May 2025",
    role: "Tutoring",
    place: "Grenoble Alpes Univ. ",
    description:
      "Assistance with understanding and practicing Mathematics and Computer Science for first-year students.",
    status: "Quest completed",
  },
  {
    period: "Sept. 2023 - May 2024",
    role: "Vice-President of MIASHS Student Union",
    place: "Grenoble Alpes Univ.",
    description:
      "Coordination of a team of volunteers to organize student events",
    status: "Quest completed",
  },
];

const projects = [
  {
    id: "01",
    period: "Sept. 2026 - March 2027 (Upcoming)",
    title: "Tool for designing board game construction plans",
    type: "Mobile Application",
    detail: "Application allowing users to obtain a construction plan and a list of required pieces from images.",
    color: "from-[#56566b] to-[#19191f]",
    glyph: "LOGO",
    course:"M2: Multidisciplinary Project",
    skills: ["Trello","Jira","SCRUM","Flutter","Card Sorting","User needs"],
    logo: <img src={"./Images/LogoLego.png"} alt="Logo" />,
    domain: "Application",
  },
  {
    id: "02",
    period: "In progress",
    title: "Strategy Game Dev.",
    type: "Video Game Project",
    detail: "Turn-based strategy video game. Genres: deck builder, city builder.",
    color: "from-[#705148] to-[#211b1c]",
    glyph: "LOGO",
    course:"Personal project",
    skills: ["Unity", "Blender","C#"],
    logo: <img src={"./Images/LogoJeuStrat.png"} alt="Logo" />,
    domain: "Multimedia",
  },
  {
    id: "03",
    period:"Oct. 2025 - May 2026",
    title: "Museum environment usability study",
    type: "Scientific study",
    detail: "Study of interaction modalities and visit experience in a museum environment using augmented reality.",
    color: "from-[#4d5a43] to-[#171c19]",
    glyph: "LOGO",
    course:"M1 Mentored Project/ LORIA (MBAN V2)",
    skills:["VR dev., Literature research","Questionnaire design","Protocol creation", "Protocol administration", "Analysis of results"],
    logo: <img src={"./Images/LogoProjetMusée.png"} alt="Logo" />,
    domain: "Scientific analysis",
  },
  {
    id: "04",
    period: "Jan. 2026 - April 2026",
    title: "Cavale dans Nancy",
    type: "Boardgame dev.",
    detail: "Two-player strategy game (thief vs police).",
    color: "from-[#705148] to-[#211b1c]",
    glyph: "LOGO",
    course:"M1 Project: Game Design",
    skills:["Narative design", "Drafting of rules", "Gameplay balancing"],
    logo: <img src={"./Images/LogoJeuVoleur.png"} alt="Logo" />,
    domain:"Multimedia",
  },

  {
    id: "05",
    period: "Sept. 2025 - Jan. 2026",
    title: "Overload",
    type: "Serious Game",
    detail: "Prototyping a serious game to raise awareness among relatives of autistic people about best practice",
    color: "from-[#705148] to-[#211b1c]",
    glyph: "LOGO",
    course:"M1 Project: Interaction Conception",
    skills:["Personae","User stories","Figma","Game design"],
    logo: <img src={"./Images/LogoOverload.png"} alt="Logo" />,
    domain: "Multimedia",
  },

  {
    id: "06",
    period: "Dec. 2025",
    title: "Les vieux sont encore dans le coup! ",
    type: "Scientific video",
    detail: "Presentation of psychomotor results in video format.",
    color: "from-[#4d5a43] to-[#171c19]",
    glyph: "LOGO",
    course:"M1: Multidisciplinary Project",
    skills:["Python(Pandas)", "Analysis of cientific articles","Data viz."],
    logo: <img src={"./Images/LogoVideoProjetPluri.png"} alt="Logo" />,
    domain: "Scientific analysis",
  },

  {
    id: "07",
    period: "Sept. 2025 - Jan. 2026 ",
    title: "Gris ou comment dire sans parler",
    type: "Video",
    detail: "Video analysing the visual communication of the game Gris.",
    color: "from-[#705148] to-[#211b1c]",
    glyph: "LOGO",
    course:"M1: Communication project",
    skills:["Communication","Storytelling", "video editing"],
    logo: <img src={"./Images/LogoVidGris.png"} alt="Logo" />,
    domain: "Scientific analysis",

  },
  {
    id: "08",
    period: "Sept. 2024 - Jan. 2025",
    title: "Rev'ease",
    type: "Web application",
    detail: "Web application to help supervise student revision sessions.",
    color: "from-[#56566b] to-[#19191f]",
    glyph: "LOGO",
    course:"L3: Multidisciplinary project",
    skills:["HTML","CSS","PHP","phpMyAdmin", "Git/Github", "User testing"],
    logo: <img src={"./Images/LogoRevEase.png"} alt="Logo" />,
    domain: "Application",
  },
];

function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <span />
      <i>◆</i>
      <span />
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="content-enter grid gap-8 lg:grid-cols-[1.22fr_0.78fr] lg:gap-12">
      <section>
        <p className="eyebrow">Player Status </p>
        <h2 className="display-title">
          Designing digital experiences
          <br />
          <em>Games, App. and more</em>
        </h2>
        <p className="body-copy mt-7 max-w-2xl">
          Currently a second-year Master's student at IDMC (Nancy, France) 
          looking for a 6 month internship in video game industry.
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <Info label="Current lineup" value="Master's in Cognitive Science" />
          <Info label="Localisation" value="Nancy, France" />
          <Info label="Hobbies" value="Video Games (indie), Sport (Running, Ice Skating, Crossfit), Music, Learning " />
          <Info label="Availability" value="Starting April 2027" active />
        </div>
      </section>

      <aside className="stats-panel">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="eyebrow">Attributes</p>
            <h3 className="font-display text-2xl text-stone-200">
              Skills acquired
            </h3>
          </div>
          <span className="level-mark">Niv. 06</span>
        </div>
        <Skill name="Project Management" value={95} />
        <Skill name="Game Design" value={90} />
        <Skill name="UX/UI Design" value={85} />
        <Skill name="Product Owner" value={80} />
        <Skill name="AI Development" value={75} />
        <Skill name="Data Scientist" value={70}/>
        <div className="quote">
          <span>“</span>
          The cake is a lie.
        </div>
      </aside>
    </div>
  );
}

function Info({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <strong>
        {active && <i className="status-dot" />}
        {value}
      </strong>
    </div>
  );
}

function Skill({ name, value }: { name: string; value: number }) {
  return (
    <div className="skill">
      <div className="mb-2 flex items-baseline justify-between">
        <span>{name}</span>
        <strong>{value}</strong>
      </div>
      <div className="skill-track">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function QuestContent() {
  return (
    <div className="content-enter">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">Quest Log</p>
        <h2 className="display-title">
          All the active and completed quests.
        </h2>
        <p className="body-copy mt-5">
          No quests are currently active. The player is searching for one.
        </p>
      </div>

      <div className="quest-list">
        {experiences.map((experience, index) => (
          <article className="quest-card" key={experience.role}>
            <div className="quest-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <span className="quest-period">{experience.period}</span>
              <h3>{experience.role}</h3>
              <p className="quest-place">{experience.place}</p>
            </div>
            <p className="quest-description">{experience.description}</p>
            <span
              className={`quest-status ${
                index === -1 ? "quest-status-active" : ""
              }`}
            >
              {experience.status}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

function InventoryContent() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? projects[0];

  return (
    <div className="content-enter">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Collected items </p>
          <h2 className="display-title">
            Exemples of projects made by the player Gabriel
          </h2>
        </div>
        <p className="inventory-count">{projects.length} Items</p>
      </div>

      <div className="inventory-layout">
        <div className="project-list" aria-label="Liste des projets">
          {projects.map((project) => {
            const isSelected = project.id === selectedProject.id;

            return (
              <button
                className={`project-card ${isSelected ? "project-card-selected" : ""}`}
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                aria-pressed={isSelected}
                aria-controls="project-description"
              >
                <span className={`project-thumbnail bg-gradient-to-br ${project.color}`}>
                  <span className="project-logo">{project.logo}</span>
                  <span className="project-ring" />
                </span>
                <span className="project-meta">
                  <span className="project-id">{project.id}</span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-type">{project.type}</span>
                </span>
                <span className="project-selector" aria-hidden="true">
                  ◆
                </span>
              </button>
            );
          })}
        </div>

        <article
          className="project-description"
          id="project-description"
          key={selectedProject.id}
          aria-live="polite"
        >
          <div className={`project-hero bg-gradient-to-br ${selectedProject.color}`}>
            <span className="project-hero-index">{selectedProject.id} / 08</span>
            <span className="project-hero-logo">{selectedProject.logo}</span>
            <div className="project-ring project-hero-ring" />
            <span className="project-hero-caption">{selectedProject.domain}</span>
          </div>

          <div className="project-description-body">
            <p className="eyebrow">Item description</p>
            <div className="project-heading">
              <div>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.type}</p>
              </div>
              <span>{selectedProject.period}</span>
            </div>

            <p className="project-long-description">{selectedProject.detail}</p>

            <div className="project-facts">
              <div>
                <span>Course</span>
                <strong>{selectedProject.course}</strong>
              </div>
              <div>
                <span>Skills granted</span>
                <ul>
                  {selectedProject.skills.map((skills) => (
                    <li key={skills}>{skills}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <main className="site-shell">
      <div className="atmosphere" aria-hidden="true" />
      <header className="topbar">
        <a href="#" className="brand" aria-label="Retour à l’accueil">
          <span className="brand-sigil"><img src={"/site-telov-ybag/tree/main/Images/GFLogo.png"} alt="Logo" /></span>
          <span>
            Gabriel
            <small>Experiences Designer</small>
          </span>
        </a>
        <div className="topbar-side">
          <span className="available">
            <i />
            Looking for an intership
          </span>
          <a className="contact-link" href="mailto:gabriel.volet1@etu.univ-lorraine.fr">
            Contact me <span>↗</span>
          </a>
        </div>
      </header>

      <nav className="tabs" aria-label="Navigation principale">
        {tabs.map((tab) => {
          const Icon = icons[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`tab ${isActive ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={isActive}
              role="tab"
            >
              <span className="tab-index">{tab.index}</span>
              <Icon className="tab-icon" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="frame">
        <div className="frame-corner frame-corner-tl" />
        <div className="frame-corner frame-corner-tr" />
        <div className="frame-corner frame-corner-bl" />
        <div className="frame-corner frame-corner-br" />
        <div className="section-marker">
          <span>0{activeIndex + 1}</span>
          <i />
          <span>03</span>
        </div>

        <div className="panel" role="tabpanel" key={activeTab}>
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "quests" && <QuestContent />}
          {activeTab === "inventory" && <InventoryContent />}
        </div>
      </div>

      <footer>
        <Ornament />
        <p>Personal portfolio - Made with AI help (esthetic part)</p>
        <Ornament />
      </footer>
    </main>
  );
}
