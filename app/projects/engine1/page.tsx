import Image from 'next/image';

export default function RocketGUI() {
  const skills = [
    'Bare-Metal C++', 'Python GUI', 'Telemetry', 'Real-Time Systems',
    'Data Acquisition', 'System Design', 'SI/PI Considerations', 'Embedded Firmware'
  ];

  return (
    <main className="bg-[#0f2b3a] text-[#f0f0f0] min-h-screen font-sans px-4 sm:px-21 py-10 max-w-6xl mx-auto">
      {/* Title + Summary Row */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column — Title, Paragraph, Skills */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#4cd4cb] mb-1">Rocket Engine Testing Software Platform</h1>
          <section className="mt-1 mb-8">
            <a
              href="https://github.com/izukaike/Liquid_Fueled_Rocket_Engine_Electrical_System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cd4cb] underline hover:text-[#00b3b3] text-lg mb-8"
            >
              Check out more details here →
            </a>
         </section>
          <p className="text-lg  font-semibold text-[#f0f0f0] mb-8">
          Baylor Unviersity's aerospace engineering club's first attempt to hot-fire a liquid-fueled rocket engine had a tight two-semester 
          and very limited budget. As the electrical engineering lead, I developed the embedded software and real-time GUI, replacing
          a pricy LabVIEW license with a fully custom solution that powered the team’s first full-scale engine test.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              'Bare-Metal C++', 'Python', 'Data Visualization', 'Budgeting', 'Microcontrollers','Electromechanics',
              'Sensors & Actuator Interface', 'Project Managment', 'Leadership','Signal Processing','System Design','Schematics','SI/PI',
              'Wired Telemetry'
            ].map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#194159] text-white px-3 py-1 rounded-full text-sm border border-[#4cd4cb]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column — Centered Image */}
        <div className="flex justify-center items-center">
          <figure className="text-center">
            <Image
              src="/v1_GUI.png"
              alt="Main Project"
              width={450}
              height={450}
              className="rounded-md border border-white"
            />
            <figcaption className="mt-3 text-sm font-semibold text-[#c0c0c0]">
              Main Dashboard Used By 9 Engineers To Operate Rocket Engine
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-[#4cd4cb] mb-12 item-center">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Block Diagram Image */}
          <div className="p-4 rounded-md flex justify-center flex-col items-center">
            <Image
              src="/high_level_ee_system.png"
              alt="System Block Diagram"
              width={500}
              height={450}
              className="rounded-md object-contain"
            />
          </div>

          {/* Technical Explanation */}
          <div className="text-[#f0f0f0] text-base leading-relaxed item-center">
            <p className="mb-4">
              The system consists of a data acquisition and control architecture using an <strong>ATmega328P microcontroller</strong>.
              Embedded software was written in <strong>C++</strong> for <strong>UART</strong> communication real-time polling of <strong>voltage and current analog sensors (pressure transducers) </strong>
              and digital outputs to drive <strong>1A-32A Solenoid Valves</strong> using <strong>relays</strong> powered by a car battery. The software also interfaces with
              on board <strong>EEPROM</strong> for critical data saving.
            </p>
            <p className="mb-4">
              On the GUI side, I built a Python-based GUI using <strong>PyQt</strong> framework for real-time data visualization, serial communication via UART, and test sequence control. 
              The platform performs synchronized sampling, signal conditioning, ADC calibration routines, while maintaining responsiveness under different engine behavior.
            </p>
          </div>
        </div>
      </section>

    
    </main>
  );
}