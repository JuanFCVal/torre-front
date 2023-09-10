export interface IUser {
    person:        Person;
    stats:         Stats;
    strengths:     Strength[];
    interests:     [];
    experiences:   Award[];
    awards:        Award[];
    jobs:          Award[];
    projects:      Award[];
    publications:  Award[];
    education:     Award[];
    opportunities: Opportunity[];
    languages:     Language[];
}

export interface Award {
    id:               string;
    category:         Category;
    name:             string;
    contributions?:   Contributions;
    organizations:    Organization[];
    responsibilities: string[];
    fromMonth?:       string;
    fromYear?:        string;
    toMonth?:         string;
    toYear?:          string;
    additionalInfo?:  string;
    highlighted:      boolean;
    weight:           number;
    verifications:    number;
    recommendations:  number;
    media:            Media[];
    rank:             number;
    strengths:        [];
    remote?:          boolean;
}

export enum Category {
    Awards = "awards",
    Education = "education",
    Jobs = "jobs",
    Projects = "projects",
    Publications = "publications",
}

export enum Contributions {
    Author = "Author",
    Empty = "",
    Founder = "Founder",
    InvestorShark = "Investor (shark)",
    Mentor = "Mentor",
}

export interface Media {
    group:       string;
    mediaType:   MediaType;
    description: string;
    mediaItems:  MediaItem[];
}

export interface MediaItem {
    id:        string;
    address:   string;
    metadata?: string;
}

export enum MediaType {
    Link = "link",
    Media = "media",
}

export interface Organization {
    id:          number;
    name:        string;
    publicId:    string;
    picture?:    string;
    serviceType: ServiceType;
}

export enum ServiceType {
    SelfService = "self_service",
}

export interface Language {
    code:     string;
    language: string;
    fluency:  string;
}

export interface Opportunity {
    id:       null | string;
    interest: string;
    field:    string;
    data:     Industry[] | boolean | string;
}

export interface Industry {
    code:   number;
    locale: string;
    name:   string;
}

export interface Person {
    professionalHeadline: string;
    completion:           number;
    showPhone:            boolean;
    created:              Date;
    verified:             boolean;
    flags:                { [key: string]: boolean };
    weight:               number;
    ggId:                 string;
    completionStage:      CompletionStage;
    locale:               string;
    subjectId:            number;
    picture:              string;
    hasEmail:             boolean;
    isTest:               boolean;
    name:                 string;
    links:                Link[];
    location:             Location;
    theme:                string;
    id:                   string;
    pictureThumbnail:     string;
    claimant:             boolean;
    summaryOfBio:         string;
    weightGraph:          string;
    publicId:             string;
}

export interface CompletionStage {
    stage:    number;
    progress: number;
}

export interface Link {
    id:      string;
    name:    string;
    address: string;
}

export interface Location {
    name:           string;
    shortName:      string;
    country:        string;
    countryCode:    string;
    latitude:       number;
    longitude:      number;
    timezone:       string;
    timezoneOffSet: number;
    placeId:        string;
}

export interface Stats {
    strengths:    number;
    publications: number;
    awards:       number;
    education:    number;
    jobs:         number;
    projects:     number;
}

export interface Strength {
    id:              string;
    code:            number;
    name:            string;
    proficiency:     Proficiency;
    weight:          number;
    recommendations: number;
    media:           Media[];
    supra:           boolean;
    created:         Date;
    hits:            number;
    additionalInfo?: string;
}

export enum Proficiency {
    Expert = "expert",
    Master = "master",
    NoExperienceInterested = "no-experience-interested",
    Novice = "novice",
    Proficient = "proficient",
}
