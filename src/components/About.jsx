import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          👋 Hi there! I'm Prathima Seethalam, a dedicated and results-driven software developer with a passion for problem-solving and innovation. With over 4+ years of experience in the Software field, I thrive in dynamic environments where I can apply my skills to tackle complex challenges and deliver high-quality solutions on time.

As a hardworking and quick learner, I am adept at adapting to new technologies and methodologies, allowing me to stay ahead of industry trends and continuously improve my craft. Whether it's debugging intricate code or architecting robust software systems, I approach every task with enthusiasm and attention to detail.

I am a result-oriented and innovative Software Engineer, who easily communicates complex technical requirements to non-technical stakeholders.I pursue excellent leadership record of leading development teams in enterprise-wide development projects with a strong Expertise in React JS, Redux, JavaScript and Java.

My commitment to excellence, coupled with my ability to collaborate effectively with cross-functional teams, enables me to drive projects forward and achieve success. I take pride in my ability to translate business requirements into scalable and efficient software solutions that meet and exceed expectations

Let's connect and explore how we can collaborate on exciting projects together! Contact me on

prathimakrishna.seethalam@gmail.com       </p>
        </article>
      </div>
    </section>
  );
};
export default About;
