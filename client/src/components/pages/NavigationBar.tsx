import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    Button,
} from "@nextui-org/react";
import { Moon, Search, SunMedium } from "lucide-react";
import logo from "../../assets/logo.png"
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

const NavigationBar: React.FC = () => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.theme === 'dark');
    const dispatch = useDispatch();

    return <>

        <Navbar isBordered maxWidth="full">
            <NavbarContent justify="start" className="max-w-fit">
                <NavbarBrand className="w-[30%]">
                    <img src={logo} alt="BLOGIFY logo" height={50} width={50} />
                    <p color="secondary" className="hidden sm:block font-bold text-inherit italic text-purple-500 ">BLOGIFY</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-3 pl-4" justify="start">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" color="secondary" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" className="max-w-fit" justify="end">
                <Input
                    classNames={{
                        base: " max-w-[250px] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<Search size={18} />}
                    type="search"
                />
                <Button className="border rounded-full p-0 min-w-14 min-h-5" onPress={() => dispatch(toggleTheme())}>
                    {!isDarkTheme ? (
                        <Moon size={24} />
                    ) : (
                        <SunMedium size={24} />
                    )}
                </Button>
                <Dropdown placement="bottom-end" >
                    <DropdownTrigger className="min-w-fit">
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform object-contain"
                            color="secondary"
                            name="Jason Hughes"
                            // size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat" >
                        <DropdownItem key="profile" className="h-14 w-fit">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
                        {/* <DropdownItem key="analytics">Analytics</DropdownItem> */}
                        <DropdownItem key="system">System</DropdownItem>
                        {/* <DropdownItem key="configurations">Configurations</DropdownItem> */}
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    </>
}

export default NavigationBar;