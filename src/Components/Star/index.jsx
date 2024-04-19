import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Typography component="legend" className="legendText">
        Comment était votre trajet ?
      </Typography>
      <Rating name="no-value" value={null} className="ratingStars" />
    </div>
  );
}
