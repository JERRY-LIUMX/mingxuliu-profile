export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Graduate Research Assistant',
    organization: 'Johns Hopkins University',
    location: 'Baltimore, MD',
    dates: 'Aug. 2023 – Present',
    summary:
      'Ph.D. research at the intersection of medical robotics, computer vision, medical image analysis, augmented reality, and image-guided intervention.',
    bullets: [
      'Continuum Manipulator 3D Sensing:',
      'Architected a real-time multimodal perception pipeline for continuum surgical robots using TensorRT-accelerated fluoroscopic segmentation, optical tracking, robot encoder data, ROS 2, and NVIDIA Isaac ROS/NITROS.',
      'C-Arm Position Guidance:',
      'Developed and validated 6-DoF C-arm kinematics and positioning guidance using geometric calibration, forward/inverse kinematics, optical tracking, and real-time pose estimation; manuscript in preparation.',
      'X-GuideAR:',
      'Led development of a real-time fluoroscopic AR navigation system integrating C-arm calibration, HoloLens tracking, CUDA-accelerated DRR generation, X-ray augmentation, and ZeroMQ communication; reduced X-ray usage by 62.3% and increased breach-free screw diameter from 5.9 mm to 12.95 mm in surgeon evaluation.',
      'MRI-to-Fluoroscopy Registration:',
      'Co-led an end-to-end MRI-to-fluoroscopy registration framework combining U-Net segmentation, cGAN-based MRI-to-CT synthesis, DRR generation, and multi-view 2D–3D registration; achieved 2.4 ± 1.0 mm translation and 1.6 ± 0.8° rotation error in cadaveric evaluation.',
      'ONFH Preoperative Image Analysis:',
      'Developed MRI segmentation and registration methods for osteonecrosis localization, including 2D/3D U-Net segmentation of the femur, pelvis, and necrotic lesions; achieved 0.93 Dice for femur and 0.91 Dice for pelvis.',
      'Pelvic Fracture AI Benchmark:',
      'Built data and evaluation infrastructure for the PENGWIN multimodal pelvic-fracture benchmark and co-organized MICCAI challenges spanning 48,600 simulated X-rays, later expanding to 500 CT cases and 340 participants worldwide.',
      'Device-Agnostic AR Tracking:',
      'Developed a multi-device tracking framework integrating HoloLens 2 and optical trackers through dynamic scene graphs and pose-graph optimization for robust spatial registration and AR guidance.',
      'Medical AR/MR Literature Review & Taxonomy:',
      'Conducted a systematic review of mixed- and augmented-reality applications in medical visualization, synthesizing existing systems, interaction paradigms, and clinical use cases; contributed to a context-aware taxonomy for characterizing AR/MR visualization methods in healthcare.',
      'AR Arthroscopy Reconstruction & Guidance:',
      'Investigated the use of augmented reality to enhance arthroscopic visualization and surgical guidance through articular-surface reconstruction, geometric measurement, image-based localization, and intraoperative AR visualization.',
      'AR-Guided Prostate Biopsy:',
      'Investigated how augmented-reality visual cues affect spatial guidance and needle-placement performance in a prostate-biopsy-inspired phantom task, with the goal of identifying visualization strategies that improve targeting accuracy and procedural usability.'
    ],
    skills: [
      'Medical Robotics', 'Computer Vision', 'Medical Imaging', 'AR/XR',
      'PyTorch', 'TensorRT', 'CUDA', 'ROS 2', 'NVIDIA Isaac ROS/NITROS',
      'Unity', 'HoloLens 2', '2D–3D Registration', 'Optical Tracking',
      'Sensor Fusion', 'C++', 'Python', 'C#'
    ]
  },
  {
    role: 'Research Assistant',
    organization: 'I³R, University of Arkansas',
    location: 'Fayetteville, AR',
    dates: 'Jun. 2026 – Present',
    summary:
      'Research in medical robotics, image-guided intervention, real-time perception, continuum-robot manipulation, and robotic control.',
    bullets: [
      'Single-View X-ray Depth Estimation:',
      'Developing learning-based methods for estimating anatomical depth from single fluoroscopic images using a combination of synthetic and real imaging data; ongoing work focuses on robust depth prediction for image-guided intervention.',
      'Image-Based Surgical Navigation:',
      'Leading development of image-based navigation methods for aligning preoperative anatomical information and surgical plans with intraoperative fluoroscopy to support real-time localization and procedural guidance.',
      'Continuum-Robot Teleoperation:',
      'Developing and evaluating image-guided teleoperation for steerable continuum robots in orthopedic procedures, integrating real-time perception, navigation, and operator visualization in cadaveric experiments.',
      'Continuum-Robot Control & Automation:',
      'Developing integrated perception and control methods for continuum-robot systems, combining robotic actuation, sensing, and real-time feedback toward increasingly automated execution of image-guided surgical tasks.'
    ],
    skills: [
      'Medical Robotics', 'Robot Perception', 'Depth Estimation',
      '2D–3D Registration', 'ROS 2', 'TensorRT', 'CUDA',
      'UR10e', 'Cartesian Control', 'Force Control', 'Continuum Robotics'
    ]
  },
  {
    role: 'Computer Vision Engineer',
    organization: 'PediaMetrix',
    location: 'Rockville, MD',
    dates: 'Sep. 2022 – Jul. 2023',
    summary:
      'Industry R&D in computer vision, RGB-D 3D reconstruction, and automated cranial-shape measurement.',
    bullets: [
      'Co-developed an end-to-end infant-head RGB-D reconstruction pipeline combining deep-learning foreground segmentation, point-cloud generation, multi-frame registration, bundle adjustment, and geometric post-processing.',
      'Designed automated 3D geometric measurement algorithms, achieving 5.0 mm MAE (1.1%) in head circumference and 1.6-point MAE (1.9%) in cranial index.',
      'Validated and refined a 2D computer-vision/ML cranial-shape measurement pipeline across 445 cases, achieving 0.94–0.95 Spearman correlation with 3D reference measurements; results were presented at Pediatric Academic Societies 2023.'
    ],
    skills: [
      'Computer Vision', 'RGB-D', '3D Reconstruction',
      'Open3D', 'PyVista', 'Registration', 'Python'
    ]
  }
];
