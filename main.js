// Portfolio Content - 4 Sections with 10 Nepali Reviews
const reviews = [
  {
    text: "Kshitiz's work on Zynora AI is exceptional. The agent handles complex tasks with remarkable accuracy and speed. He's a true innovator in the AI space. Highly recommended!",
    author: "Uttam Mishra",
    role: "Tech Lead, Innovation Hub"
  },
  {
    text: "Working with Kshitiz was fantastic. He delivered our project on time with clean code, great communication, and a genuine commitment to quality and excellence.",
    author: "Aarohi Sharma",
    role: "Product Manager, Digital Solutions"
  },
  {
    text: "Kshitiz combines technical excellence with creative problem-solving. His AI solutions are both powerful and user-friendly. Highly recommended for any project!",
    author: "Ramesh Pradhan",
    role: "Startup Founder, Tech Ventures"
  },
  {
    text: "The websites Kshitiz built for us are stunning and perform beautifully. His attention to detail and responsiveness made the entire process smooth and enjoyable.",
    author: "Priya Nair",
    role: "Design Director, Creative Agency"
  },
  {
    text: "Kshitiz delivered our AI chatbot project beyond expectations. His expertise in NLP and web integration is outstanding. We'd definitely work with him again!",
    author: "Bikram Rai",
    role: "CEO, TechNepal Solutions"
  },
  {
    text: "His Zynora AI agent has revolutionized our customer support. The automation is seamless and the interface is intuitive. Fantastic work, truly exceptional!",
    author: "Anita Thapa",
    role: "Operations Manager, E-Commerce Plus"
  },
  {
    text: "I was impressed by Kshitiz's problem-solving approach and his ability to explain complex AI concepts simply. A true professional and a pleasure to work with!",
    author: "Naresh Poudel",
    role: "Business Analyst, Corporate Services"
  },
  {
    text: "The website he built for our startup perfectly captures our brand. It's fast, responsive, and beautifully designed. Highly talented developer!",
    author: "Deepika Baniya",
    role: "Marketing Executive, Startup Hub"
  },
  {
    text: "Kshitiz's AI solutions have increased our productivity by 60%. His technical knowledge combined with business understanding is rare. Highly commend him!",
    author: "Suresh Khatri",
    role: "Operations Director, Business Solutions"
  },
  {
    text: "From concept to deployment, Kshitiz handled everything with professionalism and expertise. His Zynora AI has become integral to our workflow. Exceptional!",
    author: "Rashmi Gupta",
    role: "Project Coordinator, Enterprise Tech"
  }
];

const tabContent = {
  about: `
    <section>
      <h3>About Me</h3>
      <p>
        Hello! I'm <strong>Kshitiz Mishra</strong>, an <strong>AI Agent Developer</strong> and <strong>Website Developer</strong> based in Nepal.
      </p>
      <p>
        I specialize in building intelligent automation solutions and modern web applications. My expertise spans creating AI-powered agents, 
        developing responsive websites, and delivering seamless digital experiences. I'm passionate about solving real-world problems through 
        technology and innovation.
      </p>
      <p>
        With a focus on quality, performance, and user experience, I create solutions that are not just functional but also beautiful and scalable. 
        I'm committed to staying ahead of technological trends and continuously improving my craft.
      </p>
      <div class="skills">
        <span>AI Agents</span>
        <span>LangChain</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Python</span>
        <span>REST APIs</span>
        <span>NLP</span>
        <span>Web Development</span>
        <span>UI/UX Design</span>
      </div>
    </section>
  `,
  projects: `
    <section>
      <h3>My Projects</h3>
      <div class="project-list">
        <div class="project-item">
          <strong>🤖 Zynora AI</strong><br/>
          A powerful AI agent built with LangChain and advanced NLP. Zynora provides intelligent conversations, task automation, 
          and data-driven insights. This is my flagship product showcasing cutting-edge AI capabilities.
        </div>
        <div class="project-item">
          <strong>💼 Portfolio Platform</strong><br/>
          A modern, responsive portfolio website with interactive features and seamless navigation. Built to showcase professional work 
          and client projects with an elegant design.
        </div>
        <div class="project-item">
          <strong>🌤️ Weather Dashboard</strong><br/>
          Real-time weather application with live data, responsive design, and intuitive user interface. Fetches data from multiple APIs 
          and displays it beautifully across all devices.
        </div>
        <div class="project-item">
          <strong>✅ TaskManager Pro</strong><br/>
          An AI-enhanced task management tool with smart scheduling, reminders, and productivity insights. Built with React and Node.js 
          for optimal performance.
        </div>
        <div class="project-item">
          <strong>🎨 Business Landing Pages</strong><br/>
          Custom-designed landing pages for startups and enterprises. Features include analytics integration, SEO optimization, 
          and conversion-focused design patterns.
        </div>
      </div>
    </section>
  `,
  reviews: `
    <section>
      <h3>Client Reviews</h3>
      <div class="review-container">
        ${reviews.map(review => `
          <div class="review-item">
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">${review.author}</p>
            <p class="review-role">${review.role}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `,
  contact: `
    <section>
      <h3>Contact Me</h3>
      <p>
        Let's connect! Reach out via email or Instagram. I'm always open to collaborations, opportunities, and meaningful conversations.
      </p>
      <ul class="contact-list">
        <li class="contact-item">
          <strong>📧 Email</strong>
          <span>kshitizmishra528@gmail.com</span>
        </li>
        <li class="contact-item">
          <strong>📱 Instagram</strong>
          <span>@kshitiz.god</span>
        </li>
      </ul>
      <div class="contact-links">
        <a href="mailto:kshitizmishra528@gmail.com" class="contact-btn">
          📧 Send Email
        </a>
        <a href="https://instagram.com/kshitiz.god" target="_blank" rel="noopener" class="contact-btn">
          📱 Visit Instagram
        </a>
      </div>
    </section>
  `
};

// Show tab and update active state
function showTab(name) {
  const buttons = document.querySelectorAll('.tabs button');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === name) {
      btn.classList.add('active');
    }
  });
  document.getElementById('tab-content').innerHTML = tabContent[name];
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Set default tab
  showTab('about');
  
  // Add click handlers to all tab buttons
  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
  });
});