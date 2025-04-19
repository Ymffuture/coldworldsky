import React from 'react';
import 'bulma/css/bulma.min.css';

const TableExample = () => {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-5">
          <h2 className="title is-3 has-text-primary">Tutoring Fees (Grades 10–12)</h2>
          <p className="subtitle is-6 has-text-grey">
            These prices apply to current high school learners. Choose any 2 subjects and enjoy a discounted rate.
          </p>
          <p className="is-size-7 has-text-danger">
            *Note: We do not issue certificates but prepare learners for any coding school or academic challenge.
          </p>
        </div>

        <div className="table-container box has-shadow">
          <table className="table is-striped is-hoverable is-fullwidth is-bordered">
            <thead className="has-background-warning-light">
              <tr>
                <th className="has-text-dark">Subjects</th>
                <th className="has-text-dark">Reg. No</th>
                <th className="has-text-dark">Sub. Code</th>
                <th className="has-text-dark">Price (R)</th>
                <th className="has-text-dark">Any 2 (R)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>1427</td>
                <td>MAT</td>
                <td>R150.00</td>
                <td>R300.00</td>
              </tr>
              <tr>
                <td>Physical Science</td>
                <td>1124</td>
                <td>PHYS</td>
                <td>R150.00</td>
                <td>R300.00</td>
              </tr>
              <tr>
                <td>Life Sciences</td>
                <td>1168</td>
                <td>LFS</td>
                <td>R150.00</td>
                <td>R250.00</td>
              </tr>
              <tr>
                <td><strong>Maths & Sciences Combo</strong></td>
                <td>3485</td>
                <td>MAT/SCI</td>
                <td>R350.00</td>
                <td><em>N/A</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AMP Ad block */}
        <div className="mt-5">
          <amp-ad
            width="100vw"
            height="320"
            type="adsense"
            data-ad-client="ca-pub-2722864790738174"
            data-ad-slot="5846408375"
            data-auto-format="rspv"
            data-full-width="">
            <div overflow=""></div>
          </amp-ad>
        </div>
      </div>
    </section>
  );
};

export default TableExample;
