import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    useEffect(() => {
    fetch('/api/visit', {
      method: 'POST',
    });
  }, []);
  return (
    <main className="min-h-screen bg-[#0f2b3a] text-white font-sans sm:px-20 xl:px-17 ">
      <div className="max-w-screen-xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-left p-6 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">I. A. I.</h1>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-semibold">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#blog" className="hover:underline">Blog</a>
        </nav>
      </header>

      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-16 bg-[#194159] text-center md:text-left ">
        <div className="w-full md:w-1/2 px-4 sm:px-6 ">
          <h2 className="text-4xl sm:text-4xl font-bold mb-3">Hi, I'm Izuka Ikedionwu</h2>
          <p className="text-lg sm:text-xl text-[#f0f0f0] mb-4">
            I'm an <span className="text-[#4cd4cb] font-semibold">Electrical & Computer Engineering</span> Master's student specializing in power systems/electronics. I have an undergraduate
            degree in Electrical & Computer Engineering and minors in Computer Science & Mathematics
            with real-world experience across the consumer electronics, aerospace, defense, and energy industry with a passion for making technology smarter, faster, cheaper, and more efficient.
          </p>
          <div className="w-full md:w-1/2 flex justify-left">
            <a href="https://www.linkedin.com/in/izuka-ikedionwu" target="_blank" rel="noopener noreferrer">
              <Image src="/li_logo.svg" alt="LinkedIn" width={50} height={50} />
            </a>
            <a href="https://github.com/izukaike" target="_blank" rel="noopener noreferrer">
              <Image src="/github_logo.svg" alt="GitHub" width={50} height={50} />
            </a>
            <a href="mailto:izukaikedionwu@gmail.com">
              <Image src="/email_logo.svg" alt="Email" width={50} height={50} />
            </a>
          </div>
        </div>
        <div className="w-56 h-56 sm:w-70 sm:h-70 rounded-full overflow-hidden border-4 border-white">
          <Image src="/me0.jpg" alt="Izuka Ikedionwu" width={275} height={275} className="object-cover w-full h-full" />
        </div>
      </section>

      <section id="about" className="min-h-[90vh] p-6 sm:p-12 bg-[#0f2b3a] text-[#eaeaea]">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold mb-10">About me</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>I'm <strong>Izuka Ikedionwu!</strong> I’m currently working on my <strong>Master’s in Electrical and Computer Engineering</strong> at Baylor University, focusing on power electronics.</p>
              <p>I love building top-notch hardware and software across <strong>aerospace, energy, defense, and tech</strong>. I’ve worked on everything from low-level embedded systems transistor circuits to large-scale data processing pipelines analyzing 450 miles of power
               infrastructure tackling <strong>avionics, RF, control, digital, and power</strong> systems. I’m all about bridging the gap between the problem, the design, the implementation, and the solution.</p>
              <p>Outside of engineering, you’ll usually find me at the gym, playing pickup basketball or golf, learning something new, or knee-deep in a side project just for the fun of it.</p>
            </div>

            <div className="mt-10">
              <h4 className="text-3xl font-semibold mb-4">Internships & Experience</h4>
              <ul className="space-y-6 text-lg md:text-l ">
                <li className="flex items-center gap-4">
                  <Image src="/spacex_logo.svg" alt="SpaceX" width={42} height={42} />
                  <div><strong>SpaceX</strong> – Starlink Hardware Design Engineer</div>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/spacex_logo.svg" alt="SpaceX" width={42} height={42} />
                  <div><strong>SpaceX</strong> – Data & Control Systems Engineer</div>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/lm_logo.svg" alt="Lockheed Martin" width={42} height={42} />
                  <div><strong>Lockheed Martin</strong> – Embedded Systems Engineer</div>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/em_Logo.png" alt="ExxonMobil" width={42} height={42} />
                  <div><strong>ExxonMobil</strong> – Software Engineer</div>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/bu_logo.png" alt="Baylor University" width={42} height={42} />
                  <div><strong>Baylor University</strong> – Graduate Research Engineer</div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-8">Skills & Tools</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-3 mb-23">
              {[
                'C/C++', 'Python', 'SystemVerilog', 'MATLAB/Simulink', 'Embedded Hardware Design', 'Linux', 'Altium', 'Git', 'FPGA Design', 'Embedded Systems',
                'LabVIEW', 'Motor Control', 'Soldering/Re-Work', 'Sensors & Instrumentation', 'Data Acquisition (DAQ)',
                'SI/PI Analysis', 'PCB Design & Fabrication', 'EMI/EMC Testing', 'Digital Communication', 'Wireless Communication',
                'Real-Time Systems', 'GNSS/RF Systems', 'Avionics', 'High-Speed Digital Design','Power Electronics',
                'Schematic Capture & Simulation', 'Autonomous Control Systems', 'Computer Vision', 'Industrial Panel Design','Bash'
              ].map(skill => (
                <span key={skill} className="bg-[#194159] text-white px-3 py-1 rounded-full text-sm border border-[#4cd4cb]">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-semibold mb-8">Relevant Coursework</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 text-sm list-disc list-inside font-semibold">
              <li>Embedded Systems</li>
              <li>Electronics</li>
              <li>GPU Design</li>
              <li>Advanced Digital Logic</li>
              <li>Microprocessor Systems</li>
              <li>Digital Signal Processing</li>
              <li>Computer Organization</li>
              <li>Circuit Theory</li>
              <li>Digital Verification & Validation</li>
              <li>Control Systems</li>
              <li>Applied Electromagnetic Fields</li>
              <li>Data Structures & Algorithms</li>
              <li>Engineering Statistics</li>
              <li>Fundamentals of Lasers</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-[80vh] p-6 sm:p-12 bg-[#143344] text-[#f0f0f0]">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <ul className="space-y-12">
        <li className="flex gap-12 items-center">
              <Image src="/blp1.png" alt="Rocket Engine Project" width={315} height={315} className="rounded-md object-cover" />
              <div>
                <Link href="/projects/engine1">
                  <h4 className="text-2xl font-semibold text-[#4cd4cb] underline hover:text-[#00b3b3]">
                    Rocket Engine Testing Software Platform
                  </h4>
                </Link>
                <p>Programmed C++ software and a Python GUI for real-time control, telemetry, and data acquisition of 
                  a liquid-fueled rocket engine used by a team of 9 engineers to rapidly test the engine with 
                  dependable ground support tooling.</p>
              </div>
            </li>
                  <li className="flex gap-12 items-center">
            <Image src="/blp2.png" alt="Electronics System Project" width={315} height={315} className="rounded-md object-cover" />
            <div>
              <Link href="/projects/engine2">
                <h4 className="text-2xl font-semibold text-[#4cd4cb] underline hover:text-[#00b3b3]">
                  Full-Stack Rocket Engine Electronics System
                </h4>
              </Link>
              <p>Designed and validated electronics for control, telemetry, data acquisition, and power for a liquid-fueled rocket engine hot-fire test maximizing
                reliability and minimizing time between attempts</p>
            </div>
          </li>
          <li className="flex gap-12 items-center">
              <Image src="/auto_boat.png" alt="Autonomous Boat Project" width={315} height={315} className="rounded-md object-cover" />
              <div>
                <Link href="/projects/auto">
                  <h4 className="text-2xl  font-semibold text-[#4cd4cb] underline hover:text-[#00b3b3]">
                    Autonomous Boat Navigation System
                  </h4>
                </Link>
                <p>Made an embedded control system using motor drivers, a camera, and real-time software for international
                  competition, RoboBoat, to make an autonomous water navigation boat.</p>
              </div>
            </li>
          <li className="flex gap-12 items-center">
           <Image src="/full_processor_pic.png" alt="FPGA Processor Project" width={315} height={315} className="rounded-md object-cover" />
            <div>
              <Link href="/projects/fpga">
                <h4 className="text-2xl  font-semibold text-[#4cd4cb] underline hover:text-[#00b3b3]">
                  FPGA Based 64-Bit Processor & Assembler 
                </h4>
              </Link>
              <p>Programmed an assembler in Python, a 64-bit pipelined ARM processor, and DDR2 memory controller interface
                in SystemVerilog to execute 23 instructions to better understand Computer Architecture, Computer Systems, and RAM design</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="blog" className="min-h-[20vh] p-6 sm:p-12 bg-[#194159] text-[#ffffff]">
        <h3 className="text-3xl font-bold mb-4">Blog</h3>
        <p className="max-w-2xl mx-auto text-center text-lg">
          Coming soon: Deep dives on technical theory, practical engineering applications, and hands on tutorials, all aimed
           at sharing what I learn and helping close the education gap!
        </p>
      </section>

      <footer className="p-4 sm:p-6 text-center text-[#aaaaaa]">
        &copy; 2025 Izuka Ikedionwu — All Rights Reserved
      </footer>
      </div>
    </main>
  );
}
