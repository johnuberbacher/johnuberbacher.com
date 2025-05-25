import Button from "./components/button";
import Card from "./components/card";
import { Project } from "./components/project";
import Time from "./components/time";
import "material-symbols";

export default function Home() {
  return (
    <div className="relative m-auto grid w-full max-w-6xl gap-4 overflow-hidden p-4 text-white sm:grid-cols-2 md:grid-cols-3 md:p-8 lg:grid-cols-4 xl:pt-12">
      <Card
        colSpan="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3"
        rowSpan="md:row-span-2"
      >
        <div className="relative flex h-full flex-col-reverse sm:flex-row">
          <div className="relative z-10 flex flex-col items-start justify-center gap-4 p-6 sm:w-1/2 sm:p-10 sm:pr-0">
            <h1 className="m-0 text-lg font-extralight md:text-xl">
              Hey, I&apos;m <span className="font-bold">John Uberbacher</span>.
            </h1>
            <p className="m-0 mb-3 text-sm font-extralight">
              I am a driven and solutions-focused developer with a strong
              background in both front-end and back-end software development.
              Skilled in solving complex problems and leading collaborative
              efforts. Passionate about building smooth, reliable web
              experiences that make a real impact.
              <br />
              <br />
              In short; I work to make the internet a better experience.
            </p>

            <div className="z-10 flex flex-wrap gap-4 md:flex-nowrap">
              <Button
                text="LinkedIn"
                href="https://www.linkedin.com/in/johnuberbacher/"
                className="text-center text-xs"
                newTab
              />
              <Button
                text="Resume"
                href="http://johnuberbacher.com/resume.pdf"
                className="text-center text-xs"
                newTab
              />
              <Button
                text="GitHub"
                href="https://github.com/johnuberbacher"
                className="text-center text-xs"
                newTab
              />
            </div>
          </div>
          <div className="sm flex h-full flex-col items-center justify-center px-6 pt-6 sm:w-1/2 sm:justify-start sm:pb-6 sm:pr-10 md:justify-center">
            <img
              src="avatar.png"
              className="pointer-events-none mx-auto aspect-square h-auto w-full max-w-xs select-none overflow-hidden rounded-full bg-neutral-800 object-cover"
              alt=""
            />
          </div>
        </div>
      </Card>

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
          description="TCG Card Builder is a React-based application that allows users to create custom trading card game (TCG) cards for games like Lorcana and Yu-Gi-Oh."
          image="react-card-builder.png"
          demoLink="https://tcgbuilder.netlify.app/"
          githubLink="https://github.com/johnuberbacher/react-card-builder"
        />
      </Card>

      <Card
        colSpan="col-span-1 md:col-span-1 lg:col-span-1"
        rowSpan="md:row-span-1"
      >
        <Time />
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
    </div>
  );
}
/*
<Card colSpan="col-span-1 md:col-span-1 lg:col-span-1" rowSpan="md:row-span-1">
  <div className="flex flex-col gap-2 p-6">
    <div className="border-1 relative rounded-lg border-neutral-700 bg-neutral-800 px-6 py-4">
      <span className="absolute left-2 top-2 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-90"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
      <div className="text-smm-0 text-xs font-extralight">yoo</div>
    </div>
    <div className="border-1 rounded-full border-neutral-700 bg-neutral-800 px-6 py-4">
      <div className="text-smm-0 text-xs font-extralight">yoo</div>
    </div>
  </div>
</Card>
*/
