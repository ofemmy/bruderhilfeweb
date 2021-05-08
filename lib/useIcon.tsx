import { BookIcon, SocialIcon, WomanIcon } from "../components";

export function useIcon(searchName) {
  let Icon = null;
  switch (searchName) {
    case "Education":
      Icon = <BookIcon />;
      break;
    case "Social Inclusion":
      Icon = <SocialIcon />;
      break;
    case "Women and children":
      Icon = <WomanIcon />;
      break;
    default:
      break;
  }
  return Icon;
}
