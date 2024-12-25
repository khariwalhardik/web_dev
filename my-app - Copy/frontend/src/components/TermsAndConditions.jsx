import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TermsAndConditions.css"; // Import the CSS file for terms

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state
  const [canAccept, setCanAccept] = useState(false); // Track if user can accept
  const navigate = useNavigate();

  // Handle scroll event to enable the checkbox
  const handleScroll = (event) => {
    const termsContainer = event.target;
    const agreeCheckbox = document.getElementById("agree-terms");

    // If the user has scrolled to the bottom, enable the checkbox
    if (termsContainer.scrollHeight <= termsContainer.clientHeight ||
      termsContainer.scrollTop + termsContainer.clientHeight >= termsContainer.scrollHeight) {
      agreeCheckbox.disabled = false;
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setCanAccept(newCheckedState); // Enable the "Accept and Continue" button if checked
  };

  // Handle the submission of the form
  const handleSubmit = () => {
    if (isChecked) {
      // Store the terms acceptance state in sessionStorage (temporary)
      sessionStorage.setItem("termsAccepted", "true");
      navigate("/additional-info"); // Navigate to the next page after accepting terms
    }
  };

  return (
    <div className="container-terms">
      <div className="left-terms"></div>
      <div className="right-terms">
        <h1 className="terms-heading">Terms and Conditions</h1>
        <div className="terms-content" onScroll={handleScroll}>
          <p className="terms-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta reiciendis blanditiis maxime minus aliquid doloribus rerum beatae corporis quae velit provident repellendus voluptatem, recusandae culpa quasi quidem dolor numquam molestiae deleniti accusantium eum voluptatibus amet! In porro eius culpa. Facilis vitae, ullam tempore blanditiis nihil neque illum quam consectetur impedit nostrum ab reiciendis tempora sapiente totam harum autem dolore ut quae nulla error! Nihil vitae, vero expedita quidem doloremque unde eum velit maxime. Molestias nostrum nulla, doloribus totam modi temporibus sapiente excepturi eveniet alias minima error similique, omnis fuga natus deleniti aliquam eaque non quia! Dignissimos adipisci aliquam, maiores velit assumenda optio a sit iure quae aliquid temporibus? Expedita ipsam quidem omnis doloremque quo numquam dolorum distinctio, accusantium quia perspiciatis quas molestiae dolor unde quos modi repellat veritatis ducimus autem. Eligendi deleniti suscipit iste ipsam reprehenderit provident molestiae officiis adipisci sunt. Quibusdam eaque vitae laudantium architecto hic illo saepe iste corporis incidunt alias quasi, sequi rem distinctio atque. Vero voluptatem, libero molestias, ratione esse beatae hic aliquid pariatur ut voluptates quam quos vitae architecto autem molestiae blanditiis? Beatae cumque tenetur doloribus numquam, maiores a unde, harum deserunt ab suscipit at dolore nulla molestias voluptatem repudiandae enim qui quasi aperiam fugit, dolores eum placeat. Ipsam perferendis ut animi inventore velit neque aut repellat dicta reiciendis delectus aperiam quos expedita voluptas nulla consequatur placeat at, temporibus omnis necessitatibus minus dolores aspernatur! Ducimus recusandae rem, corporis fugiat possimus nihil temporibus facilis. Ratione deserunt, corporis fuga consectetur fugiat quibusdam at doloribus dolor quam sit iusto aspernatur tenetur, nihil laborum repellendus dolore est vero, molestiae minima error unde minus! Facilis nihil id quisquam alias dicta cum fuga unde molestias magni, molestiae possimus aut perspiciatis libero nulla blanditiis hic iusto corporis aperiam! Aliquam tempora, quisquam deserunt mollitia doloribus reprehenderit aliquid similique cum dignissimos, impedit optio accusamus laboriosam! Totam, optio maiores quo tempore odit, et voluptatibus inventore sequi eveniet delectus voluptates minus, quia rerum explicabo sit similique odio voluptatum maxime. Dicta, blanditiis tempora. Vel quaerat possimus dolor natus, officia molestiae voluptates magni eius corrupti earum animi quo asperiores praesentium rem, atque cupiditate labore. Tenetur incidunt est nesciunt. Eum voluptatum mollitia aspernatur minima ab suscipit consequuntur cum tenetur omnis reprehenderit ipsam odit earum, amet vel necessitatibus. Reprehenderit consequatur deserunt nisi ullam et vel qui reiciendis officia eum sed? Obcaecati sed eaque accusamus fugit nisi officia illo, veniam mollitia iusto eos nobis odit quae amet delectus non! Voluptate soluta impedit numquam dolorum dicta sint! Consectetur illum minima non at, officiis, in veritatis quo eligendi impedit ipsa omnis distinctio error architecto accusamus. Labore ratione culpa officiis cupiditate, quas omnis ea provident temporibus ab mollitia fugiat ipsum velit quisquam, voluptatem vel cumque nisi distinctio iste nihil eligendi atque enim. Molestias repellat eius ipsa alias vero est rem aspernatur magnam, nisi deserunt quidem enim similique libero dolorem, facilis obcaecati non. Voluptates atque odio molestiae, nesciunt architecto deserunt dolore quis illum non iure sint inventore commodi? Nam autem nulla ut dolores praesentium vel expedita odit, ipsum repellat porro voluptatem ullam inventore. Tempora!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci architecto, consectetur commodi ullam accusantium laudantium et excepturi minima repellat dolorem ipsa officia, dicta error enim consequatur a repudiandae...
          </p>
        </div>

        <div className="checkbox-container-terms">
          <input
            type="checkbox"
            id="agree-terms"
            disabled
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree-terms" className="terms-label">
            I have read and agree to the Terms and Conditions.
          </label>
        </div>

        <button className="submit-button-terms" disabled={!canAccept} onClick={handleSubmit}>
          Accept and Continue
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
