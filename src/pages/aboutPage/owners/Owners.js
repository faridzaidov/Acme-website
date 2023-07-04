import React from "react";
import Person from "../person/Person";
import "./owners.css";

export default function Owners() {
  return (
    <div className="owners-section page-section custom-container">
      <Person
        pic="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d114eef39554b0e943d8_John%20Doe.png"
        name="John Doe"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </Person>
      <Person
        pic="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84d11d180ebb04f6b16bd9_Jane%20Doe.png"
        name="Jane Doe"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </Person>
    </div>
  );
}
