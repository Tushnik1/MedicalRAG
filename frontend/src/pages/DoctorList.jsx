import { Link } from "react-router-dom";
import { CalendarCheck, XCircle } from "lucide-react";
import NavBar from "../components/NavBar";

const doctors = [
  {
    id: 1,
    name: "Dr. Ayesha Sharma",
    specialization: "Cardiologist",
    experience: "10 years",
    location: "Mumbai",
    available: true,
    time_of_availability: "10:00 AM - 1:00 PM",
    consultation_fee: 800,
  },
  {
    id: 2,
    name: "Dr. Rajiv Mehta",
    specialization: "Dermatologist",
    experience: "8 years",
    location: "Delhi",
    available: false,
    time_of_availability: "2:00 PM - 6:00 PM",
    consultation_fee: 500,
  },
  {
    id: 3,
    name: "Dr. Nisha Verma",
    specialization: "Pediatrician",
    experience: "5 years",
    location: "Bangalore",
    available: true,
    time_of_availability: "9:00 AM - 12:00 PM",
    consultation_fee: 600,
  },
  {
    id: 4,
    name: "Dr. Arjun Singh",
    specialization: "Orthopedic Surgeon",
    experience: "12 years",
    location: "Hyderabad",
    available: true,
    time_of_availability: "11:00 AM - 3:00 PM",
    consultation_fee: 1000,
  },
  {
    id: 5,
    name: "Dr. Meera Joshi",
    specialization: "Gynecologist",
    experience: "7 years",
    location: "Pune",
    available: false,
    time_of_availability: "4:00 PM - 7:00 PM",
    consultation_fee: 700,
  },
];

const DoctorList = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Available Doctors
          </h2>
          <p className="text-gray-500 mt-1">Consult specialists from your city</p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block rounded-md border overflow-x-auto">
          <div className="grid grid-cols-6 gap-2 bg-gray-100 p-4 font-semibold text-sm text-gray-700">
            <div>Name</div>
            <div>Specialization</div>
            <div>Location</div>
            <div>Experience</div>
            <div>Availability</div>
            <div>Consultation Fee</div>
          </div>
          {doctors.map((doc) => (
            <Link
              key={doc.id}
              to={`/doctor/${doc.id}`}
              className="grid grid-cols-6 gap-2 border-b p-4 items-center hover:bg-gray-50 transition-colors"
            >
              <div>{doc.name}</div>
              <div>{doc.specialization}</div>
              <div>{doc.location}</div>
              <div>{doc.experience}</div>
              <div className="flex items-center gap-1">
                {doc.available ? (
                  <>
                    <CalendarCheck className="text-green-600 h-4 w-4" />
                    <span className="text-green-700 text-sm">
                      {doc.time_of_availability}
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600 h-4 w-4" />
                    <span className="text-red-600 text-sm">Unavailable</span>
                  </>
                )}
              </div>
              <div className="text-sm font-medium text-gray-800">
                ₹{doc.consultation_fee}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {doctors.map((doc) => (
            <Link
              key={doc.id}
              to={`/doctor/${doc.id}`}
              className="block border rounded-lg p-4 shadow-sm hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
              <p className="text-sm text-gray-600">{doc.specialization}</p>
              <div className="text-sm mt-2 space-y-1">
                <p>
                  <span className="font-medium text-gray-700">Location:</span> {doc.location}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Experience:</span> {doc.experience}
                </p>
                <p className="flex items-center gap-1">
                  <span className="font-medium text-gray-700">Availability:</span>
                  {doc.available ? (
                    <>
                      <CalendarCheck className="text-green-600 h-4 w-4" />
                      <span className="text-green-700 text-sm">{doc.time_of_availability}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-600 h-4 w-4" />
                      <span className="text-red-600 text-sm">Unavailable</span>
                    </>
                  )}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Consultation Fee:</span>{" "}
                  ₹{doc.consultation_fee}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorList;
