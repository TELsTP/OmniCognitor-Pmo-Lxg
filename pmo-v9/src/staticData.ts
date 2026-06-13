import { Country, Sector, ProjectPhase, PMOTask, Milestone, SOPArticle, PMOMeeting, SyncConnectionState, DiagnosticPriceItem } from "./types";

export interface TestMenuItem {
  id: string;
  category: string;
  test: string;
  costSAR: number;
  priceSAR: number;
  defaultVolumeY1: number;
  saudiMarketVol: number;
  estimatedMarketShare: number;
}

export interface YearProjection {
  yearName: string;
  revenueM: number;
  ebitdaM: number;
  marginPct: number;
  testsK: number;
  countriesCount: number;
}

export interface RoomData {
  id: string;
  name: string;
  arabicName: string;
  areaM2: number;
  pressure: string; // e.g. "-35 Pa", "Positive"
  temp: string; // e.g. "25°C"
  classType: string; // BSL-3 / BSL-2 / Non-Clinical
  description: string;
  equipment: string[];
  sops: string[];
}

export interface TAWASOL_MENA_Product {
  catalogNo: string;
  productName: string;
  solvent: string;
  concentration: string;
  pkg: string;
}

export interface StaffRoleProp {
  id: string;
  role: string;
  count: number;
  baseSalarySAR: number;
  description: string;
}

// 1. Year 1 Saudi LC-MS/MS Launch Test Menu
export const SAUDI_YEAR1_LAUNCH_MENU: TestMenuItem[] = [
  { id: "tm-1", category: "Immunosuppressive TDM", test: "Tacrolimus", costSAR: 50, priceSAR: 350, defaultVolumeY1: 8000, saudiMarketVol: 350000, estimatedMarketShare: 2.3 },
  { id: "tm-2", category: "Immunosuppressive TDM", test: "Cyclosporine", costSAR: 60, priceSAR: 450, defaultVolumeY1: 2500, saudiMarketVol: 80000, estimatedMarketShare: 3.1 },
  { id: "tm-3", category: "Immunosuppressive TDM", test: "Everolimus", costSAR: 80, priceSAR: 650, defaultVolumeY1: 1200, saudiMarketVol: 35000, estimatedMarketShare: 3.4 },
  { id: "tm-4", category: "Steroid Hormones", test: "Testosterone LC-MS", costSAR: 50, priceSAR: 250, defaultVolumeY1: 12000, saudiMarketVol: 500000, estimatedMarketShare: 2.4 },
  { id: "tm-5", category: "Steroid Hormones", test: "17-OH Progesterone", costSAR: 60, priceSAR: 350, defaultVolumeY1: 3500, saudiMarketVol: 120000, estimatedMarketShare: 2.9 },
  { id: "tm-6", category: "Steroid Hormones", test: "Aldosterone", costSAR: 110, priceSAR: 650, defaultVolumeY1: 2000, saudiMarketVol: 60000, estimatedMarketShare: 3.3 },
  { id: "tm-7", category: "Catecholamines", test: "Plasma Metanephrines", costSAR: 140, priceSAR: 950, defaultVolumeY1: 3000, saudiMarketVol: 100000, estimatedMarketShare: 3.0 },
  { id: "tm-8", category: "Catecholamines", test: "Catecholamines Panel", costSAR: 160, priceSAR: 1200, defaultVolumeY1: 1000, saudiMarketVol: 30000, estimatedMarketShare: 3.3 },
  { id: "tm-9", category: "ICP-MS", test: "Zinc Plasma", costSAR: 40, priceSAR: 250, defaultVolumeY1: 5000, saudiMarketVol: 150000, estimatedMarketShare: 3.3 },
  { id: "tm-10", category: "ICP-MS", test: "Lead", costSAR: 60, priceSAR: 350, defaultVolumeY1: 3000, saudiMarketVol: 80000, estimatedMarketShare: 3.8 },
  { id: "tm-11", category: "Anti-Epileptic TDM", test: "Levetiracetam", costSAR: 50, priceSAR: 350, defaultVolumeY1: 4000, saudiMarketVol: 180000, estimatedMarketShare: 2.2 },
  { id: "tm-12", category: "Anti-Epileptic TDM", test: "Lamotrigine", costSAR: 60, priceSAR: 450, defaultVolumeY1: 2000, saudiMarketVol: 70000, estimatedMarketShare: 2.9 },
  { id: "tm-13", category: "Antifungal TDM", test: "Voriconazole", costSAR: 90, priceSAR: 700, defaultVolumeY1: 1500, saudiMarketVol: 50000, estimatedMarketShare: 3.0 },
  { id: "tm-14", category: "Antifungal TDM", test: "Posaconazole", costSAR: 110, priceSAR: 900, defaultVolumeY1: 700, saudiMarketVol: 20000, estimatedMarketShare: 3.5 },
  
  // Most Profitable Initial Menu (Functional Medicine)
  { id: "tm-prof-1", category: "Functional Medicine", test: "Organic Acids Panel", costSAR: 71, priceSAR: 650, defaultVolumeY1: 5000, saudiMarketVol: 150000, estimatedMarketShare: 3.3 },
  { id: "tm-prof-2", category: "Functional Medicine", test: "SCFA Panel (Short-Chain Fatty Acids)", costSAR: 90, priceSAR: 750, defaultVolumeY1: 5000, saudiMarketVol: 120000, estimatedMarketShare: 4.2 },
  { id: "tm-prof-3", category: "Functional Medicine", test: "Amino Acid Panel", costSAR: 129, priceSAR: 950, defaultVolumeY1: 5000, saudiMarketVol: 100000, estimatedMarketShare: 5.0 },
  { id: "tm-prof-4", category: "Functional Medicine", test: "Tryptophan/Kynurenine Panel", costSAR: 129, priceSAR: 950, defaultVolumeY1: 5000, saudiMarketVol: 80000, estimatedMarketShare: 6.25 },
  { id: "tm-prof-5", category: "Functional Medicine", test: "Lipidomics Panel", costSAR: 154, priceSAR: 1100, defaultVolumeY1: 5000, saudiMarketVol: 90000, estimatedMarketShare: 5.5 },
  { id: "tm-prof-pkg", category: "Functional Medicine Offer", test: "Functional Medicine & Metabolic Health Package", costSAR: 573, priceSAR: 4200, defaultVolumeY1: 5000, saudiMarketVol: 20000, estimatedMarketShare: 25.0 }
];

// 2. 10-Year Macro-Economic Projection P&L
export const TEN_YEARS_PROJECTION: YearProjection[] = [
  { yearName: "2026 (Y1)", revenueM: 23.7, ebitdaM: -0.8, marginPct: -4.1, testsK: 120, countriesCount: 2 },
  { yearName: "2027 (Y2)", revenueM: 50.2, ebitdaM: 11.2, marginPct: 22.3, testsK: 243, countriesCount: 3 },
  { yearName: "2028 (Y3)", revenueM: 90.1, ebitdaM: 27.1, marginPct: 30.1, testsK: 418, countriesCount: 5 },
  { yearName: "2029 (Y4)", revenueM: 137.7, ebitdaM: 48.6, marginPct: 26.3, testsK: 612, countriesCount: 7 },
  { yearName: "2030 (Y5)", revenueM: 190.3, ebitdaM: 76.9, marginPct: 40.4, testsK: 809, countriesCount: 8 },
  { yearName: "2031 (Y6)", revenueM: 238.8, ebitdaM: 106.0, marginPct: 34.2, testsK: 971, countriesCount: 9 },
  { yearName: "2032 (Y7)", revenueM: 285.3, ebitdaM: 136.9, marginPct: 48.0, testsK: 1111, countriesCount: 9 },
  { yearName: "2033 (Y8)", revenueM: 330.7, ebitdaM: 169.0, marginPct: 39.9, testsK: 1232, countriesCount: 9 },
  { yearName: "2034 (Y9)", revenueM: 373.0, ebitdaM: 197.9, marginPct: 41.3, testsK: 1330, countriesCount: 9 },
  { yearName: "2035 (Y10)", revenueM: 412.4, ebitdaM: 225.8, marginPct: 54.7, testsK: 1407, countriesCount: 9 }
];

// 3. Lab Floor Plan Interactive Rooms
export const LAB_ROOMS: RoomData[] = [
  {
    id: "room-command",
    name: "Emergency Command Center",
    arabicName: "مركز القيادة الطارئة",
    areaM2: 19.4,
    pressure: "Ambient",
    temp: "22°C",
    classType: "Non-Clinical",
    description: "Central command room providing physical workspace for lab coordinators, remote telemetry, IT servers, and real-time cold-chain logging displays.",
    equipment: ["Surveillance Display Rails", "LIMS Server Rack", "GPS Transport Tracking Receiver"],
    sops: ["SOP-LAB-COMM-01: Incident Command Response Protocol"]
  },
  {
    id: "room-pcr",
    name: "PCR Amplification Room",
    arabicName: "غرفة تضاعف الـ PCR",
    areaM2: 24.5,
    pressure: "-25 Pa (Negative)",
    temp: "20°C",
    classType: "BSL-3",
    description: "Negative pressure amplification laboratory housing high-throughput thermal cyclers. Restricts biosafety threats from aerosol leakage.",
    equipment: ["BioRad CFX 96 Touch Real-Time PCR", "Thermo Microplates Shakers", "Silicone Sealing Mats"],
    sops: ["SOP-PROC-PCR: Thermal Calibration & Verification Cycles"]
  },
  {
    id: "room-prep",
    name: "Specimen Preparation & Nucleic Acid Isolation",
    arabicName: "تحضير العينات وعزل الأحماض النووية",
    areaM2: 32.2,
    pressure: "-35 Pa (Negative)",
    temp: "21°C",
    classType: "BSL-3",
    description: "Highly restricted BSL-3 laboratory containment zone designed for raw specimen extraction, pipetting, and initial lysis processing.",
    equipment: ["Automatic Magnetic Beads Extractor (96)", "Hamilton Microlab STAR STAR-10", "Diatomaceous Earth SLE vacuum plates"],
    sops: ["SOP-CLIN-BSL3: Containment Protocols & Negative Suction"]
  },
  {
    id: "room-reagent",
    name: "Reagent Storage & Reagent Preparation",
    arabicName: "مخزن وتحضير الكواشف",
    areaM2: 18.0,
    pressure: "+15 Pa (Positive)",
    temp: "19°C",
    classType: "BSL-2 / Cleanroom",
    description: "Positive pressure cleanroom designed specifically to prevent particulate matter and external amplicon contaminants from compromising virgin testing enzymes.",
    equipment: ["Ultra-low Refrigerating Units (-70°C)", "DiSigns IVD Standard Kits Vault", "HLB/WCX extraction beads dispenser"],
    sops: ["SOP-LOG-COLD: Cold chain refrigeration storage and transport logs"]
  },
  {
    id: "room-instruments",
    name: "Clinical Mass Spectrometry Room",
    arabicName: "مختبر الكشف بالطيف الكتلي",
    areaM2: 45.0,
    pressure: "-20 Pa (Negative)",
    temp: "24°C",
    classType: "BSL-3",
    description: "Pratice-changing mass spec analytical wing. Accommodates multi-technology organic and inorganic diagnostic platforms under strict temperature uniformities.",
    equipment: ["2 x SCIEX Citrine Triple Quad MD", "3 x SCIEX 4500MD LC-MS/MS System", "2 x Agilent 7800 ICP-MS", "Centralized N2 Generator (250K)"],
    sops: ["SOP-PROC-CALIB: Mass Spectrometry calibration and tuning protocols"]
  },
  {
    id: "room-microbiology",
    name: "Microbiology & Serology Wing",
    arabicName: "مختبر علم الكائنات الدقيقة والمصلية",
    areaM2: 38.6,
    pressure: "-15 Pa (Negative)",
    temp: "22°C",
    classType: "BSL-2",
    description: "BSL-2 clinical space processing standard fluid pathology, immunology assays, hematology and serological screening workflows.",
    equipment: ["Power Link Automation Beckman Coulter Link", "DxH 800 Hematology Analyzer", "ACL Elite Coagulation system", "Helios Auto IFA Processor"],
    sops: ["SOP-CLIN-BSL2: Standard BSL-2 Biosafety Guidelines"]
  },
  {
    id: "room-accession",
    name: "Sample Receiving & Phlebotomy Areas",
    arabicName: "منطقة استقبال العينات وسحب الدم",
    areaM2: 50.0,
    pressure: "Ambient",
    temp: "23°C",
    classType: "Non-Clinical",
    description: "Primary patient-facing and logistics intake area. Barcode-driven accessioning guarantees robust tracking from the moment a sample arrives.",
    equipment: ["Continuous barcode scanning system", "Digital phlebotomy recliners", "Express Custom Clearance documentation portal"],
    sops: ["SOP-ACC-BARC: Barcoded Sample Accessioning & Verification Chain"]
  },
  {
    id: "cairo-pharmacy",
    name: "National Compound Pharmacy Unit (1st in Egypt)",
    arabicName: "الوحدة الوطنية لتحضير الصيدلاني التركيبي الأول بمصر",
    areaM2: 165.0,
    pressure: "+25 Pa (Strict Positive)",
    temp: "20°C",
    classType: "Cleanroom / Class A",
    description: "First certified clinical hospital-standard sterile medicinal compounding laboratory in Egypt. Engineered for patient-specific gene therapy delivery, sterile oncology drug mixtures, and biochemical dosage synthesis during clinical diagnostic trials.",
    equipment: ["Class-A Aseptic Cytotoxic isolators", "Formulation Mixing Hoods", "HPLC Chemical Purity Analyzers", "Secure Reagent Disperser Module"],
    sops: ["SOP-CAIRO-CP-01: Sterile Clinical Compounding Guidelines & Cleanroom Gown Protocols"]
  },
  {
    id: "cairo-entrance",
    name: "Biomedical Escalator & Grand Reception Lobby",
    arabicName: "ردهة الاستقبال الكبرى والسلالم الكهربائية",
    areaM2: 340.0,
    pressure: "Ambient",
    temp: "22°C",
    classType: "Non-Clinical",
    description: "High-capacity logistics reception, patient onboarding, and administrative coordination lobby. Housing majestic automated mechanical elevators and escalators to connect the 1,300 m² high-precision diagnosis center.",
    equipment: ["Escalator Safety Grid Controllers", "Dual-Channel Patient Registration Rails", "Automated Barcode Printers & Dispensing Terminals"],
    sops: ["SOP-CAIRO-ENT: High-Capacity Public Intake & Security Compliance Protocols"]
  },
  {
    id: "cairo-molecular",
    name: "High-Throughput Molecular Diagnostics (BSL-3)",
    arabicName: "التشخيص الجزيئي فائق الدقة (BSL-3)",
    areaM2: 220.0,
    pressure: "-35 Pa (Negative)",
    temp: "19°C",
    classType: "BSL-3",
    description: "Negative-pressure genetic screening lab. Outfitted with high-throughput biohazard hoods, airlocks, and extraction arrays for infectious pathogens and molecular viral assays.",
    equipment: ["Hamilton Microlab STARlette robotic pipettes", "Roche LightCycler 480 II systems", "Dual-negative containing airlock exhausting ducts"],
    sops: ["SOP-CAIRO-MD-14: BSL-3 Advanced Nucleic Extraction Containment & Safety Standard"]
  },
  {
    id: "cairo-omics",
    name: "Mass Spectrometry & Advanced Omics Center",
    arabicName: "مركز الطيف الكتلي والأوميكس المتقدم",
    areaM2: 290.0,
    pressure: "-20 Pa (Negative)",
    temp: "21°C",
    classType: "BSL-3",
    description: "State-of-the-art analytical core laboratory featuring triple-quadrupole instruments for newborn screening, endocrine research, toxicological profiles, and metabolic assay validations.",
    equipment: ["4 x SCIEX Citrine Triple Quad MD systems", "3 x Agilent 7800 ICP-MS Arrays", "Continuous Liquid Nitrogen Gas Generators"],
    sops: ["SOP-CAIRO-MS-05: Mass Spectrometer Multi-Instrument Tuning & Calibra Protocols"]
  },
  {
    id: "cairo-biobank",
    name: "Sovereign Cryogenic Biobank & Cold-Vault",
    arabicName: "البنك الحيوي السيادي ومخازن التبريد الكبرى",
    areaM2: 155.0,
    pressure: "Ambient",
    temp: "18°C",
    classType: "BSL-2",
    description: "National repository for cryogenic biological sample archival, supporting longitudinal studies and vaccine diagnostic validations. Protected by triple electrical redundancy grids.",
    equipment: ["Liquid Nitrogen Cryostatic Vats (-196°C)", "Intelligent Backup Power Generators", "Continuous GSM Remote Temperature Transmitters"],
    sops: ["SOP-CAIRO-BB-02: Sovereign Cryo-Repository Sample Custody & Retrieval Lifecycle"]
  },
  {
    id: "cairo-pathology",
    name: "Clinical Pathology & Mass Screening Core",
    arabicName: "أمراض الدم والكشف الجماعي للعينات",
    areaM2: 130.0,
    pressure: "-15 Pa (Negative)",
    temp: "22°C",
    classType: "BSL-2",
    description: "Automated high-capacity diagnostic conveyor loop for routine chemistry, lipid profiling, and blood screening, directly synchronized with Egyptian national diagnostic baseloads.",
    equipment: ["Beckman Coulter DXI 800 Immunochemical Analyzer", "Diagnostic Tube Decapping Robot S2", "Modular Automated Track conveyor system"],
    sops: ["SOP-CAIRO-PATH-09: Automated Conveyance Sorting & Centrifuge Operational Rules"]
  }
];

// 4. Featured TAWASOL MENA FirstStandard Reference Materials
export const TAWASOL_MENA_PRODUCTS_PRESET: TAWASOL_MENA_Product[] = [
  { catalogNo: "1ST27010-100B", productName: "70 Pesticides Mix Solution", solvent: "Acetone", concentration: "100μg/mL", pkg: "1mL" },
  { catalogNo: "1ST27012-100B", productName: "12 Organochlorine Pesticides Mix Solution", solvent: "Acetone", concentration: "100μg/mL", pkg: "1mL" },
  { catalogNo: "1ST9220-100M", productName: "45 Steroid Hormones Mix Solution", solvent: "Acetonitrile", concentration: "100μg/mL", pkg: "1mL" },
  { catalogNo: "1ST1188-1000H", productName: "18 Phthalate Mix Solution", solvent: "N-Hexane", concentration: "1000μg/mL", pkg: "1mL" },
  { catalogNo: "1ST9224-1000M", productName: "3 Dichlorobenzene Mix Solution", solvent: "Methanol", concentration: "1000μg/mL", pkg: "1mL" },
  { catalogNo: "1ST9284-100M", productName: "10 Quinolones Mix Solution", solvent: "Methanol", concentration: "100μg/mL", pkg: "1mL" }
];

export const BASAL_PMO_TASKS: PMOTask[] = [];

export const INITIAL_MILESTONES: Milestone[] = [
  { id: "m1", country: "Egypt", phase: "Phase 1: Site Prep & Legal", title: "MoHP Legal Approval & Facility Charter", description: "Secure the official governmental reference charter from Cairo MoHP.", targetDate: "2026-02-15", status: "Achieved" },
  { id: "m2", country: "UAE", phase: "Phase 1: Site Prep & Legal", title: "MOHAP Structural Biosafety Licensing", description: "Obtain structural biosafety license with DHA/DOH approvals.", targetDate: "2026-03-01", status: "Achieved" },
  { id: "m3", country: "Saudi Arabia", phase: "Phase 1: Site Prep & Legal", title: "SFDA Import Permit Approval", description: "Secure SFDA customs clearing allowables for SCIEX analytical platforms.", targetDate: "2026-03-20", status: "Achieved" },
  { id: "m4", country: "Egypt", phase: "Phase 2: Procurement & Logistics", title: "UPA Cold Chain Tender Distribution", description: "Publish bid guidelines in alignment with Egypt UPA regulations.", targetDate: "2026-05-10", status: "Achieved" },
  { id: "m5", country: "UAE", phase: "Phase 2: Procurement & Logistics", title: "Vitek & Illumina Sequencer Commisioning", description: "Host calibration check routines in BSL-3 duba/abudhabi wings.", targetDate: "2026-06-15", status: "Pending" },
  { id: "m6", country: "Saudi Arabia", phase: "Phase 3: HR & Specialized Trainings", title: "Clinical Virologists Onboarding", description: "Onboard lead clinicians with 1-month TAWASOL MENA Hub targeted specialized training.", targetDate: "2026-07-01", status: "Pending" }
];

export const INITIAL_SYNC_CHANNELS: Record<string, SyncConnectionState> = {};

export const INITIAL_PMO_MEETINGS: PMOMeeting[] = [];

export const GENETIC_TEST_MENU: DiagnosticPriceItem[] = [
  { id: "gt-1", name: "NIPTune® C", description: "Non Invasive Prenatal Testing - Trisomy 13, 18, 21, sex chromosome aneuploidies; fetus sex determination option available upon request in TRF", tat: "7 - 10 Working days", price: 9000, currency: "SAR" },
  { id: "gt-2", name: "NIPTune® S", description: "Non Invasive Prenatal Testing - Trisomy 13, 18, 21, sex chromosome aneuploidies, autosomal aneuploidies in all other chromosomes as well; fetus sex determination option available upon request in TRF", tat: "7 - 10 Working days", price: 11000, currency: "SAR" },
  { id: "gt-3", name: "ExoSeq® Comp", description: "Whole exome sequencing - with basic clinical report", tat: "6 weeks", price: 20000, currency: "SAR" },
  { id: "gt-4", name: "ExoSeq® CS", description: "Exome Sequencing - Carrier Screening for pathogenic and likely pathogenic variants (VUS when appropriate)", tat: "4 weeks", price: 22000, currency: "SAR" },
  { id: "gt-5", name: "ExoSeq® Gynae", description: "Exome Sequencing- Women's Health - Covering 180 genes", tat: "6 weeks", price: 22000, currency: "SAR" },
  { id: "gt-6", name: "ExoSeq® MNH", description: "Exome Sequencing- men's Health - Covering 180 genes", tat: "6 weeks", price: 22000, currency: "SAR" },
  { id: "gt-7", name: "ExoSeq® Fertility M", description: "Exome Sequencing- Male Infertility & Comprehensive Inflammatory and Autoinflammatory panel- Covering 432 genes", tat: "6 weeks", price: 22000, currency: "SAR" },
  { id: "gt-8", name: "ExoSeq® Fertility F", description: "Exome Sequencing- Female Infertility & Comprehensive Inflammatory and Autoinflammatory pane Covering 400 genes", tat: "6 weeks", price: 22000, currency: "SAR" },
  { id: "gt-9", name: "Eatwellgx™", description: "Consumer genetics product made up of four panels, namely: Vitamin requirements, mineral requirements, detoxification ability and food intolerance", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-10", name: "Fitwellgx™", description: "Consumer genetics product made up of three panels, namely: muscle profile, injury & recovery, recovery nutrition", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-11", name: "Immuwellgx™", description: "Consumer genetics product made up of six panels, namely: ACE2 receptor genes, ACE2 enzyme, Severe SARS viral and Covid19 infections, inflammatory markers, blood oxygenation, trace element levels", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-12", name: "Skinwellgx™", description: "Consumer genetics product made up of six panels, namely: Skin Health, Sunlight Ageing, Acne risk, Predisposition to Dry Skin, Hair Health, Predisposition to Cellulite and Varicose Vein Development, Skin Oxidation Response, Skin Sensitivity, Optimal Skin Nutrition, Alopecia Risk, Predisposition to Male Pattern Baldness", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-13", name: "Treatwellgx™", description: "Consumer genetics product helps to understand how genetics influences your body's response to medications & substance. It also includes traits for hormonal contraceptives and toxicity for analgesics and caffeine.", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-14", name: "Sportswellgx™", description: "Consumer Genetics product that helps Professional Athletes/Sports Personnel explore how genetics may influence body’s response to different exercises and training programs.", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-15", name: "Tracewellgx", description: "Consumer Genetics product that helps clients trace their ethnicity roots and ancestry DNA analysis", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-16", name: "Guardwellgx", description: "Understand how genetics influence risks associated with Endocrinological, Cardiovascular, Metabolic, Immunological and Neurological conditions", tat: "2 weeks", price: 8000, currency: "SAR" },
  { id: "gt-17", name: "OncoSeq C", description: "Read of 12 Genes - BRCA1, BRCA2, BRIP1, CHEK2, ERBB2, APC, MLH1, MSH2, MSH6, MUTYH, PMS2, TP53", tat: "3-4 weeks", price: 10000, currency: "SAR" },
  { id: "gt-18", name: "OncoSeq S", description: "Read of 25 Genes – APC, ATM, BARD1, BRCA1, BRCA2, BRIP1, CDH1, CHEK2, EPCAM, MLH1, MSH2, MSH6, PALB2, PTEN, MUTYH, NF1, NF2, PIK3CA, PMS2, PTCH1, RAD50, RAD51C, RAD51D, STK11, TP53", tat: "3-4 weeks", price: 13000, currency: "SAR" },
  { id: "gt-19", name: "Gut Chex™", description: "Screening of Gut Microbiota by NGS", tat: "10-20 days", price: 16000, currency: "SAR" }
];


// ============================================================
// V9 SEED DATA — Added by Claude Rhythm Advisor Core
// ============================================================

export const SEED_PMO_TASKS: PMOTask[] = [
  {
    id: "task-sa-premises",
    country: "Saudi Arabia",
    sector: "Compliance",
    phase: "Phase 1: Site Prep & Legal",
    title: "Secure Clinical Reference Laboratory Premises — Riyadh",
    description: "Evaluate spatial requirements, commercial zoning approvals, and draft lease terms near KKMC. Target: 450m² with BSL-3 zoning clearance.",
    status: "In Progress",
    assignedTo: ["Eng. Amr Amin", "Dr. Mohamed Amin"],
    dueDate: "2026-06-30",
    progress: 80,
    checklist: [
      { id: "c1", text: "Submit clinical hub requirements to real estate brokers", completed: true },
      { id: "c2", text: "Pre-screen Riyadh corporate zoning clearances", completed: true },
      { id: "c3", text: "Inspect candidate facilities near KKMC", completed: true },
      { id: "c4", text: "Execute final clinical lease and security deposits", completed: false }
    ],
    kpiMetrics: ["Riyadh Premises Selection Progress"],
    raci: {
      responsible: ["Eng. Amr Amin"],
      accountable: ["Dr. Mohamed Amin"],
      consulted: ["Dr. Mostafa AbdelHady"],
      informed: ["Mohamed Ayoub"]
    }
  },
  {
    id: "task-uae-dha",
    country: "UAE",
    sector: "Compliance",
    phase: "Phase 2: Procurement & Logistics",
    title: "Life DX UAE — DHA/MOH Laboratory Licensing Expansion",
    description: "Renew and expand high-complexity testing permits for the Al-Ain annex. LC-MS/MS, ICP-MS, and Molecular high-throughput panels.",
    status: "In Progress",
    assignedTo: ["Dr. Hosam Fouad"],
    dueDate: "2026-07-15",
    progress: 55,
    checklist: [
      { id: "u1", text: "Submit DHA facility variation request", completed: true },
      { id: "u2", text: "Audit cold-chain storage validation logs", completed: true },
      { id: "u3", text: "Finalize staffing ratio compliance reports", completed: false },
      { id: "u4", text: "ICP-MS Critical Gap procurement — source Chinese vendor", completed: false }
    ],
    kpiMetrics: ["Al Ain Audited Core Asset Sets"],
    raci: {
      responsible: ["Dr. Hosam Fouad"],
      accountable: ["Dr. Mustafa AMIN"],
      consulted: ["Dr. Usamah Khalafallah"],
      informed: ["Mohamed Ayoub", "Dr. Sherif Kamal"]
    }
  },
  {
    id: "task-egypt-cairo-launch",
    country: "Egypt",
    sector: "Procurement",
    phase: "Phase 2: Procurement & Logistics",
    title: "Cairo Reference Hub — 33-Branch Network Consolidation",
    description: "Consolidate 33 Cairo Labs branches under unified Tawasol MENA corporate diagnostics entity. ISO accreditation pathway alignment.",
    status: "In Progress",
    assignedTo: ["Dr. Anas Amin", "Mohamed Ayoub"],
    dueDate: "2026-08-01",
    progress: 40,
    checklist: [
      { id: "e1", text: "Legal entity formation under Tawasol MENA umbrella", completed: true },
      { id: "e2", text: "MoHP facility charter — Cairo central hub", completed: true },
      { id: "e3", text: "Map 33 branches to unified LIMS barcode system", completed: false },
      { id: "e4", text: "Cold chain reagents buffer stock — 6-month minimum", completed: false },
      { id: "e5", text: "National Compound Pharmacy — cleanroom commissioning", completed: false }
    ],
    kpiMetrics: ["Cairo Reagents Stockpile Buffer"],
    raci: {
      responsible: ["Dr. Anas Amin"],
      accountable: ["Dr. Mohamed Amin"],
      consulted: ["Dr. Ola Ghaddar"],
      informed: ["Mohamed Ayoub"]
    }
  },
  {
    id: "task-global-lims",
    country: "Global",
    sector: "Logistics",
    phase: "Phase 3: HR & Specialized Trainings",
    title: "LIMS Platform — Unified Barcode & Telemetry Deployment",
    description: "Deploy LDM Healthcare LIMS v5 across all hubs with bidirectional barcoding, calibration records, and electronic pathology reports.",
    status: "Not Started",
    assignedTo: ["Dr. Sherif Kamal", "Mohamed Ayoub"],
    dueDate: "2026-09-01",
    progress: 15,
    checklist: [
      { id: "l1", text: "LIMS vendor contract finalization with LDM Healthcare", completed: false },
      { id: "l2", text: "Server rack installation — Riyadh hub primary node", completed: false },
      { id: "l3", text: "API integration with Cairo LIMS existing infrastructure", completed: false },
      { id: "l4", text: "Staff LIMS training — KSA clinical team (15 personnel)", completed: false }
    ],
    kpiMetrics: ["Annual Patient-Run Demand Volume"]
  },
  {
    id: "task-sciex-procurement",
    country: "Saudi Arabia",
    sector: "Procurement",
    phase: "Phase 2: Procurement & Logistics",
    title: "SCIEX Citrine Triple Quad — 2 Units KSA Procurement",
    description: "Procure and commission 2x SCIEX Citrine Triple Quad MD systems for the Riyadh clinical mass spectrometry wing. ~2.8M SAR.",
    status: "Not Started",
    assignedTo: ["Dr. Mostafa AbdelHady", "Eng. Amr Amin"],
    dueDate: "2026-07-30",
    progress: 10,
    checklist: [
      { id: "s1", text: "SFDA MDEL import permit for SCIEX instruments", completed: false },
      { id: "s2", text: "Negotiate Sciex Middle East distribution pricing", completed: false },
      { id: "s3", text: "N2 generator installation prerequisite — 250K capacity", completed: false },
      { id: "s4", text: "BSL-3 room -20Pa negative pressure certification pre-install", completed: false }
    ]
  },
  {
    id: "task-pmo-platform",
    country: "Global",
    sector: "Compliance",
    phase: "Phase 1: Site Prep & Legal",
    title: "PMO Virtual Office Platform — V9 Vercel Deployment",
    description: "Deploy the Tawasol MENA PMO Lab Portal v9 on Vercel with Firebase backend, seed all steering member accounts, and onboard all 12 pre-vetted authorities.",
    status: "In Progress",
    assignedTo: ["Mohamed Ayoub", "Claude Rhythm Advisor Core"],
    dueDate: "2026-06-13",
    progress: 85,
    checklist: [
      { id: "p1", text: "V8 codebase cleanup and dead-code removal", completed: true },
      { id: "p2", text: "Seed real PMO tasks, KPIs, SOPs, and archive documents", completed: true },
      { id: "p3", text: "Vercel deployment configuration and environment variables", completed: false },
      { id: "p4", text: "Send onboarding message to all 12 steering members", completed: false },
      { id: "p5", text: "Confirm active session login from UAE and KSA leads", completed: false }
    ],
    raci: {
      responsible: ["Mohamed Ayoub"],
      accountable: ["Dr. Sherif Kamal"],
      consulted: ["Claude Rhythm Advisor Core"],
      informed: ["Dr. Mohamed Amin"]
    }
  }
];

export const SEED_ARCHIVE_DOCUMENTS: PMOArchiveDocument[] = [
  {
    id: "arch-001",
    title: "TELsTP_Master_Context_Restoration_v3.pdf",
    category: "Project Setup",
    author: "Mohamed Ayoub",
    timestamp: "2026-03-15T10:00:00Z",
    size: "2.4 MB",
    checksum: "SHA256:a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    description: "Complete TELsTP ecosystem context restoration document covering 101+ GitHub repos, 132 Supabase tables, 50+ deployments. Baseline reference for all AI collaborators.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-002",
    title: "AlBorg_DX_Gulf_Capability_Overview.pdf",
    category: "Project Setup",
    author: "Dr. Mohamed Amin",
    timestamp: "2026-04-01T09:00:00Z",
    size: "1.8 MB",
    checksum: "SHA256:b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7",
    description: "AlBorg DX Gulf capability overview. Largest certified diagnostic subsidiary in the Gulf region under Tawasol MENA. CAP-accredited. Baseline for KSA hub integration.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-003",
    title: "Saudi_MOH_Lab_Standard_v4.pdf",
    category: "Regulatory Certs",
    author: "Dr. Mohamed Amin",
    timestamp: "2026-03-10T11:00:00Z",
    size: "1.2 MB",
    checksum: "SHA256:d8a2f1b3e8c901a2f3b4c5d6e7f8a9b0",
    description: "Official baseline regulatory framework for Saudi Ministry of Health reference laboratory compliance. Biosafety containment targets and air suction differentials.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-004",
    title: "UAE_MOHAP_Clinical_Guidelines.xlsx",
    category: "Regulatory Certs",
    author: "Dr. Hosam Fouad",
    timestamp: "2026-04-15T09:30:00Z",
    size: "850 KB",
    checksum: "SHA256:e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6",
    description: "UAE MOHAP mandatory laboratory screening protocols mapped against clinical diagnostic test menu. DHA/DOH compliance matrix for Al-Ain annex expansion.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-005",
    title: "Al_Ain_Asset_Audit_Report_2026.pdf",
    category: "Project Setup",
    author: "Dr. Hosam Fouad",
    timestamp: "2026-05-10T08:00:00Z",
    size: "3.1 MB",
    checksum: "SHA256:f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7",
    description: "Complete asset audit of Life DX Al-Ain facility. PerkinElmer Qsight active, ICP-MS critical gap identified, Haier Biomedical cold chain validated. 9 asset categories reviewed.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-006",
    title: "Tawasol_10Year_PnL_Projection_v2.xlsx",
    category: "Financial Worksheets",
    author: "Mohamed Ayoub",
    timestamp: "2026-04-20T14:00:00Z",
    size: "1.5 MB",
    checksum: "SHA256:g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8",
    description: "10-year macro-economic projection. Y1: $23.7M revenue / -$0.8M EBITDA. Y10: $412.4M revenue / $225.8M EBITDA. S-Curve penetration ramp model across 9 countries.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-007",
    title: "Cairo_Labs_33Branch_Network_Map.pdf",
    category: "Project Setup",
    author: "Dr. Anas Amin",
    timestamp: "2026-05-01T10:00:00Z",
    size: "2.2 MB",
    checksum: "SHA256:h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9",
    description: "Full network map of Cairo Labs 33 branches across Egypt. ISO-accredited. Currently being consolidated under single Tawasol MENA corporate diagnostics entity.",
    source: "Pre-vetted Setup Baseline"
  },
  {
    id: "arch-008",
    title: "M23M_Backend_Completion_Report.md",
    category: "AI Briefing Output",
    author: "Mohamed Ayoub",
    timestamp: "2026-04-05T20:00:00Z",
    size: "420 KB",
    checksum: "SHA256:i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0",
    description: "M2-3M beating heart backend completion report. Node.js/Express, Mistral AI, Supabase. Completed work Manus AI left unfinished. Vercel serverless deployment confirmed.",
    source: "System Generated PDF"
  },
  {
    id: "arch-009",
    title: "PMO_Steering_Onboarding_Packet_v1.pdf",
    category: "Active Member Sessions",
    author: "Mohamed Ayoub",
    timestamp: "2026-06-05T12:00:00Z",
    size: "980 KB",
    checksum: "SHA256:j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1",
    description: "Onboarding packet distributed to 10 PMO steering members via WhatsApp. Includes platform access instructions, security PIN, and first 48-hour action required.",
    source: "Active Board Upload"
  },
  {
    id: "arch-010",
    title: "SCIEX_CapEx_Proposal_KSA_2026.pdf",
    category: "Financial Worksheets",
    author: "Dr. Mostafa AbdelHady",
    timestamp: "2026-05-20T11:00:00Z",
    size: "760 KB",
    checksum: "SHA256:k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2",
    description: "SCIEX Citrine Triple Quad MD procurement proposal for KSA hub. 2 units at ~2.8M SAR. SCIEX 4500MD LC-MS/MS 3 units at ~1.36M SAR. Total instrumentation CapEx: ~4.61M SAR.",
    source: "Pre-vetted Setup Baseline"
  }
];

export const SEED_MEETINGS: PMOMeeting[] = [
  {
    id: "mtg-001",
    title: "Dr. Amin Executive Briefing — TELsTP Platform Demo",
    date: "2026-04-12T10:00:00Z",
    platform: "Other",
    duration: "90 minutes",
    summary: "Chairman Dr. Mohamed Amin reviewed the TELsTP M2-3M Live Demo and Executive Brief. Platform capabilities demonstrated. PMO coordination role for Mohamed Ayoub formally acknowledged.",
    keyOutcomes: [
      "PMO Lead Coordinator role acknowledged by Dr. Amin",
      "M2-3M beating heart demo reviewed and approved in principle",
      "Advance salary approved to enable tech stack procurement",
      "Next milestone: Riyadh premises confirmation by end of June 2026"
    ]
  },
  {
    id: "mtg-002",
    title: "UAE Lead Sync — Dr. Hosam Fouad / Life DX Al-Ain Audit",
    date: "2026-05-20T14:00:00Z",
    platform: "WhatsApp",
    duration: "45 minutes",
    summary: "Al-Ain asset audit results reviewed. ICP-MS critical gap confirmed. DHA licensing expansion timeline agreed. Chinese vendor evaluation for gap instrumentation initiated.",
    keyOutcomes: [
      "ICP-MS procurement gap: priority action assigned to Dr. Hosam",
      "DHA variation request submitted — awaiting approval",
      "Life DX CEO confirmed as UAE PMO steering authority"
    ]
  },
  {
    id: "mtg-003",
    title: "PMO Steering Group — P&L Update Request / WhatsApp Sync",
    date: "2026-06-05T16:00:00Z",
    platform: "WhatsApp",
    duration: "30 minutes",
    summary: "UAE Lead requested updated P&L projections with new pricing schemes. PMO platform v1 invitation sent to 10 members. Only UAE Lead and International Advisor confirmed receipt.",
    keyOutcomes: [
      "Updated diagnostic pricing request logged — assigned to Mohamed Ayoub",
      "Platform V1 invitations sent — 2/10 acknowledged",
      "V9 deployment with real data agreed as next priority"
    ]
  }
];
