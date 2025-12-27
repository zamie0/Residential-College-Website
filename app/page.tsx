import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/image/background.jpg')" }}
        />
        <div className="relative z-10 text-center px-5 py-20 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Residential College K10
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up">
              Welcome to Residential College K10 at Universiti Putra Malaysia — a supportive, safe, and vibrant living-learning community where academic success, personal growth, and lifelong friendships flourish.
            </p>
            <Link href="/application" className="btn-primary text-lg px-8 py-4">
              Apply for Residence
            </Link>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Accommodation Options</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer various room types to meet different needs — from single rooms to shared apartments, all within close proximity to campus facilities.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card card-hover">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Single Room</h3>
              <p className="text-gray-600 leading-relaxed">
                Private room with study desk and storage space — ideal for students who prioritize a quiet and focused environment for studying and resting.
              </p>
            </div>
            <div className="card card-hover">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Shared Room</h3>
              <p className="text-gray-600 leading-relaxed">
                Comfortable shared/twin room to encourage community living and peer support with shared spaces and study areas.
              </p>
            </div>
            <div className="card card-hover">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Family Unit / Suite</h3>
              <p className="text-gray-600 leading-relaxed">
                Limited suite or family units for postgraduate students or students with special needs; equipped with a small kitchen and living area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Campus & Location</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Residential College K10 is located within UPM campus, providing easy access to academic blocks, library, sports facilities, and public transportation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: '/image/cm1.jfif', title: 'Green Environment' },
              { img: '/image/cm2.jfif', title: 'Friendly Community' },
              { img: '/image/cm3.jfif', title: 'Study & Social Spaces' },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/30 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Facilities & Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide essential services and social spaces to support student well-being, learning, and community life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '/image/canteen.jfif', title: 'Dining Hall', desc: 'Nutritious meals are served daily in the dining hall with flexible meal plans for residents.' },
              { img: '/image/auditorium.jfif', title: 'Multipurpose Hall', desc: 'Auditorium and common hall for workshops, student events, and guest lectures.' },
              { img: '/image/hostel.jfif', title: 'Residential Support', desc: 'On-duty warden, counseling referrals, maintenance, and 24/7 security for safe accommodation.' },
            ].map((facility, idx) => (
              <div key={idx} className="card card-hover overflow-hidden">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={facility.img}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Student Life at K10</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Active student clubs, mentor programs, cultural nights, and community service projects — K10 is where friendships and leadership are built.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Clubs & Societies', desc: 'Join clubs based on interests from sports to arts and technology.' },
              { title: 'Mentor-Mentee', desc: 'Mentoring program by senior students helps new students adjust academically and socially.' },
              { title: 'Events', desc: 'Festivals, workshops, and learning camps are organized throughout the year.' },
            ].map((item, idx) => (
              <div key={idx} className="card card-hover text-center">
                <h3 className="text-2xl font-bold mb-4 text-red-600">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
