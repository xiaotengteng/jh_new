import { Link } from 'react-router-dom'
import { FiBookOpen, FiUsers, FiAward, FiGlobe } from 'react-icons/fi'

import HeroSection from '../components/HeroSection'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CourseCard from '../components/CourseCard'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {
  // Sample featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: 'Professional English Speaking',
      description: 'Master fluent English speech with confidence for professional settings.',
      price: '4,999',
      duration: '3 months',
      level: 'Intermediate',
      rating: 4.8,
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
      imageSrc: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&q=75&fit=crop&w=800'
    },
  ]

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'The business English course helped me improve my communication skills for my job interviews. Within 3 months, I noticed a significant improvement in my fluency.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'I was hesitant at first, but the friendly teachers made learning English enjoyable. Now I can confidently speak in meetings at work.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Amit Singh',
      location: 'Bangalore',
      text: 'The personalized attention from the instructors helped me overcome my fear of speaking English. Highly recommend their courses for anyone looking to improve.',
      rating: 5,
    },
  ]

  // Features data
  const features = [
    {
      icon: FiBookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Our courses cover all aspects of English language including speaking, listening, reading, and writing skills.',
    },
    {
      icon: FiUsers,
      title: 'Experienced Teachers',
      description: 'Learn from qualified teachers with years of experience in teaching English to Indian students.',
    },
    {
      icon: FiAward,
      title: 'Recognized Certification',
      description: 'Receive a certificate upon course completion that is recognized by various institutions.',
    },
    {
      icon: FiGlobe,
      title: 'Culturally Relevant',
      description: 'Content tailored specifically for Indian learners, addressing common challenges and requirements.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-padding">
          <SectionHeader
            title="Why Choose JH KUMU EDTECH"
            subtitle="We provide quality English language education tailored to the needs of Indian learners"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section bg-white">
        <div className="container-padding">
          <SectionHeader
            title="Our Popular Courses"
            subtitle="Explore our most popular English language courses designed for all proficiency levels"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/courses" className="btn btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-padding">
          <SectionHeader
            title="What Our Students Say"
            subtitle="Don't just take our word for it, hear from our students about their learning experience"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your English?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your journey towards English proficiency with our expert-led courses.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
