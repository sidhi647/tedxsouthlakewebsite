
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TEDxSouthlake",
  description:
    "Learn how TEDxSouthlake collects, uses, and protects your information.",
};

const email = "privacy@tedxsouthlake.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        {/* Header */}
        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            TEDxSouthlake Mobile Application
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last Updated: October 24, 2026
          </p>
        </header>

        <article className="space-y-12 leading-7">
          {/* Section 1 */}
          <section>
            <Heading number={1} title="Introduction" />
            <P>
              SHARE A SMILE CHARITY (&quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) operates the TEDxSouthlake mobile
              application (the &quot;App&quot;).
            </P>
            <P>
              We respect your privacy and are committed to protecting
              your personal information. This Privacy Policy explains
              what information we collect, how we use and share it, and
              the choices available to you when using the App and
              related TEDxSouthlake services.
            </P>
            <P>
              By using the App, you acknowledge the data practices
              described in this Privacy Policy.
            </P>
          </section>

          {/* Section 2 */}
          <section>
            <Heading number={2} title="Information We Collect" />
            <P>
              The TEDxSouthlake App is designed to provide information
              about TEDxSouthlake events, speakers, talks, and
              community activities.
            </P>
            <P>
              You can browse the App without creating an account or
              directly providing personal information.
            </P>
            <P>
              Depending on how you interact with TEDxSouthlake, we
              may receive the following information:
            </P>

            <Subheading>Contact Information</Subheading>
            <P>
              If you contact our organizing team, subscribe to event
              communications, or submit an enquiry, we may collect
              information you voluntarily provide, including your
              name, email address, and message content.
            </P>

            <Subheading>Event Registration and Tickets</Subheading>
            <P>
              Event registration and ticket purchases may be handled
              through third-party platforms, including Zeffy.
            </P>
            <P>
              When necessary to manage event participation, we may
              receive information such as your name, email address,
              ticket details, and registration status from those
              platforms.
            </P>
            <P>
              Payment information is processed by the applicable
              payment provider in accordance with its privacy policy.
            </P>

            <Subheading>
              Speaker Applications and Volunteer Participation
            </Subheading>
            <P>
              If you apply to become a speaker, volunteer, student
              participant, or organizing team member, we may collect
              information you submit through the relevant application
              or participation process.
            </P>
            <P>
              This information is used to evaluate applications,
              coordinate activities, and administer TEDxSouthlake
              programs.
            </P>

            <Subheading>Event Photography and Recordings</Subheading>
            <P>
              TEDxSouthlake events may be photographed or recorded.
              Images, videos, approved speaker biographies, and
              presentations may appear on our website, within the
              App, or through TEDxSouthlake&apos;s official
              communication channels.
            </P>
            <P>
              Additional notices and permission arrangements,
              including those applicable to minors, may be provided
              during registration or participation.
            </P>
          </section>

          {/* Section 3 */}
          <section>
            <Heading number={3} title="Push Notifications" />
            <P>
              The App uses Firebase Cloud Messaging (FCM), a service
              provided by Google, to deliver push notifications about
              TEDxSouthlake events, announcements, and updates.
            </P>
            <P>If you enable push notifications:</P>
            <BulletList
              items={[
                "Firebase may generate a unique registration token associated with your App installation.",
                "This token is used to deliver notifications to your device.",
                "We do not intentionally associate notification tokens with your name or email address.",
                "You can disable push notifications at any time through your device settings.",
              ]}
            />
            <P>
              Firebase may process technical information necessary
              to provide notification services in accordance with
              Google&apos;s privacy practices.
            </P>
          </section>

          {/* Section 4 */}
          <section>
            <Heading
              number={4}
              title="App Usage and Technical Information"
            />
            <P>
              We do not intentionally collect behavioral analytics,
              browsing history, or information for targeted
              advertising within the App.
            </P>
            <P>
              However, third-party services that support App
              functionality may automatically process certain
              technical information, such as:
            </P>
            <BulletList
              items={[
                "IP address",
                "Device type and operating system",
                "App or service identifiers",
                "Network requests and technical logs",
              ]}
            />
            <P>
              This processing may be necessary to deliver content,
              maintain functionality, and protect the security of
              the services.
            </P>
            <P>
              We do not use this information to build advertising
              profiles of App users.
            </P>
          </section>

          {/* Section 5 */}
          <section>
            <Heading number={5} title="How We Use Your Information" />
            <P>
              We use information collected through the App and
              related TEDxSouthlake services to:
            </P>
            <BulletList
              items={[
                "Provide TEDxSouthlake event information, speaker details, and community content.",
                "Deliver push notifications when enabled.",
                "Respond to enquiries and support requests.",
                "Process and manage event registration and participation.",
                "Coordinate speaker applications and volunteer activities.",
                "Send newsletters or promotional communications when you have subscribed or otherwise provided the required consent.",
                "Maintain the functionality, reliability, and security of our services.",
                "Comply with applicable legal obligations.",
              ]}
            />
            <P>We do not sell or rent your personal information.</P>
            <P>
              A ticket purchase, speaker application, or support
              enquiry does not automatically enroll you in
              unrelated marketing communications.
            </P>
          </section>

          {/* Section 6 */}
          <section>
            <Heading number={6} title="Third-Party Services" />
            <P>
              The App uses or connects to third-party services to
              provide content and functionality.
            </P>
            <P>These may include:</P>

            <Subheading>Vercel / TEDxSouthlake.com</Subheading>
            <P>
              Used to host and deliver event information, speaker
              profiles, and community content.
            </P>

            <Subheading>Zeffy</Subheading>
            <P>
              Used for event registration, ticketing, and payment
              processing.
            </P>

            <Subheading>YouTube (Google)</Subheading>
            <P>
              Used to display or stream TEDxSouthlake talks and
              related videos.
            </P>

            <Subheading>Firebase Cloud Messaging (Google)</Subheading>
            <P>Used to deliver push notifications.</P>

            <P>
              These services may process information necessary to
              provide their functionality. Their handling of
              information is governed by their respective privacy
              policies.
            </P>
            <P>
              We encourage users to review the privacy policies of
              third-party services they access.
            </P>
            <P>
              We do not share personal information with third
              parties for their independent marketing purposes.
            </P>
          </section>

          {/* Section 7 */}
          <section>
            <Heading number={7} title="Data Sharing" />
            <P>
              We may share limited information with trusted service
              providers when necessary to operate the App,
              administer events, or provide requested services.
            </P>
            <P>
              We may also disclose information when required by
              applicable law, legal process, or to protect the
              rights, safety, or security of TEDxSouthlake, its
              participants, or others.
            </P>
            <P>
              We do not sell personal information or share it with
              third parties for targeted advertising.
            </P>
          </section>

          {/* Section 8 */}
          <section>
            <Heading number={8} title="Data Retention and Deletion" />
            <P>
              We retain personal information only for as long as
              reasonably necessary to fulfill the purposes
              described in this Privacy Policy, support event
              administration, or satisfy applicable legal
              obligations.
            </P>
            <P>
              Retention periods may vary depending on the type of
              information and its purpose.
            </P>

            <Subheading>Requesting Data Deletion</Subheading>
            <P>
              You may request access to or deletion of personal
              information maintained by SHARE A SMILE CHARITY
              by contacting:
            </P>
            <P>
              <EmailLink />
            </P>
            <P>
              Subject: <strong>Data Deletion Request</strong>
            </P>
            <P>
              Please include sufficient information to help us
              identify the records associated with your request.
            </P>
            <P>
              We aim to respond to verified deletion requests within
              30 days, subject to applicable legal requirements.
            </P>
            <P>
              Where appropriate, we will delete or de-identify
              information that is no longer necessary.
            </P>
            <P>
              Certain records may need to be retained for legitimate
              administrative, financial, legal, or security purposes.
            </P>
            <P>
              Information maintained independently by third-party
              providers may be subject to their own deletion
              procedures.
            </P>

            <Subheading>Mailing List Unsubscription</Subheading>
            <P>
              You can unsubscribe from marketing emails using the
              unsubscribe instructions provided in those
              communications or by contacting us directly.
            </P>

            <Subheading>Push Notification Data</Subheading>
            <P>
              You may disable push notifications through your device
              settings. Firebase registration tokens may expire,
              change, or become invalid as part of Firebase&apos;s
              normal token-management processes.
            </P>
          </section>

          {/* Section 9 */}
          <section>
            <Heading number={9} title="Data Security" />
            <P>
              We take reasonable administrative and technical
              measures to protect personal information against
              unauthorized access, loss, misuse, or disclosure.
            </P>
            <P>
              Where third-party service providers process
              information on our behalf, we seek to use providers
              with appropriate security and privacy practices.
            </P>
            <P>
              However, no internet-based service or electronic
              storage system can guarantee absolute security.
            </P>
          </section>

          {/* Section 10 */}
          <section>
            <Heading number={10} title="Children's Privacy" />
            <P>
              The App is not directed toward children under the
              age of 13.
            </P>
            <P>
              We do not knowingly collect personal information
              directly through the App from children under 13
              without any legally required parental consent.
            </P>
            <P>
              TEDxSouthlake may separately organize educational,
              student, or youth participation activities. Where
              personal information about minors is required for
              these activities, additional notices and appropriate
              parental or guardian permissions will be provided
              as required by applicable law.
            </P>
            <P>
              If you believe that a child under 13 has provided
              personal information through the App without
              appropriate authorization, please contact us at{" "}
              <EmailLink />.
            </P>
            <P>
              We will review the request and take appropriate action.
            </P>
          </section>

          {/* Section 11 */}
          <section>
            <Heading
              number={11}
              title="Your Privacy Choices and Rights"
            />
            <P>
              Depending on applicable law, you may have the
              right to:
            </P>
            <BulletList
              items={[
                "Request information about personal data we maintain.",
                "Request correction of inaccurate personal information.",
                "Request deletion of personal information, subject to applicable exceptions.",
                "Withdraw consent for optional communications.",
                "Disable push notifications through your device settings.",
              ]}
            />
            <P>
              To exercise an applicable privacy right, contact us
              at <EmailLink />.
            </P>
            <P>
              We may need to verify your identity before processing
              certain requests.
            </P>
          </section>

          {/* Section 12 */}
          <section>
            <Heading
              number={12}
              title="Changes to This Privacy Policy"
            />
            <P>
              We may update this Privacy Policy periodically to
              reflect changes in App functionality, our practices,
              or applicable legal requirements.
            </P>
            <P>
              When changes are made, we will update the
              &quot;Last Updated&quot; date at the beginning of
              this policy.
            </P>
            <P>
              Where required by law, we will provide additional
              notice or request consent for material changes.
            </P>
            <P>
              We encourage users to review this Privacy Policy
              periodically.
            </P>
          </section>

          {/* Section 13 */}
          <section>
            <Heading number={13} title="Contact Us" />
            <P>
              If you have questions, concerns, or requests regarding
              this Privacy Policy or the handling of your personal
              information, please contact:
            </P>

            <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p className="font-semibold text-gray-950">
                SHARE A SMILE CHARITY
              </p>
              <p className="mt-1">TEDxSouthlake</p>
              <p className="mt-3">
                Email: <EmailLink />
              </p>
              <p className="mt-2">
                Website:{" "}
                <a
                  href="https://tedxsouthlake.com"
                  className="text-red-700 underline underline-offset-4 hover:text-red-900"
                >
                  https://tedxsouthlake.com
                </a>
              </p>
            </div>
          </section>
        </article>

        <footer className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} TEDxSouthlake.
        </footer>
      </div>
    </main>
  );
}

// Reusable components

function Heading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <h2 className="mb-5 text-2xl font-semibold tracking-tight text-gray-950">
      {number}. {title}
    </h2>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-7 text-lg font-semibold text-gray-900">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-gray-700">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-gray-700 marker:text-red-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${email}`}
      className="break-all text-red-700 underline underline-offset-4 hover:text-red-900"
    >
      {email}
    </a>
  );
}
