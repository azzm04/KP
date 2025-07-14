import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">Last updated: July 14, 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using our website and services, you agree to be bound by these Terms
                of Service and all terms incorporated by reference. If you do not agree to all of
                these terms, do not use our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole
                discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Privacy Policy</h2>
              <p className="text-muted-foreground">
                Your use of our website and services is also governed by our Privacy Policy, which
                is incorporated into these Terms by reference. Please review our Privacy Policy to
                understand our practices regarding your personal data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. User Accounts</h2>
              <p className="text-muted-foreground">
                When you create an account with us, you must provide information that is accurate,
                complete, and current at all times. Failure to do so constitutes a breach of the
                Terms, which may result in immediate termination of your account on our Service. You
                are responsible for safeguarding the password that you use to access the Service and
                for any activities or actions under your password.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The Service and its original content, features, and functionality are and will
                remain the exclusive property of E-Commerce and its licensors. Our trademarks and
                trade dress may not be used in connection with any product or service without the
                prior written consent of E-Commerce.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the
                Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of
                Indonesia, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at
                support@ecommerce.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 E-Commerce. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
