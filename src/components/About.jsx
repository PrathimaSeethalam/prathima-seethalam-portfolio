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
          Detail-oriented and innovative Front End Engineer with a passion for music and a proven track record in building world-class frontends. Seeking a challenging role within the TikTok Music team where I can contribute to data-driven product ideas, leverage my expertise in front-end technologies, and actively participate in end-to-end solution development.          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
