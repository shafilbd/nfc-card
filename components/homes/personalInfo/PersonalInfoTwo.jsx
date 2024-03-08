//import { profileInfo } from "@/data/profileInfo";
import {ShajidProfile} from "@/data/shajid_profile";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React from "react";

export default function PersonalInfoTwo() {
  return (
    <div className="col-12">
      <div className="bostami-parsonal-info-area bostami-parsonal-info-2-area">
        <div className="bostami-parsonal-info-wrap">
          <div className="bostami-parsonal-info-img">
            <Image
              width={240}
              height={240}
              src={ShajidProfile.imageSrcOne}
              alt="profile"
            />
          </div>

          <h4 className="bostami-parsonal-info-name">
            <a href="#">{ShajidProfile.name}</a>
          </h4>
          <span className="bostami-parsonal-info-bio mb-15">{ShajidProfile.title}</span>

          

          <div className="bostami-parsonal-info-btn mb-30"  >
            <a className="btn-1 circle mobile_version" href="/shajid-vcard.vcf" download>
              <span className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              Save Contact
            </a>
          </div>
          {/* <div className="bostami-parsonal-info-btn mb-30">
            <a className="btn-2 circle" style={{ width: "100%", display:"flex", justifyContent: "space-evenly" }}  href="/cv.pdf" download>
              <span className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              Website
            </a>
          </div> */}
          <ul className="bostami-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                <a style={{ color: elm.color }} href={elm.href}>
                  <i className={elm.className}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
