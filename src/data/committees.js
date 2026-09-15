// All entries below are sourced from the official CIDSBA committee list PDF.
// The PDF is treated as ground truth for names, titles, and affiliations.
// Empty { name: "", institution: "" } rows are placeholders for committees
// where the PDF has not yet listed names — fill them in once confirmed.

export const patronData = {
  chiefPatron: {
    name: "Dr. Md. Sabur Khan",
    designation: "Chairman, BoT, Daffodil International University, Bangladesh"
  },
  patrons: [
    {
      name: "Professor Dr. M. R. Kabir",
      designation: "Vice Chancellor, Daffodil International University, Bangladesh"
    },
    {
      name: "Professor Dr. Mohammad Masum Iqbal",
      designation: "Pro Vice Chancellor, Daffodil International University, Bangladesh"
    }
  ]
};

export const internationalAdvisoryCommittee = [
  { name: "Dr. Christophe Simon", institution: "CRAN, University of Lorraine, France" },
  { name: "Dr. Miguel Enrique Campusano Araya", institution: "MMMI, University of Southern Denmark, Denmark" },
  { name: "Dr. Aisha Umair", institution: "MMMI, University of Southern Denmark, Denmark" },
  { name: "Dr. Petr Panfilov", institution: "HSE University, Russia" },
  { name: "Dr. Mouhaydine Tlemçani", institution: "University of Evora, Portugal" },
  { name: "Dr. Mohammad Ataul Karim", institution: "University of Massachusetts Dartmouth, USA" },
  { name: "Dr. Muhammad Usama Islam", institution: "Metropolitan State University, USA" },
  // PDF text is ambiguous here ("Dr Mr. Soliman") — appears to give only a
  // surname with a duplicated title. Confirm the full name before publishing.
  { name: "Mr. Soliman", institution: "Prince of Songkla University, Thailand" },
  { name: "Dr. Nguyen Thi Uyen", institution: "Thuongmai University, Vietnam" },
  // PDF text is ambiguous here ("Dr, Wan Rahiman Yosof Rahiman") — unclear if
  // this is one person's full name. Confirm before publishing.
  { name: "Dr. Wan Rahiman Yosof Rahiman", institution: "Universiti Sains Malaysia, Malaysia" },
  { name: "Dr. Jungpil Shin", institution: "University of Aizu, Japan" },
  { name: "Dr. Tomio Takara", institution: "University of the Ryukyus, Japan" },
  { name: "Dr. Syed Mohammed Shamsul Islam", institution: "Edith Cowan University, Australia" },
  { name: "Professor Dr. Wenyu Chen", institution: "University of Electronic Science and Technology of China, China" },
  { name: "Dr. Michael Goh (Kah Ong Michael Goh)", institution: "Multimedia University (MMU), Malaysia" },
  { name: "Dr. Watshara Shoombuatong", institution: "Mahidol University, Thailand" },
  { name: "Dr. Zahereel Ishwar Abdul Khalib", institution: "Faculty of Intelligent Computing, Universiti Malaysia Perlis, Perlis, Malaysia" },
  { name: "Dr. Syed Zulkarnain Syed Idrus", institution: "Universiti Malaysia Perlis (UniMAP), Malaysia" }
];

export const nationalAdvisoryCommittee = [
  { name: "Dr. Chowdhury Mofizur Rahman", institution: "CSE, BRAC University, Dhaka" },
  { name: "Dr. Dewan Md. Farid", institution: "CSE, United International University, Dhaka" },
  { name: "Dr. Mohammod Abul Kashem", institution: "CSE, Dhaka University of Engineering and Technology (DUET)" },
  { name: "Dr. Boshir Ahmed", institution: "CSE, Rajshahi University of Engineering & Technology (RUET)" },
  { name: "Dr. Mohammad Abu Yusuf", institution: "IIT, Jahangirnagar University, Bangladesh" },
  { name: "Dr. Mohammad Shorif Uddin", institution: "CSE, Jahangirnagar University, Bangladesh" },
  { name: "Dr. Swakkhar Shatabda", institution: "CSE, BRAC University, Dhaka" },
  { name: "Dr. Mohammad Kaykobad", institution: "CSE, BRAC University, Dhaka" },
  { name: "Professor Dr. Md Rabiul Islam", institution: "CSE, Rajshahi University of Engineering & Technology (RUET)" },
  { name: "Professor Dr. Md. Zulfiker Mahmud", institution: "CSE, Jagannath University" },
  { name: "Professor Dr. Md. Abu Layek", institution: "Chairman, CSE, Jagannath University" },
  { name: "Prof. Dr. Rashed Mustafa", institution: "CSE, Chittagong University" },
  { name: "Dr. Md. Abdulla Al Mamun", institution: "CSE, Hajee Mohammad Danesh Science & Technology University, Dinajpur" },
  { name: "Dr. Mohammed Nasir Uddin", institution: "CSE, Jagannath University" },
  { name: "Dr. Rashed Majumdar", institution: "IIT, Jahangirnagar University, Bangladesh" }
];

export const conferenceChairs = [
  {
    name: "Professor Dr. Imran Mahmud",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Professor Dr. Muhammad Firoz Mridha",
    institution: "American International University-Bangladesh (AIUB), Bangladesh"
  },
  {
    // "Outside" row in the PDF — no name given yet.
    name: "",
    institution: ""
  }
];

export const conferenceCoChairs = [
  {
    name: "Professor Dr. Md. Fokhray Hossain",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Prof. Dr. Bimal Chandra Das",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Mohammed Nadir Bin Ali",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const organizingChairs = [
  {
    name: "Dr. S M Hasan Mahmud",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Kamrul Islam Shahin",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Afsana Begum",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const organizingCoChairs = [
  {
    name: "Professor Dr. A. H. M. Saifullah Sadi",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Mohammad Manzurul Islam",
    institution: "Research Activity Coordinator, IEEE CIS BDC, East West University (EWU)"
  }
];

export const organizingSecretaries = [
  {
    name: "Dr. Md. Fazla Elahe",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Md. Abdul Kader",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Shabnom Mustary",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const technicalChairs = [
  {
    name: "Dr. Rubaiyat Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Nusrat Jahan",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Md. Rajibul Islam",
    institution: "Educational Activity Coordinator, IEEE CIS BDC | Bangladesh University of Business and Technology (BUBT)"
  }
];

export const technicalCoChairs = [
  {
    name: "Dr. Ms. Shahina Haque",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    // Replaces Dr. Mohammad Kamal Hossain Foraji per amendment PDF.
    name: "Md. Selim Reza",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Dr. Md. Shafikul Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const technicalSecretaries = [
  {
    name: "Dr. Marzia Ahmed",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Uttam Kumar Dey",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Md. Ashek -Al- Aziz",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const trackChairs = [
  {
    track: "Track 1: Computational Intelligence and Intelligent Systems",
    name: "Dr. Masud Rana Rashel",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    track: "Track 2: Machine Learning, Deep Learning and Data Science",
    name: "Dr. Md. Manzurul Hasan",
    institution: "American International University (AIUB), Bangladesh"
  },
  {
    track: "Track 3: Intelligent Business Data Analytics and Decision Support",
    name: "Dr. Hadaate Ullah",
    institution: "University of Science and Technology Chittagong (USTC), Bangladesh"
  },
  {
    track: "Track 4: Intelligent Applications in Health, Bioinformatics and Smart Systems",
    name: "Dr. Md Zahid Hasan",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    track: "Track 5: Emerging Technologies and Responsible Intelligent Computing",
    name: "Dr. Mohammad Rezwanul Huq",
    institution: "East West University (EWU), Bangladesh"
  }
];

export const financeChairs = [
  {
    name: "Mr. A.H.M Shahariar Parvez",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Mahbubul Alam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Md. Mozammelul Haque",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const registrationChairs = [
  {
    name: "Mr. Md. Khaled Sohel",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. K. M. Shahriar Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Fazla Rabby Raihan",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const publicityChairs = [
  {
    name: "Professor Dr. Mohammad Mobarak Hossain",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Ms. Syeda Sumaia Sultana",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Ms. Shahrin Islam",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const publicationChairs = [
  {
    name: "Dr. Sultan Mahmud",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Md Mohsin Kabir",
    institution: "Mälardalens University, Sweden"
  },
  {
    // "Outside" row in the PDF — no name given yet.
    name: "",
    institution: ""
  }
];

export const localArrangementChairs = [
  {
    name: "Mr. Khalid Been Badruzzaman Biplob",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Md. Suhag Ali",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

// Per the amendment PDF, "Web and IT support" is split into a singular
// chair and a separate co-chairs group.
export const webAndITChair = [
  {
    name: "Md. Shohel Arman",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];

export const webAndITCoChairs = [
  {
    name: "Mr. Md. Rashedul Alam",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Rahat Uddin Azad",
    institution: "Daffodil International University (DIU), Bangladesh"
  },
  {
    name: "Mr. Izaz Ahmmed Tuhin",
    institution: "Daffodil International University (DIU), Bangladesh"
  }
];
