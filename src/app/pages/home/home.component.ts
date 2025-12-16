import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Stats counters
  currentYears = 0;
  currentProjects = 0;
  currentClients = 0;
  currentIndustries = 0;

  // Target values - Based on actual company profile
  targetYears = 5;        // Established company
  targetProjects = 50;    // 50+ projects completed
  targetClients = 30;     // 30+ satisfied clients
  targetIndustries = 6;   // Automobile, Medical, Electronics, Aerospace, Healthcare, Manufacturing

  solutions = [
    {
      icon: '🔍',
      title: 'Machine Vision Solutions',
      description: 'Advanced vision systems for automobile and medical device industries - component inspection, defect detection, OCR/OCV, robot guidance, and precision quality control.'
    },
    {
      icon: '📡',
      title: 'RF & Microwave Engineering',
      description: 'Design, testing, and manufacturing of RF & microwave systems including antenna testing, RF modules, wireless communication setups, and high-frequency automation solutions.'
    },
    {
      icon: '⚙️',
      title: 'Special Purpose Machines (SPM)',
      description: 'Customized SPM development and manufacturing for automated inspection, precision assembly, test rigs, and high-speed production setups.'
    },
    {
      icon: '🤖',
      title: 'Industrial Automation',
      description: 'End-to-end automation solutions integrating vision, robotics, and control systems for enhanced productivity and reliability.'
    },
    {
      icon: '🔬',
      title: 'Precision Inspection Systems',
      description: 'High-accuracy inspection systems for dimensional verification, surface defect detection, and quality control automation in manufacturing.'
    }
  ];

  industries = [
    { name: 'Automobile & Automotive', icon: '🚗' },
    { name: 'Medical Device Manufacturing', icon: '💊' },
    { name: 'Healthcare Equipment', icon: '🏥' },
    { name: 'Electronics & Semiconductor', icon: '💻' },
    // { name: 'Aerospace & Defense', icon: '✈️' },
    // { name: 'General Manufacturing', icon: '🏭' }
  ];

clients = [
  {
    name: 'Interface Microsystems',
    logoPath: 'assets/logos/interface-logo.png',
    logo: '🏥'
  },
  {
    name: 'Anu Industries Ltd',
    logoPath: 'assets/logos/annu-logo.jpg',
    logo: '🚗'
  }
  // {
  //   name: 'Maruti Suzuki India Ltd',
  //   logoPath: 'assets/logos/maruti-logo.png',
  //   logo: '🚗'
  // },
  // {
  //   name: 'Honda Cars India Ltd',
  //   logoPath: 'assets/logos/honda-logo.png',
  //   logo: '🚗'
  // },
  // {
  //   name: 'HCL Technologies',
  //   logoPath: 'assets/logos/hcl-logo.png',
  //   logo: '💻'
  // },
  // {
  //   name: 'Tata Consultancy Services (TCS)',
  //   logoPath: 'assets/logos/tcs-logo.png',
  //   logo: '💻'
  // },
  // {
  //   name: 'Airtel',
  //   logoPath: 'assets/logos/airtel-logo.png',
  //   logo: '📡'
  // }
];

  ngOnInit(): void {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Start counter animation when component loads
    this.animateCounters();
  }

  animateCounters() {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const counters = [
      { current: 0, target: this.targetYears, key: 'currentYears' },
      { current: 0, target: this.targetProjects, key: 'currentProjects' },
      { current: 0, target: this.targetClients, key: 'currentClients' },
      { current: 0, target: this.targetIndustries, key: 'currentIndustries' }
    ];

    counters.forEach(counter => {
      const increment = counter.target / steps;
      const timer = setInterval(() => {
        counter.current += increment;
        if (counter.current >= counter.target) {
          counter.current = counter.target;
          clearInterval(timer);
        }
        (this as any)[counter.key] = Math.floor(counter.current);
      }, interval);
    });
  }
}