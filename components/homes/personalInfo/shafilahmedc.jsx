//import { profileInfo } from "@/data/profileInfo";
import {ShafilAhmedC} from "@/data/shafilahmedc";
import { socialMediaData } from "@/data/socials_shafil";
import Image from "next/image";
import React from "react";

export default function shafilahmedc() {
  return (
    <div className="col-12 content-center">
      <div className="bostami-parsonal-info-area bostami-parsonal-info-2-area">
        <div className="bostami-parsonal-info-wrap">
          <div className="bostami-parsonal-info-img">
            <Image
              width={240}
              height={240}
              src={ShafilAhmedC.imageSrcOne}
              alt="profile"
            />
          </div>
          <div className="section__profession">
            <span className="bostami-parsonal-info-bio mb-15">{ShafilAhmedC.title}</span>
          </div>
          {/* <h4 className="bostami-parsonal-info-name">
            <a href="#">{ShafilAhmedC.name}</a>
          </h4> */}
          <div className="profile__descriptions mb-30">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
          </div>
          <div className="section__profile__details profile__btn">
            <ul>
              <li><a href="" className="btn btn-3">About</a></li>
              <li><a href="" className="btn btn-3">Products</a></li>
              <li><a href="" className="btn btn-3">Services</a></li>
            </ul>
          </div>
          
          <div className="bostami-parsonal-info-btn mb-30"  >
            <a className="btn-1 circle mobile_version" href="/shafilahmedc.vcf" download>
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
