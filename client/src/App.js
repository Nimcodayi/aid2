// src/components/Navbar.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import  { useEffect, useState} from 'react';
import { initContactForm } from "./contactForm"; // adjust path if needed



import './index.css';
import { initPartnersToggle } from "./logos.js";

import logo from '../src/logo.jpg'; // Make sure the path is correct
import sawir from '../src/RCC1[2].jpg'
import photo from '../src/bag1.jpg'
import team from '../src/team.jpg'
import  story2 from '../src/story2.png';
import mission from '../src/mission.jpg';
import image from "../src/image.png";
import image1 from "../src/image1.png";
import MAP from "../src/MAP.png";
import teacher from "../src/teacher.png";
import teacher2 from "../src/teacher2.png";
import abdinasir from '../src/abdinasir.jpg';
import Abdirahman from '../src/abdirahman.jpg';
import abdimahad from '../src/abdimahad.jpg';
import bashir from '../src/bashir.jpg';
import va1 from '../src/va1.png';
import va2 from '../src/va2.png';
import food from '../src/food1.png';
import food2 from '../src/food2.jpg';
import water from '../src/water.png';
import involved from '../src/involved.png';
import sa1 from '../src/1.png';
import sa2 from '../src/2.png';
import sa3 from '../src/3.png';
import sa4 from '../src/4.png';
import sa5 from '../src/5.png';
import sa6 from '../src/6.png';
import sa7 from '../src/7.png';
// import sa8 from '../src/8.png';
import sa9 from '../src/9.png';
import sa10 from '../src/10.png';
import sa11 from '../src/11.png';
// import sa12 from '../src/12.png';
import sa13 from '../src/13.png';
import sa14 from '../src/14.png';
import sa15 from '../src/15.png';
import sa16 from '../src/16.png';
import sa17 from '../src/17.png';
import sa18 from '../src/18.png';
import sa19 from '../src/19.png';
import sa20 from '../src/20.png';
import sa21 from '../src/21.png';
import sa22 from '../src/22.png';
import sa23 from '../src/23.png';
import sa24 from '../src/24.png';
import sa25 from '../src/25.png';
import sa26 from '../src/26.png';
import sa27 from '../src/27.png';
import sa28 from '../src/28.png';
import sa29 from '../src/29.png';
import sa30 from '../src/30.png';
import sa31 from '../src/31.png';
// import sa32 from '../src/32.png';


const Navbar = () => {
  const [diamondMode, setDiamondMode] = useState(false);
  useEffect(() => {
    const cleanup = initPartnersToggle();
    return cleanup; // ensures cleanup on unmount
  }, []);
  
  
  useEffect(() => {
  initContactForm();
}, []);


  useEffect(() => {
  const impactToggle = document.querySelector(".impact-toggle");
  const dropdown = impactToggle.closest(".dropdown");

  const handleClick = (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      dropdown.classList.toggle("open");
    }
  };

  impactToggle.addEventListener("click", handleClick);

  return () => {
    impactToggle.removeEventListener("click", handleClick);
  };
}, []);


  // Impact section counter
  useEffect(() => {
    const counters = document.querySelectorAll(".impact-number");
    const speed = 200;

    const startCounting = () => {
      counters.forEach(counter => {
        counter.innerText = "0";
        const target = parseInt(counter.dataset.target.replace(/[^\d]/g, ""), 10);
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
          const count = parseInt(counter.innerText.replace(/[^\d]/g, ""), 10) || 0;
          if (count < target) {
            counter.innerText = (count + increment).toLocaleString();
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateCount();
      });
    };

    const impactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
    }, { threshold: 0.3 });

    const impactSection = document.querySelector(".impact-section");
    if (impactSection) {
      impactObserver.observe(impactSection);
    }

    const navLink = document.querySelector('a[href="#impact"]');
    if (navLink) {
      navLink.addEventListener("click", () => {
        setTimeout(startCounting, 400);
      });
    }

    return () => {
      impactObserver.disconnect();
      if (navLink) navLink.removeEventListener("click", startCounting);
    };

    
  }, []);

  // Healthy section counter
  useEffect(() => {
    const counters = document.querySelectorAll(".healthy-section h3[data-target]");
    const speed = 200;

    const startCounting = () => {
      counters.forEach(counter => {
        counter.innerText = "0";
        const target = parseInt(counter.dataset.target.replace(/[^\d]/g, ""), 10);
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
          const count = parseInt(counter.innerText.replace(/[^\d]/g, ""), 10) || 0;
          if (count < target) {
            counter.innerText = (count + increment).toLocaleString();
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateCount();
      });
    };

    const healthyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
    }, { threshold: 0.3 });

    const healthySection = document.querySelector(".healthy-section");
    if (healthySection) {
      healthyObserver.observe(healthySection);
    }

    const navLink = document.querySelector('a[href="#healthy"]');
    if (navLink) {
      navLink.addEventListener("click", () => {
        setTimeout(startCounting, 400);
      });
    }

    return () => {
      healthyObserver.disconnect();
      if (navLink) navLink.removeEventListener("click", startCounting);
    };
  }, []);

  // Food section counter
   // Food section counter
 useEffect(() => {
  function animateCounter(counter) {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    let start = 0;
    const increment = target / (duration / 30);

    function update() {
      start += increment;
      if (start < target) {
        counter.innerText = Math.floor(start).toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }
    update();
  }

  function triggerCounters(section) {
    const counters = section.querySelectorAll(".counter");
    counters.forEach(counter => {
      // Reset flag to allow re-animation
      counter.dataset.counted = "";
      animateCounter(counter);
    });
  }

  const foodSections = document.querySelectorAll(".food-section");

  const foodObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerCounters(entry.target);
        // DO NOT unobserve here, so it triggers on every scroll-in
      }
    });
  }, { threshold: 0.5 });

  foodSections.forEach(section => {
    foodObserver.observe(section);

    section.addEventListener("click", () => {
      triggerCounters(section);
    });
  });

  return () => {
    foodObserver.disconnect();

    foodSections.forEach(section => {
      section.replaceWith(section.cloneNode(true)); // remove all click listeners safely
    });
  };
}, []);

// Wash section counter
  
useEffect(() => {
  const numbersContainer = document.getElementById("numbers-container");
  if (!numbersContainer) return; // stop if container not found

  const numbers = numbersContainer.querySelectorAll(".number");

  function animateCount(el, target) {
    let startTimestamp = null;
    const duration = 2000; // animation duration in ms

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      el.innerText = Math.floor(progress * target).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.innerText = target.toLocaleString();
      }
    }

    requestAnimationFrame(step);
  }

  function startAnimation() {
    numbers.forEach(el => {
      const target = parseInt(el.getAttribute("data-target"));
      el.innerText = "0"; // reset to zero before animating
      animateCount(el, target);
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function onScroll() {
    if (isInViewport(numbersContainer)) {
      startAnimation();
    }
  }

  function onClick() {
    startAnimation();
  }

  // Animate on load if visible
  if (isInViewport(numbersContainer)) {
    startAnimation();
  }

  window.addEventListener("scroll", onScroll);
  numbersContainer.addEventListener("click", onClick);

  return () => {
    window.removeEventListener("scroll", onScroll);
    numbersContainer.removeEventListener("click", onClick);
  };
}, []);

// Partners logos animation
// ✅ Partners logos animation



  // 🔹 useEffect #2 – donation alerts + highlight







  return (
    <>

    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>

      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="AID Logo" className="navbar-logo" />
          <span className="navbar-title">AID</span>
          
        </div>
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
          <li className="dropdown">
  <a href="#our-story" className="story-toggle">
    Our Story <span className="arrow">▾</span>
  </a>
  <ul className="submenu">
    <li><a href="#how-we-work">How We Work</a></li>
    <li><a href="#our-story">Our Story</a></li>
    <li><a href="#purpose">Our Purpose</a></li>
  </ul>
</li>

          <li><a href="#mission">Our Mission</a></li>
          <li><a href="#team">Meet the Team</a></li>
          <li><a href="#resource-section">Resources</a></li>
          <li><a href="#PARTNERS">our partners</a></li>
          <li className="dropdown">
  <a href="#impact-section" className="impact-toggle">
    Our Impact <span className="arrow">▾</span>
  </a>
  <ul className="submenu">
    <li><a href="#achievement">Achievement</a></li>
    <li><a href="#education">Education & Protection</a></li>
    <li><a href="#health">Health & Nutrition</a></li>
    <li><a href="#food-section">Food and livelihoods</a></li>
    <li><a href="#wash-section">WASH AND ES & NFI </a></li>
  </ul>
</li>

          
          
          
          <li><a href="#contact-section">Contact & Connect</a></li>
          <li><a href="#donation-section">Donate</a></li>
        </ul>
      </nav>

      {/* Hero Section inside Navbar file */}
      <section className="hero" id="hero">
  <div className="hero-content">
    <h1>WELCOME TO AID</h1>
    <p className="hero-paragraph">
      At AID, we believe every individual deserves dignity, opportunity, and a future filled with hope.
      We work where others turn away — in the forgotten corners of society where a single act of kindness
      can transform entire communities. Through education, health, and sustainable aid, we aim to ignite
      lasting change and rewrite futures with compassion at the core.
    </p>
  </div>



        
      <div className="scroll-indicator">
  <span className="scroll-text">SCROLL</span>
  <span className="circle circle1"></span>
  <span className="circle circle2"></span>
</div>

       
      </section>

      

      <div className="white-side-text">
          <h2>AID upholds high moral ground</h2>
          <p>Improving the lives of those affected
by various challenges such as conflicts,
natural disasters and social issues.</p>
        </div>


  


  <section className="impact-banner">
  <div className="impact-banner-overlay"></div> {/* Dark overlay */}
  
  <div className="impact-banner-content">
    <h2>Supporting the Most Vulnerable</h2>
     <div className="impact-text-carousel">
  <span>
    AID delivers life-changing education, essential health care, and vital food support to the world’s most vulnerable populations — igniting hope and restoring dignity in communities often forgotten by society. We are committed to reaching children, families, and entire communities facing hardship, empowering them with the tools, knowledge, and resources they need to build a brighter future. Through our programs, we create lasting change that breaks the cycle of poverty and opens doors to opportunity for generations to come.
  </span>
  <span>
    We don’t just provide aid — we cultivate empowerment, spark opportunity, and drive transformation where others see only crisis and despair. By partnering closely with local leaders and organizations, we foster sustainable development that respects cultural identities and nurtures resilience. Our holistic approach addresses immediate needs while building long-term solutions, ensuring communities can thrive independently, adapt to challenges, and create their own path toward prosperity.
  </span>
  <span>
    Every initiative we launch is grounded in compassion, collaboration, and an unshakeable commitment to creating deep, lasting impact. We invest in innovative projects that not only relieve suffering but also promote equity, justice, and human dignity. Together with our supporters and partners, AID is forging a future where hope flourishes, potential is realized, and the most vulnerable are no longer left behind — but stand empowered, resilient, and full of possibility.
  </span>
</div>

    <button className="cta-button">Join the Movement</button>
  </div>
</section>


<section className="get-involved-section" id="get-involved">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>
            Together we <br /> <span>can make a Difference</span>
          </h2>
          <p>
            Help today because tomorrow you may be the one who needs helping! 
            Forget what you can get and see what you can give.
          </p>
          <div className="hero-buttons">
            <button className="btn join">Join With Us</button>
            <button className="btn donate" >Donate Now</button>
          </div>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="icon">💰</div>
          <h3>Make Donation</h3>
          <p>
            Support AID by contributing to provide food, health, and education 
            for vulnerable families. 
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="card">
          <div className="icon">📈</div>
          <h3>Fundraising</h3>
          <p>
            Help us raise resources and awareness. Together we can reach more 
            communities in need. 
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="card">
          <div className="icon">🤝</div>
          <h3>Become A Volunteer</h3>
          <p>
            Join our dedicated volunteers and change lives with your time and 
            skills. 
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>

    
  <section className="who-we-are" id="how-we-work">
  <div className="text-side">
    <div className="text-overlay">
      <div className="who-we-are-content">
        <h2>HOW WE WORK</h2>
        <p>
  <strong>AID</strong>  is dedicated to serving local communities with
effective and impactful solutions, fostering collaboration
with beneficiaries, donors, and governmental bodies.
Through strategic partnerships with international
organizations and NGOs, AID leverages resources and
expertise to implement comprehensive projects.
Employing a participatory approach, AID engages
communities in decision-making processes, ensuring
context-specific interventions that empower and enhance
ownership.


</p>

        
      </div>
    </div>
  </div>

  <div className="image-side">
    <img src={sawir} alt="AID visual" className="photo" />
  </div>
</section>

<section class="our-story" id='our-story'>
  <div class="container">

    {/* <!-- TOP: Our Story title + small image --> */}
    <div class="top-row">
      <div class="text">
        <h2>Our Story</h2>
        <p>
          AID works in close collaboration with global development
partners, such as UN agencies, national and international NGOs,
and multilateral organizations, to deliver both development and
humanitarian initiatives. AID is one of the few local organizations
eligible for Ethiopia Humanitarian Fund (EHF) direct access.
Through these efforts, it has impacted millions of lives,
providing life-saving support, enhancing skills, and fostering
opportunities for sustainable employment and better
livelihoods.
        </p>
      </div>
      <div class="side-image">
        {/* <img src="your-small-image.jpg" alt="Team Small Photo"> */}
        <img src={story2} alt="AID visual" className="" />
        
      </div>
    </div>

    {/* <!-- Mission section: image left, text right --> */}
    <div class="content-row">
      <div class="image">
        {/* <img src="mission-image.jpg" alt="Mission Image"> */}
        <img src={photo} alt="AID visual" className="photo" />
      </div>
      <div class="text" id="purpose">
        <h3>Our purpose: BUILDING RECELIENCE, FORTERING PROGRESS</h3>
        <p>
          AID empowers vulnerable communities to enhance their living standards and unlock
their full potential. By introducing innovative solutions in WASH and ESNFI,
Protection and Education, Health and Nutrition, Food Security and Livelihoods, and
Disaster Risk Reduction, AID is transforming the lives of Ethiopia’s most vulnerable
populations.
        </p>
      </div>
    </div>

    {/* <!-- Story section: text left, image right --> */}
    <div class="content-row">  
      <div class="text">
        <h3>How It All Started</h3>
        <p>
          Aid for Integrated Development (AID) is a non-profit, non-governmental
organization established in Ethiopia in 2020. AID was first legally registered
at the Regional level with the Somali Regional Justice Bureau and later, in
2023, at the national level under the Authority for Civil Society
Organizations' Proclamation No. 1113/2019, with registration number
6818. AID is dedicated to improving the lives and livelihoods of vulnerable
communities across Ethiopia through its work in key areas such as WASH
and ESNFI, food security and livelihoods, education and protection, health
and nutrition, and disaster risk reduction. The organization also addresses
critical issues such as gender equality, women's empowerment, and climate
change adaptation.
        </p>
      </div>
      <div class="image">
        {/* <img src="journey-image.jpg" alt="Story Image"> */}

        <img src={team} alt="AID visual" className="" />
      </div>
    </div>

  </div>
</section>



<section class="mission-vision" id="mission">
  <div class="mv-container">
    
    <div class="mv-left">
      <h2>Our goal</h2>
      <p>
        We aim to enhance the capacities of the people by
implementing multi-sectoral programs, including WASH and
ESNFI, Protection and Education, Health and Nutrition,
Food security and Livelihood, as well as addressing crosscutting issues such as gender equality, women
empowerment, and climate change adaptations.
      </p>
    </div>

    
    <div class="mv-right">
      <div class="mv-card">
        <div class="mv-icon">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png" alt="Vision Icon"> */}
          <img src={image} alt="AID visual" className="" />
        </div>
        <h3>Vision</h3>
        <p>
          AID envisions an Ethiopia where equal opportunities and
resources are available to all, fostering self-sufficiency
and an improved quality of life, mainly individuals with
disabilities and other vulnerable populations.
        </p>
      </div>

      <div class="mv-card">
        <div class="mv-icon">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png" alt="Mission Icon"> */}
          <img src={image1} alt="AID visual" className="" />
        </div>
        <h3>Mission</h3>
        <p>
          Our mission is to empower and support vulnerable
communities and give special treatment to individuals
with disabilities, to achieve self-sufficiency and
sustainable development
        </p>
      </div>
    </div>
  </div>

  
  <div class="mv-bottom-image">
    {/* <img src="" alt="Teamwork"> */}
    <img src={mission} alt="AID visual" className="" />
  </div>
</section>


<section class="team-section" id="team">
  <h2>Our Team</h2>
  <p class="subtitle">
    Our dedicated team works passionately to improve lives,<br></br>
    support vulnerable communities, and create sustainable impact.<br></br>
    Every person you see here is committed to the mission of helping <br></br> others with compassion and integrity.
  </p>

  <div class="team-container">
    

    <div class="team-card blue">
      <img src= {Abdirahman} class="profile-pic" />
      <h3>Abdirahman Mohamed Heeban</h3>
      <p class="role">Executive Director of AID. 
        
</p>
      <p class="desc">
        Oversees all community outreach and project implementation, making sure 
        resources reach those who need them most.

      </p>
      <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+251915775003" className="contact1"> +251 91 577 5003</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:abdirahmanh@aiddev.net" className="contact1"> abdirahmanh@aiddev.net</a>
          </p>
    </div>

    <div class="team-card red">*
      <img src= {abdimahad} class="profile-pic" />
      <h3>Abdimahad Mohamed Abdi </h3>
      <p class="role">Deputy Executive Director of AID</p>
      <p class="desc">
        Designs and manages AID’s health programs, focusing on preventive care, 
        nutrition, and long-term community wellness.

        <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+251911286209" className="contact1"> +251 91 128 6209</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:abdimahadm@aiddev.net" className="contact1"> abdimahadm@aiddev.net</a>
          </p>

      </p>
    </div>


    <div class="team-card blue">
      <img src= {abdinasir} class="profile-pic" />
      <h3>Abdinasir Moalin Abdullahi</h3>
      <p class="role">Program Manager </p>
      <p class="desc">
        Leads AID’s vision to bring education, healthcare, and food assistance to 
        vulnerable communities, ensuring dignity and hope for all.
      </p>

      <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+251915104100" className="contact1"> +251 91 510 4100</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:abdinasiram@aiddev.net" className="contact1"> abdinasiram@aiddev.net</a>
          </p>
    </div>

    <div class="team-card red">
      <img src={bashir} alt="" class="profile-pic" />
      <h3>Bashir Abdi Hashi</h3>
      <p class="role">Operations and Finance Officer</p>
      <p class="desc">
        Develops and leads education initiatives to empower children and youth 
        with the knowledge and skills for a brighter future.
      </p>

      <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+251915104100" className="contact1"> +251 92 022 7101</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:bashira@aiddev.net" className="contact1"> bashira@aiddev.net</a>
          </p>
    </div>
  </div>

  
</section>


<div className='socials'>

  <div className="social-container">
  <div className="triangle" id='blue'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>


<div className="social-container">
  <div className="triangle" id='red'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>

<div className="social-container">
  <div className="triangle" id='blue'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>

<div className="social-container">
  <div className="triangle" id='red'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>

</div>


  <section class="get-involved" id="get-involved">

    
    <div class="get-involved-top">
      <div class="get-involved-text">
        <h1>Making A Difference <br></br> Together For The Future</h1>
        <p>Join us in our mission to bring hope, support, and resources to those in need.</p>
        <a href="#" class="btn">Make a Donation</a>
      </div>

      <div class="get-involved-image">
        {/* <img src="https://via.placeholder.com/500x350" alt="Helping People"> */}

        <img src= {involved}  />
      </div>
    </div>

   
    <div class="get-involved-features">
      <div class="get-involved-feature">
        <i class="fas fa-sun"></i>
        <h3>Together for a Brighter Future</h3>
        <p>With dedicated efforts, we bring communities, charities, and supporters together to ensure hope is available to all.</p>
      </div>
      <div class="get-involved-feature">
        <i class="fas fa-hands-helping"></i>
        <h3>Empowering Change</h3>
        <p>Our mission is to mobilize resources, inspire communities, and create opportunities for those in need.</p>
      </div>
      <div class="get-involved-feature">
        <i class="fas fa-heart"></i>
        <h3>Transforming Lives</h3>
        <p>Action is building a support system to help individuals and groups rise from impactful struggles worldwide.</p>
      </div>
    </div>

  </section>


  


  <section class="resources-section" id="resource-section">
    <div class="resources-header">
      <h2>Our Resources</h2>
      <p>
        Access our guides, toolkits, and materials to help you contribute to our mission of helping vulnerable communities.
      </p>
    </div>

    <div class="resources-grid">
      <div class="resource-card">
        <div class="resource-icon"><i class="fa-solid fa-leaf"></i></div>
        <h3>Food Security Guide</h3>
        <p>A comprehensive guide to improving food security in vulnerable communities.</p>
        <a href="#" class="resource-link">Read More</a>
      </div>

      <div class="resource-card">
        <div class="resource-icon"><i class="fa-solid fa-tools"></i></div>
        <h3>Emergency Response Toolkit</h3>
        <p>Step-by-step toolkit for handling disaster and crisis situations effectively.</p>
        <a href="#" class="resource-link">Read More</a>
      </div>

      <div class="resource-card">
        <div class="resource-icon"><i class="fa-solid fa-hands-helping"></i></div>
        <h3>Volunteer Handbook</h3>
        <p>Everything a volunteer needs to know to make a meaningful impact.</p>
        <a href="#" class="resource-link">Read More</a>
      </div>

      <div class="resource-card">
        <div class="resource-icon"><i class="fa-solid fa-shield-halved"></i></div>
        <h3>Health & Safety Guidelines</h3>
        <p>Practical guidelines to ensure health and safety in the field.</p>
        <a href="#" class="resource-link">Read More</a>
      </div>
    </div>
  </section>
<section className={`clients ${diamondMode ? "diamond-active" : ""}`} id="PARTNERS">
      <div className="clients__heading">
        <div className="clients__overline">OUR PARTNERS</div>
        <div className="clients__title">OUR Partners</div>
      </div>

      <div className="scroll-container" id="scrollView">
        <div className="scroll-content">
          <img src={sa1} alt="Logo 1" />
          <img src={sa2} alt="Logo 2" />
          <img src={sa3} alt="Logo 3" />
          <img src={sa4} alt="Logo 4" />
          <img src={sa5} alt="Logo 5" />
          <img src={sa6} alt="Logo 6" />
          <img src={sa7} alt="Logo 7" />
          {/* <img src={sa8} alt="Logo 8" /> */}
          <img src={sa9} alt="Logo 9" />

          <img src={sa10} alt="Logo 10" />
          <img src={sa11} alt="Logo 11" />
          {/* <img src={sa12} alt="Logo 12" /> */}

           <img src={sa13} alt="Logo 13" />
          <img src={sa14} alt="Logo 14" />
          <img src={sa15} alt="Logo 15" />
          <img src={sa16} alt="Logo 16" />
          <img src={sa17} alt="Logo 17" />
          <img src={sa18} alt="Logo 18" />
          <img src={sa19} alt="Logo 20" />
          <img src={sa20} alt="Logo 21" />
          <img src={sa21} alt="Logo 22" />
          <img src={sa22} alt="Logo 23" />
          <img src={sa23} alt="Logo 24" />
          <img src={sa4} alt="Logo 25" />
          <img src={sa25} alt="Logo 26" />
          <img src={sa26} alt="Logo 27" />
          <img src={sa27} alt="Logo 28" />
          <img src={sa28} alt="Logo 29" />
          <img src={sa29} alt="Logo 30" />

        </div>
      </div>

      
<div className="diamond-view" id="diamondView">
  <div className="diamond__row">
    <div className="tile">
      <div className="tile__inner"><img src={sa1} alt="Logo 1" /></div>
    </div>
    <div className="tile">
      <div className="tile__inner"><img src={sa2} alt="Logo 2" /></div>
    </div>
    <div className="tile">
      <div className="tile__inner"><img src={sa3} alt="Logo 3" /></div>
    </div>
    <div className="tile">
      <div className="tile__inner"><img src={sa4} alt="Logo 4" /></div>
    </div>
  </div>

  <div className="diamond__row">
    <div className="tile"><div className="tile__inner"><img src={sa5} alt="Logo 5" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa6} alt="Logo 6" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa7} alt="Logo 7" /></div></div>
   
    <div className="tile"><div className="tile__inner"><img src={sa9} alt="Logo 9" /></div></div>
  </div>

  <div className="diamond__row">
    <div className="tile"><div className="tile__inner"><img src={sa10} alt="Logo 10" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa11} alt="Logo 11" /></div></div>
    {/* <div className="tile"><div className="tile__inner"><img src={sa12} alt="Logo 12" /></div></div> */}
    <div className="tile"><div className="tile__inner"><img src={sa13} alt="Logo 13" /></div></div>
  </div>

  <div className="diamond__row">
    <div className="tile"><div className="tile__inner"><img src={sa14} alt="Logo 14" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa15} alt="Logo 15" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa16} alt="Logo 16" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa17} alt="Logo 17" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa18} alt="Logo 18" /></div></div>
  </div>

  <div className="diamond__row">
    <div className="tile"><div className="tile__inner"><img src={sa19} alt="Logo 19" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa20} alt="Logo 20" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa21} alt="Logo 21" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa22} alt="Logo 22" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa23} alt="Logo 23" /></div></div>
  </div>

  <div className="diamond__row">
    <div className="tile"><div className="tile__inner"><img src={sa24} alt="Logo 24" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa25} alt="Logo 25" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa26} alt="Logo 26" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa27} alt="Logo 27" /></div></div>
  </div>

  <div className="diamond__row">
    <div className="tile"><div className="tile__inner"><img src={sa28} alt="Logo 28" /></div></div>
    <div className="tile"><div className="tile__inner"><img src={sa29} alt="Logo 29" /></div></div>
  </div>
</div>


      <div className="btn-wrap">
        <div className="btn-wrap">
  <button onClick={() => setDiamondMode(!diamondMode)}>
    {diamondMode ? "Back" : "See More"}
  </button>
</div>

      </div>
    </section>




<section class="impact-section1" id="impact">
  
   <div class="impact-visual">
        {/* <img src="map.png" alt="Map of Regions" class="map-image"> */}
        <img src={MAP} alt="" class="map-image" />
        <div class="sub-numbers">
            <div class="count-box men">
                {/* <img src="male-icon.png" alt="Men"> */}
                <img src={image} alt="" class="profile-pic" />
                1,270,963 Men
            </div>
            <div class="count-box women">
                {/* <img src="female-icon.png" alt="Women"> */}
                <img src={image} alt="" class="profile-pic" />
                1,553,399 Women
            </div>
        </div>
    </div>


    <div class="impact-text" id="achievement">
      <h2 class="impact-title">EDUCATION & PROTECTION</h2>
        <h2>2020 Impact</h2>
        <p>Since its inception, AID has reached <strong>2,824,362</strong> individuals 
        (<strong>1,553,399 women</strong> and <strong>1,270,963 men</strong>) across hard-to-reach areas.</p>
        <p>In Somali and Oromia regions, AID provided critical support to those affected by both natural and man-made disasters. 
        Through comprehensive emergency and development programs in education, child protection, health and nutrition, WASH, livelihoods, and food security, 
        AID has helped rebuild lives and foster resilience.</p>
        <div class="highlight-box">
            Throughout its journey, AID has tirelessly provided humanitarian aid and services, driving meaningful and lasting change. 
            Below are some of AID's most impactful achievements.
        </div>
    </div>

   
</section>




<section class="impact-section" id="education">

<h2 class="impact-title">EDUCATION & PROTECTION</h2>
  
    <div class="aid-impact">
  <div class="text">
    AID collaborates with partners, local governments, NGOs and communities to deliver sustainable development solutions that create lasting impact.
  </div>
  <div class="image-container">
    {/* <img src="your-image.jpg" alt="Sustainable Development" /> */}
    <img src={teacher2} alt="" class="" />
  </div>
</div>
  <div class="impact-layout">
    
  
    <div class="impact-grid">
      <div class="impact-card">
        <div class="impact-icon">📚</div>
        <h3 class="impact-number" data-target="127,000">0</h3>
        <p class="impact-text">students provided with textbooks and learning materials</p>
      </div>
      <div class="impact-card">
        <div class="impact-icon"> 👨‍👩‍👧‍👦 </div>
        <h3 class="impact-number" data-target="21,000">0</h3>
        <p class="impact-text">conflict and drought affected IDP children,  women, men and their caregivers provided with protection services.</p>
      </div>
      <div class="impact-card">
        <div class="impact-icon">👩‍🏫</div>
        <h3 class="impact-number" data-target="150">0</h3>
        <p class="impact-text"> teachers and education officials capacity building</p>
      </div>
      <div class="impact-card">
        <div class="impact-icon">🏠</div>
        <h3 class="impact-number" data-target="200,000+">0</h3>
        <p class="impact-text"> schools aged children supported</p>
      </div>
    </div>
    
    
    <div class="impact-image-wrapper">
      {/* <img src="pure-map.png" alt="Impact Map" class="impact-image"> */}
      <img src={teacher} alt="John Smith" class="" />
      
    </div>

  </div>
</section>




<section class="healthy-section" id="health">
  <div class="healthy-container">
    
    {/* <!-- Left Side: Text + Stats --> */}
    <div class="healthy-text">
      <h2>Healthy and nutrition sector</h2>
      <p>
        AID is committed to providing comprehensive primary health services
        through health facilities, Mobile Health and Nutrition teams, and
        emergency ambulance services.
      </p>
      <p>
        The organization has expanded health centers, installed solar power,
        and promoted disease prevention, clean water access, and health
        education for high-risk populations.
      </p>

      <div class="healthy-stats">
        <div class="stat-card">
          <h3 data-target="156000">0</h3>
          <p>Patients reached</p>
        </div>
        <div class="stat-card">
          <h3 data-target="179000">0</h3>
          <p>People reached with essential health education plans</p>
        </div>
        <div class="stat-card">
          <h3 data-target="120">0</h3>
          <p>Health professionals trained</p>
        </div>
        <div class="stat-card">
          <h3 data-target="2100">0</h3>
          <p>Children vaccinated</p>
        </div>
        <div class="stat-card">
          <h3 data-target="26000">0</h3>
          <p>mothers supported</p>
        </div>
        
      </div>
    </div>

    {/* <!-- Right Side: Overlapping Images --> */}
    <div class="healthy-images">
      {/* <img src="image1.jpg" alt="Health Service 1" class="img-main"> */}
      {/* <img src="image2.jpg" alt="Health Service 2" class="img-overlay"> */}
      <img src={va1} alt="John Smith" class="img-main" />
      <img src={va2} alt="John Smith" class="img-main" />
    </div>

  </div>
</section>


<section class="food-section" id="food-section">
  <div class="food-header">
    <div class="food-header-content">
      
      <div class="food-header-image">
        {/* <img src="your-top-image.jpg" alt="Food Security" /> */}
        <img src={food} alt="John Smith" class="" />
      </div>

      
      <div class="food-header-text">
        <h2><span class="highlight">FOOD AND LIVELIHOODS SECTOR </span></h2>
        <p>
          AID is committed to enhancing food security and strengthening livelihoods for the most vulnerable communities affected by drought, conflict, and displacement. 
          Our programs provide immediate relief to address urgent food needs while also investing in long-term solutions that help families achieve self-reliance. 
          Through targeted interventions, we support households with emergency food rations, cash-based assistance, agricultural inputs, and vocational skills training. 
          These efforts not only prevent hunger but also empower communities to build resilience and secure a sustainable future.
        </p>
        <p>
          In the past year, our Food Security and Livelihoods interventions have reached thousands of people, helping them to overcome food shortages and create stable income sources. 
          Below are some of our key achievements:
        </p>
      </div>
    </div>
  </div>

  
  <div class="food-content">
    
    

    
    <div class="food-cards">
      <div class="card">
        <h3 class="counter" data-target="7500">0</h3>
        <p>Households reached with unconditional cash assistance to meet urgent food needs</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="12000">0</h3>
        <p>Households supported with agricultural inputs such as seeds, tools, and fertilizer</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="25000">0</h3>
        <p>Individuals received emergency food rations to prevent malnutrition</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="3500">0</h3>
        <p>Beneficiaries trained on climate-smart and modern farming techniques</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="3500">0</h3>
        <p>Beneficiaries trained on climate-smart and modern farming techniques</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="3500">0</h3>
        <p>Beneficiaries trained on climate-smart and modern farming techniques</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="3500">0</h3>
        <p>Beneficiaries trained on climate-smart and modern farming techniques</p>
      </div>
      <div class="card">
        <h3 class="counter" data-target="3500">0</h3>
        <p>Beneficiaries trained on climate-smart and modern farming techniques</p>
      </div>
    </div>

    <div class="food-counters-image">
      {/* <img src="your-counter-image.jpg" alt="Helping Communities" /> */}
      <img src={food2} alt="John Smith" class="" />
    </div>
  </div>
</section>





<section className="wash-section" id="wash-section">
  {/* Top section: Image left, text right */}
  <div className="wash-top">
    <div className="wash-image">
      {/* <img
        src="/mnt/data/fae975eb-1031-4c7a-9323-522b0fddbd4e.png"
        alt="Water tower"
      /> */}
      <img src={water} alt="John Smith" class="" />
    </div>
    <div className="wash-text">
      <h2 className="title">
        <span className="white-text"></span>{" "}
        <span className="yellow-text">WASH AND ES&NFI</span>
      </h2>
      <p>
        AID is dedicated to ensuring access to clean water by addressing the
        specific needs of each area. This is achieved through the construction
        of boreholes, shallow wells, birkas, and river intakes, all connected
        to public water points for efficient and reliable access. Some of the
        most notable recent achievements in the WASH and ESNFI sector include:
      </p>
    </div>
  </div>

  {/* Bottom section: Numbers grid */}
  <div className="numbers-container" id="numbers-container">
    <div className="number-box">
      <span className="number" data-target="13">0</span>
      <span className="label">Boreholes rehabilitated and expanded</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="7">0</span>
      <span className="label">Elevated concrete tanks constructed</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="425000">0</span>
      <span className="label">People reached with hygiene and sanitation promotion campaigns</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="6">0</span>
      <span className="label">Solar water supply schemes installed</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="26000">0</span>
      <span className="label">Mothers supported</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="12">0</span>
      <span className="label">Underground cemented cisterns (birkas) built</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="500000">0</span>
      <span className="label">Trucked to around 750,000 people</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="18">0</span>
      <span className="label">Public water points constructed</span>
    </div>
    <div className="number-box">
      <span className="number" data-target="75">0</span>
      <span className="label">Emergency latrine blocks constructed</span>
    </div>
  </div>
</section>

<section className="donation-section" id="donation-section">
  <div className="donation-content">
    <h2>Make a Difference Today</h2>
    <p>
      Your contribution helps us provide education, protection, and hope
      for vulnerable children and families. Every amount counts.
    </p>

    <form id="donation-form" className="donation-form">
      <div className="donation-amounts">
        <button type="button" class="amount-btn">$10</button>
        <button type="button" class="amount-btn">$25</button>
        <button type="button" class="amount-btn">$50</button>
        <button type="button" class="amount-btn">$100</button>
        <input type="number" id="custom-amount" placeholder="Custom Amount" />
      </div>

      <input type="text" id="full-name" placeholder="Full Name" required />
      <input type="email" id="email" placeholder="Email Address" required />

      <select id="paymentMethod" required>
        <option value="">Choose Payment Method</option>
        <option value="paypal">PayPal</option>
        <option value="bank">Bank Transfer</option>
        <option value="Commercial Bank of Ethiopia">Commercial Bank of Ethiopia</option>
        <option value="Shabelle Bank">Shabelle Bank</option>
        <option value="Rays Microfinance">Rays Microfinance</option>
        <option value="E-birr">E-birr</option>
        <option value="card">Credit/Debit Card</option>
      </select>

      <button type="submit" class="donate-btn">Donate Now 💖</button>
    </form>

    
  <div id="bank-details" style={{ display: 'none', marginTop: '10px', color: '#333', fontWeight: 'bold' }}></div>




  </div>
</section>
<section className="contact-section" id="contact-section">
  <h2>Contact Info</h2>

  <section className="form-section">
    <div className="form-container">
      
      <div className="form-text">
        <h2>Get in Touch</h2>
        <p>
          We’re here to listen. Share your details below, and our team will reach out to support you as soon as possible.
        </p>
      </div>

    <div className="form-box">
  <form 
    id="contactForm"
    
  >
    <input
          type="hidden"
          name="access_key"
          value="3f084174-d751-440f-9f4a-f0ab697f32d2"
        />
        
    <input type="hidden" name="subject" value="New Contact Message from AID Website" />

    <div className="form-group">
      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" id="name" required />
    </div>

    <div className="form-group">
      <label htmlFor="email">Your Email</label>
      <input type="email" name="email" id="email" required />
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>

  {/* message area */}
  <p id="formMessage" style={{ display: "none" }}></p>
</div>


    </div>

    
  </section>


      <div className="contact-container">
        
        <div className="contact-card">
          <h3>Coordination Office</h3>
          <h4><i className="fa-solid fa-location-dot"></i> Addis Ababa, Ethiopia</h4>
          <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+251252783968"> +251 2527 83968</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@aiddev.net"> info@aiddev.net</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Regional Office</h3>
          <h4><i className="fa-solid fa-location-dot"></i> Jijiga, Ethiopia</h4>
          <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+251252783968"> +251 25 278 3968</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@aiddev.net"> info@aiddev.net</a>
          </p>
        </div>

        

        
      </div>

      <div className="website">
        <a href="mailto:info@aiddev.net" target="_blank" rel="noreferrer">
          info@aiddev.net
        </a>
      </div>

      {/* <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://wa.me/251915104100" target="_blank" rel="noreferrer" className="whatsapp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div> */}

      
    </section>




<footer className="footer">
      <div className="footer-container">

        {/* About / Mission */}
        <div class="footer-section about">
      <div class="logo-container">
        {/* <img src="logo.png" alt="AID NGO Logo" class="footer-logo"> */}
        <img src={logo} alt="AID Logo" className="footer-logo" />
        <h2>AID NGO</h2>
      </div>
      <p>Our mission is to support communities in need, ensuring health, education, and empowerment for everyone.</p>
    </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}

        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📍 Addis Ababa, Ethiopia</p>
          <p><a href="mailto:info@aiddev.net">📧 info@aidngo.org</a></p>
          <p> <a href="tel:+251915775003">📞 +251 900 000 000</a></p>
        </div>

        {/* Social Media */}
        <div class="footer-section social">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://wa.me/251915104100" target="_blank" rel="noreferrer" className="whatsapp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AID NGO. All rights reserved.</p>
      </div>
    </footer>
  

    </>

    
  );
};

export default Navbar;
