import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node.png";
import FIREBASE from "../assets/firebase.png";
import PYTHON from "../assets/python.png";
import WORDPRESS from "../assets/wordpress.png";
import MONGO from "../assets/mongo.png";
import SHOPIFY from "../assets/shopify.png";
import BC from "../assets/bigcommerce.png";
import ODOO from "../assets/odoo1.png";
import MAGENTO from "../assets/magento.png";
import GA from "../assets/ga.png";
import GTM from "../assets/gtm.png";
import GSC from "../assets/gsc.png";
import AS from "../assets/apps_script.png";
import PREACT from "../assets/preact.png";
import FLASK from "../assets/flask.png";
import PG from "../assets/Postgresql.png";

const skill_logos = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "JAVASCRIPT", img: JAVASCRIPT },
  { name: "PYTHON", img: PYTHON },
  { name: "REACT", img: REACT },
  { name: "PREACT", img: PREACT },
  { name: "NODE JS", img: NODE },
  { name: "FLASK", img: FLASK },
  { name: "POSTGRES", img: PG },
  { name: "MONGO DB", img: MONGO },
  { name: "FIREBASE", img: FIREBASE },
  { name: "ODOO", img: ODOO },
  { name: "MAGENTO", img: MAGENTO },
  { name: "WORDPRESS", img: WORDPRESS },
  { name: "SHOPIFY", img: SHOPIFY },
  { name: "BIGCOMMERCE", img: BC },
  { name: "GOOGLE APPS SCRIPT", img: AS },
];

const Skills = () => {
  return (
    <div
      name="skills"
      className=" bg-[#08192f] w-full  md:h-screen max-[768px]:pt-20 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300 ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#19A7CE] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        {/* Icons */}
        <div className="w-full grid grid-cols-3 max-[425px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8">
          {skill_logos.map(({ name, img }, index) => {
            return (
              <div
                key={index}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <img className="w-10 mx-auto " src={img} />
                <p className="my-4 max-[425px]:text-sm">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
