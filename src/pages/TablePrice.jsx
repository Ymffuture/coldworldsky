import React from 'react';
import Table from 'react-bootstrap/Table';

const TableExample = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-primary fw-bold">Tutoring Fees (Grades 10–12)</h2>
          <p className="text-muted">
            These prices apply to current high school learners. Choose any 2 subjects and enjoy a discounted rate.
          </p>
          <p className="text-danger small">
            *Note: We do not issue certificates but prepare learners for any coding school or academic challenge.
          </p>
        </div>

        <div className="table-responsive shadow rounded border">
          <Table striped bordered hover responsive size="md" variant="light">
            <thead className="table-warning text-dark">
              <tr>
                <th>Subjects</th>
                <th>Reg. No</th>
                <th>Sub. Code</th>
                <th>Price (R)</th>
                <th>Any 2 (R)</th>
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
                <td>Maths & Sciences Combo</td>
                <td>3485</td>
                <td>MAT/SCI</td>
                <td>R350.00</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <amp-ad width="100vw" height="320"
     type="adsense"
     data-ad-client="ca-pub-2722864790738174"
     data-ad-slot="5846408375"
     data-auto-format="rspv"
     data-full-width="">
  <div overflow=""></div>
</amp-ad>
    </section>
  );
};

export default TableExample;

