import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "The AI detected a pattern in my bloodwork that my previous doctor had missed. After following up with a specialist, I was able to address an underlying health issue before it became serious.",
      name: "Sarah Johnson",
      title: "Patient",
      rating: 5
    },
    {
      content: "As a physician, I'm impressed by the accuracy of the AI analysis. It helps me provide more informed consultations and saves valuable time during patient reviews.",
      name: "Dr. Michael Chen",
      title: "Cardiologist",
      rating: 5
    },
    {
      content: "I was skeptical at first, but the platform's analysis of my annual checkup reports provided insights that helped me make meaningful lifestyle changes.",
      name: "David Williams",
      title: "Patient",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our platform is helping patients and healthcare professionals improve health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-lg bg-white shadow-sm border-0 sm:shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white flex items-center justify-center font-bold">
                  {testimonial.name.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
