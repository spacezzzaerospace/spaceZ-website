export type TeamMember = {
  name: string;
  role: string;
  education: string;
  photo: string;
  alt: string;
  landscape?: boolean;
  email?: string;
  description?: string;
};

// Approved filenames and academic backgrounds. Keep executive order intentional.
export const executives: TeamMember[] = [
  { name: 'Mukhammad Akhmedov', role: 'Club President', education: 'Space Engineering student at York University', photo: 'DSC07726.JPG', alt: 'Mukhammad Akhmedov seated beneath the SpaceZ banner.' },
  { name: 'Haze', role: 'Co-Founder & Vice President', education: 'Computer Science student at York University', photo: 'IMG_8285.jpg', alt: 'Haze’s supplied profile image: a silhouette edged in blue and violet light.' },
  { name: 'Mujeebullah H. Mayar', role: 'Vice President External Affairs', education: 'Electrical Engineering student at York University', photo: 'DSC07755.JPG', alt: 'Mujeebullah H. Mayar seated beneath the SpaceZ banner.' },
  { name: 'Gabriel Crightney', role: 'Secretary', education: 'Mechatronics Engineering student at York University', photo: 'DSC07735.JPG', alt: 'Gabriel Crightney seated beneath the SpaceZ banner.' },
  { name: 'Abdullah Khan', role: 'Project Lead', education: 'Space Engineering student at York University', photo: 'IMG_8293.jpg', alt: 'Abdullah Khan riding a mountain bike on a woodland trail.', landscape: true },
  { name: 'Pavlo Kadema', role: 'Treasurer', education: 'Financial and Business Economics student at York University', photo: 'DSC07749.JPG', alt: 'Pavlo Kadema seated beneath the SpaceZ banner.' },
];

export const developer: TeamMember = {
  name: 'Rafi Jalalzai', role: 'Software and Digital Developer',
  education: 'Computer Science student at York University', photo: 'DSC07763.JPG',
  alt: 'Rafi Jalalzai seated beneath the SpaceZ banner.',
  email: 'rafi123@my.yorku.ca',
  description: "Working on the development and maintenance of SpaceZ's official website, with a focus on responsive design, accessibility, and creating a better digital experience for our community.",
};
