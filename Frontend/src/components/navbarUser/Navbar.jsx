import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

function NavigationBar() {
  const Logout=()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Navbar variant="dark" bg="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link}  to="/">Cloth-Rental </Navbar.Brand>
        {/* <Navbar.Brand as={Link}  to="/"><span style={{fontSize:'28px'}}>Cloth-Rental</span> <span style={{color:'yellow'}}>(User)</span> </Navbar.Brand> */}
       
        <Nav>
          <Nav.Link as={Link}  to="/">Home</Nav.Link>
          <Nav.Link as={Link}  to="/CartForBuy">BuyCart</Nav.Link>
          <Nav.Link as={Link}  to="/CartForRent">RentCart</Nav.Link>
          <Nav.Link as={Link}  to="/BuyOrder">BuyOrder</Nav.Link>
          <Nav.Link as={Link}  to="/RentOrder">RentOrder</Nav.Link>
          <Nav.Link  onClick={Logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

// function NavigationBar() {
//   const Logout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   return (
//     <Navbar variant="dark" bg="dark" expand="md" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           Cloth-Rental
//         </Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link as={Link} to="/">
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/CartForBuy">
//             BuyCart
//           </Nav.Link>
//           <Nav.Link as={Link} to="/CartForRent">
//             RentCart
//           </Nav.Link>
//           <Nav.Link as={Link} to="/BuyOrder">
//             BuyOrder
//           </Nav.Link>
//           <Nav.Link as={Link} to="/RentOrder">
//             RentOrder
//           </Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link onClick={Logout}>Logout</Nav.Link>
//           <Nav.Link as={Link} to="/profile">
//             <img
//               src="profile_photo.jpg"
//               alt="Profile"
//               style={{ width: "30px", height: "30px", borderRadius: "50%" }}
//             />
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
