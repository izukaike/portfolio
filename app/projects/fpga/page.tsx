import Image from 'next/image';

export default function RocketGUI() {
  const skills = [
    'Python', 'Motors Control', 'Computer Vision', 'PID Controller',
    'Control Systems', 'Project Management', 'FSM Design', 'Image Processing','Leadership'
  ];

  return (
    <main className="bg-[#0f2b3a] text-[#f0f0f0] min-h-screen font-sans px-4 sm:px-21 py-10 max-w-6xl mx-auto">
      {/* Title + Summary Row */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column — Title, Paragraph, Skills */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#4cd4cb] mb-1">FPGA Based 64-Bit Processor & Assembler</h1>
          <section className="mt-1 mb-8">
            <a
              href="https://github.com/izukaike/Custom_Embedded_FPGA_System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cd4cb] underline hover:text-[#00b3b3] text-lg mb-8"
            >
              Check out more details here →
            </a>
         </section>
          <p className="text-lg  font-semibold text-[#f0f0f0] mb-8">
          I designed an embedded computing system built around a 64-bit ARM pipelined processor on 
          an FPGA, complete with a memory controller interface, a Python based assembler, and UART communication
           with a connected PC. This project came from genuine curiosity to understand what makes modern
            computing systems work. What made this project special was how it tied together
               the low-level hardware design with real software tooling and workflows.
                It took concepts that usually live in textbooks and turned them into something tangible and interactive.

          </p>

          <div className="flex flex-wrap gap-3">
            {[
              'Python', 'SystemVerilog', 'ARM Processor Design', 'Computer Architecture' , 'DRAM Design',
               'Memory Controller Design', 'DDRX', 'FPGA', 'RTL Design','Simulation & Synthesis'
               , 'UART', 'FSM', 'Pipelining', 'Xilinx/Vivado', 'CDC', 'Assembler Design', 'ISA'
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
              src="/fgpa_proc.png"
              alt="Main Project"
              width={700}
              height={900}
              className="rounded-md border border-white object-fill"
            />
            <figcaption className="mt-3 text-sm font-semibold text-[#c0c0c0]">
              Full Boat Equipped with 2 Thrusters and a Camera to Autonomously Navigate on Water and Complete Tasks
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
              src="/fpga_diagram.png"
              alt="System Block Diagram"
              width={900}
              height={900}
              className="rounded-md object-contain"
            />
          </div>

          {/* Technical Explanation */}
          <div className="text-[#f0f0f0] text-base leading-relaxed item-center">
            <p className="mb-4">
            I designed and built a custom embedded computing system centered around a 
            64-bit pipelined processor implemented in <strong>ystemVerilog on an FPGA</strong>. The processor
             used a classic <strong>5-stage architecture</strong> (Fetch, Decode, Execute, Memory, and Writeback) modeled
              after the ARMv8 and LEGv8 ISAs. I wrote the datapath from scratch in SystemVerilog, 
              integrating essential components like the register file, ALU, and control logic.
               Following a modern Von Neumann architecture, both instruction and data memory 
               were shared and stored in onboard DDR2 RAM. To interface with this memory, f
               I implemented a <strong>memory controller interface</strong> that synchronized CPU memory access
                with the DDR2 protocol. On the software side, I developed an assembler in 
                <strong>Python</strong> capable of parsing and encoding a <strong>23 instructions</strong>. The system supports 
                basic arithmetic, logic, and control operations, with program results visualized 
                using onboard LEDs for real-time feedback.
            </p>
          </div>
        </div>
      </section>

    
    </main>
  );
}