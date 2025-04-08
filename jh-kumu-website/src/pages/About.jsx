import { Link } from 'react-router-dom'
import { FiArrowRight, FiTarget, FiEye, FiStar } from 'react-icons/fi'

import SectionHeader from '../components/SectionHeader'

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Raj Sharma',
      position: 'Founder & CEO',
      bio: 'With over 15 years of experience in English language education, Raj founded JH KUMU EDTECH to bridge the gap in quality English education for Indian students.',
      imageSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&q=75&fit=crop&w=300'
    },
    {
      name: 'Priya Kapoor',
      position: 'Head of Curriculum',
      bio: 'Priya has a Masters in English Literature and expertise in designing language curricula that address the specific needs of Indian English learners.',
      imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=75&fit=crop&w=300'
    },
    {
      name: 'Anil Patil',
      position: 'Senior English Instructor',
      bio: 'Anil specializes in teaching Business English and has helped hundreds of professionals improve their communication skills in corporate settings.',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=75&fit=crop&w=300'
    }
  ]

  // Values data
  const values = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'To empower Indian students and professionals with high-quality English language education that enhances their career prospects and personal growth.'
    },
    {
      icon: FiEye,
      title: 'Our Vision',
      description: 'To become the leading English language education provider in India, recognized for our quality teaching methodology and student-centric approach.'
    },
    {
      icon: FiStar,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and personalized learning are the core values that guide our approach to education and student success.'
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 text-white">
        <div className="container-padding">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn more about JH KUMU EDTECH PVT LTD and our mission to improve English
            language education in India.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                title="Our Story"
                subtitle="How we started and why we're passionate about English education"
              />
              <p className="text-gray-600 mb-4">
                Founded in 2018, JH KUMU EDTECH PVT LTD began with a simple observation:
                despite studying English for years in school, many Indian students and professionals
                still struggle with practical English communication.
              </p>
              <p className="text-gray-600 mb-4">
                We started with a small team of dedicated English teachers in Jharkhand,
                focusing on developing a curriculum that addresses the unique challenges
                faced by Indian English learners.
              </p>
              <p className="text-gray-600">
                Today, we have grown to serve students across India with our specialized
                courses designed to build real-world English communication skills. Our approach
                combines traditional language education with practical, context-based learning.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=75&fit=crop&w=800"
                alt="Students in classroom"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-padding">
          <SectionHeader
            title="Our Mission & Values"
            subtitle="What drives us and shapes our approach to English language education"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <value.icon className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-padding">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The dedicated professionals behind JH KUMU EDTECH"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-padding text-center">
          <SectionHeader
            title="Start Your English Learning Journey"
            subtitle="Join thousands of satisfied students who have improved their English with our courses"
            centered={true}
          />
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/courses" className="btn btn-primary">
              Explore Our Courses
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
