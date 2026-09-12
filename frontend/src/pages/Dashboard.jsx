import { LayoutDashboard, Users, FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Dashboard = () => {
    const [name, setName] = useState("Afzal")
  const menuItems = [
    {
      title: "Upload",
      description: "Upload new medical documents",
      icon: Upload,
      link: "/upload",
    },
    {
      title: "Reports",
      description: "Access and analyze medical reports",
      icon: FileText,
      link: "/reports",
    },
    {
      title: "Doctor List",
      description: "View and manage doctor profiles",
      icon: Users,
      link: "/doctors",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-2">
            Welcome to your medical dashboard, {name} 
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {menuItems.map((item) => (
            <Link to={item.link} key={item.title}>
              <div className="border border-[#33c3f0] rounded-2xl p-4 hover:bg-gray-50 transition-colors cursor-pointer h-full shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="h-5 w-5 text-[#33C3F0]" />
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
