import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiFilter, FiSearch } from 'react-icons/fi'

import SectionHeader from '../components/SectionHeader'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  // Sample courses data
  const allCourses = [
    {
      id: 1,
      title: 'Professional English Speaking',
      description: 'Master fluent English speech with confidence for professional settings.',
      price: '4,999',
      duration: '3 months',
      level: 'Intermediate',
      rating: 4.8,
      category: 'speaking',
      imageSrc: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?auto=format&q=75&fit=crop&w=800'
    },
    {
      id: 2,
      title: 'Business English Communication',
      description: 'Learn how to write effective emails, reports and presentations in English.',
      price: '5,999',
      duration: '4 months',
      level: 'Advanced',
      rating: 4.9,
      category: 'business',
      imageSrc: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&q=75&fit=crop&w=800'
    },
    {
      id: 3,
      title: 'English for Beginners',
      description: 'Build a strong foundation in English grammar, vocabulary and pronunciation.',
      price: '3,999',
      duration: '3 months',
      level: 'Beginner',
      rating: 4.7,
      category: 'grammar',
      imageSrc: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&q=75&fit=crop&w=800'
    },
    {
      id: 4,
      title: 'IELTS Preparation',
      description: 'Comprehensive preparation for the IELTS exam with focus on all four modules.',
      price: '6,999',
      duration: '2 months',
      level: 'Intermediate',
      rating: 4.9,
      category: 'exam',
      imageSrc: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&q=75&fit=crop&w=800'
    },
    {
      id: 5,
      title: 'Grammar Mastery',
      description: 'Perfect your English grammar with comprehensive lessons and practice exercises.',
      price: '3,499',
      duration: '2 months',
      level: 'All Levels',
      rating: 4.6,
      category: 'grammar',
      imageSrc: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&q=75&fit=crop&w=800'
    },
    {
      id: 6,
      title: 'English for IT Professionals',
      description: 'Specialized English course for IT professionals focusing on technical vocabulary and communication.',
      price: '5,499',
      duration: '3 months',
      level: 'Intermediate',
      rating: 4.8,
      category: 'business',
      imageSrc: 'https://images.unsplash.com/photo-1581089781785-603411fa4444?auto=format&q=75&fit=crop&w=800'
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter courses based on search term and filters
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel.toLowerCase()

    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory

    return matchesSearch && matchesLevel && matchesCategory
  })

  // Filter options
  const levels = ['all', 'beginner', 'intermediate', 'advanced']
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'speaking', label: 'Speaking' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'business', label: 'Business English' },
    { value: 'exam', label: 'Exam Preparation' },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 text-white">
        <div className="container-padding">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our English Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Explore our range of English language courses designed to help Indian students
            improve their fluency and confidence.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-auto flex-grow max-w-md relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <FiFilter className="text-gray-500" />
                <span className="text-gray-700 text-sm font-medium">Filters:</span>
              </div>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)} Level
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="section bg-white">
        <div className="container-padding">
          {filteredCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedLevel('all')
                  setSelectedCategory('all')
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section bg-gray-50">
        <div className="container-padding text-center">
          <SectionHeader
            title="Need More Information?"
            subtitle="For detailed course information, custom course requirements or scholarship options, please get in touch with our team."
            centered={true}
          />
          <Link to="/contact" className="btn btn-primary">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Courses
