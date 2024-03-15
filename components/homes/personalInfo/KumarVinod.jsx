//import { profileInfo } from "@/data/profileInfo";
import {VinodKumar_data} from "@/data/VinodKumar_data";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React from "react";

export default function KumarVinod() {
  return (
    <div className="col-12">
      <div className="bostami-parsonal-info-area bostami-parsonal-info-2-area">
        <div className="bostami-parsonal-info-wrap">
          <div className="bostami-parsonal-info-img">
            <Image
              width={240}
              height={240}
              src={VinodKumar_data.imageSrcOne}
              alt="Kumar Vinod"
            />
          </div>

          <h4 className="bostami-parsonal-info-name">
            <a href="#">{VinodKumar_data.name}</a>
          </h4>
          <span className="bostami-parsonal-info-bio mb-15">{VinodKumar_data.title}</span>
          {/* <span className="bostami-parsonal-info-bio ">{VinodKumar_data.Company}</span><br/>
          <span className="bostami-parsonal-info-bio ">{VinodKumar_data.Email}</span><br/>
          <span className="bostami-parsonal-info-bio ">{VinodKumar_data.Phone}</span><br/>
          <span className="bostami-parsonal-info-bio mb-15">{VinodKumar_data.Address}</span><br/> */}

          

          <div className="bostami-parsonal-info-btn mb-30"  >
            <a className="btn-1 circle mobile_version" href="/vinod-kumar.vcf" download>
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
