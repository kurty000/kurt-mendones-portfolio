export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialUrl?: string;
  description?: string;
};

export const profile = {
  name: "Kurt Ian A. Mendones",
  shortName: "Kurt Mendones",
  title: "BSIT · Infrastructure Services",
  tagline:
    "Building and troubleshooting network infrastructure, systems, and secure IT environments.",
  email: "kurtmendones@gmail.com",
  phone: "09602990107",
  about: [
    "Hi — I’m Kurt Ian Mendones, a Bachelor of Science in Information Technology student majoring in Infrastructure Services. I’m drawn to how systems connect: networking, architecture, and the practical work of keeping infrastructure reliable.",
    "My focus is network infrastructure, network architecture, systems administration, and IT security. Alongside that, I’ve worked with databases, Salesforce, web development, and hands-on lab tools through academic projects, coursework, and freelance experience.",
    "I’m always looking for chances to learn new technologies, sharpen my skills, and take on projects where I can apply what I’ve studied in real environments.",
  ],
  skillGroups: [
    {
      name: "Networking & Network Infrastructure",
      level: 5,
      items:
        "Cisco Packet Tracer, PuTTY, VirtualBox, TCP/IP, IPv4/IPv6, OSI Model, VLAN, VLSM, Subnetting, DHCP, DNS, NAT, ACL, OSPF, Routing & Switching, Ethernet/LAN, Wireless Networking, Network Design, Network Troubleshooting",
    },
    {
      name: "Systems & Infrastructure Services",
      level: 5,
      items:
        "Ubuntu, Windows Server, Linux Administration, Active Directory, DHCP/DNS Server, File & Folder Sharing, User Account Management, Access Management, Virtual Machines, Server Administration, System Troubleshooting",
    },
    {
      name: "IT Security",
      level: 3,
      items:
        "Network Security Fundamentals, Firewall Configuration, Access Control, Authentication & Authorization, Basic Cybersecurity",
    },
    {
      name: "Database Management & CRM",
      level: 4,
      items: "SQL, SQL Server, Salesforce",
    },
    {
      name: "Business Intelligence & Data Analytics",
      level: 3,
      items: "Microsoft Excel, Basic Data Analysis",
    },
    {
      name: "Web Development & Programming",
      level: 2,
      items: "Python, JavaScript, Java, PHP, HTML, CSS, XAMPP",
    },
  ],
  tools: [
    "Cisco Packet Tracer",
    "PuTTY",
    "VirtualBox",
    "Ubuntu",
    "Windows Server",
    "Active Directory",
    "Microsoft Excel",
    "SQL Server",
    "Salesforce",
    "XAMPP",
    "Visual Studio Code",
    "Git / GitHub",
    "Python",
    "JavaScript",
    "Java",
    "PHP",
  ],
  certifications: [
    {
      id: "itspecialist-networking",
      title: "Information Technology Specialist — Networking",
      issuer: "Certiport · CertNexus · Pearson",
      date: "October 6, 2026",
      image: "/certifications/itspecialist-networking.png",
      credentialUrl: "https://verify.certiport.com",
      description:
        "IT Specialist certification in Networking. Credential ID: wB9PL-2F9s.",
    },
    {
      id: "industrial-networking-essentials",
      title: "Industrial Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "August 17, 2026",
      image: "/certifications/industrial-networking-essentials.png",
      description:
        "Student-level credential covering industrial network design, Ethernet/VLANs, IP addressing, and Cisco industrial device basics.",
    },
    {
      id: "iso-iec-20000",
      title: "ISO/IEC 20000 IT Service Management Associate",
      issuer: "SkillFront",
      date: "Valid through July 31, 2026",
      image: "/certifications/iso-iec-20000-itsm.png",
      description:
        "Accredited professional certification in IT service management aligned with ISO/IEC 20000.",
    },
    {
      id: "salesforce-virtual-internship",
      title: "Salesforce Supported Virtual Internship Program 2025",
      issuer: "SmartBridge · Salesforce Partner",
      date: "January 2, 2026",
      image: "/certifications/salesforce-virtual-internship-2025.png",
      description:
        "Completed an 8-week virtual internship (Aug–Nov 2025) covering Salesforce fundamentals, automation, Apex, Visualforce, LWC, and Agentforce. Certificate ID: SWSFVIPAD2026-0085.",
    },
    {
      id: "dict-cybersecurity-attendance",
      title: "The Road to Digitalization Leads through Cybersecurity",
      issuer: "DICT Bulacan · ILCDB",
      date: "October 24, 2025",
      image: "/certifications/dict-cybersecurity-attendance.png",
      description:
        "Certificate of Attendance for a four-hour information session by DICT Region III / DICT Bulacan.",
    },
    {
      id: "intro-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "October 10, 2025",
      image: "/certifications/introduction-to-cybersecurity.png",
      description:
        "Student-level credential covering online safety, common threats, and how organizations protect operations.",
    },
    {
      id: "agentblazer-champion",
      title: "Salesforce Agentblazer Champion Workshop",
      issuer: "SmartBridge · Salesforce Partner",
      date: "September 18, 2025",
      image: "/certifications/salesforce-agentblazer-champion.png",
      description:
        "Completed the Salesforce Agentblazer Champion Workshop with SmartBridge.",
    },
    {
      id: "python-essentials-1",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy · Python Institute",
      date: "August 26, 2025",
      image: "/certifications/python-essentials-1.png",
      description:
        "Statement of Achievement for completing Python Essentials 1 and preparing for PCEP-level skills.",
    },
    {
      id: "python-essentials-1-dict",
      title: "Python Essentials 1 (DICT-ITU DTC Initiative)",
      issuer: "Cisco Networking Academy · DICT-ITU DTC Initiative",
      date: "August 26, 2025",
      image: "/certifications/python-essentials-1-dict.png",
      description:
        "Course completion certificate offered by the DICT-ITU DTC Initiative through Cisco Networking Academy.",
    },
    {
      id: "packet-tracer-getting-started",
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy · Bulacan State University",
      date: "December 5, 2024",
      image: "/certifications/getting-started-cisco-packet-tracer.png",
    },
    {
      id: "packet-tracer-networking",
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy · Bulacan State University",
      date: "December 5, 2024",
      image: "/certifications/exploring-networking-packet-tracer.png",
    },
    {
      id: "packet-tracer-iot",
      title: "Exploring Internet of Things with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy · Bulacan State University",
      date: "November 21, 2024",
      image: "/certifications/exploring-iot-packet-tracer.png",
    },
    {
      id: "intro-iot",
      title: "Introduction to Internet of Things",
      issuer: "Cisco Networking Academy",
      date: "September 9, 2024",
      image: "/certifications/introduction-to-iot.png",
      description:
        "Student-level credential on IoT, digital transformation, automation, and security fundamentals.",
    },
    {
      id: "iot-digital-transformation",
      title: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy · Bulacan State University",
      date: "September 9, 2024",
      image: "/certifications/iot-and-digital-transformation.png",
    },
    {
      id: "operating-systems-basics",
      title: "Operating Systems Basics",
      issuer: "Cisco Networking Academy · Bulacan State University",
      date: "April 23, 2024",
      image: "/certifications/operating-systems-basics.png",
    },
    {
      id: "computer-hardware-basics",
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy · Bulacan State University",
      date: "April 23, 2024",
      image: "/certifications/computer-hardware-basics.png",
    },
  ] satisfies Certification[],
};
