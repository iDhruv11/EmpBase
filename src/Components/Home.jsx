import { Navigate, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className="bg-black text-white flex justify-center items-center h-[90.8vh]">
                <div className="bg-black flex flex-col rounded-md border border-white-1 -mt-44">
                    <section className="flex justify-between items-center px-5 py-3 gap-16 ">
                        <p className="text-2xl">Create a new entery that represent an Employee</p>
                        <button className="text-lg bg-white text-black font-semibold w-24 py-2 rounded-sm hover:bg-[#a4a2a2] transition-all duration-100 ease-linear"
                            onClick={
                                () => {
                                    navigate('/create')
                                }
                            }
                        >Create</button>
                    </section>
                    <section className="flex justify-between items-center px-5 py-3 gap-16 ">
                        <p className="text-2xl">Update details of an existing employee</p>
                        <button className="text-lg bg-white text-black font-semibold w-24 py-2 rounded-sm hover:bg-[#a4a2a2] transition-all duration-100 ease-linear"
                            onClick={
                                () => {
                                    navigate('/update')
                                }
                            }
                        >Update</button>
                    </section>
                    <section className="flex justify-between items-center px-5 py-3 gap-16 ">
                        <p className="text-2xl">Delete an Employee from records.</p>
                        <button className="text-lg bg-white text-black font-semibold w-24 py-2 rounded-sm hover:bg-[#a4a2a2] transition-all duration-100 ease-linear"
                            onClick={
                                () => {
                                    navigate('/delete')
                                }
                            }
                        >Delete</button>
                    </section>
                    <section className="flex justify-between items-center px-5 py-3 gap-16 ">
                        <p className="text-2xl">Fetch details of all or specifc employee</p>
                        <button className="text-lg bg-white text-black font-semibold w-24 py-2 rounded-sm hover:bg-[#a4a2a2] transition-all duration-100 ease-linear"
                            onClick={
                                () => {
                                    navigate('/read')
                                }
                            }
                        >Read</button>
                    </section>
                </div>
            </div>
        </>
    )
}
export { Home };