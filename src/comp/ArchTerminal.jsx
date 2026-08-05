import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ArchTerminal = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [matrixMode, setMatrixMode] = useState(false);
  
  // Archinstall wizard state for Portfolio setup
  const [installStep, setInstallStep] = useState(null); // null, 'disk', 'profile', 'security_modules', 'installing', 'done'
  const [installProgress, setInstallProgress] = useState(0);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);
  const canvasRef = useRef(null);

  // Initial welcome message tailored to Hareekshith's Portfolio & Arch ISO
  const initialOutput = [
    { type: 'sys', text: 'Arch Linux 6.12.1-arch1-1-ARCH (tty1)' },
    { type: 'sys', text: '' },
    { type: 'sys', text: 'archiso login: root (automatic login)' },
    { type: 'sys', text: '' },
    { type: 'banner', text: '===========================================================' },
    { type: 'banner', text: '        WELCOME TO HAREEEKSHITH ARCH ISO TERMINAL           ' },
    { type: 'banner', text: '     [ Defensive Security Enthusiast & Developer ]         ' },
    { type: 'banner', text: '===========================================================' },
    { type: 'sys', text: '' },
    { type: 'info', text: '* GitHub:      https://github.com/Hareekshith' },
    { type: 'info', text: '* Status:      System Secure | CTF & Blue-Team Active' },
    { type: 'sys', text: '' },
    { type: 'highlight', text: 'Type "help" for a list of portfolio-specific terminal commands.' },
    { type: 'highlight', text: 'Type "archinstall" for the guided portfolio installer.' },
    { type: 'sys', text: '' }
  ];

  const [outputs, setOutputs] = useState(initialOutput);

  // Auto-scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs, installStep, installProgress]);

  // Keep input focused
  useEffect(() => {
    if (!matrixMode) {
      inputRef.current?.focus();
    }
  }, [matrixMode, outputs]);

  // Matrix animation effect handler
  useEffect(() => {
    if (!matrixMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [matrixMode]);

  // Handle key navigation for history
  const handleKeyDown = (e) => {
    if (matrixMode) {
      if (e.key === 'Escape' || e.key === 'q' || e.key === 'Enter') {
        setMatrixMode(false);
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < cmdHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  // Arch Install wizard progression handler tailored to Portfolio
  const handleWizardStep = (val) => {
    const trimmed = val.trim();
    let nextOutputs = [...outputs, { type: 'input', text: `archinstall > ${trimmed}` }];

    if (installStep === 'disk') {
      nextOutputs.push(
        { type: 'sys', text: 'Target device initialized: /dev/nvme0n1 (Hareekshith-SecDrive)' },
        { type: 'sys', text: '' },
        { type: 'prompt_wizard', text: 'Select Portfolio Environment Profile:' },
        { type: 'info', text: '1) Defensive CyberSec Suite (Scapy, Keylogger Detector, NetSentinel)' },
        { type: 'info', text: '2) Full-Stack Web Dev Workstation (React, Vite, Node.js)' },
        { type: 'info', text: '3) All-In-One CyberSec & Developer Lab' },
        { type: 'highlight', text: 'Enter choice [1-3] (Default: 3):' }
      );
      setInstallStep('profile');
    } else if (installStep === 'profile') {
      const profiles = { '1': 'Defensive CyberSec Suite', '2': 'Full-Stack Web Workstation', '3': 'All-In-One CyberSec & Developer Lab' };
      const selectedProf = profiles[trimmed] || 'All-In-One CyberSec & Developer Lab';

      nextOutputs.push(
        { type: 'sys', text: `Profile Selected: ${selectedProf}` },
        { type: 'sys', text: '' },
        { type: 'success', text: '[!] Initializing package installation for Hareekshith Environment...' }
      );

      setInstallStep('installing');
      setOutputs(nextOutputs);
      setInputVal('');

      let prog = 0;
      const interval = setInterval(() => {
        prog += 12;
        setInstallProgress(prog);
        if (prog >= 100) {
          clearInterval(interval);
          setInstallStep('done');
          setOutputs(curr => [
            ...curr,
            { type: 'success', text: '==> [100%] Base system installed successfully!' },
            { type: 'success', text: '==> Installed: keylogger-detector, net-sentinel, scapy, react-vite...' },
            { type: 'banner', text: '=========================================================' },
            { type: 'highlight', text: '  Hareekshith Arch Linux Setup Completed Successfully!   ' },
            { type: 'banner', text: '=========================================================' },
            { type: 'info', text: 'Type "reboot" or "exit" to return to the Portfolio.' }
          ]);
        }
      }, 350);
      return;
    }

    setOutputs(nextOutputs);
    setInputVal('');
  };

  // Portfolio-customized Command Processor
  const processCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd && !installStep) return;

    if (installStep && installStep !== 'done') {
      handleWizardStep(rawCmd);
      return;
    }

    // Add to history
    setCmdHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInputVal('');

    const newOutputs = [...outputs, { type: 'input', text: `root@archiso ~ # ${cmd}` }];
    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];
    const args = parts.slice(1);

    switch (mainCmd) {
      case 'help':
        newOutputs.push(
          { type: 'info', text: 'HAREEKSHITH PORTFOLIO COMMANDS:' },
          { type: 'cmd_help', text: '  about        - Overview of Hareekshith (Defensive CyberSec & Dev)' },
          { type: 'cmd_help', text: '  projects     - List all featured CyberSec & Web projects' },
          { type: 'cmd_help', text: '  skills       - View technical stack, languages & frameworks' },
          { type: 'cmd_help', text: '  experience   - Display career timeline & education background' },
          { type: 'cmd_help', text: '  socials      - List social profiles (GitHub, LinkedIn, Email)' },
          { type: 'cmd_help', text: '  resume       - View resume clearance details' },
          { type: 'sys', text: '' },
          { type: 'info', text: 'SYSTEM COMMANDS:' },
          { type: 'cmd_help', text: '  archinstall  - Launch interactive Arch installer wizard' },
          { type: 'cmd_help', text: '  neofetch     - Display Arch system info & Hareekshith specs' },
          { type: 'cmd_help', text: '  matrix       - Trigger fullscreen matrix digital rain' },
          { type: 'cmd_help', text: '  ls / cat     - Inspect virtual directory files' },
          { type: 'cmd_help', text: '  clear        - Clear terminal screen' },
          { type: 'cmd_help', text: '  exit/reboot  - Exit terminal and return to Portfolio' }
        );
        break;

      case 'about':
      case 'bio':
        newOutputs.push(
          { type: 'highlight', text: '[ HAREEEKSHITH - DEFENSIVE SECURITY & DEVELOPER ]' },
          { type: 'info', text: 'I am a defensive security enthusiast focused on practical applications,' },
          { type: 'info', text: 'building real-world projects, analyzing vulnerabilities, and CTF competitions.' },
          { type: 'info', text: 'Active experience in keylogger detection algorithms, network packet analysis,' },
          { type: 'info', text: 'Apriori association pattern mining, and full-stack web applications.' }
        );
        break;

      case 'projects':
      case 'pr':
        newOutputs.push(
          { type: 'highlight', text: '[ HAREEEKSHITH FEATURED PROJECTS ]' },
          { type: 'info', text: '1. Keylogger Detector [CyberSec]  - Linux Heuristics keylogger detector' },
          { type: 'info', text: '2. TEED-TS-WEB       [Web Dev]    - Full-stack entry/exit logs & analytics' },
          { type: 'info', text: '3. TimeTable Generator[Web Dev]   - Balanced schedule generator app' },
          { type: 'info', text: '4. Home CS LAB       [Blue-Team]  - Lab for blue-team security analysis' },
          { type: 'info', text: '5. Prufung-AI        [AI / Web]   - AI-driven question generator system' },
          { type: 'info', text: '6. PacketSniffer     [Networks]   - Scapy network packet & payload analyzer' },
          { type: 'info', text: '7. CodeReviewer      [CyberSec]   - Python backend code vulnerability checker' },
          { type: 'info', text: '8. NetSentinel       [CyberSec]   - SYN_flood and Portscan detector tool' },
          { type: 'info', text: '9. ApriNet           [Networks]   - Apriori algorithm network pattern tool' },
          { type: 'sys', text: 'Visit GitHub: https://github.com/Hareekshith' }
        );
        break;

      case 'skills':
      case 'sk':
        newOutputs.push(
          { type: 'highlight', text: '[ TECHNICAL SKILLS & DOMAINS ]' },
          { type: 'info', text: 'Languages:       Java, Python, C, C++, JavaScript' },
          { type: 'info', text: 'Cyber Security:  Defensive Security, CTF, Heuristic Detection, Packet Analysis (Scapy)' },
          { type: 'info', text: 'Web & Tools:     React, Vite, HTML/CSS, TailwindCSS, Git, Linux (Arch/Debian)' }
        );
        break;

      case 'experience':
      case 'exp':
      case 'timeline':
      case 'tl':
        newOutputs.push(
          { type: 'highlight', text: '[ CAREER & ACADEMIC TIMELINE ]' },
          { type: 'info', text: '* Cyber Security Coursework & Practical CTF Competitions' },
          { type: 'info', text: '* Blue-Team Lab Infrastructure & Network Threat Analysis' },
          { type: 'info', text: '* Open Source Development & Linux Tooling' }
        );
        break;

      case 'socials':
      case 'soc':
      case 'contact':
        newOutputs.push(
          { type: 'highlight', text: '[ CONNECT WITH HAREEEKSHITH ]' },
          { type: 'info', text: 'GitHub:   https://github.com/Hareekshith' },
          { type: 'info', text: 'LinkedIn: https://linkedin.com/in/hareekshith' },
          { type: 'info', text: 'Email:    hareekshith@protonmail.com' }
        );
        break;

      case 'resume':
        newOutputs.push(
          { type: 'highlight', text: '[ RESUME ACCESS CLEARANCE ]' },
          { type: 'info', text: 'Redirecting to Resume page...' }
        );
        setTimeout(() => navigate('/resume'), 800);
        return;
      case 'flag':
        newOutputs.push(
          { type: 'success', text: '[+] CTF EASTER EGG FOUND!' },
          { type: 'highlight', text: 'FLAG: flag{h4r33ksh1th_arch_1s0_c1ick3d_5ucc355fully}' },
          { type: 'info', text: 'Congratulations on discovering the secret terminal challenge!' }
        );
        break;

      case 'archinstall':
        setInstallStep('disk');
        newOutputs.push(
          { type: 'banner', text: '=== Archinstall: Hareekshith Environment Installer ===' },
          { type: 'sys', text: '' },
          { type: 'prompt_wizard', text: 'Target disk partition:' },
          { type: 'info', text: '1) /dev/nvme0n1 (512GB NVMe Hareekshith-SSD)' },
          { type: 'highlight', text: 'Press Enter or type 1 to continue:' }
        );
        break;

      case 'neofetch':
      case 'fastfetch':
        newOutputs.push(
          { type: 'neofetch', text: '       /\\         root@archiso' },
          { type: 'neofetch', text: '      /  \\        ------------' },
          { type: 'neofetch', text: '     /\\   \\       OS: Arch Linux x86_64' },
          { type: 'neofetch', text: '    /      \\      Host: Hareekshith CyberSec Workstation' },
          { type: 'neofetch', text: '   /   ,,   \\     Kernel: 6.12.1-arch1-1-ARCH' },
          { type: 'neofetch', text: '  /   |  |   \\    Uptime: 3 hours, 12 mins' },
          { type: 'neofetch', text: ' /_-\'\'    \'\'-_\\   Packages: 1042' },
          { type: 'neofetch', text: '                  Shell: zsh 5.9' },
          { type: 'neofetch', text: '                  Focus: Defensive Security / CTF' },
          { type: 'neofetch', text: '                  Memory: 16384MiB / 32768MiB' }
        );
        break;

      case 'matrix':
        setMatrixMode(true);
        return;

      case 'ls':
      case 'dir':
        newOutputs.push(
          { type: 'info', text: 'about.txt  projects.txt  skills.json  resume.pdf  flag.txt  archinstall.sh' }
        );
        break;

      case 'cat':
        const filename = args[0];
        if (filename === 'flag.txt') {
          newOutputs.push({ type: 'success', text: 'flag{h4r33ksh1th_arch_1s0_c1ick3d_5ucc355fully}' });
        } else if (filename === 'about.txt') {
          newOutputs.push({ type: 'info', text: 'Hareekshith - Defensive Security Enthusiast & Software Developer.' });
        } else if (filename === 'projects.txt') {
          newOutputs.push({ type: 'info', text: 'Keylogger Detector, TEED-TS-WEB, TimeTable-Generator, Home CS LAB, NetSentinel...' });
        } else if (filename === 'skills.json') {
          newOutputs.push({ type: 'info', text: '{"languages":["Java","Python","C++"],"cybersec":["Defensive","Scapy","CTF"]}' });
        } else if (!filename) {
          newOutputs.push({ type: 'error', text: 'cat: missing filename' });
        } else {
          newOutputs.push({ type: 'error', text: `cat: ${filename}: No such file or directory` });
        }
        break;

      case 'whoami':
        newOutputs.push({ type: 'info', text: 'guest@hareekshith-portfolio' });
        break;

      case 'pwd':
        newOutputs.push({ type: 'info', text: '/root' });
        break;

      case 'clear':
        setOutputs([]);
        return;

      case 'exit':
      case 'reboot':
      case 'quit':
        newOutputs.push(
          { type: 'highlight', text: '[!] Rebooting system... Returning to Portfolio home...' }
        );
        setOutputs(newOutputs);
        setTimeout(() => {
          navigate('/');
        }, 1000);
        return;

      default:
        newOutputs.push({ type: 'error', text: `zsh: command not found: ${cmd}. Type "help" for portfolio commands.` });
        break;
    }

    setOutputs(newOutputs);
  };

  return (
    <div className="fixed inset-0 bg-black text-gray-200 font-mono z-50 flex flex-col overflow-hidden">
      {/* Terminal Top Window Bar */}
      <div className="bg-[#111113] border-b border-white/10 px-4 py-2 flex items-center justify-between z-50 flex-shrink-0 select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={() => navigate('/')} title="Exit Terminal" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs font-bold text-gray-300 tracking-wider">
            root@archiso: ~ (tty1) - Hareekshith Arch Linux Setup
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setOutputs([])}
            className="text-[11px] uppercase tracking-wider px-2 py-0.5 border border-white/20 text-gray-300 hover:text-white transition-colors"
          >
            [ CLEAR ]
          </button>
          <button 
            onClick={() => navigate('/')}
            className="text-[11px] uppercase tracking-wider px-3 py-0.5 bg-amber-accent text-black font-bold hover:bg-white transition-colors"
          >
            [ EXIT TO PORTFOLIO ◄ ]
          </button>
        </div>
      </div>

      {/* Fullscreen Matrix Mode Canvas */}
      {matrixMode && (
        <div className="relative inset-0 w-full h-full bg-black z-50 cursor-pointer" onClick={() => setMatrixMode(false)}>
          <canvas ref={canvasRef} className="block w-full h-full" />
          <div className="absolute top-4 right-4 bg-black/90 text-green-400 border border-green-500 px-3 py-1 text-xs font-mono">
            [ MATRIX MODE - CLICK OR PRESS ESC TO EXIT ]
          </div>
        </div>
      )}

      {/* Plain Black Terminal Content Screen */}
      {!matrixMode && (
        <div className="flex-grow p-4 md:p-6 overflow-y-auto font-mono text-sm space-y-1 z-30 bg-black selection:bg-amber-accent selection:text-black">
          {outputs.map((line, idx) => {
            if (line.type === 'input') {
              return <div key={idx} className="text-amber-accent font-bold mt-2">{line.text}</div>;
            } else if (line.type === 'banner') {
              return <div key={idx} className="text-cyan-400 font-bold">{line.text}</div>;
            } else if (line.type === 'highlight') {
              return <div key={idx} className="text-amber-400 font-bold">{line.text}</div>;
            } else if (line.type === 'prompt_wizard') {
              return <div key={idx} className="text-cyan-300 font-bold mt-2">{line.text}</div>;
            } else if (line.type === 'info') {
              return <div key={idx} className="text-gray-300">{line.text}</div>;
            } else if (line.type === 'cmd_help') {
              return <div key={idx} className="text-emerald-400">{line.text}</div>;
            } else if (line.type === 'neofetch') {
              return <div key={idx} className="text-sky-400 whitespace-pre">{line.text}</div>;
            } else if (line.type === 'success') {
              return <div key={idx} className="text-emerald-400 font-semibold">{line.text}</div>;
            } else if (line.type === 'error') {
              return <div key={idx} className="text-red-400">{line.text}</div>;
            }
            return <div key={idx} className="text-gray-400">{line.text}</div>;
          })}

          {/* Installation Progress Bar */}
          {installStep === 'installing' && (
            <div className="my-3 space-y-1">
              <div className="text-cyan-400 text-xs font-bold">Installing Hareekshith Environment...</div>
              <div className="w-full max-w-xl bg-gray-900 h-4 border border-cyan-500 overflow-hidden relative">
                <div 
                  className="bg-amber-accent h-full transition-all duration-300 flex items-center justify-center text-[10px] text-black font-bold"
                  style={{ width: `${installProgress}%` }}
                >
                  {installProgress}%
                </div>
              </div>
            </div>
          )}

          {/* Interactive Shell Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-amber-accent font-bold flex-shrink-0">
              {installStep && installStep !== 'done' ? 'archinstall >' : 'root@archiso ~ #'}
            </span>
            <input 
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white w-full font-mono text-sm caret-amber-accent"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          <div ref={terminalEndRef} />
        </div>
      )}
    </div>
  );
};

export default ArchTerminal;
