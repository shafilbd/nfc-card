import HeaderFive from "@/components/homes/headers/HeaderFive";
// import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import GoldensandsInst from "@/components/homes/personalInfo/goldensands-inst";
import React from "react";

export const metadata = {
  title: "",
  description:
    "",
};
export default function GoldensandsInsts() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
          <GoldensandsInst />
          </div>
        </div>
      </div>
    </>
  );
}