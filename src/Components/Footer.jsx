

const Fotter = () => {
  return (
    <footer className="py-5 bg-light ">
      <div className="row">
        <div className=" col-3" style={{padding:"0 65px"}}>
          <div className="w-full justify-content-center d-flex flex-column">
           
             <div> <h5 style={{ color: "palevioletred", width: "100px", display: "block" }}> 
                dribbble
              </h5> </div>
           <div>   <p>
                Dribbble is thee worlds leading community for creatives to share
                grow, and get hired
              </p> </div>
              <div className="media">
                <i className="mx-2 fa-brands fa-dribbble fs-4"></i>
                <i className="mx-2 fa-brands fa-twitter fs-4"></i>
                <i className="mx-2 fa-brands fa-square-facebook fs-4"></i>
                <i className="mx-2 fa-brands fa-instagram fs-4"></i>
                <i className="mx-2 fa-brands fa-pinterest fs-4"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h5>Food Designer</h5>
          <ul className="py-1 list-unstyled text-small">
            <li className="py-3">Go Pro!</li>
            <li className="py-3">Explore Design work</li>
            <li className="py-3">Design blog</li>
            <li className="py-3">Overtime Podcast</li>
            <li className="py-3">Playoffs </li>
            <li className="py-3">Weekly Warm-Up</li>
            <li className="py-3">Refer a Friend </li>
            <li className="py-3">Code of Conduct</li>
          </ul>
        </div>
        <div className="col">
          <h5>Hire Designer</h5>
          <ul className="py-1 list-unstyled text-small">
            <li className="py-3">Post a job opening</li>
            <li className="py-3">post a freelance</li>
            <li className="py-3">Search for designers</li>
            <li className="py-3">
              <h5>Brands</h5>
            </li>
            <li className="py-3">Advertise with us</li>
          </ul>
        </div>
        <div className="col">
          <h5>Company</h5>
          <ul className="py-1 list-unstyled text-small">
            <li className="py-3">About</li>
            <li className="py-3">Careers</li>
            <li className="py-3">Support</li>
            <li className="py-3">Media Kit</li>
            <li className="py-3">Testimoniais</li>
            <li className="py-3">API</li>
            <li className="py-3">Terms of Services</li>
            <li className="py-3">Privacy policy</li>
            <li className="py-3">Cookie policy</li>
          </ul>
        </div>
        <div className="col">
          <h5>Directories</h5>
          <ul className="py-1 list-unstyled text-small">
            <li className="py-3">Desing jobs</li>
            <li className="py-3">Designers for hire</li>
            <li className="py-3"></li>Freelance designers for hire
            <li className="py-3">Tags</li>
            <li className="py-3">Places </li>
            <li className="py-3">
              <h5>Design assets</h5>
            </li>
            <li className="py-3">Dribbble Marketplace </li>
            <li className="py-3">Creative Market</li>
            <li className="py-3">Fontspring</li>
            <li className="py-3">Font Squirel</li>
          </ul>
        </div>
        <div className="col">
          <h5>Design Resources</h5>
          <ul className="py-1 list-unstyled text-small">
            <li className="py-3">Freelancing</li>
            <li className="py-3">Design Hiring</li>
            <li className="py-3">Design Portfolio</li>
            <li className="py-3">Design Education </li>
            <li className="py-3">Creative Process </li>
            <li className="py-3">Design Industry Trends</li>
          </ul>
        </div>
      </div>

      <div className="px-5 d-flex justify-content-between align-item-center footerend">
        
       <div className="left"> &copy; 2023 Dribbble. All right reserved</div>
       <div className="right"> <p><span className="text-black">20,501,853</span> shorts dribbbled</p>

       <i className="mx-2 fa-brands fa-dribbble fs-4 "></i>

       </div>
        
      </div>
    </footer>
  );
};

export default Fotter;
