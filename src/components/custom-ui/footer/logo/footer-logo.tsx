import { NavbarLogo } from "../../header/navbar/logo/logo";

export const FooterLogo = () => {
  return (
    <>
      {/* Section 1: Footer logo */}
      <div className="mb-4 md:mb-0">
        <NavbarLogo></NavbarLogo>
      </div>
    </>
  );
};

/**
 * ---------------------------------------------------------------------
 * File Name : footer-logo.tsx
 * Component Name : FooterLogo
 * Component Type : Logo Component
 * Date Created : 2023-04-04
 * Dev Initials : Aniket Raj
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to display the logo in the footer section of the website. It reuses the NavbarLogo component to maintain consistency in the logo's appearance across the site.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The FooterLogo component renders the logo in the footer section of the website. It imports and utilizes the NavbarLogo component to display the logo. The component also applies a margin-bottom class to the logo container using Tailwind CSS.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Footer logo
 * This section contains a <div> element that wraps the NavbarLogo component. The <div> is styled with a margin-bottom class using Tailwind CSS to provide spacing below the logo in the footer.
 *
 * ------------------------------
 * Input Comments:
 * This component does not receive any input props or parameters.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs the logo in the footer section of the website. The logo is rendered using the NavbarLogo component, which is imported from the header/navbar/logo directory.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component is straightforward and follows a common pattern for rendering a logo in the footer section. It reuses the NavbarLogo component, which promotes code reusability and maintains consistency in the logo's appearance throughout the website.
 *
 */

/**
 * =====================================================================
 *   COMPONENT  REVISION  (Attach to bottom of the component code block)
 * =====================================================================
 * Date Revised : 2024-04-04          (last date you made a code change)
 * Dev Initials : Aniket Raj
 * ------------------------------
 * Question: Why was it necessary to revise this component?
 * Answer  : Added a post category to the post data.
 *
 * ------------------------------
 * Describe Your Change(s):
 * Added code to accept user input of a category value.
 *
 * ------------------------------
 * Section Comments:    (Enter "none" if you have no comments)
 * none
 * ------------------------------
 * Input Comments:      (Enter "none" if you have no comments)
 * none
 * ------------------------------
 * Output Comments:     (Enter "none" if you have no comments)
 * Category value is added to the database along with the title
 * and body values.
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  : NO
 *
 */
