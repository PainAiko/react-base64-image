import React, { useState,useMemo } from "react";
import "./style.css";
import ImageUpload from "./ImageUpload";
// https://medium.com/@blturner3527/storing-images-in-your-database-with-base64-react-682f5f3921c2

export default function App() {
  // Base64 string data
  const data =
    "png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACKCAIAAADuXBmXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD5UlEQVR4nO2dO2gUURSGvwRJo4VaaGF8xUcj+GIjCCk0qEiwsFSwsBECimAR7K1ECzvFWrFQ0T5KELGySiGCmiLBgAYkplBJdHUswoRk3Qw7r39u1v9jq7vzuPfjMGfP3bkzHRFGQWfVHfhfsGgRFi3CokVYtAiLFrGqaWuH6vTJPy4buhElfpt85MpH5IgWYdEiLFqERYtongwbKHA+JE9SSpX9ktGPyBEtwqJFWLQIixbRUjJsIFVCS5V28hR7yWVknvMmd6NFHNEiLFqERYuwaBFZkmF55JnbDPzvfEe0CIsWYdEiLFpEWMmwgeTcmOrbynFEi7BoERYtwqJFZEmGVeWZ8s4rGJEjWoRFi7BoERYtoqVkKLsVU1b7yUa0gCNahEWLsGgRFi2iI6jpxAJXSwQ1LhzRMixahEWLsGgRzZNhnjtX9EXXPOWlykIqUke0CIsWYdEiLFpEAZVhgXOb5U2TlrfwosVDOaJFWLQIixZh0SKyVIYFprtU5EmkyQj2dUSLsGgRFi3CokVkqQwLTJVV3THjyrBtsWgRFi3CokUUsM4w1Z91sqfXhLavI1qERYuwaBEWLSLou0kLfDJ35fWqI1qERYuwaBEWLSLot1Ykb5yqk+U9INyVYVhYtAiLFmHRIlbSWyvyHDnVQ75T7evKMCwsWoRFi7BoEWG9tSIP5aW7QmZNHdEiLFqERYuwaBFhPag7VZ5JTrN5yrky3hXliBZh0SIsWoRFiwgrGZZ3V2eeNYqFrG90RIuwaBEWLcKiRQT91oo85VyqQ5W37wKOaBEWLcKiRVi0iLDeWtGAbIW+1xm2DxYtwqJFWLSIsNYZtjGOaBEWLcKiRVi0CIsWYdEiVozod80af8NFdUcyErToW/AVgCk4At//2aAOD5bf/S7sgrMldS4lQYt+CD8A2AifYHXK3U/AYPGdykiVon/BFTgMm+EOAHPQCzdhE1yGURiAIZiDdfFez6AXDsCFpUd7CvtgD1yNW7bDNs1IWiGq9PMKIpiEHohgFrrgRvztTpiM29fGW3bDGEQwvqj9PeyGGajDKRiJj/AYzlQ9xvlPxbeE7Yd7MArT8BE2QBcMLb/9czgGOwDYCnNx+wjU4TwA4/AWjpbZ7QxUKXoKTsM1uA7D8LOFDtVhuln7GjgIj4rvY2FUeY1+Dd1wHD7Dl2YbdMPk0pZ+eAkTAHyATvgTt7+I2yfK63EeKrxszcIA9MEg9MHYomvu/Oc+bIFLS9ufwF6owTmow0m4DREMwyGoQT/MwDeoQQ+shxq8qfoa7floEUH/jm4nLFqERYuwaBEWLcKiRVi0CIsWYdEi/gLSmm3WrYIt+QAAAABJRU5ErkJggg==";

   const data1 = useMemo(() => {
      return data.split("base64,")
   },[data])
   
  return (
    <div>
      <h1>base64 string image</h1>
      <img src={`data:image/${data}`} />
      <hr />
      <ImageUpload />
    </div>
  );
}
