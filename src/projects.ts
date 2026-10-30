export type Project = {
  id: string;
  title: string;
  period: string;
  status: string;
  summary: string;
  paragraphs: string[];
  focusTitle: string;
  focusAreas: string[];
  noteTitle: string;
  note: string;
  image?: { src: string; srcSet: string; alt: string; caption: string };
};

// Public copy verified against development brief sections 4–6.
// Add a unique id and a complete Project entry; the page renders it automatically.
// Keep preparation distinct from completed work. Do not infer specifications.
export const projects: Project[] = [
  {
    id: 'first-prototype',
    title: 'Our first UAV / FPV prototype',
    period: 'Early work · 2026',
    status: 'Completed early prototype work',
    summary: 'Where SpaceZ began.',
    paragraphs: [
      'Before SpaceZ was formally established, a small group of York University students built and successfully flew a functional UAV during summer 2026.',
      'SpaceZ’s first publicly introduced prototype is an FPV drone. This early work helped establish the club’s technical and collaborative foundation.',
    ],
    focusTitle: 'What the early work taught us',
    focusAreas: ['Drone components and hardware assembly', 'Electrical and flight-control integration', 'Troubleshooting, testing and iteration', 'Collaboration across different skills'],
    noteTitle: 'Understanding FPV',
    note: 'FPV means first-person view: a camera on the aircraft provides the operator’s view through goggles or a display.',
    image: {
      src: '/assets/spacez-drone-1280.webp',
      srcSet: '/assets/spacez-drone-640.webp 640w, /assets/spacez-drone-1280.webp 1280w',
      alt: 'SpaceZ quadcopter on a workbench, showing its battery, wiring and frame.',
      caption: 'From the SpaceZ workbench. Authentic club prototype photography.',
    },
  },
  {
    id: 'aeac-2027',
    title: 'Preparing toward AEAC 2027',
    period: 'Academic year · 2026–2027',
    status: 'Preparation stage',
    summary: 'A new engineering challenge.',
    paragraphs: [
      'SpaceZ Aerospace is preparing toward participation in the 2027 AEAC National Student UAS Competition, organized by the Aerial Evolution Association of Canada.',
      'The intended project is an unmanned aircraft system that addresses the competition’s mission requirements. Its final architecture and specifications have not yet been confirmed.',
    ],
    focusTitle: 'Potential areas of work',
    focusAreas: ['Airframe, propulsion and power systems', 'Flight control, avionics and mission software', 'Ground testing and flight validation', 'Engineering documentation and presentations'],
    noteTitle: 'An ambition, with a clear next step.',
    note: 'Participation and registration are not confirmed. These are potential work areas, subject to the approved design—not completed capabilities.',
  },
];
