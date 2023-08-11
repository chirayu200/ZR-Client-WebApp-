import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

export const SidebarItems = [
	{
		icon: <HomeIcon />,
		name: "Home",
		path: "/",
	},
	{
		icon: <CalendarMonthIcon />,
		name: "Appointment",
		path: "/appointment",
	},
	{
		icon: <ShoppingCartIcon />,
		name: "Shop",
		path: "/shop",
	},
	{
		icon: <StarBorderIcon />,
		name: "Achievements",
		path: "/",
	},
	{
		icon: <SettingsIcon />,
		name: "Settings",
		path: "/Settings",
	},
	{
		icon: <PersonAddRoundedIcon />,
		name: "Profile",
		path: "/profile",
	}
];
