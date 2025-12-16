import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

interface Industry {
  icon: string;
  name: string;
  description: string;
  applications: string[];
  stats?: {
    clients: string;
    projects: string;
  };
}

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit, OnDestroy {
  
  industries: Industry[] = [
    {
      icon: '🚗',
      name: 'Automotive',
      description: 'Precision manufacturing solutions for automotive assembly and component production. We deliver cutting-edge automation systems that ensure quality, efficiency, and compliance.',
      applications: [
        'Assembly line automation & robotics',
        'Automated part inspection systems',
        'Real-time defect detection',
        'Process monitoring & optimization',
        'Quality control automation'
      ],
      stats: {
        clients: '50+',
        projects: '200+'
      }
    },
    {
      icon: '💊',
      name: 'Pharmaceutical',
      description: 'GMP-compliant solutions for drug manufacturing, quality control, and regulatory compliance. Our systems ensure the highest standards of safety and quality.',
      applications: [
        'Batch record management systems',
        'Automated quality inspection',
        'Serialization & track-trace solutions',
        'Clean room monitoring',
        'Compliance reporting automation'
      ],
      stats: {
        clients: '10+',
        projects: '120+'
      }
    },
    {
      icon: '💻',
      name: 'Electronics',
      description: 'High-precision solutions for electronics manufacturing and PCB assembly. Advanced vision systems for microscopic defect detection and component verification.',
      applications: [
        'Automated PCB inspection',
        'Component placement verification',
        'Solder joint analysis',
        'Product testing automation',
        'IC & chip inspection'
      ],
      stats: {
        clients: '40+',
        projects: '150+'
      }
    },
    {
      icon: '🏥',
      name: 'Medical Devices',
      description: 'Precision inspection and quality assurance solutions for medical device manufacturing. Ensuring compliance with stringent healthcare industry standards.',
      applications: [
        'Dimensional verification systems',
        'Surface defect detection',
        'Sterile packaging inspection',
        'Component traceability',
        'Regulatory compliance automation'
      ],
      stats: {
        clients: '25+',
        projects: '90+'
      }
    },
    // {
    //   icon: '🍽️',
    //   name: 'Food & Beverage',
    //   description: 'Hygienic solutions ensuring food safety and quality standards. Advanced inspection systems for contamination detection and quality assurance.',
    //   applications: [
    //     'Foreign object detection',
    //     'Fill level inspection',
    //     'Label & date code verification',
    //     'Packaging integrity checks',
    //     'Quality grading systems'
    //   ],
    //   stats: {
    //     clients: '35+',
    //     projects: '110+'
    //   }
    // },
    // {
    //   icon: '📦',
    //   name: 'Packaging',
    //   description: 'Automated solutions for packaging quality and efficiency. High-speed inspection systems for print quality, seal integrity, and barcode validation.',
    //   applications: [
    //     'Print quality inspection',
    //     'Seal integrity testing',
    //     'Carton assembly verification',
    //     'Barcode & QR code validation',
    //     'Label placement verification'
    //   ],
    //   stats: {
    //     clients: '45+',
    //     projects: '160+'
    //   }
    // },
    // {
    //   icon: '⚗️',
    //   name: 'Chemicals',
    //   description: 'Process control and safety solutions for chemical manufacturing. Robust automation systems designed for hazardous environments.',
    //   applications: [
    //     'Batch processing control',
    //     'Safety monitoring systems',
    //     'Quality assurance automation',
    //     'Environmental compliance',
    //     'Inventory management'
    //   ],
    //   stats: {
    //     clients: '20+',
    //     projects: '70+'
    //   }
    // },
    // {
    //   icon: '✈️',
    //   name: 'Aerospace & Defense',
    //   description: 'High-precision inspection and quality control for aerospace components. Meeting the most stringent quality and traceability requirements.',
    //   applications: [
    //     'Component dimensional inspection',
    //     'Surface defect analysis',
    //     'Material verification',
    //     'Assembly validation',
    //     'Complete traceability systems'
    //   ],
    //   stats: {
    //     clients: '15+',
    //     projects: '60+'
    //   }
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