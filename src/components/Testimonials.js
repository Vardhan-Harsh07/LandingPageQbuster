import Testimonial from "./Testimonial"
import Testimonial2 from "./Testimonial2"
const Testimonials = () => {
  return (
    <div className="work-section-wrapper" id="testimoni">
      <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They're Saying</h1>
                <p className="primary-text">
                Dig In to Student Reviews! Wondering how your classmates are conquering campus meals with Q-Buster? Let's dive into real experiences and see what other students are saying about the web app. Buckle up for insights on skipping lines, managing budgets, and reclaiming precious time!
                </p>
            </div>
            <div className="liner">
                <Testimonial />
                <Testimonial2 />
            </div>
    </div>
  )
}

export default Testimonials
