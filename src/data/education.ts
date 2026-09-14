export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  dates: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'Ph.D., Computer Science',
    school: 'Johns Hopkins University',
    location: 'Baltimore, MD',
    dates: 'Aug. 2023 – Expected Dec. 2027',
    note: 'Research in medical robotics, medical image analysis, computer vision, image-guided intervention, and augmented reality.'
  },
  {
    degree: 'M.S.E., Robotics',
    school: 'Johns Hopkins University',
    location: 'Baltimore, MD',
    dates: 'Jan. 2021 – Dec. 2022'
  },
  {
    degree: 'B.Eng., Mechanical Engineering',
    school: 'University of Leeds',
    location: 'Leeds, UK',
    dates: 'Sep. 2016 – Jul. 2020'
  }
];
