import Button from "./components/button";
import Card from "./components/card";
import { Project } from "./components/project";
import Time from "./components/time";
import "material-symbols";

export default function Home() {
  return (
    <div className="text-white m-auto p-4 md:p-8 xl:pt-12 grid gap-4 max-w-6xl overflow-hidden relative w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card
        colSpan="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3"
        rowSpan="md:row-span-2"
      >
        <div className="flex flex-col md:flex-row h-full relative">
          <div className="relative z-10 flex flex-col p-6 md:p-10 md:pr-0 gap-4 justify-center items-start md:w-1/2">
            <p className="m-0 font-extralight text-sm mb-3">
              Hey, I'm <span className="font-bold">John Uberbacher</span>. I am
              a driven and solutions-focused developer with a strong background
              in both front-end and back-end software development.
              <br />
              <br /> Skilled in solving complex problems and leading
              collaborative efforts. Passionate about building smooth, reliable
              web experiences that make a real impact.
              <br />
              <br />
              In short; I work to make the internet a better experience.
            </p>

            <div className="flex flex-wrap md:flex-nowrap gap-4 z-10">
              <Button
                text="LinkedIn"
                href="https://www.linkedin.com/in/johnuberbacher/"
                newTab
              />
              <Button
                text="Resume"
                href="http://johnuberbacher.com/resume.pdf"
                newTab
              />
              <Button
                text="GitHub"
                href="https://github.com/johnuberbacher"
                newTab
              />
            </div>
          </div>
          <div className="absolute inset-0 md:relative md:w-1/2 h-full">
            <img
              src="avatar.png"
              className="mr-0 ml-auto w-auto md:w-full h-full object-cover md:object-cover opacity-30 md:opacity-100 select-none pointer-events-none"
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
        <Time />
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
          description="Create custom TCG cards with React: choose templates, customize attributes, upload art, and export."
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
    </div>
  );
}
/*
<Card colSpan="col-span-1 md:col-span-1 lg:col-span-1" rowSpan="md:row-span-1">
  <div className="flex flex-col gap-2 p-6">
    <div className="bg-neutral-800 border-1 border-neutral-700 rounded-lg py-4 px-6 relative">
      <span className="absolute flex h-3 w-3 left-2 top-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-90"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <div className="text-smm-0 font-extralight text-xs">yoo</div>
    </div>
    <div className="bg-neutral-800 border-1 border-neutral-700 rounded-full py-4 px-6">
      <div className="text-smm-0 font-extralight text-xs">yoo</div>
    </div>
  </div>
</Card>
*/
