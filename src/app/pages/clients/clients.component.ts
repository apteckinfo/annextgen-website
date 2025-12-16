import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

interface Client {
  name: string;
  industry: string;
  logo: string;
  logoPath?: string; // Path to actual logo image
  location: string;
  since?: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

interface CaseStudy {
  client: string;
  industry: string;
  icon: string;
  challenge: string;
  solution: string;
  results: string[];
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {
  
clients: Client[] = [
  // Featured Clients
  // {
  //   name: 'Hindustan Syringes & Medical Devices (HMD)',
  //   industry: 'Medical Devices',
  //   logo: '🏥',
  //   logoPath: 'assets/logos/hmd-logo.png',
  //   location: 'Faridabad, Haryana',
  //   since: '2020'
  // },
  {
    name: 'Anu Industries Ltd',
    industry: 'Automotive',
    logo: '🚗',
    logoPath: 'assets/logos/annu-logo.jpg',
    location: 'Manesar, Haryana',
    since: '2019'
  },

  // Automotive Ecosystem (Bio Referenced)
  {
    name: 'Interface Microsystems',
    industry: 'Automotive',
    logo: '🚗',
    logoPath: 'assets/logos/interface-logo.png',
    location: 'Manesar, Haryana',
    since: '2018'
  },
  // {
  //   name: 'Honda Cars India Ltd',
  //   industry: 'Automotive',
  //   logo: '🚗',
  //   logoPath: 'assets/logos/honda-logo.png',
  //   location: 'Greater Noida, India',
  //   since: '2019'
  // },

  // // IT & Technology Ecosystem (Bio Referenced)
  // {
  //   name: 'HCL Technologies',
  //   industry: 'Information Technology',
  //   logo: '💻',
  //   logoPath: 'assets/logos/hcl-logo.png',
  //   location: 'Gurugram, Haryana',
  //   since: '2020'
  // },
  // {
  //   name: 'Tata Consultancy Services (TCS)',
  //   industry: 'Information Technology',
  //   logo: '💻',
  //   logoPath: 'assets/logos/tcs-logo.png',
  //   location: 'Gurugram, Haryana',
  //   since: '2020'
  // },
  // {
  //   name: 'Airtel',
  //   industry: 'Telecommunications',
  //   logo: '📡',
  //   logoPath: 'assets/logos/airtel-logo.png',
  //   location: 'Gurugram, Haryana',
  //   since: '2020'
  // }
];

testimonials: Testimonial[] = [
  {
    name: 'Anu Industries Ltd',
    position: '',
    company: 'Anu Industries Ltd',
    text: 'The automation and inspection solution developed by AN NextGen Innovations improved dimensional accuracy and quality consistency across our production lines. The system performance and technical support met automotive-grade expectations.',
    rating: 5
  },
  // {
  //   name: 'SONA BLW Precision Forgings',
  //   position: '',
  //   company: 'SONA BLW Precision Forgings',
  //   text: 'The automation and inspection solution developed by AN NextGen Innovations improved dimensional accuracy and quality consistency across our production lines. The system performance and technical support met automotive-grade expectations.',
  //   rating: 5
  // },
  {
    name: 'Interface Microsystems',
    position: '',
    company: 'Interface Microsystems',
    text: 'The SCADA and automation solutions implemented by AN NextGen Innovations provided improved production visibility and better operational control. Real-time monitoring helped reduce downtime and improve shift-wise efficiency.',
    rating: 5
  }
  // {
  //   name: 'Honda Cars India Ltd',
  //   position: '',
  //   company: 'Honda Cars India Ltd',
  //   text: 'AN NextGen Innovations delivered customized automation and inspection solutions aligned with automotive manufacturing standards. Their ability to integrate software, inspection, and control systems added measurable value to operations.',
  //   rating: 5
  // }
];

  caseStudies: CaseStudy[] = [
    {
      client: 'Hindustan Syringes & Medical Devices (HMD)',
      industry: 'Medical Devices',
      icon: '🏥',
      challenge: 'Manual visual inspection of syringes and medical devices was time-consuming, inconsistent, and unable to detect microscopic defects. HMD needed an FDA-compliant automated solution capable of high-speed inspection while maintaining 100% traceability.',
      solution: 'AN NextGen developed a custom AI-based machine vision inspection system with multi-camera 360-degree inspection, real-time defect detection, automated sorting, and comprehensive quality documentation. Integrated robotic handling for seamless production flow.',
      results: [
        '99.9% defect detection accuracy achieved',
        '60% reduction in inspection time',
        'Zero customer complaints post-implementation',
        'Complete FDA audit-ready documentation'
      ]
    },
    {
      client: 'SONA BLW Precision Forgings',
      industry: 'Automotive',
      icon: '🚗',
      challenge: 'Precision automotive components required dimensional verification and surface inspection at high volumes. Manual inspection couldn\'t maintain consistency across shifts, and rejection rates were impacting delivery schedules.',
      solution: 'Designed and deployed a Special Purpose Machine (SPM) with integrated high-precision vision system for dimensional verification, surface defect detection, and automated pass/fail sorting. Custom software development for data analytics and reporting.',
      results: [
        '45% improvement in quality consistency',
        'Zero dimensional defects post-installation',
        '50% reduction in inspection cycle time',
        'Real-time production monitoring & analytics'
      ]
    },
    // {
    //   client: 'Leading Pharmaceutical Company',
    //   industry: 'Pharmaceutical',
    //   icon: '💊',
    //   challenge: 'GMP compliance requirements demanded automated batch record management and 100% inspection of tablets/capsules. Manual processes were error-prone and couldn\'t meet increasing production demands while maintaining regulatory compliance.',
    //   solution: 'Implemented comprehensive industrial automation solution with AI-based vision inspection, automated batch documentation, SCADA integration for real-time monitoring, and complete traceability system meeting GMP standards.',
    //   results: [
    //     '95% reduction in quality deviations',
    //     'Full GMP compliance achieved',
    //     '₹2Cr annual savings from reduced waste',
    //     '40% increase in production throughput'
    //   ]
    // },
    {
      client: 'Maruti Suzuki Vendor Partner',
      industry: 'Automotive',
      icon: '🚗',
      challenge: 'Multiple assembly lines lacked integrated monitoring and control. Bottlenecks were difficult to identify, predictive maintenance was reactive, and overall equipment effectiveness (OEE) was suboptimal.',
      solution: 'Deployed comprehensive SCADA system with real-time production monitoring, automated quality checks at each station, predictive maintenance algorithms, and custom software for OEE analytics and optimization.',
      results: [
        '35% reduction in unplanned downtime',
        'Complete production transparency achieved',
        '₹1.8Cr annual maintenance savings',
        '28% improvement in OEE'
      ]
    },
    // {
    //   client: 'Medical Equipment Manufacturer',
    //   industry: 'Medical Devices',
    //   icon: '🏥',
    //   challenge: 'Complex medical device assembly required precision dimensional verification, surface inspection, and functionality testing. Manual inspection couldn\'t ensure consistency, leading to field failures and warranty claims.',
    //   solution: 'Developed custom Special Purpose Machine with integrated multi-sensor inspection (vision + dimensional gauging), automated functionality testing, and comprehensive quality documentation with traceability.',
    //   results: [
    //     '99.8% first-pass yield achieved',
    //     '70% reduction in warranty claims',
    //     '55% faster assembly & inspection process',
    //     'ROI achieved in 7 months'
    //   ]
    // },
    // {
    //   client: 'Precision Auto Components Supplier',
    //   industry: 'Automotive',
    //   icon: '🚗',
    //   challenge: 'Automotive tier-1 customer demanded 100% traceability and zero-defect delivery. Existing systems couldn\'t provide real-time quality data or handle high-speed inspection requirements.',
    //   solution: 'Implemented end-to-end automation with high-speed machine vision inspection, barcode/data matrix traceability, automated quality gates, robotic integration, and customer portal for real-time quality data access.',
    //   results: [
    //     '100% traceability achieved',
    //     'Zero customer rejections post-implementation',
    //     'Inspection speed: 2000 parts/hour',
    //     'Customer quality rating improved to A+'
    //   ]
    // }
  ];

  ngOnInit(): void {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 0
    });

    // Refresh AOS on component load
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    // Scroll to top when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    // Clean up AOS when component is destroyed
    AOS.refresh();
  }
}