import React, {
  useRef,
  useEffect,
  Fragment,
  useContext,
  useState,
} from "react";
import logo from "@/assets/logo/Logo.png";
import headerStyles from "@/layout/utils/Header.module.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ModalContext } from "@/context/ModalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com"; 

const Header = () => {
  const { modalOpen, closeModal: close, openModal } = useContext(ModalContext);
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateForm = () => {
    let isValid = true;

    const nameRegex = /^[A-Za-z\s.]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{8,}$/;

    if (!name.match(nameRegex)) {
      setNameError("Please enter a valid name.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!mobile.match(mobileRegex)) {
      setMobileError(
        "Please enter a valid mobile number with at least 8 digits."
      );
      isValid = false;
    } else {
      setMobileError("");
    }

    if (!email.match(emailRegex)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const templateParams = {
        name,
        mobile,
        email,
      };

      emailjs
        .send(
          "service_kzeld9d", // Replace with your EmailJS service ID
          "template_3pktago", // Replace with your EmailJS template ID
          templateParams,
          "64Y-ASjE4dLEmnxzc" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            toast.success("Form submitted successfully!");
            closeModal();
          },
          (error) => {
            toast.error("Failed to send the form. Please try again.");
          }
        );
    }
  };

  // Reset form fields when closing the modal
  const closeModal = () => {
    setName("");
    setMobile("");
    setEmail("");
    setNameError("");
    setMobileError("");
    setEmailError("");
    close();
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Fragment>
      <div className={headerStyles.navbar} ref={navbarRef}>
        <div className={headerStyles.navbar_container}>
          <div className={headerStyles.navbar_links}>
            <div>
              <img
                src={logo.src}
                alt="img"
                onClick={() => window.scrollTo(0, 0)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div>
              <ul className={menuOpen ? headerStyles.show_nav : ""}>
                <li onClick={() => scrollToSection("product")}>Product</li>
                <li onClick={() => scrollToSection("solutions")}>Solutions</li>
                <li onClick={() => scrollToSection("pricing")}>Pricing</li>
              </ul>
            </div>
          </div>
          <div className={headerStyles.navbar_btn_container}>
            <button onClick={openModal}>Get Started</button>
          </div>
          <button
            className={`${headerStyles.hamburger} ${
              menuOpen ? headerStyles.hamburger_open : ""
            }`}
            onClick={toggleMenu}
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      </div>
      <Modal open={modalOpen} onClose={closeModal} center>
        <div className={headerStyles.apply_now_modal}>
          <h3>Contact Us</h3>
          <div className={headerStyles.apply_now_modal_container}>
            <div className={headerStyles.apply_now_modal_container_item}>
              <input
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p
                className={headerStyles.error}
                style={{ display: nameError ? "block" : "none" }}
              >
                {nameError}
              </p>
            </div>
            <div className={headerStyles.apply_now_modal_container_item}>
              <div className={headerStyles.form_phone_new_input}>
                <PhoneInput
                  country={"in"}
                  value={mobile}
                  onChange={(phone) => setMobile(phone)}
                  containerClass={headerStyles.customPhoneInputContainer}
                  inputClass={headerStyles.customPhoneInput}
                  buttonClass={headerStyles.customPhoneInputButton}
                  dropdownStyle={{
                    maxHeight: "200px",
                    overflowY: "auto",
                    WebkitOverflowScrolling: "touch",
                  }}
                />
              </div>
              <p
                className={headerStyles.error}
                style={{ display: mobileError ? "block" : "none" }}
              >
                {mobileError}
              </p>
            </div>
            <div className={headerStyles.apply_now_modal_container_item}>
              <input
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                className={headerStyles.error}
                style={{ display: emailError ? "block" : "none" }}
              >
                {emailError}
              </p>
            </div>
            <div className={headerStyles.form_phone_new_button}>
              <button onClick={handleSubmit}>Submit</button>
            </div>

            <div className={headerStyles.form_phone_new_contents}>
              <p>If you need any assistance please contact :</p>
              <div>
                <a href="tel:7795548941">+91 7795548941</a>
                <a href=""> | </a>
                <a href="mailto:genstrat@gmail.com">genstrat@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </Fragment>
  );
};

export default Header;
