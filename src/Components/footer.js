import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="column">
            <h4>About Us</h4>
            <p>
              Welcome to ROLLTM, the world's first full filmmaking production company revolutionizing the industry.
              Our primary mission is to redefine the filmmaking process by eliminating unnecessary brokerage, allowing you to invest more in quality production.
              With us, you can order your filmmaking essentials up to 2 hours before the shoot, ensuring everything arrives on time.
            </p>
          </div>
          <div className="column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="#">
                  <i className="fa fa-angle-right"></i> Subscription
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-angle-right"></i> Contact us
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa fa-angle-right"></i> Bug report
                </Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Connect with Us</h4>

            <ul className="social-icons">
              <li>
                <Link href="#">
                  <FacebookOutlinedIcon/>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <InstagramIcon/>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <YouTubeIcon/>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <XIcon/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2023 All Rights Reserved</p>
      </footer>
      <style jsx='true'>{`
        footer {
          color: #333;
          background-color: #3e60948a;
          
        }

        .row {
          display: flex;
          padding: 1rem;
        }

        .column {
          width: calc(100% / 3);
          padding: 0 0.9375rem;
        }

        h4 {
          margin-bottom: 0.9375rem;
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.3rem;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        ul li {
          margin-bottom: 0.625rem;
        }

        ul li a {
          color: #333;
          font-size: 1rem;
        }

        ul li i {
          color: #6faaff;
        }

        ul li a:hover {
          color: #6faaff;
        }

        ul.social-icons {
          display: flex;
          column-gap: 0.625rem;
        }

        .social-icons i {
          color: white;
        }

        ul.social-icons li {
          margin-bottom: 0rem;
        }

        ul.social-icons li a {
          display: grid;
          place-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 100%;
          background-color: #667489;
        }

        ul.social-icons li:hover a {
          background-color: #6fdeff;
        }

        .copyright {
          text-align: center;
          color: #fff;
          background-color: black;
          padding: 0.6rem 0;
        }

        /* Responsive adjustments */

        @media screen and (max-width: 768px) {
          .column {
            margin: 0.4rem 0;
            width: 100%;
            padding: 0;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
          }

          h4 {
            font-size: 1.3125rem;
          }

          p {
            font-size: 0.9375rem;
          }

          ul li a {
            font-size: 0.9375rem;
          }

          ul.social-icons li a {
            width: 1.975rem;
            height: 1.975rem;
          }
        }
      `}</style>
    </>
  );
}
