
import {
    AdminLinks,
    UserLinks,
    RecruiterLinks,
} from "../../utils/DashboardNavLinkData";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const ToggleModel = () => {
    const { user } = useUserContext();

    if (user?.role === "admin") {
        return (
            <div className="nav-links">
                {AdminLinks?.map((link) => {
                    const { text, path, icon } = link;
                    if (path === "admin" && user?.role !== "admin") {
                        return;
                    }
                    return (
                        <NavLink to={path} key={text} className="nav-link mt-3 flex" end>
                           <h1 className="flex"> <span className="icon">{icon}</span>
                            <span className="text ml-3"> {text}</span></h1>
                           
                        </NavLink>
                    );
                })}
            </div>
        );
    }
    if (user?.role === "recruiter") {
        return (
            <div className="nav-links">
                {RecruiterLinks?.map((link) => {
                    const { text, path, icon } = link;
                    if (path === "admin" && user?.role !== "admin") {
                        return;
                    }
                    return (
                        <NavLink to={path} key={text} className="nav-link flex" end>
                            <span className="icon">{icon} </span>
                            {/* {text} */}
                            <span className="text ml-3"> {text}</span>
                        </NavLink>
                    );
                })}
            </div>
        );
    }
    return (
        <div className="nav-links">
            {UserLinks?.map((link) => {
                const { text, path, icon } = link;    //destructure
                if (path === "admin" && user?.role !== "admin") {
                    return;
                }
                return (
                    <NavLink to={path} key={text} className="nav-link flex" end>
                        <span className="icon mt-1">{icon}</span>
                        {/* {text} */}
                        <span className="text ml-3"> {text}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default ToggleModel;
