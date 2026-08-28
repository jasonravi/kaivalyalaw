import { forumsOfPractice, practiceAreas } from "@/data/practiceAreas";

export function PracticeAreasPath() {
  return (
    <section className="section practice-areas-section" id="practice-areas">
      <div className="wide">
        <h2 className="practice-display-title">Practice Areas</h2>
        <div className="pa-track">
          <svg
            className="pa-ribbon"
            viewBox="0 0 1000 720"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 60 H500 C670 60 670 180 500 180 C330 180 330 300 500 300 C670 300 670 420 500 420 C330 420 330 540 500 540 C670 540 670 660 500 660 H1000"
              fill="none"
              stroke="#2c3444"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {practiceAreas.map((item, index) => (
            <article
              key={item.title}
              className={`pa-row ${index % 2 === 0 ? "is-right" : "is-left"}`}
            >
              <div className="pa-copy">
                <h3>{item.title}</h3>
                <p>{item.topics}</p>
              </div>
              <span className="pa-node">{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ForumsOfPractice() {
  return (
    <section className="section forums-section" id="forums-of-practice">
      <div className="wide">
        <h2 className="practice-display-title">Forums of Practice</h2>
        <div className="forum-list">
          {forumsOfPractice.map((name) => (
            <div className="forum-pill" key={name}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
