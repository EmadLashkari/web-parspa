interface Images {
  LEFT: ImageDetails;
  KNEES: ImageDetails;
  RIGHT: ImageDetails;
}

interface ImageDetails {
  FRONT: string;
  INSIDE?: string; // Optional, as it may not be present for KNEES
  UPSIDE?: string; // Optional, as it may not be present for KNEES
  BACK: string;
}

export interface IBaseOrder {
  id: number;
  created: number; // Assuming this is a timestamp
  feetLength: number;
  feetSize: number;
  weight: number;
  state: string;
  notes: string;
  isNew: boolean;
  concerns: number[]; // Array of concern IDs
  images: Images;
}

export interface IErrorResend extends IBaseOrder {
  resendPictures: string[];
}

export interface IDoctorResponse extends IBaseOrder {
  doctorResponse: string;
}

export interface IProduction extends IBaseOrder {
  doctorResponse: string;
  insole: {
    count: number;
    address: string;
    phone: string;
  };
}
