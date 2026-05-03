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
          [ EXTRACT_DOSSIER ]
        </a>
      </div>

      <article className="max-w-5xl w-full flat-card shadow-2xl relative cyber-glow-hover">

        {/* Header */}
        <header className="text-center mb-8 pt-4">
          <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/10 flex items-center px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs font-mono text-gray-500 tracking-widest">/bin/bash - Hareekshith</div>
          </div>
          <h1 className="text-3xl font-mono uppercase tracking-wide mb-2 mt-4 !text-amber-accent">Hareekshith AS</h1>
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
          
        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Objective</h2>
          <div className="mb-4">
            <p>I am a sophomore Engineering student in B.Tech specializing in Cyber-Security, with a focus on applying knowledge through
innovative projects. I possess strong programming skills, including hands-on experience in network scanning and SIEM analysis.
With introductory experience in Cyber-Security projects, I aspire to contribute my skills in an exciting entry-level role while
continuing to grow professionally.</p>
          </div>
        </section>


        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Technical Skills</h2>
          <div className="text-[0.95rem] space-y-1.5 text-soft-white">
            <div><span className="font-bold text-white">Languages:</span> C/C++, Python, Java</div>
            <div><span className="font-bold text-white">Security &amp; Networks:</span> Nmap, Wireshark, OpenVAS, UFW, iptables, Scapy</div>
            <div><span className="font-bold text-white">Frameworks &amp; Libraries:</span> Next.js, React, Node.js, Flask</div>
            <div><span className="font-bold text-white">Platforms:</span> Docker, Cisco Packet Tracer, Vercel, Render, Git, VirtualBox</div>
            <div><span className="font-bold text-white">Database:</span> MySQL, PostgreSQL, MongoDB</div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Internship</h2>

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
              <li>Performed network scanning and vulnerability assessment using Nmap, Wireshark, UFW and OpenVAS.</li>
              <li>Configured firewall rules using UFW to secure Linux environments.</li>
              <li>Developed "NetSentinel", which detects network anomalies like SYN_Flood and Port Scanning, using packet inspection.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Projects</h2>

          <div className="mb-4">
            <div className="font-bold mb-1 text-white"><a href="https://github.com/hareekshith/Home_CS_lab" target="_blank" rel="noopener noreferrer">Home CyberSecurity Lab</a> <span className="font-normal text-gray-400 italic">| Docker, Debian Netinst, Virtual Box</span></div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>Designed a lightweight CyberSecurity Lab using Docker and Virtualization tech with tools of Kali Linux, Debian and Wazuh for endpoint security monitoring.</li>
              <li>Enables real-time log collection and threat detection within an isolated network environment.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="font-bold mb-1 text-white"><a href="https://github.com/hareekshith/NetSentinel" target="_blank" rel="noopener noreferrer">NetSentinel</a> <span className="font-normal text-gray-400 italic">| Scapy, Rich, Python</span></div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>Developed a real-time network monitoring tool that detects anomalies such as SYN Floods and Port Scans using Scapy.</li>
              <li>Built a terminal-based alert dashboard using Rich for structured visualization of network anomalies, analysing over 10000 packets in a duration of 60 seconds.</li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-1 text-white"><a href="https://github.com/hareekshith/Keylogger-Detector" target="_blank" rel="noopener noreferrer">Keylogger Detector</a> <span className="font-normal text-gray-400 italic">| CSV, Shell, Pandas, Python</span></div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>Built a heuristic-based detection system for identifying keyloggers in Linux using process behavior analysis.</li>
              <li>Collected system-level data via shell scripts and analyzed it using Pandas to flag suspicious activity.</li>
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

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Education</h2>

          <div className="mb-4">
            <div className="flex justify-between items-end">
              <span className="font-bold text-white">Vellore Institute of Technology</span>
              <span className="text-sm font-semibold text-gray-400">Chennai, India</span>
            </div>
            <div className="flex justify-between items-end text-soft-white italic">
              <span>Pursuing 4th Semester Computer Science - Cyber Security
                <span className="text-gray-400 text-[0.85rem] ml-2">(CGPA - 8.56 / 3rd semester)</span>
              </span>
              <span className="text-sm">Aug 2024-Jul 2028</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-white">The PSBB Millennium School</span>
              <span className="text-sm font-semibold text-gray-400">Cuddalore, India</span>
            </div>
            <div className="flex justify-between items-end text-soft-white italic">
              <span>
                Higher and Senior Secondary Education - PCM + CS
                <span className="text-gray-400 text-[0.85rem] ml-2">(12th - 88.6%)</span>
              </span>
              <span className="text-sm">June 2018-March 2024</span>
            </div>
          </div>
        </section>
        
        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-[1.15rem] font-bold uppercase border-b-[1.5px] border-amber-accent/40 mb-3 pb-1 !text-amber-accent">Extra-Curricular Activities</h2>
          <div className="mb-4">
            <div className="font-bold mb-1 text-white">ACM Student Chapter (ACMSC), VIT Chennai</div>
            <ul className="list-disc pl-5 space-y-1 text-[0.95rem] text-soft-white">
              <li>Coordinated “Server-Surfers” (Kaspersky KIPS) and a follow-up CTF, contributing to challenge design and execution.</li>
              <li>Maintain the student chapter’s official website, ensuring regular updates and reliability.</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Resume;
