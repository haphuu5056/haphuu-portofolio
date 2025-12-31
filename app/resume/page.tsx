import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Resume",
  description: "Professional resume and experience",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-20">
        {/* PROFESSIONAL EXPERIENCE */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-3">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Front-end Developer
              </h3>
              <span className="text-sm text-muted-foreground">
                February 2024 – December 2024
              </span>
            </div>
            <p className="text-accent font-medium mb-2">
              Spondias, Mogadishu, Somalia
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>
                Developed responsive and dynamic web applications using
                React.js, Next.js, HTML, CSS, and JavaScript enhancing user
                experience.
              </li>
              <li>
                Implemented efficient styling techniques to ensure clean and
                maintainable code.
              </li>
              <li>
                Collaborated closely with backend teams to integrate RESTful
                APIs, ensuring smooth data flow between frontend and backend
                systems.
              </li>
              <li>
                Collaborated with team members to troubleshoot and optimize
                existing code for performance improvements. Contributed to
                feature development by assisting in user interface design and
                incorporating feedback from users and stakeholders.
              </li>
            </ul>
          </div>
         <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Web Developer mentor
              </h3>
              <span className="text-sm text-muted-foreground">
                May 2025 – Present
              </span>
            </div>
            <p className="text-accent font-medium mb-2">
              Yoolhub, Mogadishu, Somalia
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>
                Mentored aspiring web developers in mastering front-end
                technologies such as HTML, CSS, JavaScript, and React.js.
              </li>
              <li>
                Provided guidance on best practices for responsive design,
                accessibility, and performance optimization.
              </li>
              <li>
                Assisted mentees in building real-world projects, offering
                constructive feedback and code reviews to enhance their skills.
              </li>
              <li>
                Conducted workshops and coding sessions to foster a collaborative
                learning environment.
              </li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-3">
            SKILLS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Technical Skills
              </h3>
              <p className="text-muted-foreground">
                React.js, Next.js, JavaScript, HTML5, CSS3, Git, RESTful APIs,
                Tailwind CSS.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Industry-Specific Skills
              </h3>
              <p className="text-muted-foreground">
                Responsive web design, performance optimization, data analysis
                using tools like Google Analytics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Soft Skills
              </h3>
              <p className="text-muted-foreground">
                Problem-solving, Communication, Time Management, Adaptability,
                Teamwork
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-3">
            EDUCATION
          </h2>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                High school diploma secondary certificate
              </h3>
              <span className="text-sm text-muted-foreground">2019</span>
            </div>
            <p className="text-accent font-medium mb-2">
              Al-Nahda, Mogadishu, Somalia
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>
                Completed secondary certificate with high academic achievements
              </li>
              <li>Results-oriented education with focus on success</li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                BSc. Computer Applications
              </h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-accent font-medium mb-2">
              Jamhuriya University of Science & Technology (JUST), Mogadishu,
              Somalia
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>
                Graduated with a Bachelor's degree in computer Applications.
              </li>
              <li>Achieved a GPA of 3.6 on a 4.0 scale</li>
            </ul>
          </div>
        </section>

        {/* COURSES */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Certificates
          </h2>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Strategic leadership development
              </h3>
              <span className="text-sm text-muted-foreground">
                January 2024
              </span>
            </div>
            <p className="text-accent font-medium mb-2">
              YALI RLA EA ALUMNI CHAPTER OF SOMALIA, Mogadishu, Somalia
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">SQL</h3>
              <span className="text-sm text-muted-foreground">
                January 2024
              </span>
            </div>
            <p className="text-accent font-medium mb-2">
              LEARNOMATE TECHNOLOGIES
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Data analyst
              </h3>
              <span className="text-sm text-muted-foreground">
                January 2024
              </span>
            </div>
            <p className="text-accent font-medium mb-2">
              LEARNOMATE TECHNOLOGIES
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Computer Certificate
              </h3>
              <span className="text-sm text-muted-foreground">
                July 2019 – February 2020
              </span>
            </div>
            <p className="text-accent font-medium mb-2">SIITAM</p>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-3">
            LANGUAGES
          </h2>
          <ul className="text-muted-foreground space-y-2">
            <li>SOMALI</li>
            <li>ENGLISH</li>
            <li>ARABIC</li>
          </ul>
        </section>

        {/* INTERESTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-3">
            INTRESTS
          </h2>
          <ul className="text-muted-foreground space-y-2 list-disc list-inside">
            <li>Learning about different cultures and global perspectives.</li>
            <li>Staying up to date with tech trends and advancements.</li>
            <li>Environmental sustainability and community outreach.</li>
          </ul>
        </section>
        {/* REFERENCES */}
        
        <Footer />
      </div>
    </main>
  );
}
