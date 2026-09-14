export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  short: string;
  description: string;
  contributions: string[];
  stack: string[];
  metrics?: Metric[];
  paper?: string;
  status: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'continuum-robot',
    title: 'Real-Time Perception for Continuum Surgical Robots',
    eyebrow: 'Medical Robotics · Real-Time AI',
    short: 'Low-latency multimodal reconstruction combining fluoroscopic segmentation, tracking, and robot encoders.',
    description:
      'An end-to-end real-time perception system for continuum surgical robots that fuses TensorRT-accelerated fluoroscopic segmentation, optical tracking data, and robot encoder inputs to reconstruct the 3D robot shape at clinical latency.',
    contributions: [
      'Architected the full multimodal perception pipeline integrating fluoroscopic segmentation, NDI optical tracking, and robot encoder data.',
      'Deployed TensorRT-accelerated segmentation within NVIDIA Isaac ROS/NITROS for sub-50 ms end-to-end processing.',
      'Designed the ROS 2 system architecture for real-time data fusion and 3D reconstruction.',
      'Validated reconstruction accuracy on cadaveric and phantom data.'
    ],
    stack: ['PyTorch', 'TensorRT', 'CUDA', 'ROS 2', 'NVIDIA Isaac ROS/NITROS', 'Optical Tracking', 'Sensor Fusion', 'C++', 'Python'],
    metrics: [
      { value: '0.68 mm', label: '3D reconstruction error' },
      { value: '47 ms', label: 'end-to-end latency' },
      { value: '~21 Hz', label: 'system update rate' }
    ],
    status: 'Ongoing',
    featured: true
  },
  {
    slug: 'carpa',
    title: 'C-Arm Real-Time Positioning Assistant (CARPA)',
    eyebrow: 'Robotics · Surgical Imaging',
    short: 'A 6-DoF C-arm positioning-guidance system that reduces trial-and-error fluoroscopy through kinematic calibration and real-time pose feedback.',
    description:
      'CARPA provides real-time 6-DoF guidance for C-arm positioning using geometric calibration, forward and inverse kinematics, optical tracking, and a Unity visualization interface, eliminating the need for iterative X-ray shots during positioning.',
    contributions: [
      'Developed the geometric calibration and forward/inverse kinematics model for the C-arm.',
      'Integrated NDI Polaris optical tracking for real-time C-arm pose estimation.',
      'Built the Unity visualization and guidance interface for the positioning assistant.',
      'Designed and conducted a 12-participant user study validating the system.'
    ],
    stack: ['Kinematics', 'Inverse Kinematics', 'ROS 2', 'Unity', 'NDI Polaris', 'C-arm Calibration', 'C++', 'C#'],
    metrics: [
      { value: '87.2%', label: 'reduction in X-ray usage' },
      { value: '72.8%', label: 'reduction in perceived workload' },
      { value: '6.8 mm', label: 'translation error norm' }
    ],
    status: 'Published',
    featured: true
  },
  {
    slug: 'xguidear',
    title: 'X-GuideAR: Fluoroscopic AR Navigation',
    eyebrow: 'AR/XR · Fluoroscopic Navigation',
    short: 'Augmented-reality guidance on HoloLens 2 for reducing radiation during S2AI screw placement.',
    description:
      'X-GuideAR is a real-time AR system that overlays DRR-based fluoroscopic guidance on HoloLens 2 to help surgeons place S2AI screws without repeated X-ray shots. The system integrates C-arm calibration, CUDA-accelerated DRR generation, and ZeroMQ for low-latency communication.',
    contributions: [
      'Led system design and integration of C-arm calibration, HoloLens 2 tracking, and real-time DRR generation.',
      'Implemented CUDA-accelerated DRR generation for real-time fluoroscopic rendering.',
      'Developed the Unity AR overlay and HoloLens visualization pipeline.',
      'Designed and ran an 8-surgeon expert evaluation study.'
    ],
    stack: ['HoloLens 2', 'Unity', 'CUDA', 'DRR', 'C-arm Calibration', 'ZeroMQ', 'Fluoroscopy', 'C++', 'C#'],
    metrics: [
      { value: '62.3%', label: 'reduction in X-ray usage' },
      { value: '5.9→12.95 mm', label: 'breach-free screw diameter' },
      { value: '8', label: 'expert-surgeon trajectories evaluated' }
    ],
    paper: 'https://arxiv.org/abs/2607.10873',
    status: 'Under review / preprint',
    featured: true
  },
  {
    slug: 'mri-registration',
    title: 'MRI-to-Fluoroscopy 2D–3D Registration',
    eyebrow: 'Medical Image Analysis · Registration',
    short: 'End-to-end multimodal registration combining MRI segmentation, MRI-to-CT synthesis, DRR generation, and multi-view fluoroscopic registration.',
    description:
      'An end-to-end framework that registers preoperative MRI to intraoperative fluoroscopy by sequentially applying U-Net segmentation of pelvic anatomy, cGAN-based MRI-to-CT synthesis, DRR generation, and multi-view 2D–3D intensity-based registration.',
    contributions: [
      'Co-led framework design and integration of segmentation, synthesis, and registration components.',
      'Developed U-Net segmentation for MRI pelvic anatomy.',
      'Integrated the cGAN MRI-to-CT synthesis module.',
      'Validated the full pipeline on cadaveric data with multi-view fluoroscopy.'
    ],
    stack: ['U-Net', 'cGAN', 'DRR', '2D–3D Registration', 'PyTorch', 'Python', 'C++'],
    metrics: [
      { value: '2.4 ± 1.0 mm', label: 'translation error' },
      { value: '1.6 ± 0.8°', label: 'rotation error' }
    ],
    paper: 'https://doi.org/10.1007/s11548-025-03426-w',
    status: 'Published',
    featured: true
  },
  {
    slug: 'onfh',
    title: 'MRI Segmentation & Localization for Osteonecrosis',
    eyebrow: 'Medical Imaging · Deep Learning',
    short: 'Segmentation and registration for localizing MRI-visible osteonecrotic lesions in intervention-compatible imaging.',
    description:
      'A deep-learning pipeline for segmenting femur, pelvis, and osteonecrotic lesions in MRI and registering them to intraoperative imaging to enable visualization during intervention. Includes 2D and 3D U-Net architectures.',
    contributions: [
      'Designed 2D/3D U-Net segmentation models for femur, pelvis, and necrotic lesion segmentation.',
      'Developed the registration pipeline to align MRI segmentations to intraoperative imaging.',
      'Evaluated segmentation and registration accuracy on clinical MRI data.'
    ],
    stack: ['U-Net', 'PyTorch', 'MRI', '2D–3D Registration', 'Python'],
    metrics: [
      { value: '0.93', label: 'femur Dice score' },
      { value: '0.91', label: 'pelvis Dice score' }
    ],
    paper: 'https://doi.org/10.1080/21681163.2022.2157329',
    status: 'Published',
    featured: false
  },
  {
    slug: 'xray-depth',
    title: 'Single-View X-Ray Depth Estimation',
    eyebrow: 'Medical AI · Depth Estimation',
    short: 'Learning-based depth estimation from single X-ray images using synthetic data and registered real fluoroscopy.',
    description:
      'A DINO–DPT-based network for estimating depth from a single X-ray image, trained on a large synthetic dataset of X-ray/depth pairs generated via CUDA-accelerated DRR and ray casting, with additional real fluoroscopy supervision from CT-derived depth maps recovered through 2D–3D registration.',
    contributions: [
      'Designed the synthetic data generation pipeline using CUDA-accelerated DRR and ray casting to produce 11,000 X-ray/depth pairs.',
      'Developed the 2D–3D registration pipeline to recover CT-derived depth supervision for 500+ real X-rays.',
      'Adapted the DINO–DPT architecture for X-ray depth estimation.'
    ],
    stack: ['DINO', 'DPT', 'PyTorch', 'CUDA', 'DRR', 'Ray Casting', '2D–3D Registration', 'Python'],
    metrics: [
      { value: '11,000', label: 'synthetic X-ray/depth pairs' },
      { value: '500+', label: 'real X-rays with CT-derived supervision' }
    ],
    status: 'Ongoing',
    featured: true
  },
  {
    slug: 'pengwin',
    title: 'PENGWIN Pelvic Fracture AI Benchmark',
    eyebrow: 'Medical Imaging · Benchmarking',
    short: 'A multimodal CT/X-ray pelvic-fracture segmentation benchmark and MICCAI challenge series.',
    description:
      'PENGWIN is a large-scale benchmark and MICCAI challenge series for pelvic fracture segmentation across CT and X-ray, spanning 48,600 simulated X-rays in the 2024 challenge and expanding to 500 CT cases with 340 participants worldwide.',
    contributions: [
      'Co-organized MICCAI PENGWIN 2024 and 2026 challenges.',
      'Built data and evaluation infrastructure for the benchmark.',
      'Contributed to the multimodal dataset design covering CT and simulated X-ray.'
    ],
    stack: ['CT', 'X-ray', 'Segmentation', 'Python', 'Docker'],
    metrics: [
      { value: '48,600', label: 'simulated X-rays (2024 benchmark)' },
      { value: '500', label: 'CT cases (expanded challenge)' },
      { value: '340', label: 'participants worldwide' }
    ],
    paper: 'https://doi.org/10.1109/TMI.2025.3650126',
    status: 'Published',
    featured: false
  },
  {
    slug: 'ar-tracking',
    title: 'Device-Agnostic Multi-Sensor Tracking for AR',
    eyebrow: 'AR/XR · Tracking',
    short: 'Multi-view tracking and pose optimization using HoloLens 2, optical trackers, dynamic scene graphs, and pose-graph optimization.',
    description:
      'A device-agnostic framework for surgical tool tracking in AR that combines HoloLens 2 and optical tracker observations through a dynamic scene graph and pose-graph optimization to reduce tracking error and loss rate across heterogeneous sensors.',
    contributions: [
      'Developed the dynamic scene graph for multi-sensor tracking state management.',
      'Implemented pose-graph optimization for fusing HoloLens 2 and optical tracker observations.',
      'Evaluated tracking accuracy and loss rate in surgical AR scenarios.'
    ],
    stack: ['HoloLens 2', 'Unity', 'Pose-Graph Optimization', 'Optical Tracking', 'C#', 'C++'],
    metrics: [
      { value: '~80%', label: 'reduction in translational error' },
      { value: '30%', label: 'reduction in tracking-loss rate' }
    ],
    paper: 'https://doi.org/10.1109/VR67842.2026.00087',
    status: 'Published',
    featured: false
  },
  {
    slug: 'arthroscopy',
    title: 'AR Arthroscopy Reconstruction & Guidance',
    eyebrow: 'Computer Vision · AR/XR',
    short: 'Vision-based arthroscopic reconstruction and AR guidance using localization, depth estimation, and 3D Gaussian Splatting.',
    description:
      'An AR guidance pipeline for arthroscopy that combines visual localization, monocular depth estimation, and 3D Gaussian Splatting to reconstruct the articular surface and overlay guidance in real time.',
    contributions: [
      'Contributed to the integration of visual localization, depth estimation, and 3DGS reconstruction.',
      'Evaluated reconstruction quality using RMSE, PSNR, and SSIM metrics.',
      'Contributed to the AR overlay pipeline for arthroscopy guidance.'
    ],
    stack: ['3D Gaussian Splatting', 'Monocular Depth', 'Visual Localization', 'Unity', 'Python'],
    metrics: [
      { value: '2.21 mm', label: 'reconstruction RMSE' },
      { value: '32.86', label: 'PSNR' },
      { value: '0.89', label: 'SSIM' }
    ],
    paper: 'https://doi.org/10.1049/htl2.12119',
    status: 'Published',
    featured: false
  },
  {
    slug: 'pediametrix',
    title: 'Infant-Head RGB-D Reconstruction & Cranial Measurement',
    eyebrow: 'Industry R&D · Computer Vision',
    short: 'RGB-D 3D reconstruction and automated geometric measurement for infant cranial-shape assessment.',
    description:
      'An end-to-end pipeline developed at PediaMetrix that reconstructs the infant head from RGB-D data and automatically computes cranial shape measurements including head circumference and cranial index, validated across hundreds of clinical cases.',
    contributions: [
      'Co-developed the RGB-D reconstruction pipeline including foreground segmentation, point-cloud generation, multi-frame registration, and bundle adjustment.',
      'Designed automated 3D geometric measurement algorithms for head circumference and cranial index.',
      'Validated the 2D ML cranial-shape pipeline across 445 cases with high correlation to 3D reference.'
    ],
    stack: ['Computer Vision', 'RGB-D', '3D Reconstruction', 'Open3D', 'PyVista', 'Registration', 'Python'],
    metrics: [
      { value: '5.0 mm', label: 'head-circumference MAE' },
      { value: '1.6 pts', label: 'cranial-index MAE' },
      { value: '0.94–0.95', label: 'Spearman correlation (2D validation)' }
    ],
    status: 'Industry R&D',
    featured: false
  }
];
