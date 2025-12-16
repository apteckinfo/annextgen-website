import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit, OnDestroy {
  solutions = [
    {
      image: 'assets/images/vision-inspection.jpg',
      emoji: '🔍', // Add this
      title: 'Vision Inspection Solutions',
      description: 'Advanced machine vision systems for automated quality control and defect detection. Our AI-powered inspection solutions ensure 99.9% accuracy in identifying defects, reducing waste and improving overall product quality.',
      features: [
        'High-speed defect detection (up to 1000 parts/min)',
        'Real-time quality monitoring & reporting',
        'AI-powered deep learning image analysis',
        '99.9% accuracy rate with zero false negatives',
        'Seamless integration with existing production lines'
      ],
      benefits: [
        'Reduced manual inspection costs by 80%',
        'Improved product quality consistency',
        'Faster production cycles with minimal downtime',
        'Comprehensive quality data & analytics',
        'Enhanced customer satisfaction'
      ],
      tags: ['AI-Powered', 'Real-Time', 'High Accuracy', 'Scalable'], // Add this
      stat1Value: '99.9%', // Add this
      stat1Label: 'Accuracy', // Add this
      stat2Value: '80%', // Add this
      stat2Label: 'Cost Reduction' // Add this
    },
    {
      image: 'assets/images/vision-detection.jpg',
      emoji: '🎯',
      title: 'Vision Detection Solutions',
      description: 'Intelligent object detection and recognition systems powered by deep learning. Our solutions can identify, track, and analyze multiple objects simultaneously with exceptional precision.',
      features: [
        'Multi-object detection & tracking',
        'Advanced pattern recognition algorithms',
        'OCR, barcode & QR code reading',
        'Real-time anomaly detection',
        'Custom model training for specific applications'
      ],
      benefits: [
        'Enhanced operational efficiency by 60%',
        'Reduced human error to near zero',
        'Real-time decision making capabilities',
        'Scalable across multiple facilities',
        'Predictive quality control'
      ],
      tags: ['Deep Learning', 'Multi-Object', 'Custom Training', 'Intelligent'],
      stat1Value: '60%',
      stat1Label: 'Efficiency Gain',
      stat2Value: '<1s',
      stat2Label: 'Response Time'
    },
    {
      image: 'assets/images/traceability.jpg',
      emoji: '📊',
      title: 'Traceability Solutions',
      description: 'End-to-end product tracking from raw materials to finished goods. Our comprehensive traceability system ensures complete visibility and compliance throughout the supply chain.',
      features: [
        'Complete product genealogy & lifecycle tracking',
        'Advanced batch and lot tracking',
        'Blockchain-based secure data storage',
        'Automated compliance reporting',
        'Real-time supply chain visibility'
      ],
      benefits: [
        'Full regulatory compliance assurance',
        'Rapid recall management (< 2 hours)',
        'Complete supply chain transparency',
        'Enhanced customer trust & brand reputation',
        'Risk mitigation & quality assurance'
      ],
      tags: ['Blockchain', 'Compliance', 'Supply Chain', 'Secure'],
      stat1Value: '100%',
      stat1Label: 'Traceability',
      stat2Value: '<2hr',
      stat2Label: 'Recall Time'
    },
    {
      image: 'assets/images/scada.jpg',
      emoji: '⚙️',
      title: 'SCADA Applications',
      description: 'Supervisory control and data acquisition systems for comprehensive process optimization. Monitor, control, and optimize your entire manufacturing process from a centralized platform.',
      features: [
        'Real-time monitoring of all processes',
        'Automated control & optimization',
        'Advanced data logging & historical analysis',
        'Intelligent alarm management system',
        'Secure remote access & mobile support'
      ],
      benefits: [
        'Improved process efficiency by 45%',
        'Reduced unplanned downtime by 70%',
        'Better resource utilization & energy savings',
        'Predictive maintenance capabilities',
        'Data-driven continuous improvement'
      ],
      tags: ['Real-Time', 'Automation', 'Remote Access', 'Analytics'],
      stat1Value: '45%',
      stat1Label: 'Efficiency',
      stat2Value: '70%',
      stat2Label: 'Less Downtime'
    },
    {
      image: 'assets/images/industry-4.jpg',
      emoji: '🚀',
      title: 'Industry 4.0 Solutions',
      description: 'Comprehensive smart factory solutions for complete digital transformation. Integrate IoT, AI, and cloud technologies to create an intelligent, connected manufacturing ecosystem.',
      features: [
        'IoT device & sensor integration',
        'Cloud-based analytics & reporting',
        'Digital twin technology for simulation',
        'Machine learning for predictive analytics',
        'Edge computing for real-time processing'
      ],
      benefits: [
        'Complete digital transformation',
        'Data-driven strategic decision making',
        'Increased productivity by 50%',
        'Competitive advantage in market',
        'Future-ready manufacturing infrastructure'
      ],
      tags: ['IoT', 'AI', 'Cloud', 'Digital Twin', 'Smart Factory'],
      stat1Value: '50%',
      stat1Label: 'Productivity',
      stat2Value: '24/7',
      stat2Label: 'Monitoring'
    }
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 0
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    AOS.refresh();
  }

  learnMore(solution: any): void {
    console.log('Learn more about:', solution.title);
    // Add your logic here - e.g., open modal, navigate to detail page
    // Example: this.router.navigate(['/solutions', solution.title]);
  }
}