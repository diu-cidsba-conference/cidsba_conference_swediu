// Single source of truth for verified conference facts.
export const conference = {
  short: 'CIDSSE 2028',
  full: 'International Conference on Computational Intelligence, Data Science and Software Engineering',
  datesLabel: '28–29 January 2028',
  start: '2028-01-28T09:00:00+06:00',
  venue: 'Daffodil Smart City, Birulia, Dhaka',
  host: 'Department of Software Engineering, Daffodil International University',
  email: 'cidsba@diu.edu.bd',
  phone: '+880-2-55028693',
};

// iso = end of day (Dhaka) on which the milestone falls.
export const milestones = [
  { key: 'announce', label: 'Call for papers announced', display: 'June 2026', day: null, mon: 'Jun', year: 2026, iso: '2026-06-30', kind: 'info' },
  { key: 'submit', day: 10, mon: 'Aug', year: 2027, label: 'Paper submission deadline', display: '10 August 2027', iso: '2027-08-10', kind: 'deadline' },
  { key: 'notify', day: 2, mon: 'Sep', year: 2027, label: 'Acceptance notification', display: '2 September 2027', iso: '2027-09-02', kind: 'info' },
  { key: 'early', day: 20, mon: 'Sep', year: 2027, label: 'Early-bird registration ends', display: '20 September 2027', iso: '2027-09-20', kind: 'deadline' },
  { key: 'reg', day: 18, mon: 'Nov', year: 2027, label: 'Registration deadline', display: '18 November 2027', iso: '2027-11-18', kind: 'deadline' },
  { key: 'conf', day: '28–29', mon: 'Jan', year: 2028, label: 'Conference', display: '28–29 January 2028', iso: '2028-01-29', kind: 'event' },
];

export const tracks = [
  { title: 'Computational Intelligence and Intelligent Systems', topics: 'Computational Intelligence, Neural Networks, Fuzzy Systems, UAV Intelligence, Intelligent Agents, Intelligent Systems, Reasoning Systems, Optimization, Multi-Agent Systems' },
  { title: 'Machine Learning, Deep Learning and Data Science', topics: 'Machine Learning, Deep Learning, Reinforcement Learning, Self-Supervised Learning, Federated Learning, Explainable AI, Big Data Analytics, High-Dimensional Data Analysis, Time-series Forecasting, Reliability Modeling, Predictive Maintenance for engineered systems' },
  { title: 'Intelligent Business Data Analytics and Decision Support', topics: 'Data Analytics, Business Intelligence, Pattern Recognition, Time-Series Analysis, Anomaly Detection, Recommender Systems, Uncertainty Modeling, Risk Analytics' },
  { title: 'Intelligent Applications in Health, Bioinformatics and Smart Systems', topics: 'Healthcare AI, Bioinformatics, Computational Biology, Smart Healthcare, Internet of Medical Things, Intelligent Transportation, Cyber-Physical Systems, IoT' },
  { title: 'Emerging Technologies and Responsible Intelligent Computing', topics: 'Generative AI, Large Language Models, Quantum Machine Learning, Edge Intelligence, Robotics, Human-Centered AI, Trustworthy AI, Privacy-Preserving Machine Learning, Sustainable AI' },
];

export const host = { name: 'Daffodil International University', role: 'Host university', logo: '/images/diu-logo.png', url: 'https://daffodilvarsity.edu.bd' };
export const technical = { name: 'IEEE Computational Intelligence Society', short: 'IEEE CIS', role: 'Technical support', url: 'https://cis.ieee.org' };

export const partners = [
  { name: 'IEEE Computational Intelligence Society', short: 'IEEE CIS' },
  { name: 'AI Task Force', logo: '/images/partners/ai-task-force.png' },
  { name: 'Department of Software Engineering, DIU', logo: '/images/partners/swe-dept.png' },
  { name: 'Data Science Lab, DIU', logo: '/images/partners/data-science-lab.png' },
  { name: 'Software Engineering Club, DIU', logo: '/images/partners/se-club.png' },
  { name: 'SQAT, DIU', logo: '/images/partners/sqat.png' },
];

export const places = [
  { name: 'Daffodil Smart City', detail: 'The campus hosting CIDSSE 2028.', image: '/images/places/daffodil.jpg' },
  { name: 'Lalbagh Fort', detail: 'A Mughal-era fort complex in Old Dhaka.', image: '/images/places/lalbagh.jpg' },
  { name: 'Ahsan Manzil', detail: 'The Pink Palace on the Buriganga River.', image: '/images/places/ahsan-manzil.jpg' },
  { name: 'National Parliament', detail: "Louis Kahn's landmark of modern architecture.", image: '/images/places/parliament.jpg' },
];
