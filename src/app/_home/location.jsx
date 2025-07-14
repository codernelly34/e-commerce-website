const Location = () => {
  return (
    <div id="our-location" className="p-2 my-20">
      <h2 className="text-center text-2xl font-semibold my-4">Our Location</h2>
      <p className="m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione,
        excepturi exercitationem reiciendis a nihil enim sequi laboriosam
        assumenda dolor placeat iure neque, quo veritatis? Quas cumque expedita
        quod quae!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.789234162467!2d9.614078820752162!3d4.225596738505123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611943caee925f%3A0xf0bedb3bb23b0e0!2sUniversity%20Institute%20Professional%20Divine%20Yard%20De%20Souza!5e1!3m2!1sen!2scm!4v1752506338135!5m2!1sen!2scm"
        // width="80%"
        height="450"
        className="border-0 rounded mx-auto w-full md:w-11/12 lg:w-4/5 shadow my-4"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
