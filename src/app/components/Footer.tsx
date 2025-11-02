import Link from "next/link";
import MailIcon from "./icon/MailIcon";
import PhoneIcon from "./icon/PhoneIcon";
import ChevronRight from "./icon/Chevronright";
import LocationIcon from "./icon/LocationIcon";
import Image from "next/image";
import gallery1 from "/public/img/side-menu-1.jpg";
import gallery2 from "/public/img/side-menu-2.jpg";
import gallery3 from "/public/img/side-menu-3.jpg";
import gallery4 from "/public/img/side-menu-4.jpg";
import gallery5 from "/public/img/side-menu-5.jpg";
import gallery6 from "/public/img/side-menu-6.jpg";

const FooterMain = () => {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  const services = [
    "Cardiovascular",
    "Heart Checkup",
    "Pathology Drag",
    "Family Physician",
    "Hematology Super",
    "Laboratory Drag",
  ];

  const visitingHours = [
    { day: "Mon - Fri", hours: "8:00 am - 8:00 pm" },
    { day: "Saturday", hours: "9:00 am - 6:00 pm" },
    { day: "Sunday", hours: "9:00 am - 6:00 pm" },
  ];
  const ContactItem = ({ icon, text, link }:{
    icon: any;
    text: any;
    link: any;
  }) => (
    <Link href={link} className="contact-item">
      <div className="icon">{icon}</div>
      <h4>{text}</h4>
    </Link>
  );

  const ServiceItem = ({ text, link }:{
     text: any;
    link: any;
  }) => (
    <div className="service-item">
      <ChevronRight />
      <Link href={link}>{text}</Link>
    </div>
  );

  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          {/* About Us Section */}
          <div className="footer-inner">
            <h3>About Us</h3>
            <p>
              Energistically reintermediate worldwide interfaces vis-a-vis
              emerging integrate leadership skills.
            </p>
            <Link href="tel:693232512456">
              <ContactItem
                icon={<PhoneIcon />}
                text="693 2325 12456"
                link="tel:693232512456"
              />
            </Link>
            <ContactItem icon={<MailIcon />} text="info@vecuro.com" link="#" />
          </div>

          {/* Services Section */}
          <div className="footer-inner">
            <h3>Services</h3>
            {services.map((service, index) => (
              <ServiceItem key={index} text={service} link="#" />
            ))}
          </div>
          <div className="footer-inner">
            <h3>Visiting Hours</h3>
            {visitingHours.map((item, index) => (
              <div key={index} className="visiting-hours-item">
                <span>{item.day}:</span>
                <span>{item.hours}</span>
              </div>
            ))}
            <div className="visiting-location">
              <LocationIcon />
              <Link href="#">
                374 William S Canning Blvd, Fall River MA 2721
              </Link>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="footer-inner">
            <h3>Gallery Posts</h3>
            <div className="gallery-main">
              {galleryImages.map((image, index) => (
                <div className="gallery-inner">
                  <Image
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
