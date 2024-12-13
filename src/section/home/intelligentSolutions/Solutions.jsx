import React from "react";
import { Fragment } from "react";
import solutions from "@/section/home/intelligentSolutions/Solutions.module.css";
import solution1 from '@/assets/home/solution1.jpg'
import solution2 from '@/assets/home/solution2.jpg'
import solution3 from '@/assets/home/solution3.jpg'
import solution4 from '@/assets/home/solution4.jpg'
import solution5 from '@/assets/home/solution5.jpg'

const Solutions = () => {
  return (
    <Fragment>
      <div className={solutions.home_solutions} id="solutions">
        <div className={solutions.home_solutions_container}>
          <div className={solutions.home_solutions_heading_container}>
            <div>
              <h1>Our Intelligent Solutions for Your Business</h1>
            </div>
            <div>
              <p>
                Strategize personalized omnichannel communications for
                enterprise to Automate, Adopt and Analyse.
              </p>
            </div>
          </div>

          <div className={solutions.home_solutions_parallax} >
            <div className={solutions.home_solutions_parallax_container_one}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>Rapid Deployment:</h2>
                  <p>
                    Our platform excels in swift configuration and setup,
                    enabling rapid deployment and ensuring you stay ahead in a
                    fast-paced market. While many solutions require 4-8 weeks
                    for new use cases, Genstrat&rsquo;s quick turnaround
                    minimises delays.
                  </p>
                </div>
                <div>
                  <h2>Complete User Journey Integration</h2>
                  <p>
                    Genstrat offers an unmatched level of integration with our
                    advanced strategy configuration managing the entire user
                    journey— from lead generation and qualification to
                    onboarding, feedback, payment reminders etc. This cohesive
                    automation eliminates the need for additional development or
                    user intervention.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_img_container}>
                <img src={solution1.src} alt="img" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_two}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>True Omnichannel Engagement</h2>
                  <p>
                    Genstrat provides a truly omnichannel experience. Our
                    platform integrates voice, WhatsApp, SMS, and email,
                    maintaining context across all touchpoints for seamless
                    interactions.
                  </p>
                </div>
                <div>
                  <h2>Comprehensive End-to-End Analytics</h2>
                  <p>
                    Gain a 360-degree view of your customers with our robust
                    analytics. Our system delivers deep insights into payment
                    behaviours and campaign effectiveness, allowing for precise
                    strategy adjustments.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_img_container}>
                <img src={solution2.src} alt="img" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_three}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>Personalised Interactions</h2>
                  <p>
                    Leveraging past interactions and transactions, our system
                    personalizes each conversation, enhancing the customer
                    experience and building credibility through relevant and
                    engaging interactions
                  </p>
                </div>
                <div>
                  <h2>Visual IVR Technology</h2>
                  <p>
                    Our Visual IVR guides customers through actions like
                    payments, KYC and loan applications, simplifying tasks and
                    boosting efficiency.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_img_container}>
                <img src={solution3.src} alt="img" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_four}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>Real-Time Agent Assistance</h2>
                  <p>
                    Our platform facilitates on-demand connections to contact
                    centre agents during a bot interaction, ensuring immediate
                    help and improving resolution times
                  </p>
                </div>
                <div>
                  <h2>Cutting-Edge LLM Technology</h2>
                  <p>
                    Genstrat uses advanced Large Language Model technology to
                    accurately extract user intent, capture critical business
                    entities, and gauge sentiment, leading to superior
                    conversational experiences and effective cross-selling
                    opportunities.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_img_container}>
                <img src={solution4.src} alt="img" />
              </div>
            </div>

            <div className={solutions.home_solutions_parallax_container_five}>
              <div className={solutions.home_solutions_parallax_item_one}>
                <div>
                  <h2>Real-Time Contact Center Automation</h2>
                  <p>
                    Our platform supports seamless transcription and recording
                    of customer-agent conversations, aiding in quality
                    assurance, compliance, and detailed documentation.
                  </p>
                </div>
                <div>
                  <h2>Let speech analytics piece be there</h2>
                  <p>
                    Uncover Hidden Insights. Go beyond basic dispositions with
                    advanced speech & sentiment analysis. Gain valuable customer
                    understanding and continuously improve your contact center.
                  </p>
                </div>
              </div>

              <div className={solutions.home_solutions_parallax_img_container}>
                <img src={solution5.src} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Solutions;
