import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">Last updated: July 14, 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect various types of information in connection with the services we provide,
                including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium">Personal Information:</span> Such as your name,
                  email address, shipping address, and payment information when you make a purchase
                  or create an account.
                </li>
                <li>
                  <span className="font-medium">Usage Data:</span> Information on how the Service is
                  accessed and used, including your computers Internet Protocol address (e.g., IP
                  address), browser type, browser version, the pages of our Service that you visit,
                  the time and date of your visit, the time spent on those pages, unique device
                  identifiers and other diagnostic data.
                </li>
                <li>
                  <span className="font-medium">Cookies and Tracking Technologies:</span> We use
                  cookies and similar tracking technologies to track the activity on our Service and
                  hold certain information.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>
                  To allow you to participate in interactive features of our Service when you choose
                  to do so
                </li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information so that we can improve our Service
                </li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To fulfill any other purpose for which you provide it</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Data Security</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure.
                While we strive to use commercially acceptable means to protect your Personal Data,
                we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Your Data Protection Rights</h2>
              <p className="text-muted-foreground">
                Depending on your location, you may have the following data protection rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The right to access, update or to delete the information we have on you.</li>
                <li>The right of rectification.</li>
                <li>The right to object.</li>
                <li>The right of restriction.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page. You are advised to review
                this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>By email: support@ecommerce.com</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 E-Commerce. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4">
            Term Of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}
