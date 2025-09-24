import ArrowBackIcon from "./ArrowBackIcon";
import BellIcon from "./BellIcon";
import CalendarIcon from "./CalendarIcon";
import CategoriesIcon from "./CategoriesIcon";
import DashboardIcon from "./DashboardIcon";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import EditLastNameIcon_S from "./EditLastNameIcon_S";
import EditName_F_S from "./EditName_F_S";
import ExclamationIcon from "./ExclamationIcon";
import ExitIcon from "./ExitIcon";
import HelpIcon from "./HelpIcon";
import LockIcon from "./LockIcon";
import LockIcon_2 from "./LockIcon_2";
import MailIcon from "./MailIcon";
import MyTaskIcon from "./MyTaskIcon";
import SearchIcon from "./SearchIcon";
import SettingsIcon from "./SettingsIcon";
import TaskClockIcon_S from "./TaskClockIcon_S";
import TaskCompliteIcon from "./TaskCompliteIcon";
import type { IconProps } from "./typeIconProps";
import UserIcon from "./UserIcon";

export type Icons = {
  [key: string]: React.FC<IconProps>;
};

export const ICONS: Icons = {
  "arrow-back": ArrowBackIcon,
  bell: BellIcon,
  calendar: CalendarIcon,
  categories: CategoriesIcon,
  dashboard: DashboardIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  exclamation: ExclamationIcon,
  exit: ExitIcon,
  help: HelpIcon,
  "lock-2": LockIcon_2,
  lock: LockIcon,
  mail: MailIcon,
  "my-task": MyTaskIcon,
  "search-icon": SearchIcon,
  "settings-icon": SettingsIcon,
  "task-complete": TaskCompliteIcon,
  "user-icon": UserIcon,
  "edit-name_F_S": EditName_F_S,
  "edit-last-name_S": EditLastNameIcon_S,
  "task-clock_S": TaskClockIcon_S,
};
