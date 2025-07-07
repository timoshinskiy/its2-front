import AboutPage from "../../Pages/ActivePages/AboutPage";
import HomePage from "../../Pages/ActivePages/HomePage";
import ServicesPage from "../../Pages/ActivePages/ServicesPage";

export const allRoutes = [
    {path: '/', Page: HomePage},
    {path: '/services', Page: ServicesPage},
    {path: '/about', Page: AboutPage}
]