import uploadLogo from "./assets/bbqs-uploader-logo.svg";

export interface AppInfo {
  id: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  status: "live" | "coming-soon";
  note?: string;
}

export const apps: AppInfo[] = [
  {
    id: "upload",
    name: "Upload",
    description: "Upload data files for the HEARTH data ecosystem.",
    url: "https://upload.brain-bbqs.org",
    logo: uploadLogo,
    status: "live",
    note: "BBQS members only",
  },
];
