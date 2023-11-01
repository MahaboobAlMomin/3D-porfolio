import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { touch} from "../assets";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Tilt } from "react-tilt";
const FeedbackCard = ({ image ,source_code_link,}) => (
  <motion.div>
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
   <img
        src={image}
        alt=""
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={touch}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        
      </Tilt>
    
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>ADDITIONAL INFO</p>
          <h2 className={styles.sectionHeadText}>LINK ME.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
