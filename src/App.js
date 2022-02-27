import logo from "./content/image.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Name:<i> Muhammad Jawad Iqbal</i>{" "}
        </h4>
        <h4>
          Reg# <i>3990-FBAS-BSCS4-F18(B)</i>
        </h4>
        <img src={logo} alt="logo" />
      </header>
      <body className="body">
        <h1>Project Proposal</h1>
        <h2>Project Name: Property Management System (PMS)</h2>
        <h3>Introduction</h3>
        <p>
          As the world is adopting cutting edge technologies, internet has
          become ever popular, a good Management System is now considered as the
          reflection of the company to show their achievements, provide
          information, manage their sales, purchase and much more. Small-Scale
          organizations which are still working manually, managing their files
          manually, our purpose is to develop a PMS for these kinds of
          organizations/companies so they can easily manage the files of their
          members online and manage their sales, purchase, and profits.
        </p>
        <hr />
        <h3>Purpose</h3>
        <p>
          The purpose of this project is to develop a software that will be used
          by a company to manage their members profit, sale, purchase of
          property and also how much money is invested in the property. This
          Property Management System (PMS) can help a small organization become
          more self-aware by linking information about the production, finance,
          distribution, and human resources together.
        </p>
        <hr />
        <h3>Scope</h3>
        <p>
          The Scope of this application is specifically related to the property
          dealer managers. It supports different processes which are described
          below:
        </p>
        <ol>
          <li>Profit Management</li>
          <li>Sales Management</li>
          <li>Purchase Management</li>
          <li>Investment of Member</li>
        </ol>
        <hr />
        <h3>Business Opportunity</h3>
        <p>
          The primary benefit of a PMS system is the ability to automate
          essential business functions with a low entry cost and easy
          implementation. Additional benefits of our PMS system include:
        </p>
        <h4>Automated Workflow Processes and Fewer Errors: </h4>
        <p>
          With PMS, all relevant data can be easily shared and accessed by the
          manager. An PMS system will removes the need for each department to
          have its own information system; data no longer needs to be re-entered
          continuously or exported, which often results in errors, lowered
          productivity, and significant time loss.
        </p>
        <h4>Improved Collaboration:</h4>
        <p>
          The system provides real-time data, which streamlines operations
          across the organization and creates a single system of record. It
          enables organizations to make crucial decisions on time and avoid
          excessive waste.
        </p>
        <hr />
        <h3>Product Features</h3>
        <p>
          PMS systems integrate and automate members report and operational
          functions and provide a trove of data insights from sources including
          member management, reporting and training of members, events and
          courses management and access control management.
        </p>
        <h4>Reporting</h4>
        <p>
          Better reporting is almost as important to executives as more
          effective data usage. PMS reporting modules compile information about
          all the events organized by the organization and the members
          participating in the event or not, with this information the managers
          can make more informed decisions and forecasting.
        </p>
        <h4>Common Database</h4>
        <p>
          A common database enables data to be defined once for the enterprise
          with every department using the same definition. Some PMS systems
          split the physical database to improve performance.
        </p>
        <hr />
        <h3>Constraints</h3>
        <p>
          PMS will not be successfully implemented unless the following
          Constraints are achieved:
        </p>
        <h4>Time </h4>
        <p>
          Regardless of the financial and human resources provided, a
          significant amount of time will also need to be invested. Wisely
          balancing the need to complete and implement solutions in a timely
          manner with the risk of a poor implementation or a poor solution is
          critical. A detailed project plan that is developed prior to each
          phase beginning as well as following an iterative development
          methodology will assist in the project being on time.
        </p>
        <h4>Assessment </h4>
        <p>
          Responsible stewardship demands periodic assessment to determine if
          the chosen course continues to be the best course of action given
          changes in industry, product availability and success of the Company
          ERP. The definition of success should be defined before the project is
          started and should be measurable.{" "}
        </p>
        <h4>Environment </h4>
        <p>
          By fostering an environment that is characterized by teamwork and
          collaboration, success will be easier to achieve. Improved support,
          training, documentation, communication, user involvement, business
          process transparency and support for lifelong learning will help
          create an environment to attain the maximum success possible
        </p>
        <hr />
        <h3>Overview</h3>
        <p>
          Accessing information in today’s world has taken a leap with the
          development in technology which given way to online system to be the
          new management system. The need of online system has increased rapidly
          during these past years. Online system has been doing a very good task
          in eliminating the need of hardcopies, spaces, protocols and time.
          Online system indicates the need of connection between the users and
          system. As one of the environments that involve a large number of
          members, information, and resources, PMS for property dealer managers
          also tend to benefit from the use of a time-efficient online
          management system.
        </p>
        <hr />
      </body>
    </div>
  );
}

export default App;
