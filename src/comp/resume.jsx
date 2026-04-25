import React from 'react';

const Resume = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Download Button Row */}
      <div className="max-w-4xl w-full flex justify-end mb-6">
        <a 
          href="/ATS_Resume_Hareekshith.pdf" 
          download="Hareekshith_Resume.pdf" 
          className="btn-primary gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download PDF
        </a>
      </div>

      <article className="max-w-4xl w-full flat-card shadow-2xl rounded-sm">
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2 !text-amber-accent">Hareekshith AS</h1>
          <div className="text-sm flex flex-wrap justify-center items-center text-gray-400">
            <a href="https://github.com/hareekshith" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">github.com/hareekshith</a>
            <span className="mx-2">|</span>
            <a href="https://Hareekshith.is-a.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Hareekshith.is-a.dev</a>
            <span className="mx-2">|</span>
            <a href="mailto:hareekshith@gmail.com" className="hover:text-white transition-colors">hareekshith@gmail.com</a>
            <span className="mx-2">|</span>
            <a href="https://linkedin.com/in/Hareekshith-tzzs3118" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin.com/in/Hareekshith-tzzs3118</a>
          </div>
        </header>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Education</h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-end">
              <span className="font-bold text-white">Vellore Institute of Technology</span>
              <span className="text-sm font-semibold text-gray-400">Chennai, India</span>
            </div>
            <div className="flex justify-between items-end text-soft-white italic">
              <span>Bachelor of Technology (B.Tech) in Cyber Security</span>
              <span className="text-sm">Aug 2024–Jul 2028</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-white">The PSBB Millennium School</span>
              <span className="text-sm font-semibold text-gray-400">Cuddalore, India</span>
            </div>
            <div className="flex justify-between items-end text-soft-white italic">
              <span>Higher and Senior Secondary Education – PCM + CS</span>
              <span className="text-sm">June 2018-March 2024</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Experience</h2>
          
          <div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-white">Cyber-Security Intern</span>
              <span className="text-sm font-semibold text-gray-400">Feb 2026 – March 2026</span>
            </div>
            <div className="flex justify-between items-end text-soft-white italic mb-2">
              <span>Elevate Labs, India</span>
              <span className="text-sm">Online</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>Completed intensive hands-on training in nmap, wireshark, ufw and openvas.</li>
              <li>Gained practical exposure to network security concepts.</li>
              <li>Applied the skills learnt into building a project named NetSentinel.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Projects</h2>
          
          <div className="mb-4">
            <div className="font-bold mb-1 text-white">Home CyberSecurity Lab <span className="font-normal text-gray-400 italic">| Docker, Debian Netinst, Virtual Box</span></div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>Built a resource friendly product for security enthusiasts, which gives them a practical exposure on endpoint security.</li>
              <li>The project is made possible using NetInst Debian ISO (run as VM), Kali-rolling and Wazuh components docker containers.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="font-bold mb-1 text-white">NetSentinel <span className="font-normal text-gray-400 italic">| Scapy, Rich, Python</span></div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>A lightweight project which captures packets for 60 seconds and detects network anomalies like SYN_Flood and Port Scanning.</li>
              <li>The project was made using Scapy (Capture network packets), Rich (Displays data in a Terminal UI) and Python.</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-1 text-white">Keylogger Detector <span className="font-normal text-gray-400 italic">| CSV, Shell, Pandas, Python</span></div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>A heuristic based project which detects active keyloggers in a Linux distribution.</li>
              <li>The project was built using Shell Scripts (Get the resource data of the processes), Pandas (Classify the processes based on the heuristics calculation).</li>
              <li>A simple and a quick program, which gives us the results within milliseconds.</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Certifications</h2>
          
          <div className="flex justify-between items-end">
            <div>
              <span className="font-bold text-white">NPTEL Cyber Security and Privacy</span>
              <br />
              <span className="text-soft-white italic">IIT Madras</span>
            </div>
            <span className="font-bold text-gray-400 text-sm">Oct 2025</span>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Technical Skills</h2>
          <div className="text-[0.95rem] space-y-1.5 text-soft-white">
            <div><span className="font-bold text-white">Languages:</span> C/C++, Python, Java, HTML/CSS, Javascript</div>
            <div><span className="font-bold text-white">Database:</span> MySQL, PostgreSQL and Oracle DB</div>
            <div><span className="font-bold text-white">Frameworks &amp; Libraries:</span> Next.js, React, Chart.js, Tailwind CSS, Node.js, Flask</div>
            <div><span className="font-bold text-white">Tools:</span> Wireshark, Cisco Packet Tracer, Vercel, Render, MongoDB</div>
          </div>
        </section>

      </article>
    </div>
  );
};

export default Resume;
