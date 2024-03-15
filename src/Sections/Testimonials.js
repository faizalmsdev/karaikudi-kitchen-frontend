import React from 'react';

const Testimonials = () => {
  return (
    <div className="h-[60vh] pt-4 bg-[#d8ecee] ">
    <div className='flex flex-col justify-center items-center mt-5'>
    <h1 className='text-center text-3xl font-body font-semibold text-primary'>People's Opinion</h1>
    <p className='text-center mt-4 text-xl font-medium'>Hear What people  are saying about us!</p>
    </div>
    
      <div className='w-full flex  justify-center items-center mt-8 md:mt-8' >
      <div className="testimonials w-[90vw] h-[20ch] flex md:block">
        <input type="radio" name="testimonial" id="input-testimonial1" checked />
        <input type="radio" name="testimonial" id="input-testimonial2" />
        <input type="radio" name="testimonial" id="input-testimonial3" />
        <input type="radio" name="testimonial" id="input-testimonial4" />
        <div className="testimonials-inner flex md:block">
          <div className="testimonial flex flex-col justify-center items-center md:mx-[30px]  md:mt-0 md:pt-[40px] md:pb-[20px]  md:text-center ">
            <div className="testimonial-text text-md lg:text-2xl">
              <p className=''>Awesome Dishes and Mindblowing tastes
              Especially Honey Chicken.
              Special mention for chicken briyani and mutton briyani.
              </p>
            </div>
            <div className="testimonial-author mt-4">Dr NithyaPerumal Krishna Murthy</div>
          </div>
          <div className="testimonial flex flex-col justify-center items-center md:mx-[30px]  md:mt-0 md:pt-[40px] md:pb-[20px]  md:text-center">
            
            <div className="testimonial-text text-md lg:text-2xl">
              <p>Dishes are well tasted and the services was awesome ✌🏻</p>
            </div>
            <div className="testimonial-author">Sabari Nath</div>
          </div>
          <div className="testimonial flex flex-col justify-center items-center md:mx-[30px]  md:mt-0 md:pt-[40px] md:pb-[20px]  md:text-center">
            <div className="testimonial-text text-md lg:text-2xl">
              <p>Food was good and the service was excellent. Good taste and on time. Must visit!!</p>
            </div>
            <div className="testimonial-author">Benjamin David</div>
          </div>
          <div className="testimonial flex flex-col justify-center items-center md:mx-[30px]  md:mt-0 md:pt-[40px] md:pb-[20px]  md:text-center">
            <div className="testimonial-text text-md lg:text-2xl">
              <p>Food was delicious.we loved the ambience so much.waiter was so humble and served food very well.overall its a decent and good restaurant. We came after 11 almost closing time but still they provided.</p>
            </div>
            <div className="testimonial-author">madhu priya</div>
          </div>
        </div>
        <div className="testimonials-arrows">
          <div className="arrow arrow-left">
            <label htmlFor="input-testimonial1"></label>
            <label htmlFor="input-testimonial2"></label>
            <label htmlFor="input-testimonial3"></label>
            <label htmlFor="input-testimonial4"></label>
            <span></span>
          </div>
          <div className="arrow arrow-right">
            <label htmlFor="input-testimonial1"></label>
            <label htmlFor="input-testimonial2"></label>
            <label htmlFor="input-testimonial3"></label>
            <label htmlFor="input-testimonial4"></label>
            <span></span>
          </div>
        </div>

        
      </div>
      </div>
      
    </div>
  );
}

export default Testimonials;
