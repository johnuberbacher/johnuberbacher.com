import Button from "./components/button";

export default function Home() {
  return (
    <main className="page">
      {/* Both ship; globals.css shows one per theme. eslint-disable for
          no-img-element: static export, next/image adds no optimisation here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="portrait portrait-light"
        src="/me.jpg"
        width={643}
        height={612}
        alt="John Uberbacher"
        fetchPriority="high"
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="portrait portrait-dark"
        src="/me-dark.jpg"
        width={1059}
        height={1008}
        alt="John Uberbacher"
        fetchPriority="high"
        decoding="async"
      />

      <div className="intro">
        <div className="flex flex-col items-center gap-1">
          <p className="kicker m-0">Hey, I&apos;m</p>
          <h1 className="display m-0">John Uberbacher.</h1>
        </div>

        <p className="lede m-0">
          I&apos;m a driven, solutions-focused developer with a long history of
          delivering high-quality software across code, design, and everything
          in between. Skilled at solving real user problems and leading product
          delivery from first idea to launch.
        </p>

        <p className="lede closer m-0">
          In short: I work to make the internet a better experience.
        </p>

        <nav aria-label="Find me elsewhere" className="mt-2">
          <ul className="m-0 flex list-none flex-wrap justify-center gap-3 p-0">
            <li>
              <Button
                text="LinkedIn"
                href="https://www.linkedin.com/in/johnuberbacher/"
                newTab
              />
            </li>
            <li>
              <Button
                text="Resume"
                href="/resume.pdf"
                label="Resume (PDF, opens in a new tab)"
                newTab
              />
            </li>
            <li>
              <Button
                text="GitHub"
                href="https://github.com/johnuberbacher"
                newTab
              />
            </li>
          </ul>
        </nav>
      </div>

      {/* Parked: the project tiles. To bring them back, restore the grid
          classes on <main>, uncomment the block below, and re-add
          `import { Project } from "./components/project";` above. */}
      {/*
      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="Discord Bot Messenger"
          description="Cross-platform app using Electron and Vue 3 to send Discord bot messages to any server channel."
          image="discord-bot-messenger.png"
          demoLink="https://github.com/johnuberbacher/discord-bot-messenger/releases"
          githubLink="https://github.com/johnuberbacher/discord-bot-messenger/"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="Feedback Wizard"
          description="Vue 3 app for topic-based feedback, using Firebase for auth/storage and Tailwind CSS for styling."
          image="feedback-wizard.png"
          demoLink="https://feedback-wizard.netlify.app/"
          githubLink="https://github.com/johnuberbacher/feedback-wizard"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="React Card Builder"
          description="TCG Card Builder is a React-based application that allows users to create custom cards for Lorcana and Yu-Gi-Oh."
          image="react-card-builder.png"
          demoLink="https://tcgbuilder.netlify.app/"
          githubLink="https://github.com/johnuberbacher/react-card-builder"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="Lorcana TCG Lore Tracker"
          description="A minimal WearOS Android Watch app built in Kotlin to help players track scores in the card game Lorcana."
          image=""
          demoLink="https://github.com/johnuberbacher/lorcana-tcg-lore-tracker/releases"
          githubLink="https://github.com/johnuberbacher/lorcana-tcg-lore-tracker/"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="Amiibo Tracker"
          description="Vue app with Bootstrap integration for easily cataloging and tracking your Nintendo Amiibo collection!"
          image="amiibo-tracker.png"
          demoLink="https://amiibo-tracker.netlify.app/"
          githubLink="https://github.com/johnuberbacher/amiibo-tracker"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="Vue 95"
          description="Simple recreation of the Windows 95 operating system built with Vue 3."
          image="vue95.png"
          demoLink="https://johnuberbacher.com/vue95"
          githubLink="https://github.com/johnuberbacher/vue-95"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="Pokédex"
          description="A Pokédex app for Web, Desktop, Android and iOS built using Dart and Flutter."
          image="pokedex.png"
          demoLink=""
          githubLink="https://github.com/johnuberbacher/pokedex"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="React Invoice Generator"
          description="An Invoice creator project built with React and jspdf-react."
          image="react-invoice-generator.png"
          demoLink="https://invoice-generator-react.netlify.app/"
          githubLink="https://github.com/johnuberbacher/invoice-generator"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Project
          title="NextQuest Habit Tracker"
          description="Schedule and log your habits, built with Vue 3 and Nuxt 3."
          image="nextquest-habit-tracker.png"
          demoLink="https://johnuberbacher.com/nextquest/"
          githubLink="https://github.com/johnuberbacher/nextquest"
        />
      </Card>
      */}
    </main>
  );
}
