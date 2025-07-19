import { Container } from '@/components/atoms/grid/Grid'
import Footer from '@/components/organisms/footer/Footer'
import AcademyAd from '@/components/molecules/academy-ad/AcademyAd'
import Headline from '@/components/atoms/headline/Headline'

export default function Services() {
  return (
    <>
      <article>
        <Container>
          <Headline tag="h1" className="text-center mb-4">
            Our Services: Your Shield in the Digital World
          </Headline>
          <p className="mb-3">
            At FortiNode, we offer a comprehensive suite of cybersecurity and IT
            services designed to protect your business at every level. From
            preventing attacks before they happen, to rapidly detecting and
            responding to threats, and empowering your team, we've got your
            digital security covered.
          </p>
          <ol className="list-decimal m-4">
            <li>
              <Headline tag="h3">Proactive Prevention & Hardening</Headline>
              <p>
                Building a strong, secure foundation is the first step to
                cybersecurity. We help you establish robust defenses that make
                your systems resilient and less vulnerable to attacks.
              </p>
              <ul className="list-disc m-4">
                <li>
                  <Headline tag="h4">Security Architecture & Design:</Headline>
                  <ul className="m-4">
                    <li>
                      <p>
                        <strong>Network Security Design: </strong>We design and
                        implement secure network infrastructures, including
                        robust firewall configurations, intelligent network
                        segmentation, and secure communication protocols,
                        ensuring your data flows safely.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Endpoint Security: </strong>We deploy and manage
                        advanced endpoint detection and response (EDR) solutions
                        on all your devices (laptops, desktops, servers) to
                        provide real-time protection against malware,
                        ransomware, and sophisticated attacks.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Device Hardening: </strong>We configure and
                        optimize your operating systems, applications, and
                        devices to minimize vulnerabilities, reducing the attack
                        surface for potential threats.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <Headline tag="h4">Cybersecurity Assessments:</Headline>
                  <ul className="m-4">
                    <li>
                      <p>
                        <strong>Vulnerability Assessments: </strong>We
                        systematically identify and prioritize weaknesses in
                        your IT infrastructure, applications, and
                        configurations, providing clear recommendations for
                        remediation.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Internal Penetration Testing: </strong>Our
                        experts simulate real-world attacks from within your
                        network to uncover exploitable vulnerabilities and
                        assess the effectiveness of your internal controls.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Web Application Security Testing: </strong>We
                        scrutinize your web applications for security flaws,
                        helping you protect your online presence and customer
                        data from common web-based attacks.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Security Posture Assessments: </strong>A
                        holistic evaluation of your organization's overall
                        security strength, helping you understand your current
                        risk landscape and where to strategically invest in
                        improvements.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <Headline tag="h4">
                    Identity and Access Management (IAM):
                  </Headline>
                  <ul className="m-4">
                    <li>
                      <p>
                        <strong>Multi-Factor Authentication (MFA): </strong>We
                        implement MFA solutions to add an essential layer of
                        security, making it significantly harder for
                        unauthorized users to access your accounts even if
                        passwords are compromised.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Single Sign-On (SSO): </strong>Streamline access
                        for your employees while enhancing security. We
                        integrate SSO solutions allowing secure, convenient
                        access to multiple applications with one set of
                        credentials.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Privileged Access Management (PAM): </strong>We
                        secure, control, and monitor access to your most
                        critical systems and sensitive data, ensuring that
                        privileged accounts are tightly managed and protected
                        from misuse.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <Headline tag="h4">Vendor Security Management:</Headline>
                  <ul className="m-4">
                    <li>
                      <p>
                        <strong>Your supply chain can be a weak link. </strong>
                        We assess the security posture of your third-party
                        vendors and partners, helping you manage associated
                        risks and ensure your data remains secure throughout
                        your business ecosystem.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Headline tag="h3">Detection & Monitoring Services</Headline>
              <p>
                Vigilance is key. Our advanced detection and monitoring services
                ensure that any suspicious activity is quickly identified,
                analyzed, and addressed, often before it can escalate into a
                major incident.
              </p>
              <ul className="m-4">
                <li>
                  <p>
                    <strong>SIEM Implementation & Management: </strong>We
                    deploy, configure, and continuously manage Security
                    Information and Event Management (SIEM) systems tailored for
                    your business. Our experts aggregate and analyze security
                    logs from all your critical IT assets, providing centralized
                    visibility and real-time alerts for anomalies and potential
                    threats.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Intrusion Detection/Prevention Systems (IDS/IPS)
                      Management:{' '}
                    </strong>{' '}
                    We implement, optimize, and manage sophisticated Intrusion
                    Detection Systems (IDS) and Intrusion Prevention Systems
                    (IPS) within your network. These vital tools actively
                    monitor network traffic for malicious patterns and can
                    automatically block known threats, acting as your crucial
                    digital gatekeepers.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Log Management & Analysis: </strong> Every action on
                    your network and systems generates logs, which contain
                    crucial security intelligence. We provide comprehensive
                    services for collecting, securely storing, and rigorously
                    analyzing these logs to uncover attack patterns, identify
                    unauthorized access attempts, and provide critical insights
                    for investigations.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Phishing Analysis: </strong>When a suspicious email
                    lands in an inbox, our experts can analyze it to determine
                    if it's a genuine threat, helping you identify and block
                    ongoing phishing campaigns targeting your organization.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <Headline tag="h3">Response & Recovery Services</Headline>
              <p>
                When an incident occurs, every second counts. Our rapid and
                decisive incident response and digital forensics services
                minimize damage, contain breaches, and get your business back on
                track swiftly.
              </p>
              <ul className="m-4">
                <li>
                  <p>
                    <strong>
                      Incident Response (IR) Planning & Execution:{' '}
                    </strong>
                    We develop tailored incident response plans for your
                    organization, outlining clear procedures for handling
                    security breaches. In the event of an incident (e.g.,
                    malware outbreak, data breach, ransomware attack), our
                    expert team provides rapid, hands-on support to detect,
                    contain, eradicate, and recover your systems and data.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Digital Forensics: </strong>If a security incident
                    occurs, our digital forensics experts meticulously
                    investigate to determine the root cause, assess the scope of
                    the compromise, identify affected systems, and gather
                    crucial evidence for internal analysis or potential legal
                    proceedings.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <Headline tag="h3">Managed IT Services</Headline>
              <p>
                Beyond cybersecurity, we offer comprehensive Managed IT Services
                to ensure your entire technology infrastructure runs smoothly,
                efficiently, and reliably. We handle your IT, so you can focus
                on your core business.
              </p>
              <ul className="m-4">
                <li>
                  <p>
                    <strong>Proactive IT Support & Maintenance: </strong>We
                    provide continuous monitoring of your IT systems, servers,
                    and networks to identify and address potential issues before
                    they cause downtime. This includes regular updates, patches,
                    and health checks.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Network Management: </strong>From initial setup to
                    ongoing optimization, we manage your network infrastructure
                    to ensure reliable connectivity, optimal performance, and
                    robust security for all your operations.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Data Backup & Disaster Recovery: </strong>We
                    implement and manage robust data backup solutions, ensuring
                    your critical information is regularly secured. In case of a
                    system failure or data loss, we provide swift recovery
                    services to minimize disruption.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Help Desk Support: </strong>Your team will have
                    access to expert technical support for their day-to-day IT
                    challenges, ensuring quick resolution of issues and
                    maintaining productivity.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <Headline tag="h3">Training & Awareness</Headline>
              <p>
                Your employees are your first and strongest line of defense. We
                empower your team with the knowledge and skills necessary to
                recognize, avoid, and report cyber threats, fostering a
                security-conscious culture.
              </p>
              <ul className="m-4">
                <li>
                  <p>
                    <strong>Technical IT & Cybersecurity Training: </strong>
                    Equip your IT staff and key personnel with advanced
                    knowledge and practical skills in cybersecurity best
                    practices, defensive tools, and threat mitigation
                    techniques. Our specialized training programs are designed
                    to enhance your team's technical capabilities and contribute
                    directly to your organization's security posture.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cybersecurity Awareness Training:</strong>We deliver
                    engaging and informative workshops tailored for all
                    employees, focusing on common threats like phishing, social
                    engineering, strong password practices, and safe Browse. We
                    turn your entire workforce into an active part of your
                    defense.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Phishing Simulations: </strong>Test your team's
                    readiness with realistic simulated phishing attacks. We
                    design and execute customized campaigns, providing valuable
                    insights into your organization's susceptibility and
                    offering targeted training based on the results to
                    significantly improve your human firewall.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </Container>
      </article>
      <AcademyAd />
      <Footer />
    </>
  )
}
