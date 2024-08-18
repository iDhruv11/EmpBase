import { Outlet } from "react-router";
import { Header } from "./Header";

const Wrapper = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
export { Wrapper };