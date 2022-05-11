
  export interface Pagination {
  }

  export interface Course {
    _id: string;
    title: string;
    description: string;
    weeks: string;
    tuition: number;
    minimumSkill: string;
    scholarshipAvailable: boolean;
    bootcamp: string;
    user: string;
    createdAt: Date;
    __v: number;
  }

  export interface Datum {
    _id: string;
    name: string;
    description: string;
    website: string;
    phone: string;
    averageCost?: number;
    email: string;
    address: string;
    careers: string[];
    photo: string;
    housing: boolean;
    jobAssistance: boolean;
    jobGuarantee: boolean;
    user: string;
    createdAt: Date;
    slug: string;
    __v: number;
    courses: Course[];
    id: string;
  }

  export interface ListInterface {
    success: boolean;
    count: number;
    pagination: Pagination;
    data: Datum[];
  }
  export interface BootcampDetail {
    success: boolean;
    count: number;
    pagination: Pagination;
    data: Datum;
  }
