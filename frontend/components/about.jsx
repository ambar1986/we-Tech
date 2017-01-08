import React from 'react'

var About = React.createClass({
  	render: function() {
    return (
      <div>

      <hr className="break" />
      
      <div className="about">
        <h2>What is WeTech?</h2>
          <p>
            WeTech is a mentorship program that matches women pursuing a career in technology with a mentor who is currently working in the industry and can provide guidance and advice. 
          </p>
        <h2>Why do we do this?</h2>
          <p>
            By 2020, 1.4 million jobs will open in computer science. Yet, according to a recent article from TechCrunch, only 29% of graduates will be qualified to fill those positions - and less than 3% will be filled by women. This is a serious domestic issue that we are hoping to tackle. 
          </p>
          <p>
            Since the 1980s, women in computer science have dropped from 37% to less than 18% today. Studies have shown that aptitude isn't the problem, it's the culture. The male-dominated field and the lack of female role models have made the industry unappealing to women.
          </p>

          <br />

           <img className="graph" src='http://i.huffpost.com/gen/2772382/original.jpg' />

        <h2>How does WeTech work to promote changes?</h2>
          <p>
            Accepted mentees will be matched with a mentor that has the skills the mentee is hoping to improve on. Both mentors and mentees are committed to meeting weekly to discuss and advise on projects and address any issues. 
          </p>
        <h2>Who is eligible?</h2>
          <p>
            Currently, the mentorship is only available to those living in New York City.
          </p>
          <p>
            Both potential mentors and mentees must fill out an application on the Sign Up page. WeTech will match candidates together based on skillsets and preferences.
          </p>
          <p>
            In order to be a mentor, you should be working professionally in the tech industry. You do not have to be female to apply.
          </p>
          <p>
            To be a mentee, you must be a female, 18 years or older, who is interested in learning to code. Ideally, you are currently a programming student. You also agree to our pay-it-forward initiative, where upon securing a technology position, you will return as a mentor.
          </p>
          </div>
      </div>
    )
  }
})
 
export default About;