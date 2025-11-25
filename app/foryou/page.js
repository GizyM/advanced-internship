import Recommended from "@/components/foryou/Recommended";
import Search from "@/components/Search";
import Selected from "@/components/foryou/Selected";
import Sidebar from "@/components/Sidebar";
import Suggested from "@/components/foryou/Suggested";

export default function forYou() {
    return (
        <>
        <div className="relative flex flex-col ml-[200px] foryou__height wrapper">
            <Search />
            <Sidebar />
            <div className="row">
                <div className="container">
                    <div className="foryou__wrapper">
                        <Selected />
                        <Recommended />
                        <Suggested />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}