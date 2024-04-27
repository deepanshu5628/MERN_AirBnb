import { FaFire } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaUmbrellaBeach,FaHotel } from "react-icons/fa";
import { GiFarmTractor ,GiWineBottle } from "react-icons/gi";
import { LiaTramSolid } from "react-icons/lia";
import { GiElvenCastle,GiVillage } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { PiWarehouseBold } from "react-icons/pi";
function Categorycom() {
    return (
        <div className="h-auto bg-slate-100 flex py-3 px-1 gap-8 justify-center cursor-default">
            <div className="items-center flex flex-col cursor-pointer">
                <FaFire />
                <p>trending</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
            <GiFarmTractor />
                <p>Farms</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <FaBuilding />
                <p>Iconic Bulidings</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <FaUmbrellaBeach />
                <p>Beach</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <LiaTramSolid />
                <p>Trams</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <GiElvenCastle />
                <p>Castle</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <GiWineBottle />
                <p>Wine</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <FaBed />
                <p>Monestrys</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer" >
                <FaHotel />
                <p>Hotel</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <GiVillage />
                <p>Villa</p>
            </div>
            <div className="items-center flex flex-col cursor-pointer">
                <PiWarehouseBold/>
                <p>Farm House</p>
            </div>
        </div>
    )
}

export default Categorycom;