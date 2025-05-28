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
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold text-[#4cd4cb] mb-1">Full-Stack Rocket Engine Electronics System</h1>
          <section className="mt-1 mb-8">
            <a
              href="https://github.com/izukaike/Baylor_Liquid_Propulsion_Electrical_System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cd4cb] underline hover:text-[#00b3b3] text-lg mb-8"
            >
              Check out more details here →
            </a>
         </section>
          <p className="text-lg  font-semibold text-[#f0f0f0] mb-8">
          I led the design of the full-stack electronics system that powered Baylor Aero’s second liquid rocket engine. 
          With a tight two-semester timeline and a limited budget, I served as Lead Electrical Engineer selecting, designing,
          integrating, and testing the system’s sensors, actuators, control, data acquisition, and power electronics. 
          To stay within constraints, I replaced the need for expensive commercial DAQ hardware by engineering custom
          solutions that enabled fast and reliable engine testing.
         </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Linux', 'Python', 'H-I-T-L', 'Mixed-Signal IC', 'Microcontrollers','Power Electronics',
              'Sensor Integration', 'Transistor Circuits', 'Battery Management','C++','Soldering',
              'Schematic Capture', 'SI/PI', 'Electromechanics','Actuator Interface','Automated Lab Testing', 'Wireless Telemetry',
              'Networking', 'Data Visualization', 'Signal Chain Design', 'Lab Equipment'
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
              src="/hw_top_2.png"
              alt="Main Project"
              width={500}
              height={500}
              className="rounded-md border border-white"
            />
            <figcaption className="mt-3 text-sm font-semibold text-[#c0c0c0]">
            Main Circuit Board With Hand Soldered Control (Green), Data Acquisition 
            (Red), and Power (Blue) Electronics whihc connects with Raspberry Pi 4b+
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="mb-10">
          <h2 className="text-3xl font-semibold text-[#4cd4cb] mb-12 text-left">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Diagram */}
            <div className="flex justify-center items-center p-4">
              <Image
                src="/v2_diagram.png"
                alt="System Diagram"
                className="rounded-md border border-[#4cd4cb] w-full max-w-[500px] max-h-[700px] object-cover"
                width={500}
                height={500}
              />
            </div>
            {/* Right: Details */}
            <div className="text-[#f0f0f0] text-base space-y-6">
            <p>I designed and integrated the eletrical components including:</p>
              <div className="grid grid-cols-2 gap-x-8">
                <div>
                  <h3 className="text-l font-semibold mb-2 text-[#f0f0f0]">Electronics</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>12V–24V Boost Converter</li>
                    <li>7.2V–5V LDO</li>
                    <li>Battery Module</li>
                    <li>7.2V–5V Buck Converter</li>
                    <li>Car Battery</li>
                    <li>4x ADCs</li>
                    <li>4x DACs</li>
                    <li>3x Relays</li>
                    <li>2x MOSFETs</li>
                    <li>Raspberry Pi 4b+</li>
                    
                  </ul>
                </div>
                <div>
                  <h3 className="text-l font-semibold mb-2 text-[#f0f0f0]">Instrumentation</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>3x Current Pressure Transducers</li>
                    <li>2x Voltage Pressure Transducers</li>
                    <li>1x Thrust Sensor</li>
                    <li>1x Thermocouple</li>
                    <li>3x 8W DC Solenoid Valves</li>
                    <li>1x 12W DC Solenoid Valve</li>
                  </ul>
                </div>
              </div>

              <p>
                The firmware enabled synchronized sampling and real-time response to valve actuation. Additionally, 
                I used Hardware-In-The-Loop-Testing by synchronizing 4 DAC's to simulate sensor data. Next, I  experimented with BLE
                telemetry but settled on Wi-Fi telemetry code in Python.  
              </p>
            </div>
          </div>
        </section>
     
    </main>
  );
}