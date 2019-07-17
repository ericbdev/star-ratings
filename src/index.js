import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import Star from "./Star";

const RATING_LIMIT = 5;
const RATING_FIXTURE = Array(RATING_LIMIT).fill(0);

const sanitizeRating = rating => {
  const number = isNaN(rating) ? 0 : rating;
  return Math.max(0, Math.min(RATING_LIMIT, number));
};

const ratingToArray = rating => {
  const wholeNumber = Math.floor(rating);
  const starCount = Math.ceil(rating);
  const remainder = rating - wholeNumber;
  const filledStars = Array(wholeNumber).fill(100);
  const allStars = remainder
    ? [].concat(filledStars, remainder * 100)
    : filledStars.slice();

  return [].concat(allStars, RATING_FIXTURE.slice(starCount, RATING_LIMIT));
};

const App = () => {
  const initialValues = {
    rating: 2.5,
    stars: ratingToArray(2.5)
  };

  const [ratingValue, setRating] = React.useState(initialValues.rating);
  const [starValues, setStars] = React.useState(initialValues.stars);

  const handleChange = () => event => {
    const sanitizedValue = sanitizeRating(event.target.value);
    const starValues = ratingToArray(sanitizedValue);

    setRating(sanitizedValue);
    setStars(starValues);
  };

  const ratingStars = starValues.map((rating, index) => (
    <Star key={index} id={`gradient-${index}`} rating={rating} />
  ));

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        style={{ maxWidth: "320px", margin: 10 }}
      >
        <TextField
          label="How awesome was that shirt?"
          value={ratingValue}
          onChange={handleChange()}
          margin="normal"
          helperText="Between 0 and 5!"
          fullWidth
          type="number"
        />
      </form>

      <div> {ratingStars} </div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
