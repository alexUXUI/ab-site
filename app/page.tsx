import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-[48px]">Alex Bennett</h1>
      <section className="margin-auto pt-[20px] pb-[40px]">
        <p className="text-[20px] text-center max-w-[580px] indent-4">
          Software Engineer & AWS Certified Cloud Architect with over a decade
          of experience building comprehensive technology solutions across many
          industries.
        </p>
        <p className="text-center text-[20px] max-w-[580px] text-left pt-[20px]">
          OSS contributor, conference speaker, and life-long learner.
        </p>

        <div className="margin-auto flex flex-col justify-center">
          <a
            href="/Resume-Alex-Bennett.pdf"
            download="alex-bennett-resume.pdf"
            className="py-[20px] text-[20px] max-w-[580px] underline text-center text-blue-700"
          >
            Download Resume
          </a>
        </div>
      </section>
      <section className="w-[90%] flex flex-wrap items-baseline justify-evenly margin-auto max-w-[1100px] ">
        <div className="text-[20px] pt-[20px] w-[500px]">
          <p className="font-medium pb-[10px]">
            🧰 Tools, libraries, and frameworks:
          </p>
          <p className="indent-4 text-[18px] max-w-[580px] text-left">
            React (Next.js/Remix), Qwik, Node.js, TypeScript, GraphQL/Apollo,
            Webpack, Rust, Wasm and many more not listed here.
          </p>
        </div>
        <div className="w-[500px] text-[20px] max-w-[580px] text-left pt-[20px]">
          <p className="font-medium pb-[10px]">🧩 Patterns:</p>
          <p className="indent-4 text-[18px] max-w-[580px] text-left">
            Serverless, Micro frontends, Event Sourcing and Event Driven
            Architecture, CQRS, functional programming, SOLID principles, clean
            architecture, BFF, Service-full integration, Polylith and many more.
          </p>
        </div>
        <div className="w-[500px] text-[20px] max-w-[580px] text-left pt-[20px]">
          <p className="font-medium pb-[10px]">🧠 Knowledgable about:</p>
          <p className="indent-4 text-[18px] max-w-[580px] text-left">
            DevOps, Compilers, Frameworks, Runtimes, Javascript toolchain,
            Testing, Monorepos, Performance Engineering, Observability, Browser
            APIs, and more.
          </p>
        </div>

        <div className="w-[500px] text-[20px] max-w-[580px] text-left pt-[20px]">
          <p className="font-medium pb-[10px]">⛅️ Clouds:</p>
          <p className="indent-4 text-[18px] max-w-[580px] text-left">
            AWS, GCP, Cloudflare, Vercel, Netlify, Heroku, etc
          </p>
        </div>

        <div className="w-[500px] text-[20px] max-w-[580px] text-left pt-[20px]">
          <p className="font-medium pb-[10px]">🗄 Databases:</p>
          <p className="indent-4 text-[18px] max-w-[580px] text-left">
            Realtional: Postgres, MySQL, Nonrelational: DynamoDB, MongoDB,
            Redis. Also have worked with Columnar and Graph DBs.
          </p>
        </div>
        <div className="w-[500px] text-[20px] max-w-[580px] text-left pt-[20px]">
          <p className="font-medium pb-[10px]">✏️ Design:</p>
          <p className="indent-4 text-[18px] max-w-[580px] text-left">
            Figma, SketchUp, Adobe: Photoshop, Illustrator, After Effects,
            Premier Pro
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center margin-auto">
        <h2 className="text-[48px] py-[40px] text-center">Writing</h2>
        <p className="indent-4 text-[18px] max-w-[580px] text-left">
          As part of the Module Federation OSS community team, I worked with
          Zack Jackson to write a webpack plugin to syncronize multiple,
          independent builds using Module Federation and I wrote about it{' '}
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
          className="py-[20px]"
        />
        <p className="indent-4 text-[18px] max-w-[580px] text-left">
          This OSS project was later published in the seminal book on
          Micro-Frontends, written by Principal AWS Engineer, Luca Mezzalira.{' '}
        </p>
        <Image
          src="/building-mfe.png"
          alt="FMR logo"
          width={500}
          height={500}
          className="py-[20px]"
        />
        <p className="indent-4 text-[18px] max-w-[580px] text-left">
          As an early champion and adopter of MFE and Module federation, I gave
          a talk at Develop Denver in 2019 about the MFE archietcture I built
          for a 8Bn dollar company.{' '}
        </p>
        <Image
          src="/develop-denver.png"
          alt="FMR logo"
          width={500}
          height={250}
          className="py-[20px] m-auto"
        />
        <p className="indent-4 text-[18px] max-w-[580px] text-left">
          <a
            href="https://docs.google.com/presentation/d/1rbGS8uENrHhL1FJi_PIQ89V_gRzag8v3QArVqACg56Y/edit#slide=id.p"
            className="text-blue-700 underline"
          >
            Here is a link
          </a>{' '}
          to a powerpoint presentation I give on Micro frontends, and Module
          Federation to stakeholders and other engineers.
        </p>
      </section>
      <h2 className="text-[48px] py-[40px]">Projects</h2>
    </main>
  );
}
