import { useParams } from "react-router-dom";
import { Users, Stethoscope, Calendar, Clock, GraduationCap } from "lucide-react";
import NavBar from "../components/NavBar";

// This would come from an API in a real app
const getDoctorById = (id) => {
  const doctors = [
    { 
      id: "1", 
      name: "Dr. Ayesha Sharma", 
      specialty: "Cardiologist", 
      patients: 120,
      education: "Harvard Medical School",
      experience: "10 years",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      schedule: [
        { day: "Monday", hours: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
        { day: "Friday", hours: "9:00 AM - 3:00 PM" },
      ]
    },
    { 
      id: "2", 
      name: "Dr. Rajiv Mehta", 
      specialty: "Dermatologist", 
      patients: 85,
      education: "Yale School of Medicine",
      experience: "8 years",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      schedule: [
        { day: "Tuesday", hours: "8:00 AM - 4:00 PM" },
        { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      ]
    },
    { 
      id: "3", 
      name: "Dr. Nisha Verma", 
      specialty: "Pediatrician", 
      patients: 150,
      education: "Stanford Medical School",
      experience: "5 years",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      schedule: [
        { day: "Monday", hours: "8:00 AM - 4:00 PM" },
        { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
        { day: "Friday", hours: "10:00 AM - 6:00 PM" },
      ]
    },
    { 
      id: "4", 
      name: "Dr. Arjun Singh", 
      specialty: "Orthopedic Surgeon", 
      patients: 200,
      education: "AIIMS, New Delhi",
      experience: "12 years",
      avatar: "https://images.unsplash.com/photo-1644330400-c4f40fa8191d",
      schedule: [
        { day: "Monday", hours: "11:00 AM - 5:00 PM" },
        { day: "Tuesday", hours: "10:00 AM - 4:00 PM" },
      ]
    },
    { 
      id: "5", 
      name: "Dr. Meera Joshi", 
      specialty: "Gynecologist", 
      patients: 90,
      education: "Pune Medical College",
      experience: "7 years",
      avatar: "https://images.unsplash.com/photo-1564010851-25ea261e32e0",
      schedule: [
        { day: "Tuesday", hours: "9:00 AM - 1:00 PM" },
        { day: "Thursday", hours: "2:00 PM - 6:00 PM" },
      ]
    }
  ];
  
  return doctors.find(doctor => doctor.id === id);
};

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = getDoctorById(id || "");

  if (!doctor) {
    return <div className="container mx-auto px-4 py-8">Doctor not found</div>;
  }

  return (
    <><NavBar/>
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-8">
        {/* Doctor Header Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
              <Users className="h-6 w-6 text-gray-800" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-semibold text-[#6366F1]">{doctor.name}</h2>
            <p className="flex items-center gap-2 mt-2 text-lg text-[#14B8A6]">
              <Stethoscope className="h-5 w-5 text-[#14B8A6]" />
              {doctor.specialty}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <GraduationCap className="h-4 w-4 text-gray-500 inline" /> {doctor.education}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              <Clock className="h-4 w-4 text-gray-500 inline" /> {doctor.experience}
            </p>
          </div>
        </div>

        {/* Professional Info and Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Professional Info */}
          <div className="bg-[#F3F4F6] p-4 rounded-lg shadow-sm space-y-4 border-2 border-[#33C3F0]">
            <h3 className="text-xl font-semibold text-[#6366F1]">Professional Info</h3>
            <p className="text-sm text-gray-600">
              <strong className="font-medium">Active Patients:</strong> {doctor.patients}
            </p>
          </div>

          {/* Schedule */}
          <div className="bg-[#F3F4F6] p-4 rounded-lg shadow-sm space-y-4 border-2 border-[#33C3F0]">
            <h3 className="text-xl font-semibold text-[#6366F1]">Schedule</h3>
            <div className="space-y-2">
              {doctor.schedule.map((slot, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-700">
                  <span>{slot.day}</span>
                  <span>{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default DoctorProfile;
