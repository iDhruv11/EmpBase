import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [gitIcon, setgitIcon] = useState("white");
    const [showGitPopup, setShowGitPopup] = useState(false);
    let timeoutID = useRef(null);
    return (
        <>
            <div className="flex justify-between bg-black text-white px-10 items-center py-6">
                <h3 className="text-3xl font-medium hover:cursor-pointer">
                    <Link to='/home'>EmpBase</Link>
                </h3>
                <p className="text-lg">Manage Employee Data of Your Organistation</p>
                <div className="flex items-center gap-2">
                    <p
                        className="text-base font-semibold hover:bg-white hover:cursor-pointer px-3 py-2 rounded-md transition-all duration-150 ease-linear hover:text-black"
                        onMouseEnter={
                            () => {
                                clearTimeout(timeoutID);
                                setShowGitPopup(true);
                            }
                        }
                        onMouseLeave={
                            () => {
                                timeoutID = setTimeout(() => {
                                    setShowGitPopup(false);
                                }, 500);
                            }
                        }
                    >
                    Developers
                    </p>
                    <a
                        className="px-1 py-1 rounded-md hover:cursor-pointer hover:bg-white transition-all duration-150 ease-linear"
                        onMouseEnter={
                            () => {
                                setgitIcon("black");
                            }
                        }
                        onMouseLeave={
                            () => {
                                setgitIcon("white");
                            }
                        }
                        href="https://github.com/iDhruv11/EmpBase"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdgitLoop0" width="24" height="24" x="0" y="0"><g fill={gitIcon}><ellipse cx="9.5" cy="9" rx="1.5" ry="1" /><ellipse cx="14.5" cy="9" rx="1.5" ry="1" /></g></mask><g fill="none" stroke={gitIcon} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" /></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0" /><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" /></path></g><rect width="8" height="4" x="8" y="11" fill={gitIcon} mask="url(#lineMdgitLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11" /></rect></svg>
                    </a>
                </div>
                {(showGitPopup) && (
                    <div
                        className="absolute top-[4.5em] right-20 bg-[#121212] rounded-md border border-white px-5 py-1"
                        onMouseEnter={
                            () => {
                                clearTimeout(timeoutID);
                            }
                        }
                        onMouseLeave={
                            () => {
                                timeoutID = setTimeout(() => {
                                    setShowGitPopup(false);
                                }, 500);
                            }
                        }
                    >
                    <div className="flex gap-6 items-center py-1">
                        <img
                        src="https://avatars.githubusercontent.com/u/143330910?v=4"
                        alt="github PFP UI Developer"
                        width="40px" height="40px"
                        className="rounded-full"
                        />
                        <div className="mr-1">
                            <h5>UI Developer</h5>
                            <h6 className="text-sm font-light">ReactJS, Tailwind, Axios</h6>
                        </div>
                        <a
                        className="hover:bg-[#232323] px-1 py-1 rounded-full transition-all duration-150 ease-linear" href="https://github.com/iDhruv11"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" /></svg>
                        </a>
                    </div>
                    <div className="flex gap-6 items-center py-1">
                        <img
                        src="https://avatars.githubusercontent.com/u/155290563?v=4"
                        alt="github PFP Backend Developer"
                        width="40px" height="40px"
                        className="rounded-full"
                        />
                        <div>
                            <h5>Backend Developer</h5>
                            <h6 className="text-sm font-light">Java, SpringBoot, MySQL</h6>
                        </div>
                        <a
                        className="hover:bg-[#232323] px-1 py-1 rounded-full transition-all duration-150 ease-linear"
                        href="https://github.com/gauravkh31">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="white" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z" /></svg>
                        </a>
                    </div>
                    </div>
                )}
            </div>
        </>
    )
}
export { Header };