import React from 'react';

const skillsData = [
  {
    title: 'Code',
    paragraph: 'Programming is my jam—these tools are my partners in code crimes!',
    accent: 'Git, Github, Neovim',
    images: [
      { src: '/img/git.svg', alt: 'git' },
      { src: '/img/gh.svg', alt: 'gh' },
      { src: '/img/nvim.svg', alt: 'nvim', fullWidth: true },
    ],
  },
  {
    title: 'Programming',
    paragraph: 'Coding is dangerously addictive—catch me doing it 25/8.',
    accent: 'C++, Java, Python',
    images: [
      { src: '/img/cpp.svg', alt: 'cpp' },
      { src: '/img/java.svg', alt: 'java' },
      { src: '/img/python.svg', alt: 'py', fullWidth: true },
    ],
  },
  {
    title: 'Frontend',
    paragraph: "Website looks? Powered by these! Still leveling up, but hey, we all start somewhere.",
    accent: 'HTML, CSS, JS',
    images: [
      { src: '/img/html.svg', alt: 'html' },
      { src: '/img/css.svg', alt: 'css' },
      { src: '/img/node.svg', alt: 'js', fullWidth: true },
    ],
  },
  {
    title: 'Backend',
    paragraph: "Making everything work behind the scenes—because vibes alone don’t run a website.",
    accent: 'Django, Flask',
    images: [
      { src: '/img/dj.svg', alt: 'dj' },
      { src: '/img/flask.svg', alt: 'flask' },
      { src: '/img/node.svg', alt: 'node', fullWidth: true }, 
    ],
  },
  {
    title: 'Database',
    paragraph: "Living for the data game—organizing chaos, one query at a time.",
    accent: 'MongoDB, MySQL, PostgreSQL',
    images: [
      { src: '/img/mongo.svg', alt: 'md' },
      { src: '/img/mysql.svg', alt: 'ms' },
      { src: '/img/postgresql.svg', alt: 'psql', fullWidth: true },
    ],
  },
  {
    title: 'Design',
    paragraph: "Putting heart, soul, and a dash of DIY into every pixel. That’s why I’m obsessed!",
    accent: 'Canva, Inkspace, Figma',
    images: [
      { src: '/img/canva.svg', alt: 'canv' },
      { src: '/img/inkscape.svg', alt: 'inks' },
      { src: '/img/figma.svg', alt: 'fig', fullWidth: true },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-16">
        <h1 className="text-4xl font-bold text-white">Experience</h1>
        <div className="flex-grow h-[1px] bg-white/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-start text-left group">
            
            {/* Icons Row */}
            <div className="flex gap-6 mb-6 h-12 items-center">
              {skill.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img.src} 
                  alt={img.alt} 
                  className="h-10 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>

            <h3 className="text-xl font-title text-white mb-3 border-l-2 border-amber-accent pl-4">
              {skill.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4 pl-4 border-l-2 border-transparent">
              {skill.paragraph}
            </p>

            <div className="pl-4">
              <span className="text-amber-accent text-xs font-mono uppercase tracking-widest">
                {skill.accent}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
