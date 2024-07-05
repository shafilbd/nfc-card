import HeaderFive from "@/components/homes/headers/HeaderFive";
// import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import GoldensandsFb from "@/components/homes/personalInfo/goldensands-fb";
import React from "react";

export const metadata = {
  title: "",
  description:
    "",
};
export default function GoldensandsFB() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
          <GoldensandsFb />
          </div>
        </div>
      </div>
    </>
  );
}