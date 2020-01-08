import React from "react";
import './spinner.scss';
export default function Spinner() {
  return (
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
