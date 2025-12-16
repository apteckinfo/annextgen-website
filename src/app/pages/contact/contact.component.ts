import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // FORMSPREE ENDPOINT - Replace with your actual form ID
  private formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // ⚠️ REPLACE WITH YOUR FORMSPREE ID

  contactInfo = [
    {
      icon: '🏢',
      title: 'Corporate Office',
      details: [
        '723, Eros Corporate Park',
        'Sector 2, IMT Manesar',
        'Haryana, India'
      ],
      link: 'https://maps.app.goo.gl/mjsxiq8gXmddLZUo9'
    },
    {
      icon: '🛠️',
      title: 'Engineering Office',
      details: [
        'Behind Bansal Trading',
        'Old Hayatpur Road',
        'Gurgaon Sector 93'
      ]
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: [
        '+91 8690723831',
        '+91 8802482498',
        'Mon - Sat: 9 AM - 6 PM'
      ]
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: [
        'sales@annextgen.com',
        'ajay@apteck.in',
        'Quick response within 24 hours'
      ]
    }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      company: ['', Validators.required],
      industry: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      this.submitSuccess = false;

      // Send to Formspree
      this.http.post(this.formspreeEndpoint, this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
          console.error('Form submission error:', error);
          
          // Reset error message after 5 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}