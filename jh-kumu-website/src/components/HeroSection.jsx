import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container-padding py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enhance Your English Skills for a Better Tomorrow
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Professional English language courses designed specifically for Indian students
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/courses" className="btn bg-white text-primary hover:bg-gray-100">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn border border-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
