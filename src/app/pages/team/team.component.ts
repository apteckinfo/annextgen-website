import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  
  leadership = [
    {
      name: 'Mr. Jitender Kumar',
      position: 'Director & Co-Founder',
      bio: 'Dynamic leader with over a decade of extensive experience in engineering, business administration, and technical project leadership. Specializes in Special Purpose Machine (SPM) Development, Industrial Automation Solutions, and strategic business growth.',
      expertise: ['SPM Development', 'Industrial Automation', 'Business Strategy', 'Project Leadership'],
      linkedin: '#',
      email: 'ajay@annextgen.com'
    },
    {
      name: 'Mr. Ajay Kumar',
      position: 'Director & Co-Founder',
      bio: 'Technology expert with more than 10 years of experience in AI-Based Machine Vision Systems, Software Development, and High-End Automation & Integration. Drives technical innovation and engineering excellence at AN NextGen.',
      expertise: ['Machine Vision', 'AI & ML', 'Software Development', 'Automation Integration'],
      linkedin: '#',
      email: 'jitender@annextgen.com'
    }
  ];

  departments = [
    {
      name: 'Engineering & SPM',
      icon: '⚙️',
      description: 'Expert engineers developing cutting-edge SPM and automation solutions for critical industrial applications'
    },
    {
      name: 'Machine Vision & AI',
      icon: '🔍',
      description: 'Specialized team creating AI-based vision inspection systems and high-precision defect detection solutions'
    },
    {
      name: 'Software Development',
      icon: '💻',
      description: 'Skilled developers building custom software, SCADA applications, and industrial control systems'
    },
    {
      name: 'Automation & Integration',
      icon: '🤖',
      description: 'Integration specialists delivering robotic automation and seamless system integration solutions'
    },
    {
      name: 'Quality Assurance',
      icon: '✓',
      description: 'Ensuring highest standards of quality, performance, and reliability in every delivered solution'
    },
    {
      name: 'Client Success & Support',
      icon: '🤝',
      description: 'Dedicated team providing 24/7 technical support and ensuring complete client satisfaction'
    }
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}