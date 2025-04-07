import { ArrowRight } from "lucide-react"

const ContactInfo = () => {
  return (
    <div className="min-h-screen w-full flex flex-col p-8 md:p-16 lg:p-24">
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-gray-700 text-lg mb-4">Contact us</p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">We'd love to hear from you</h1>

        <p className="text-xl text-gray-600 mb-16">Our friendly team is always here to chat.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-8">Email</h2>

            <div className="space-y-6">
              <div className="md:flex items-center gap-2">
                <p className="text-gray-600">Sales:</p>
                <a
                  href="#"
                  className="flex items-center text-black transition-colors"
                >
                  sales@ten.com
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="md:flex items-center gap-2">
                <p className="text-gray-600">General:</p>
                <a
                  href="#"
                  className="flex items-center text-black transition-colors"
                >
                  info@ten.com
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-8">Call</h2>

            <div className="space-y-6">
              <div className="xl:flex items-center gap-2">
                <p className="text-gray-600">North America:</p>
                <a
                  href="tel:1.844.469.8900"
                  className="flex items-center text-black transition-colors"
                >
                  1.844.469.8900
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="xl:flex items-center gap-2">
                <p className="text-gray-600">Asia:</p>
                <a
                  href="tel:+91124.469.8900"
                  className="flex items-center text-black transition-colors"
                >
                  +91124.469.8900
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="xl:flex items-center gap-2">
                <p className="text-gray-600">Europe:</p>
                <a
                  href="tel:+44.203.807.6911"
                  className="flex items-center text-black transition-colors"
                >
                  +44.203.807.6911
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-8">Social</h2>

            <div className="space-y-6">
              <div>
                <a href="#" className="flex items-center text-black">
                  LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div>
                <a href="#" className="flex items-center text-black">
                  Twitter <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div>
                <a href="#" className="flex items-center text-black">
                  YouTube <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

