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
      'Architected real-time multimodal perception for continuum surgical robots using TensorRT-accelerated fluoroscopic segmentation, optical tracking, robot encoder data, ROS 2, and NVIDIA Isaac ROS/NITROS; achieved 0.68 mm reconstruction error at 47 ms latency.',
      'Developed and validated 6-DoF C-arm kinematics and positioning guidance using geometric calibration, forward/inverse kinematics, optical tracking, and real-time pose estimation; reduced X-ray usage by 87.2% and perceived workload by 72.8% in a 12-participant study.',
      'Led development of a real-time fluoroscopic AR navigation system integrating C-arm calibration, HoloLens tracking, CUDA-accelerated DRR generation, X-ray augmentation, and ZeroMQ communication; reduced X-ray usage by 62.3% and increased breach-free screw diameter from 5.9 mm to 12.95 mm in surgeon evaluation.',
      'Co-led an MRI-to-fluoroscopy registration framework combining U-Net segmentation, cGAN-based MRI-to-CT synthesis, DRR generation, and multi-view 2D–3D registration; achieved 2.4 ± 1.0 mm translation and 1.6 ± 0.8° rotation error in cadaveric evaluation.',
      'Developed MRI segmentation and registration methods for osteonecrosis localization, including 2D/3D U-Net segmentation of femur, pelvis, and necrotic lesions; achieved 0.93 Dice for femur and 0.91 Dice for pelvis.',
      'Built data and evaluation infrastructure for the PENGWIN multimodal pelvic-fracture benchmark and co-organized MICCAI challenges spanning 48,600 simulated X-rays, later 500 CT cases, and 340 participants worldwide.',
      'Contributed to AR/XR work involving multi-device tracking, dynamic scene graphs, pose-graph optimization, arthroscopic reconstruction, mixed-reality navigation, and visualization.'
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
      'Developing DINO–DPT single-view X-ray depth estimation; built 11,000 synthetic X-ray/depth pairs with CUDA-accelerated DRR and ray casting and 500+ real X-rays with CT-derived depth supervision recovered through 2D–3D registration.',
      'Leading development of CT-to-fluoroscopy 2D–3D registration and surgical localization, aligning preoperative CT segmentations and surgical plans with intraoperative fluoroscopy.',
      'Developed and evaluated image-guided teleoperation and continuum-robot manipulation for femoral-head core decompression, integrating preoperative planning, real-time manipulator perception, and visualization for steerable cadaveric drilling.',
      'Developing a robot-control and system-integration stack combining UR10e Cartesian/force control, force–torque sensing, custom continuum-robot actuation, multimodal perception, and steerable-manipulator control toward automated execution of registered surgical plans.'
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
