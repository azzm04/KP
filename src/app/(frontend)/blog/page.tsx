import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">
            Sustainability
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of Sustainable Fashion
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <User className="w-4 h-4 mr-1" />
            <span className="mr-4">Sarah Johnson</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span className="mr-4">March 15, 2024</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Sustainable Fashion"
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The fashion industry is undergoing a revolutionary transformation as sustainability
            takes center stage. From innovative eco-friendly materials to ethical manufacturing
            processes, brands are reimagining how clothes are made and consumed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Rise of Eco-Friendly Materials
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Today's fashion innovators are exploring groundbreaking materials that minimize
            environmental impact. Organic cotton, recycled polyester, and even fabrics made from
            agricultural waste are becoming mainstream alternatives to traditional textiles. These
            materials not only reduce the industry's carbon footprint but also offer comparable
            quality and durability.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Companies like Patagonia and Stella McCartney have been pioneers in this space, proving
            that sustainable materials can be both luxurious and functional. The innovation extends
            beyond just the fabric itself – new dyeing processes using natural pigments and
            water-saving techniques are revolutionizing how we think about textile production.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ethical Manufacturing Practices
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond materials, the industry is focusing on fair labor practices and transparent
            supply chains. Consumers are increasingly demanding to know where and how their clothes
            are made, pushing brands toward greater accountability. This shift has led to the rise
            of certifications like Fair Trade and B-Corp, which ensure ethical standards throughout
            the production process.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Brands are now investing in long-term partnerships with manufacturers, providing
            training and resources to improve working conditions. This approach not only benefits
            workers but also results in higher quality products and more stable supply chains.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Circular Fashion Economy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The concept of circular fashion—where clothes are designed to be reused, recycled, or
            biodegraded—is gaining momentum. This approach challenges the traditional linear model
            of "make, use, dispose" and offers a more sustainable path forward. Companies are
            implementing take-back programs, where customers can return old garments to be recycled
            into new products.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Rental and resale platforms are also booming, allowing consumers to access high-quality
            fashion without the environmental cost of ownership. This shift represents a fundamental
            change in how we think about clothing – from ownership to access, from quantity to
            quality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Consumer Responsibility</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While brands are making significant strides, consumers also play a crucial role in
            driving sustainable fashion forward. By choosing quality over quantity, supporting
            ethical brands, and properly caring for garments to extend their lifespan, individuals
            can make a meaningful impact on the industry's environmental footprint.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The future of fashion lies in this collaborative effort between brands and consumers,
            working together to create a more sustainable and ethical industry that benefits both
            people and the planet.
          </p>
        </div>

        {/* Article Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <Button variant="outline" asChild>
              <Link href="/">← Back to Home</Link>
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sarah is a sustainability expert and fashion industry analyst with over 10 years
                  of experience. She specializes in eco-friendly fashion trends and ethical
                  manufacturing practices. When she's not writing about sustainable fashion, you can
                  find her exploring vintage markets and supporting local artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
