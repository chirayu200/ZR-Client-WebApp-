import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



export const SidebarItems = [
	{
		icon: <HomeIcon />,
		name: "Home",
		path: "/",
	},
	{
		icon: <CalendarMonthOutlinedIcon />,
		name: "Appointment",
		path: "/appointment",
	},
	{
		icon: <ShoppingCartOutlinedIcon />,
		name: "Shop",
		path: "/shop",
	},
	{
		icon: <StarBorderIcon />,
		name: "Achievements",
		path: "/achievements",
	},
	{
		icon: <SettingsOutlinedIcon />,
		name: "Settings",
		path: "/settings",
	},
];
