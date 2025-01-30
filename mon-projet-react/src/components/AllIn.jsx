import "../styles/AllIn.scss";
import Allin1 from "../assets/images/allin1.png";
import Allin2 from "../assets/images/allin2.png";
import Allin3 from "../assets/images/allin3.png";

const AllIn = () => {
  return (
    <div>
      <div className="all-in">
        <h1 className="all-in__title">
          <span className="all-in__title--primary">All-In-One</span>
          <span className="all-in__title--secondary"> Cloud Software.</span>
        </h1>

        <p className="all-in__text">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>
      <div className="all-in__features">
        <div className="all-in__feature">
          <img src={Allin1} alt="Feature 1" className="all-in__feature-image" />
          <h2 className="all-in__feature-title">
            Online Billing, Invoicing, & Contracts
          </h2>
          <p className="all-in__feature-text">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>
        <div className="all-in__feature">
          <img src={Allin2} alt="Feature 2" className="all-in__feature-image" />
          <h2 className="all-in__feature-title">
            Easy Scheduling & Attendance Tracking
          </h2>
          <p className="all-in__feature-text">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance
          </p>
        </div>
        <div className="all-in__feature">
          <img src={Allin3} alt="Feature 2" className="all-in__feature-image" />
          <h2 className="all-in__feature-title">Customer Tracking</h2>
          <p className="all-in__feature-text">
            Automate and track emails to individuals or groups. Skilline’s
            built-in system helps organize your organization
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllIn;
