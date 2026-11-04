// Summarized from the development brief, sections 1–4 and 19.
// These describe values and learning aims, not a catalogue of active programs.
type AboutItem = { title: string; description: string };

export const values: AboutItem[] = [
  { title: 'Innovation', description: 'Explore new ideas and practical engineering solutions.' },
  { title: 'Collaboration', description: 'Bring different disciplines, skills and perspectives to the same challenge.' },
  { title: 'Learning by doing', description: 'Build understanding through designing, making, testing and improving.' },
  { title: 'Responsibility and safety', description: 'Approach engineering with preparation, documentation and appropriate safety standards.' },
  { title: 'Continuity', description: 'Preserve knowledge and equipment so the next generation can build on our work.' },
];

export const learningAreas: AboutItem[] = [
  { title: 'Design & build', description: 'Develop practical understanding of aircraft structures, CAD, fabrication and prototyping.' },
  { title: 'Integrate & test', description: 'Explore electronics, flight control and software, then learn how systems work together through testing.' },
  { title: 'Document & collaborate', description: 'Practise engineering documentation, teamwork, leadership and project management.' },
];
