export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'Alpine Adventures',
    text: 'M48 transformed our digital presence completely. They didn\'t just build a website, they created an experience that perfectly captures our brand and has dramatically increased our online bookings. Their attention to detail and strategic approach sets them apart.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    position: 'Marketing Director',
    company: 'Lucid Finance',
    text: 'Working with M48 was an exceptional experience from start to finish. Their team took the time to understand our complex requirements and delivered a sophisticated platform that exceeded our expectations. The positive feedback from our users has been overwhelming.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'testimonial-3',
    name: 'Emma Rodriguez',
    position: 'Founder',
    company: 'Urban Harvest',
    text: 'The brand identity M48 created for us perfectly captures our mission and values. They have an incredible ability to translate ideas into visual language. Since our rebrand, we\'ve seen significant growth in brand recognition and customer engagement.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'testimonial-4',
    name: 'David Thomson',
    position: 'VP of Product',
    company: 'Echo Audio',
    text: 'M48\'s design work for our product line was nothing short of remarkable. They created a cohesive system that works beautifully across physical and digital touchpoints. Their strategic thinking and creative execution helped position us as a premium brand in our market.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];