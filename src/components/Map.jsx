import React from 'react';

const Map = () => {
  return (
    <div className='md:m-8 xl:mx-20 pb-6'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29814.548362660626!2d80.06358028793017!3d20.919618801971854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b78bc5f5ad405%3A0x79e89d787e370c83!2sNawegaon%20Bandh%2C%20Maharashtra%20441702!5e0!3m2!1sen!2sin!4v1737801791641!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[24rem] rounded-md map"
      ></iframe>
    </div>
  );
};

export default Map;