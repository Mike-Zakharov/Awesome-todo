import { ArrowBackIcon } from "./assets/arrow-back-icon";
import { BellIcon } from "./assets/bell-icon";
import { CalendarIcon } from "./assets/calendar-icon";
import { CategoriesIcon } from "./assets/categories-icon";
import { DashboardIcon } from "./assets/dashboard-icon";
import { DeleteIcon } from "./assets/delete-icon";
import { EditIcon } from "./assets/edit-icon";
import { EditLastNameIcon_S } from "./assets/edit-last-name-icon_S";
import { EditName_F_S } from "./assets/edit-name-icon_F_S";
import { ExclamationIcon } from "./assets/exclamation-icon";
import { ExitIcon } from "./assets/exit-icon";
import { HelpIcon } from "./assets/help-icon";
import { LockIcon } from "./assets/lock-icon";
import { LockIcon_2 } from "./assets/lock-icon_2";
import { MailIcon } from "./assets/mail-icon";
import { MyTaskIcon } from "./assets/my-task-icon";
import { SearchIcon } from "./assets/search-icon";
import { SettingsIcon } from "./assets/settings-icon";
import { TaskClockIcon_S } from "./assets/task-clock-icon_S";
import { TaskCompliteIcon } from "./assets/task-complite-icon";
import { UserIcon } from "./assets/user-icon";
import type { IconProps } from "./type-icon-props";

export type Icons = {
  [key: string]: React.FC<IconProps>;
};

export const ICONS_MAP: Icons = {
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
