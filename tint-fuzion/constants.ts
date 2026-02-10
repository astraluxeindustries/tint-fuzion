import { Car, Home, Building2, Anchor, ShieldCheck, Sun, ThermometerSun, Eye, Zap } from 'lucide-react';

export const CONTACT_INFO = {
  phone: "435-513-2001",
  email: "tintfuzion@gmail.com",
  address: "3217 E Livia Drive, St. George, UT. 84790",
  hours: {
    weekdays: "8:30 am to 5:30 pm",
    saturday: "8 am to 2 pm",
    sunday: "Closed"
  },
  raynoLink: "https://www.raynofilm.com/"
};

export const SERVICES = [
  {
    id: 1,
    title: "Automotive Tinting",
    description: "Standard high-performance film or Nano Carbon Ceramic Infrared Heat Rejection film. Customize your vehicle's look and comfort.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Residential Tinting",
    description: "Designer type frosted or etched looks, or reflective film to cut out heat and glare. Protect your home furnishings from fading.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Commercial Projects",
    description: "Enhance privacy and energy efficiency for your business. We handle office buildings and heavy machinery glass.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Boats & RVs",
    description: "Specialized tinting for recreational vehicles and watercraft to reduce glare on the water and keep interiors cool.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1000"
  }
];

export const BENEFITS = [
  {
    title: "99% UV Protection",
    description: "Block harmful UV rays that damage skin and fade interiors.",
    icon: ShieldCheck
  },
  {
    title: "Heat Reduction",
    description: "Drastically reduce heat and glare, making your AC work less.",
    icon: ThermometerSun
  },
  {
    title: "Enhanced Privacy",
    description: "Increase comfort and privacy for your home or vehicle.",
    icon: Eye
  },
  {
    title: "Mobile Service",
    description: "We come to you! Convenient mobile service throughout St. George.",
    icon: Zap
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    text: "Tint Fuzion did an amazing job on my Tesla. The heat rejection difference is night and day in this St. George sun!",
    rating: 5
  },
  {
    name: "Mike Peterson",
    text: "Professional, fast, and the mobile service was super convenient. Best tint shop in Utah hands down.",
    rating: 5
  },
  {
    name: "David Alred",
    text: "Been using them since 2008. Every truck I buy goes straight to Tint Fuzion.",
    rating: 5
  }
];