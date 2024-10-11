import Announcements from "@/components/Announcements";
import BarLineChart from "@/components/BarLineChart";
import CountChart from "@/components/CountChart";
import CurveChart from "@/components/CurveChart";
import EventCalendar from "@/components/EventCalendar";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USERCARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="DBH" />
          <UserCard type="Dana Desa"/>
          <UserCard type="DAK Fisik"/>
          <UserCard type="DAU"/>
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* A CHART */}
          <div className="w-full lg:h-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* B CHART */}
          <div className="w-full lg:h-2/3 h-[450px]">
            <BarLineChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <CurveChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}
  
  export default AdminPage;
