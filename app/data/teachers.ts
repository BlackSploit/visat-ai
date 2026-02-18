export interface Teacher {
  id: number;
  name: string;
  department: string;
  qualification: string;
  previewVideo: string;
  fullVideo: string;
  whatsappNumber: string;
  bio: string;
specs: string[];
headshot: string;
quote: string;
image: string;
depts: string[]
 // up to 3 (or more if needed)

}

interface Props {
  teacher: {
    id: number;
    name: string;
    department: string;
    previewVideo: string;
  specs: string[];
  };
  onClick: () => void;
}


// Using online placeholder videos for demonstration
export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Asst. Prof. Sheena Bhaskar",
    department: "Basic Science",
    qualification: "PhD in Artificial Intelligence",
    previewVideo: "videos/BS.mp4",
    fullVideo: "videos/BS FULL.mp4",
    whatsappNumber: "+1234567890",
    bio: "Specializes in Machine Learning and Data Science with 10+ years of teaching experience.",
    specs: ["Maths", "Chemistry", "Physics"], 
    headshot: "images/headshots/BS.jpg",
quote: "“As the foundation of all engineering and innovation, we instill scientific curiosity, analytical thinking, and conceptual clarity. We believe strong fundamentals create limitless possibilities and empower students to excel across every discipline.”",
image: "images/pics/BS lab.png",
depts: ["1","2","3","4"]

  },

  {
    id: 2,
    name: "Asst. Prof. Nimmy John T",
    department: "Electronics and Communication",
    qualification: "PhD in Quantum Physics",
    previewVideo: "videos/ECE.mp4",
    fullVideo: "videos/ECE FULL.mp4",
    whatsappNumber: "+1234567892",
    bio: "Researcher in quantum mechanics with a passion for teaching fundamental physics.",
    specs: ["Maths", "Chemistry", "Physics"], 
        headshot: "images/headshots/ECE lab.png",
quote: "“At the heart of connectivity and innovation, we cultivate minds that design intelligent systems, advanced electronics, and seamless communication networks — enabling students to connect ideas, people, and technology across the globe.”",
image: "images/pics/ECE lab.png",
depts:["Embedded Systems & Arduino","VLSI Design (Verilog / FPGA)","IoT & Sensor Networks","PCB Design & Fabrication","Wireless & 5G Communication"]
  },
  {
    id: 3,
    name: "Asst. Prof. Akhil Beshy",
    department: "Electrical",
    qualification: "PhD in Organic Chemistry",
    previewVideo: "videos/EEE.mp4",
    fullVideo: "videos/EEE FULL.mp4",
    whatsappNumber: "+1234567893",
    bio: "Specializes in organic synthesis and chemical engineering applications.",
    specs: ["Maths", "Chemistry", "Physics"], 
        headshot: "images/headshots/EEE.jpg",
quote: "“We educate future engineers to harness energy, master power systems, and design smart technologies that fuel sustainable progress. Our mission is to spark curiosity, precision, and responsibility in every electrical mind.”",
image: "images/pics/EEE lab.png",
depts: ["PLC & SCADA Automation","Solar PV System Design","Electric Vehicle Technology","Power Electronics & Drives","MATLAB & Simulink"]
  },

    {
    id: 4,
    name: "Asst. Prof. Divya Nair",
    department: "Computer Science",
    qualification: "PhD in Applied Mathematics",
    previewVideo: "videos/CSE.mp4",
    fullVideo: "videos/CSE FULL.mp4",
    whatsappNumber: "+1234567891",
    bio: "Expert in Calculus and Linear Algebra with numerous research publications.",
    specs: ["AI", "ML", "Data Science"], 
        headshot: "images/headshots/CSE.jpg",
quote: "“In a world driven by technology, we don’t just teach programming — we shape problem-solvers, innovators, and digital architects. Our goal is to empower young minds to think logically, build fearlessly, and create solutions that define the future.”",
image: "images/pics/CSE lab.png",
depts: ["Full Stack Development",
  "Cloud Computing (AWS / Azure)",
  "Cybersecurity & Ethical Hacking",
  "DevOps (Docker, Kubernetes)",
  "Mobile App Development"]
  },
  {
    id: 5,
    name: "Asst. Prof. Thomaskutty Mathew",
    department: "Civil",
    qualification: "PhD in Molecular Biology",
    previewVideo: "videos/CIVIL.mp4",
    fullVideo: "videos/CIVIL FULL.mp4",
    whatsappNumber: "+1234567894",
    bio: "Expert in genetics and biotechnology with extensive lab experience.",
    specs: ["Maths", "Chemistry", "Physics"], 
       headshot: "images/headshots/CE lab.png",
quote: "“From blueprint to reality, we train engineers to design, build, and sustain the structures that shape modern civilization. With strong fundamentals and practical wisdom, we prepare students to transform ideas into enduring landmarks.”",
image: "images/pics/CE lab.png",
depts: ["AutoCAD Civil 2D & 3D","Revit Architecture (BIM)","STAAD.Pro / ETABS","Quantity Surveying (QS)","Construction Project Mgmt (Primavera)"]
  },
  {
    id: 6,
    name: "Dr Deepak",
    department: "Mechanical",
    qualification: "PhD in Economics",
    previewVideo: "videos/MECH 2.mp4",
    fullVideo: "videos/MECH FULL.mp4",
    whatsappNumber: "+1234567895",
    bio: "Specializes in macroeconomic theory and financial markets analysis.",
    specs: ["Maths", "Chemistry", "Physics"], 
     headshot: "images/headshots/ME.jpg",
quote: "“Where imagination meets engineering, we nurture creators of motion, machines, and mechanical intelligence. Our teaching goes beyond textbooks, inspiring students to design, innovate, and engineer solutions that power industries and everyday life.”",
image: "images/pics/ME lab.png",
depts:["AutoCAD / SolidWorks / CATIA","CNC Programming & Machining","3D Printing & Additive Manufacturing","Robotics & Automation","HVAC System Design"]
  },
  {
    id: 7,
    name: "Asst. Prof. Jijo",
    department: "BCA",
    qualification: "PhD in Clinical Psychology",
    previewVideo: "videos/BCA.mp4",
    fullVideo: "videos/BCA FULL.mp4",
    whatsappNumber: "+1234567896",
    bio: "Expert in cognitive behavioral therapy and educational psychology.",
    specs: ["Maths", "Chemistry", "Physics"], 
      headshot: "images/headshots/BCA.jpg",
quote: "“We empower future developers and IT professionals by blending logical reasoning, technical expertise, and creative thinking — preparing students to build scalable, impactful digital solutions for tomorrow’s challenges.”",
image: "images/pics/BCA lab.png",
depts:["Python Programming","Web Development (HTML, CSS, JS)","Database Management (MySQL)","Mobile App Development Basics","AI & Data Analytics Foundations"]
  },
  {
    id: 8,
    name: "Asst. Prof. Anagha",
    department: "BBA",
    qualification: "PhD in Mechanical Engineering",
    previewVideo: "videos/BBA.mp4",
    fullVideo: "videos/BBA FULL.mp4",
    whatsappNumber: "+1234567897",
    bio: "Specializes in robotics and automation with industry experience.",
    specs: ["Maths", "Chemistry", "Physics"],
     headshot: "images/headshots/BBA.jpg",
quote: "“We shape data-driven thinkers who transform numbers into knowledge, insights into strategy, and vision into leadership. Our teaching bridges analytics and business intelligence to create confident decision-makers for a dynamic corporate world.”",
image: "images/pics/BBA lab.jpg",
depts:["Business Management Essentials","Digital Marketing & Branding","Financial Accounting Basics","Human Resource Management (HRM)","Entrepreneurship & Startup Skills"]
  },
  {
    id: 9,
    name: "Asst. Prof. Linda Baby",
    department: "BCOM",
    qualification: "PhD in English Literature",
    previewVideo: "videos/BCOM.mp4",
    fullVideo: "videos/BCOM FULL.mp4",
    whatsappNumber: "+1234567898",
    bio: "Expert in 19th-century literature and critical theory analysis.",
    specs: ["Maths", "Chemistry", "Physics"], 
    headshot: "images/headshots/BCOM.jpg",
quote: "“We nurture financially intelligent, ethically grounded, and strategically skilled professionals who are ready to lead in business, finance, and entrepreneurship — shaping the backbone of a responsible and progressive economy.”",
image: "images/pics/BCOM lab.jpg",
depts:["Tally ERP with GST","Advanced Excel & Analytics","Digital Marketing Fundamentals","Business Communication & Soft Skills","Stock Market & Investment Basics"]
  }
];