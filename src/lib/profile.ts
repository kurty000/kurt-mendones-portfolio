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
  /** Add certificates here — images go in /public/certifications */
  certifications: [] as Certification[],
};
