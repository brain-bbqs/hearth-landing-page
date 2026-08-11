import uploadLogo from "./assets/bbqs-uploader-logo.svg";
import clipExtractorLogo from "./assets/clip-extractor-logo.svg";
import encodingHelperLogo from "./assets/encoding-helper-logo.svg";

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
  {
    id: "clip-extractor",
    name: "Clip Extractor",
    description: "Trim and describe a portion of a video",
    url: "https://clip-extractor.brain-bbqs.org",
    logo: clipExtractorLogo,
    status: "live",
  },
  {
    id: "encoding-helper",
    name: "Encoding Helper",
    description: "Inspect and tune video encodings",
    url: "https://encoding-helper.brain-bbqs.org",
    logo: encodingHelperLogo,
    status: "live",
  },
];
