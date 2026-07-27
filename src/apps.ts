import uploadLogo from "./assets/bbqs-uploader-logo.svg";

export interface AppInfo {
  id: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  status: "live" | "coming-soon";
}

export const apps: AppInfo[] = [
  {
    id: "upload",
    name: "Upload",
    description: "Upload and manage data files for the HEARTH data ecosystem.",
    url: "https://upload.brain-bbqs.org",
    logo: uploadLogo,
    status: "live",
  },
];
