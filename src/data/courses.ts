
export interface Course {
  id: number;
  title: string;
  platform: string;
  price: string;
  rating: number;
  duration: string;
  free: boolean;
  image: string;
  category: string;
  description?: string; // Added description property as optional
}

const courses: Course[] = [
  // Existing courses
  {
    id: 1,
    title: "Introduction to Python Programming",
    platform: "Coursera",
    price: "$49.99",
    rating: 4.7,
    duration: "6 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    category: "Programming"
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    platform: "Udemy",
    price: "$89.99",
    rating: 4.8,
    duration: "12 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    platform: "edX",
    price: "Free",
    rating: 4.5,
    duration: "8 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=60",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    platform: "Pluralsight",
    price: "$29.99",
    rating: 4.6,
    duration: "4 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=500&q=60",
    category: "Programming"
  },
  {
    id: 5,
    title: "React JS Masterclass",
    platform: "Udemy",
    price: "$79.99",
    rating: 4.9,
    duration: "10 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=500&q=60",
    category: "Web Development"
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    platform: "Coursera",
    price: "$59.99",
    rating: 4.7,
    duration: "8 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=60",
    category: "Programming"
  },
  {
    id: 7,
    title: "Introduction to Cloud Computing",
    platform: "AWS Training",
    price: "Free",
    rating: 4.4,
    duration: "6 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=60",
    category: "Cloud"
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    platform: "edX",
    price: "Free",
    rating: 4.6,
    duration: "5 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60",
    category: "Security"
  },
  {
    id: 9,
    title: "Full Stack Development with MERN",
    platform: "Udemy",
    price: "$94.99",
    rating: 4.8,
    duration: "14 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=60",
    category: "Web Development"
  },
  
  // New Telecommunication Courses
  {
    id: 10,
    title: "Fundamentals of Telecommunications",
    platform: "Coursera",
    price: "$69.99",
    rating: 4.6,
    duration: "8 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 11,
    title: "Network Architecture and Design",
    platform: "EdX",
    price: "$89.99",
    rating: 4.7,
    duration: "10 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 12,
    title: "Wireless Communications for Everybody",
    platform: "Yonsei University",
    price: "Free",
    rating: 4.5,
    duration: "6 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 13,
    title: "Optical Fiber Communication",
    platform: "MIT OpenCourseWare",
    price: "Free",
    rating: 4.8,
    duration: "12 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 14,
    title: "Telecommunication Protocols (TCP/IP, VoIP, MPLS)",
    platform: "Pluralsight",
    price: "$39.99",
    rating: 4.6,
    duration: "8 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 15,
    title: "Broadband Technologies (DSL, Cable, FTTH)",
    platform: "Udemy",
    price: "$59.99",
    rating: 4.5,
    duration: "6 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 16,
    title: "Internet of Things (IoT) in Telecom",
    platform: "Coursera",
    price: "$79.99",
    rating: 4.7,
    duration: "8 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 17,
    title: "Telecom Regulations and Policies",
    platform: "edX",
    price: "Free",
    rating: 4.3,
    duration: "4 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 18,
    title: "Network Security in Telecom",
    platform: "Cybrary",
    price: "$49.99",
    rating: 4.6,
    duration: "6 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 19,
    title: "Emerging Technologies in Telecom",
    platform: "LinkedIn Learning",
    price: "$29.99",
    rating: 4.5,
    duration: "4 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 20,
    title: "5G Technology Fundamentals",
    platform: "Qualcomm Academy",
    price: "Free",
    rating: 4.8,
    duration: "8 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 21,
    title: "Digital Signal Processing",
    platform: "École Polytechnique Fédérale de Lausanne",
    price: "$69.99",
    rating: 4.7,
    duration: "10 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 22,
    title: "4G Network Fundamentals",
    platform: "Institut Mines-Télécom",
    price: "$59.99",
    rating: 4.4,
    duration: "6 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 23,
    title: "IP Networks, Addresses, and Routers",
    platform: "Udemy",
    price: "$49.99",
    rating: 4.6,
    duration: "6 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  {
    id: 24,
    title: "MPLS and Carrier Networks",
    platform: "Pluralsight",
    price: "$39.99",
    rating: 4.5,
    duration: "5 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
    category: "Telecommunications"
  },
  
  // New IT Courses
  {
    id: 25,
    title: "Google IT Support Certificate",
    platform: "Coursera",
    price: "$49.99",
    rating: 4.8,
    duration: "6 months",
    free: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 26,
    title: "IBM IT Support Certificate",
    platform: "edX",
    price: "$99.99",
    rating: 4.7,
    duration: "5 months",
    free: false,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 27,
    title: "System Administration and IT Infrastructure Services",
    platform: "Google",
    price: "$49.99",
    rating: 4.6,
    duration: "3 months",
    free: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 28,
    title: "Networking Fundamentals",
    platform: "Akamai Technologies",
    price: "Free",
    rating: 4.4,
    duration: "6 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 29,
    title: "AWS Cloud Support Associate",
    platform: "Amazon Web Services",
    price: "$79.99",
    rating: 4.8,
    duration: "3 months",
    free: false,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 30,
    title: "Information Technology Fundamentals for Everyone",
    platform: "Microsoft",
    price: "Free",
    rating: 4.5,
    duration: "4 weeks",
    free: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 31,
    title: "Machine Learning Specialization",
    platform: "Multiple Educators",
    price: "$69.99",
    rating: 4.9,
    duration: "6 months",
    free: false,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 32,
    title: "Artificial Intelligence and Machine Learning Professional Certificate",
    platform: "IBM",
    price: "$99.99",
    rating: 4.8,
    duration: "8 months",
    free: false,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 33,
    title: "Cybersecurity and Ethical Hacking",
    platform: "EC-Council",
    price: "$199.99",
    rating: 4.7,
    duration: "3 months",
    free: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 34,
    title: "Blockchain Technology Essentials",
    platform: "Udemy",
    price: "$59.99",
    rating: 4.5,
    duration: "6 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 35,
    title: "DevOps Engineering Certification",
    platform: "LinkedIn Learning",
    price: "$79.99",
    rating: 4.6,
    duration: "4 months",
    free: false,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 36,
    title: "Cloud Computing Fundamentals",
    platform: "AWS",
    price: "$49.99",
    rating: 4.7,
    duration: "8 weeks",
    free: false,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 37,
    title: "Full Stack Java Developer Program",
    platform: "Simplilearn",
    price: "$349.99",
    rating: 4.8,
    duration: "6 months",
    free: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 38,
    title: "CISSP Certification",
    platform: "(ISC)²",
    price: "$699.99",
    rating: 4.9,
    duration: "6 months",
    free: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  },
  {
    id: 39,
    title: "ITIL 4 Foundation Training",
    platform: "AXELOS",
    price: "$299.99",
    rating: 4.6,
    duration: "2 months",
    free: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60",
    category: "IT"
  }
];

export default courses;
