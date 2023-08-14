import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";

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
		path: "/achievements",
	},
	{
		icon: <SettingsIcon />,
		name: "Settings",
		path: "/",
	},
];
