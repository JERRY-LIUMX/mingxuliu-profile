export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  status?: string;
  url: string;
  doi?: string;
  tags: string[];
  featured: boolean;
}

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'The Role of Mixed and Augmented Reality in Medical Visualization: Literature Review and A Context-Aware Taxonomy',
    authors: 'Xinrui Zou, Mingxu Liu, Hongchao Shu, Ruixing Liang, Mathias Unberath, Alejandro Martin-Gomez',
    venue: 'IEEE International Symposium on Mixed and Augmented Reality (ISMAR)',
    status: 'Accepted',
    url: 'https://arxiv.org/abs/2608.27644',
    tags: ['AR/XR', 'Medical Visualization'],
    featured: false
  },
  {
    year: 2026,
    title: 'Visual Cue Interactions in AR-Guided Needle Insertion: A Prostate Biopsy-Inspired Phantom Study',
    authors: 'Xinrui Zou, Mingxu Liu, Thomas T. Jones, Braden Millan, Sandeep Gurram, Peter A. Pinto, Raisa Z. Freidlin, Alejandro Martin-Gomez',
    venue: 'IEEE Transactions on Visualization and Computer Graphics (TVCG)',
    url: 'https://arxiv.org/abs/2608.27620',
    tags: ['AR/XR', 'Image-Guided Intervention'],
    featured: false
  },
  {
    year: 2026,
    title: 'X-GuideAR: An Augmented Reality Framework to Mitigate Radiation Exposure during Fluoroscopic Guidance',
    authors: 'Mingxu Liu, Zixuan Liu, Ruchen Cai, Yu-Chen Ku, Suxi Gu, Amit Jain, Alejandro Martin-Gomez, Mehran Armand',
    venue: 'International Journal of Computer Assisted Radiology and Surgery',
    status: 'Under review / preprint',
    url: 'https://arxiv.org/abs/2607.10873',
    tags: ['AR/XR', 'Fluoroscopy', 'Image-Guided Intervention'],
    featured: true
  },
  {
    year: 2026,
    title: 'Extend Your Horizon: A Device-Agnostic Surgical Tool Tracking Framework with Multi-View Optimization for Augmented Reality',
    authors: 'Jiaming Zhang, Mingxu Liu, Hongchao Shu, Ruixing Liang, Yihao Liu, Ojas Taskar, Amir Kheradmand, Mehran Armand, Alejandro Martin-Gomez',
    venue: 'IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR)',
    doi: '10.1109/VR67842.2026.00087',
    url: 'https://doi.org/10.1109/VR67842.2026.00087',
    tags: ['AR/XR', 'Tracking'],
    featured: false
  },
  {
    year: 2026,
    title: 'Benchmark of Segmentation Techniques for Pelvic Fracture in CT and X-Ray: Summary of the PENGWIN 2024 Challenge',
    authors: 'Yudi Sang, Yanzhen Liu, Sutuke Yibulayimu, Yunning Wang, Benjamin D. Killeen, Mingxu Liu, et al.',
    venue: 'IEEE Transactions on Medical Imaging',
    doi: '10.1109/TMI.2025.3650126',
    url: 'https://doi.org/10.1109/TMI.2025.3650126',
    tags: ['Medical Imaging', 'Benchmarking'],
    featured: true
  },
  {
    year: 2025,
    title: 'DualVision ArthroNav: Investigating Opportunities to Enhance Localization and Reconstruction in Image-Based Arthroscopy Navigation via External Cameras',
    authors: 'Hongchao Shu, Lalithkumar Seenivasan, Mingxu Liu, Yunseo Hwang, Yu-Chun Ku, Jonathan Knopf, Alejandro Martin-Gomez, Mehran Armand, Mathias Unberath',
    venue: 'arXiv preprint',
    url: 'https://arxiv.org/abs/2511.10699',
    tags: ['Computer Vision', 'AR/XR'],
    featured: false
  },
  {
    year: 2025,
    title: 'End-to-End 2D/3D Registration from Pre-Operative MRI to Intra-Operative Fluoroscopy for Orthopedic Procedures',
    authors: 'Ping-Cheng Ku†, Mingxu Liu†, Robert Grupp, Andrew Harris, Julius K. Oni, Simon C. Mears, Alejandro Martin-Gomez, Mehran Armand',
    venue: 'International Journal of Computer Assisted Radiology and Surgery',
    status: '† Equal contribution',
    doi: '10.1007/s11548-025-03426-w',
    url: 'https://doi.org/10.1007/s11548-025-03426-w',
    tags: ['Medical Imaging', 'Registration', 'Image-Guided Intervention'],
    featured: true
  },
  {
    year: 2025,
    title: 'Seamless Augmented Reality Integration in Arthroscopy: A Pipeline for Articular Reconstruction and Guidance',
    authors: 'Hongchao Shu, Mingxu Liu, Lalithkumar Seenivasan, Suxi Gu, Ping-Cheng Ku, Jonathan Knopf, Russell Taylor, Mathias Unberath',
    venue: 'Healthcare Technology Letters',
    doi: '10.1049/htl2.12119',
    url: 'https://doi.org/10.1049/htl2.12119',
    tags: ['AR/XR', 'Computer Vision'],
    featured: false
  },
  {
    year: 2024,
    title: 'StraightTrack: Towards Mixed Reality Navigation System for Percutaneous K-Wire Insertion',
    authors: 'Han Zhang, Benjamin D. Killeen, Yu-Chun Ku, Lalithkumar Seenivasan, Yuxuan Zhao, Mingxu Liu, Yue Yang, Suxi Gu, Alejandro Martin-Gomez, Russell H. Taylor, Greg Osgood, Mathias Unberath',
    venue: 'Healthcare Technology Letters',
    doi: '10.1049/htl2.12103',
    url: 'https://doi.org/10.1049/htl2.12103',
    tags: ['AR/XR', 'Image-Guided Intervention'],
    featured: false
  },
  {
    year: 2023,
    title: 'Towards Visualizing Early-Stage Osteonecrosis Using Intraoperative Imaging Modalities',
    authors: 'Mingxu Liu, Alejandro Martin-Gomez, Julius K. Oni, Simon C. Mears, Mehran Armand',
    venue: 'Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization',
    doi: '10.1080/21681163.2022.2157329',
    url: 'https://doi.org/10.1080/21681163.2022.2157329',
    tags: ['Medical Imaging', 'Deep Learning'],
    featured: true
  }
];
