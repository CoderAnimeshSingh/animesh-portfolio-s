
import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience building
              web applications. I love turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge through blog posts and
              community talks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Based in India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-semibold">Education</h4>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Bachelor's in Computer Science</p>
                <p className="text-muted-foreground">University Name • 2020-2024</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-semibold">Experience</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Full Stack Developer</p>
                  <p className="text-muted-foreground">Company Name • 2022-Present</p>
                </div>
                <div>
                  <p className="font-medium">Frontend Developer Intern</p>
                  <p className="text-muted-foreground">Startup Name • 2021-2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
