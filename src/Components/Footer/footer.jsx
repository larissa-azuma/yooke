// import * as React from "react";
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import {
//   AccountBalanceWalletOutlined,
//   HomeOutlined,
//   PersonOutlined,
// } from "@mui/icons-material";
// import Trajeticon from "./TrajectIcon";
// import { Typography } from "@mui/material";

// export default function Footer() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box
//       sx={{
//         width: 350,
//         height: 50,
//         boxShadow: "0px -3px 6.7px 0px #00000066",
//         justifyContent: "space-between",
//         fontFamily: "Jost, sans-serif",
//       }}
//     >
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction
//           label={
//             <Typography
//               style={{
//                 fontFamily: "Jost;sans-serif,",
//                 fontSize: "12px",
//                 fontWeight: 400,
//                 lineHeight: "17px",
//               }}
//             >
//               Accueil
//             </Typography>
//           }
//           icon={
//             <HomeOutlined
//               sx={{ color: "#000000", width: "28.14", height: "23.92" }}
//             />
//           }
//         />
//         <BottomNavigationAction label="Trajet" icon={<Trajeticon />} />
//         <BottomNavigationAction
//           label="Porte-monnaie"
//           icon={<AccountBalanceWalletOutlined />}
//         />
//         <BottomNavigationAction label="Compte" icon={<PersonOutlined />} />
//       </BottomNavigation>
//     </Box>
//   );
// }
