const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {Icon && <Icon className="text-primary text-xl" />}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  )
}

export default FeatureCard
