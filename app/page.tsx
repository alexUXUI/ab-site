import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-6 xs:p-2 xxs:p-2">
        <h1 className="text-[48px]">Alex Bennett</h1>
        <section className="margin-auto mt-[20px] text-[18px] mb-[30px] max-w-[580px] px-6">
          <p className=" text-center">
            Software Engineer & AWS Certified Cloud Architect with over a decade
            of experience building comprehensive technology solutions across
            many industries.
          </p>
          <p className="text-center  pt-[20px]">
            OSS contributor, conference speaker, and life-long learner.
          </p>
          <p className="text-center  pt-[20px]">
            Let&apos;s build something great, together.
          </p>
          <div className="margin-auto flex flex-col justify-center">
            <a
              href="/alex-bennett-resume-2024.pdf"
              download="alex-bennett-resume.pdf"
              className="my-[20px] underline text-center text-blue-700 m-auto"
            >
              Download Resume
            </a>
          </div>
        </section>
        <section className="text-left xs:text-[16px] md:text-[18px] xxs:w-[98%]  xs:w-[98%] md:w-[98%] w-[90%] flex flex-wrap items-baseline justify-evenly margin-auto max-w-[1100px]">
          <div className="pt-[20px] w-[500px]">
            <h2 className="text-center font-medium text-[18px] pb-[10px]">
              🧰 Languages, libraries, and frameworks
            </h2>
            <p className="text-left">
              React (Next.js/Remix), React Native, Qwik, Node.js, TypeScript,
              GraphQL/Apollo, Webpack, Rust, Wasm and <i>many</i> more.
            </p>
          </div>
          <div className="w-[500px] text-left pt-[20px]">
            <h2 className="text-center font-medium text-[18px] pb-[10px]">
              🧩 Patterns
            </h2>
            <p className="text-left">
              Serverless, Micro frontends, Event Sourcing and Event Driven
              Architecture, CQRS, functional programming, SOLID principles,
              clean architecture, BFF, Service-full integration, Polylith,
              RPC/gRPC.
            </p>
          </div>
          <div className="w-[500px] text-left pt-[20px]">
            <h2 className="text-center font-medium text-[18px] pb-[10px]">
              🧠 Knowledgable about
            </h2>
            <p className="text-left">
              DevOps, Compilers, Frameworks, Runtimes, Javascript toolchain,
              Testing, Monorepos, Performance Engineering, Observability,
              Browser APIs, State Management, Design Systems.
            </p>
          </div>

          <div className="w-[500px] text-left pt-[20px]">
            <h2 className="text-center font-medium text-[18px] pb-[10px]">
              ⛅️ Clouds
            </h2>
            <p className="text-left">
              AWS, GCP, Cloudflare, Vercel, Netlify, Heroku, Supabase, Railway,
              etc
            </p>
          </div>

          <div className="w-[500px] text-left pt-[20px]">
            <h2 className="text-center font-medium text-[18px] pb-[10px]">
              🗄 Databases
            </h2>
            <p className="text-left">
              Realtional: Postgres, MySQL, Nonrelational: DynamoDB, MongoDB,
              Redis. Also have worked with Columnar and Graph DBs.
            </p>
          </div>
          <div className="w-[500px] text-left pt-[20px]">
            <h2 className="text-center font-medium text-[18px] pb-[10px]">
              ✏️ Design
            </h2>
            <p className="text-left">
              Figma, SketchUp, Adobe: Photoshop, Illustrator, After Effects,
              Premier Pro
            </p>
          </div>
        </section>
        <div className="xs:text-[16px] md:text-[18px] xxs:w-[98%]  xs:w-[98%] md:w-[98%] w-[90%] flex flex-wrap items-baseline justify-evenly margin-auto max-w-[1100px]">
          <section className="flex flex-col justify-center margin-auto w-[500px]">
            <h2 className="text-[48px] py-[40px] text-center">Writing</h2>
            <p className="indent-4  text-left">
              As part of the Module Federation OSS community team, I worked with
              Zack Jackson to write a webpack plugin to syncronize multiple,
              independent builds using Module Federation and I wrote about it{" "}
              <a
                className="text-blue-700 underline"
                href="https://medium.com/@A__G__B/introducing-fmr-federated-module-reloading-820ec56256db"
              >
                here.
              </a>
            </p>
            <Image
              src="/fmr.png"
              alt="FMR logo"
              width={500}
              height={500}
              className="py-[40px]"
            />
            <p className="indent-4  text-left">
              This OSS project was later published in the seminal book on
              Micro-Frontends, written by Principal AWS Engineer, Luca
              Mezzalira.{" "}
            </p>
            <Image
              src="/building-mfe.png"
              alt="FMR logo"
              width={500}
              height={500}
              className="py-[40px]"
            />
            <h3 className="text-[30px] py-[20px] text-center">Speaking</h3>
            <p className="indent-4  text-left">
              As an early champion and adopter of MFE and Module federation, I
              gave a talk at Develop Denver in 2019 about the MFE archietcture I
              built for a 8Bn dollar company.{" "}
            </p>
            <Image
              src="/develop-denver.png"
              alt="FMR logo"
              width={500}
              height={250}
              className="py-[40px]"
            />
            <h3 className="text-[30px] py-[20px] text-center">Presentations</h3>
            <p className="indent-4  text-left">
              <a
                href="https://docs.google.com/presentation/d/1rbGS8uENrHhL1FJi_PIQ89V_gRzag8v3QArVqACg56Y/edit#slide=id.p"
                className="text-blue-700 underline"
              >
                Here is a link
              </a>{" "}
              to a powerpoint presentation I give on Micro frontends, and Module
              Federation to stakeholders and other engineers.
            </p>
            <Image
              src="/intro-slide.png"
              alt="FMR logo"
              width={500}
              height={300}
              className="py-[40px]"
            />
            <Image
              src="/diagram-close.png"
              alt="FMR logo"
              width={500}
              height={750}
              className="py-[40px]"
            />
          </section>
          <section className="flex flex-col justify-center margin-auto w-[500px]">
            <h2 className="text-[48px] mt-[20px] text-center">Projects</h2>

            <div className="mt-[40px] text-left">
              <h3 className="text-[24px] text-center">
                <a
                  href="https://boggle.pages.dev/"
                  className="text-blue-700 underline"
                >
                  Boggle Word Finder
                </a>
              </h3>
              <div className="flex">
                <Image
                  src="/boggle.png"
                  alt="FMR logo"
                  width={500}
                  height={750}
                  className="py-[20px] m-auto"
                />
              </div>
              <p className="indent-4 ">
                Built with computer science fundamentals such a recursion,
                breadth first search, and depth first search. The tech stack is
                built with Qwik.js Rust, Wasm, web workers, and CSS for the
                styles.
                <br />
                <br />
                The boogle clone works by taking two sources of input. The first
                is a string of letters that represent the board. The second is a
                dictionary of words. The program will then find all the words
                that can be made from the board and the dictionary.
                <br />
                <br />
              </p>
            </div>
            <div className="mt-[40px] text-left">
              <h3 className="text-[24px] text-center">
                <a
                  href="https://mewzik-viz.vercel.app/"
                  className="text-blue-700 underline"
                >
                  Music Visualizer
                </a>
              </h3>
              <div className="flex flex-wrap">
                <Image
                  src="/music-viz-red.png"
                  alt="FMR logo"
                  width={250}
                  height={250}
                  className="py-[20px] m-auto"
                />
                <Image
                  src="/music-viz-blue.png"
                  alt="FMR logo"
                  width={250}
                  height={250}
                  className="py-[20px] m-auto"
                />
              </div>
              <p className="indent-4 ">
                Built with three.js, Web Audio APIs, and knowledge of
                trigonometry and sound physics.
                <br />
                <br />
                It works by taking music as input data and the program will get
                a set amount of frequencies. For each frequency, it will get the
                amplitude, and it will use this information to create a visual
                representation of the music. The visualizer requires an MP3 to
                play. Here is a soundbyte MP3 of Beethovens 5th Symphony if you
                do not have one available.{" "}
                <a
                  href="beethoven-symphony-5.mp3"
                  className="text-blue-700 underline"
                >
                  Download MP3
                </a>
              </p>
            </div>
            <div className="mt-[40px] text-left">
              <h3 className="text-[24px] text-center">
                <a
                  href="https://github.com/alexUXUI/wasm-federation-demo"
                  className="text-blue-700 underline "
                >
                  Federating Wasm Modules
                </a>
              </h3>
              <Image
                src="/wasm-federation.png"
                alt="FMR logo"
                width={500}
                height={750}
                className="py-[20px] m-auto"
              />
              <p className="indent-4 ">
                Built with webpack module federation, Rust, and Wasm
                <br />
                <br />
                This decoupled UI toolchain shows how powerful webpack module
                federation can be by not only federating (sharing) Javascript
                code between two apps, but also sharing Rust-flavored Wasm. This
                was demoed by Zack Jackson at this first ever microfrontend
                conference. It is also in the official module federation
                examples repository.
                <br />
                <br />
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center margin-auto w-[500px]">
            <h2 className="text-[48px] mt-[20px] text-center">Work</h2>
            <h3 className="text-[24px] text-center">
              <a
                href="https://www.productscience.ai/"
                className="text-blue-700 underline"
              >
                Product Science
              </a>
            </h3>
            <Image
              src="/ps.png"
              alt="FMR logo"
              width={500}
              height={300}
              className="py-[20px] m-auto"
            />
            <p className="indent-4 ">
              Product Science is a startup that builds perfomance tools for
              mobile engineers, leveraging AI to create deep insights of runtime
              execution in a multithreaded environment.
              <br />
              <br />
              I worked on the frontend team, building out the UI for the
              performance profiler, which is a canvas based react that that
              renders a flame graph. A video of the app, and timelines to search
              through each. Other features include a Main Execution path which
              shows how functions are called over time. This is a completely
              novel design not present anywhere else in the performace tooling
              space.
              <br />
              <br />
            </p>
          </section>
          {/* <section className="flex flex-col justify-center margin-auto w-[500px]">
            <h2 className="text-[48px] mt-[20px] text-center">
              Around the Web
            </h2>
            <div className="mt-[20px] text-left">
              <h3 className="text-[24px] text-center">
                <a
                  href="https://medium.com/@A__G__B"
                  className="text-blue-700 underline"
                >
                  Medium
                </a>
              </h3>
            </div>
            <div className="mt-[20px] text-left">
              <h3 className="text-[24px] text-center">
                <a
                  href="https://www.linkedin.com/in/absolute-alex/"
                  className="text-blue-700 underline"
                >
                  LinkedIn
                </a>
              </h3>
            </div>
            <div className="mt-[20px] text-left">
              <h3 className="text-[24px] text-center">
                <a
                  href="https://twitter.com/alexUX_UI"
                  className="text-blue-700 underline"
                >
                  Twitter
                </a>
              </h3>
            </div>
            <div className="mt-[20px] text-left">
              <a
                href="https://github.com/alexUXUI"
                className="text-blue-700 underline"
              >
                <h3 className="text-[24px] text-center">Github</h3>
              </a>
            </div>
          </section> */}
        </div>
      </main>
      <footer className="mt-[40px] py-[40px] w-full flex flex-col">
        <div className="flex m-auto pb-[20px]">
          <h3 className="text-[16px] px-2">
            <a
              href="https://medium.com/@A__G__B"
              className="text-blue-700 underline"
            >
              Medium
            </a>
          </h3>
          <h3 className="text-[16px] px-2">
            <a
              href="https://www.linkedin.com/in/absolute-alex/"
              className="text-blue-700 underline"
            >
              LinkedIn
            </a>
          </h3>
          <h3 className="text-[16px] px-2">
            <a
              href="https://twitter.com/alexUX_UI"
              className="text-blue-700 underline"
            >
              Twitter
            </a>
          </h3>
          <a
            href="https://github.com/alexUXUI"
            className="text-blue-700 underline"
          >
            <h3 className="text-[16px] px-2">Github</h3>
          </a>
        </div>
        <div className="flex m-auto text-center">
          Designed and Developed with 🖤 by Alex Bennett{" "}
        </div>
      </footer>
    </>
  );
}
