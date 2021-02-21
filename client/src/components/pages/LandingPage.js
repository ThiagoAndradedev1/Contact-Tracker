import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className='grid-3 pb-15'>
        <div></div>
        <div>
          {" "}
          <img src='assets/logo.png' alt='CompanyLogo' />
        </div>
        <div></div>
      </div>
      <div className='text-center pb-45'>
        <h1>Register all of your contacts and make your life easier.</h1>
      </div>
      <div className='grid-3 text-center pb-55'>
        <div>
          <img
            src='assets/personal_information.svg'
            width='250px'
            height='250px'
            alt='Bank Deal'
          />
          <h1 className='pb-10'>Track People</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum
            aliquam voluptates qui ducimus dignissimos omnis praesentium
            maiores, vitae suscipit iste tenetur facilis provident consequuntur,
            libero voluptate repellendus in. Voluptatem.
          </p>
        </div>
        <div>
          <img
            src='assets/people_search.svg'
            width='250px'
            height='250px'
            alt='Rebuild Economy'
          />
          <h1 className='pb-10'>Contact Info</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum
            aliquam voluptates qui ducimus dignissimos omnis praesentium
            maiores, vitae suscipit iste tenetur facilis provident consequuntur,
            libero voluptate repellendus in. Voluptatem.
          </p>
        </div>
        <div>
          <img
            width='250px'
            height='250px'
            src='assets/profile_details.svg'
            alt='Economy'
          />
          <h1 className='pb-10'>Network</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum
            aliquam voluptates qui ducimus dignissimos omnis praesentium
            maiores, vitae suscipit iste tenetur facilis provident consequuntur,
            libero voluptate repellendus in. Voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
