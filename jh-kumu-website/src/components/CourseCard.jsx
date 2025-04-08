import { Link } from 'react-router-dom'
import { FiClock, FiUsers, FiStar } from 'react-icons/fi'

const CourseCard = ({ course }) => {
  const { title, description, price, duration, level, rating, imageSrc } = course

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <FiUsers className="mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center text-amber-500">
            <FiStar className="mr-1" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          <div className="flex gap-2">
            <Link
              to="/contact"
              className="btn btn-primary text-sm"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
