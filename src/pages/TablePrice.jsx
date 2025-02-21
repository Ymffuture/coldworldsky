import React from 'react'; 
import Table from 'react-bootstrap/Table'
  
  
  
const TableExample =()=> { 
  return ( 
    <> 
  
<h3>Prices from grade 10 to 12 for currect students </h3> 
  
<Table stripped bordered hover size="md" className='container' variant='dark'> 
  <thead> 
    <tr> 
      <th width="1000" className='text-bg-warning'>Subjects</th> 
      <th width="100">Reg.no</th> 
      <th width="100">Sub.Code</th> 
      <th width="150">Price (R)</th> 
      <th width="150">Any 2 (R)</th> 
  
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>Mathematics</td> 
      <td>1427</td> 
      <td>MAT</td> 
      <td>150</td> 
      <td>300</td> 
  
    </tr> 
    <tr> 
      <td>Physical Science</td> 
      <td>1124</td> 
      <td>PHYS</td> 
      <td>150</td> 
      <td>300</td> 
  
    </tr> 
    <tr> 
      <td>Life sciences</td> 
      <td>1168</td> 
      <td>LFS</td> 
      <td>150</td> 
      <td>250</td> 
  
    </tr> 
    <tr> 
      <td>Maths & sciences</td> 
      <td>3485</td> 
      <td>MAT?SCI</td> 
      <td>350</td> 
      <td>N/A</td> 
  
    </tr> 
    {/* <tr> 
      <td>Akbar sheikh</td> 
      <td>1126</td> 
      <td>Mechanical</td> 
      <td>Indore</td> 
      <td>96.5%</td> 
  
    </tr> 
    <tr> 
      <td>Sarita</td> 
      <td>1127</td> 
      <td>CSE</td> 
      <td>Delhi</td> 
      <td>96.9%</td> 
  
    </tr>  */}
  
  </tbody> 
</Table> 
  
    </> 
  ); 
}

export default TableExample;
