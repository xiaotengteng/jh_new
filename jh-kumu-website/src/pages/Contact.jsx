import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  // Contact details
  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+91 8521569961',
      url: 'tel:+918521569961',
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'jumbalzonecbsa@gmail.com',
      url: 'mailto:jumbalzonecbsa@gmail.com',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      details: 'tungri ,Nehru chowk Birua path,chaibasa jharkhand',
      url: 'https://maps.google.com/?q=chaibasa,+Jharkhand',
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      details: 'Monday to Saturday: 9:00 AM - 6:00 PM',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 text-white">
        <div className="container-padding">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Reach out to us for any questions about our courses or to schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section bg-gray-50">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader
                title="Send Us a Message"
                subtitle="Fill out the form below, and our team will get back to you as soon as possible."
              />
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <SectionHeader
                title="Contact Information"
                subtitle="Here's how you can reach us directly"
              />

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                        <item.icon className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        {item.url ? (
                          <a
                            href={item.url}
                            className="text-gray-600 hover:text-primary transition-colors"
                            target={item.title === 'Address' ? '_blank' : undefined}
                            rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117137.26816238624!2d85.53066655!3d23.641499599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e27e7d2da141%3A0x6efc69ad5c9c6dd9!2sJharkhand!5e0!3m2!1sen!2sin!4v1676376617493!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JH KUMU EDTECH location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-padding">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our courses and services"
            centered={true}
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I enroll in a course?</h3>
                <p className="text-gray-600">
                  You can enroll by contacting us through the form above, calling our phone number,
                  or sending us an email. Our team will guide you through the enrollment process.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer online courses?</h3>
                <p className="text-gray-600">
                  Yes, we offer both online and offline courses. Our online courses provide the same
                  quality of education with the flexibility of learning from anywhere.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What is your refund policy?</h3>
                <p className="text-gray-600">
                  We offer a 7-day satisfaction guarantee for all our courses. If you're not satisfied with
                  the course quality, you can request a refund within the first week of enrollment.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer corporate training?</h3>
                <p className="text-gray-600">
                  Yes, we offer customized English language training programs for corporations. Contact us
                  for more details on our corporate packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
