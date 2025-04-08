import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ testimonial }) => {
  const { name, location, text, rating, avatarSrc } = testimonial

  // Generate stars based on rating
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FiStar
          key={i}
          className={`${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
        />
      )
    }
    return stars
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex space-x-1 mb-3">
        {renderStars()}
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
          {avatarSrc ? (
            <img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
