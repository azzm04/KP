import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Terms of Service</h1>
        <p className="text-gray-600 text-center mb-10">Last Updated: July 14, 2025</p>

        <div className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
          <p>
            Welcome to E-Commerce! These Terms of Service ("Terms") govern your use of our website
            and services. By accessing or using our website, you agree to be bound by these Terms
            and our Privacy Policy. If you do not agree to these Terms, please do not use our
            website.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account, making a purchase, or otherwise using our services, you confirm
            that you have read, understood, and agree to be bound by these Terms. We reserve the
            right to update or modify these Terms at any time without prior notice. Your continued
            use of the website after any such changes constitutes your acceptance of the new Terms.
          </p>

          <h2>2. User Accounts</h2>
          <ul>
            <li>
              <strong>Account Creation:</strong> To access certain features of our website, you may
              need to create an account. You agree to provide accurate, current, and complete
              information during the registration process and to update such information to keep it
              accurate, current, and complete.
            </li>
            <li>
              <strong>Account Security:</strong> You are responsible for maintaining the
              confidentiality of your account password and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account.
            </li>
            <li>
              <strong>Termination:</strong> We reserve the right to suspend or terminate your
              account at our sole discretion, without notice, for any reason, including but not
              limited to breach of these Terms.
            </li>
          </ul>

          <h2>3. Products and Services</h2>
          <ul>
            <li>
              <strong>Product Descriptions:</strong> We strive to ensure that all product
              descriptions, images, and prices are accurate. However, we do not warrant that product
              descriptions or other content on the website are accurate, complete, reliable,
              current, or error-free.
            </li>
            <li>
              <strong>Pricing:</strong> All prices are listed in IDR (Indonesian Rupiah) unless
              otherwise specified. Prices are subject to change without notice.
            </li>
            <li>
              <strong>Availability:</strong> Product availability is subject to change. We reserve
              the right to limit the quantity of products purchased per person, per household, or
              per order.
            </li>
          </ul>

          <h2>4. Orders and Payments</h2>
          <ul>
            <li>
              <strong>Order Acceptance:</strong> Your receipt of an electronic or other form of
              order confirmation does not signify our acceptance of your order, nor does it
              constitute confirmation of our offer to sell. We reserve the right at any time after
              receipt of your order to accept or decline your order for any reason.
            </li>
            <li>
              <strong>Payment:</strong> All payments must be made through the payment methods
              provided on our website. You agree to provide valid and accurate payment information.
            </li>
          </ul>

          <h2>5. Shipping and Delivery</h2>
          <ul>
            <li>
              <strong>Shipping Policy:</strong> Shipping costs and estimated delivery times will be
              provided at checkout. We are not responsible for delays caused by shipping carriers or
              customs.
            </li>
            <li>
              <strong>Risk of Loss:</strong> All products purchased from the website are transported
              and delivered to you by third-party carriers. Risk of loss and title for items
              purchased pass to you upon our delivery to the carrier.
            </li>
          </ul>

          <h2>6. Returns and Refunds</h2>
          <p>
            Please refer to our separate Return Policy for detailed information regarding returns,
            exchanges, and refunds.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is
            the property of E-Commerce or its content suppliers and is protected by intellectual
            property laws. You may not use, reproduce, distribute, or create derivative works from
            any content without our express written permission.
          </p>

          <h2>8. User Conduct</h2>
          <p>
            You agree not to use the website for any unlawful purpose or in any way that could
            damage, disable, overburden, or impair the website or interfere with any other party's
            use and enjoyment of the website. Prohibited activities include, but are not limited to:
          </p>
          <ul>
            <li>
              Posting or transmitting any unlawful, harmful, threatening, abusive, defamatory, or
              obscene material.
            </li>
            <li>
              Engaging in any activity that would constitute a criminal offense or give rise to
              civil liability.
            </li>
            <li>
              Attempting to gain unauthorized access to any portion of the website or any other
              accounts, computer systems, or networks connected to the website.
            </li>
          </ul>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            The website and all content, products, and services provided on the website are provided
            on an "as is" and "as available" basis. We make no warranties, express or implied,
            regarding the operation of the website or the information, content, materials, or
            products included on the website.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall E-Commerce, its directors, officers, employees, or affiliates be
            liable for any direct, indirect, incidental, special, punitive, or consequential damages
            arising out of or in connection with your use of the website or the products purchased
            through the website.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Indonesia,
            without regard to its conflict of law principles.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: support@e-commerce.com
            <br />
            Address: [Your Company Address Here]
          </p>
        </div>
      </main>
    </div>
  );
}
